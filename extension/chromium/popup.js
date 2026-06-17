// Cross-browser API: Firefox exposes the promise-based `browser`, Chromium uses `chrome`.
// Chromium's `chrome.*` (MV3) is already promise-based, so this alias works in both.
const api = typeof browser !== "undefined" ? browser : chrome;

const TOOL_URLS = {
  gitingest: ({ owner, repo }) => `https://gitingest.com/${owner}/${repo}`,
  gitmcp: ({ owner, repo }) => `https://gitmcp.io/${owner}/${repo}`,
  gitdiagram: ({ owner, repo }) => `https://gitdiagram.com/${owner}/${repo}`,
  deepwiki: ({ owner, repo }) => `https://deepwiki.com/${owner}/${repo}`,
  githubgg: ({ owner, repo }) => `https://github.gg/${owner}/${repo}`,
  stackblitz: ({ owner, repo }) => `https://stackblitz.com/github/${owner}/${repo}`,
  starhistory: ({ owner, repo }) => `https://star-history.com/#${owner}/${repo}&Date`,
};

const STORAGE_KEY = "openInWindow";

function parseGitHubRepo(urlString) {
  let url;
  try {
    url = new URL(urlString);
  } catch {
    return null;
  }

  if (url.hostname !== "github.com" && url.hostname !== "www.github.com") {
    return null;
  }

  const [owner, repo] = url.pathname.split("/").filter(Boolean);
  if (!owner || !repo) return null;

  const blockedOwners = new Set([
    "features",
    "topics",
    "trending",
    "marketplace",
    "pricing",
    "explore",
    "settings",
    "notifications",
    "pulls",
    "issues",
    "codespaces",
    "sponsors",
    "login",
    "signup",
  ]);

  if (blockedOwners.has(owner.toLowerCase())) return null;

  return {
    owner,
    repo: repo.replace(/\.git$/i, ""),
  };
}

async function getActiveTab() {
  const [tab] = await api.tabs.query({ active: true, currentWindow: true });
  return tab;
}

async function getStoredOpenMode() {
  const result = await api.storage.local.get({ [STORAGE_KEY]: false });
  return Boolean(result[STORAGE_KEY]);
}

async function setStoredOpenMode(value) {
  await api.storage.local.set({ [STORAGE_KEY]: Boolean(value) });
}

function setVisible(element, visible) {
  element.hidden = !visible;
}

async function openUrl(url, openInWindow) {
  if (openInWindow) {
    await api.windows.create({ url, focused: true });
    return;
  }

  await api.tabs.create({ url, active: true });
}

async function init() {
  const repoCard = document.getElementById("repoCard");
  const repoName = document.getElementById("repoName");
  const emptyState = document.getElementById("emptyState");
  const tools = document.getElementById("tools");
  const checkbox = document.getElementById("openInWindow");

  checkbox.checked = await getStoredOpenMode();
  checkbox.addEventListener("change", () => setStoredOpenMode(checkbox.checked));

  const tab = await getActiveTab();
  const repo = tab?.url ? parseGitHubRepo(tab.url) : null;

  if (!repo) {
    setVisible(emptyState, true);
    setVisible(repoCard, false);
    setVisible(tools, false);
    return;
  }

  repoName.textContent = `${repo.owner}/${repo.repo}`;
  setVisible(emptyState, false);
  setVisible(repoCard, true);
  setVisible(tools, true);

  tools.addEventListener("click", async (event) => {
    const button = event.target.closest("button[data-tool]");
    if (!button) return;

    const getUrl = TOOL_URLS[button.dataset.tool];
    if (!getUrl) return;

    button.disabled = true;
    const originalText = button.querySelector("span")?.textContent;
    if (button.querySelector("span")) button.querySelector("span").textContent = "Opening…";

    try {
      await openUrl(getUrl(repo), checkbox.checked);
      window.close();
    } catch (error) {
      console.error("Repo Swap failed to open URL", error);
      if (button.querySelector("span")) button.querySelector("span").textContent = "Failed — try again";
      setTimeout(() => {
        button.disabled = false;
        if (button.querySelector("span") && originalText) button.querySelector("span").textContent = originalText;
      }, 1200);
    }
  });
}

document.addEventListener("DOMContentLoaded", init);

// Export parser in test contexts without affecting Chrome popup runtime.
if (typeof module !== "undefined") {
  module.exports = { parseGitHubRepo, TOOL_URLS };
}
