# Store Listings

Copy for the extension store submissions. Keep in sync with the landing page.

## Name
Repo Swap

## Short description (≤132 chars — Chrome Web Store)
Swap any GitHub repo URL into AI, diagram, wiki, dev-environment, and repo-health tools — in one click.

## Full description
Repo Swap turns the GitHub repo you're looking at into the right adjacent tool, instantly.

Every GitHub URL is just `github.com/owner/repo`. A whole ecosystem of tools reuses
that same shape — Repo Swap swaps the domain for you so you don't have to remember
any of them.

One click opens the current repo in:
• GitIngest — flatten the repo into prompt-friendly text for any AI
• GitMCP — turn the repo into a live MCP server so your AI reads real code
• GitDiagram — clickable architecture diagram
• DeepWiki — auto-generated wiki with Q&A and citations
• GitHub.gg — control panel, security scan, quality score
• StackBlitz — boot the repo in a browser dev environment
• Star History — check if the repo is actually alive

Neobrutalist UI. No backend. No tracking. No account.

Tip: third-party tools are best for public repos — don't send private/client code
or secrets.

## Categories
Developer Tools / Productivity

## Permissions justification
- `tabs` — read the current tab's URL to detect the GitHub repo and open the chosen tool.
- `storage` — remember your "Open in a new window" preference.
- `host_permissions: https://github.com/*` — only activates on GitHub.

## Privacy
Repo Swap does not collect, store, or transmit any data. It only reads the active
tab's URL locally to build a destination link.

---

## Chrome Web Store
- Dashboard: https://chrome.google.com/webstore/devconsole
- Needs: 128px icon, 1280×800 or 640×400 screenshots, this copy.

## Firefox Add-ons (AMO)
- Dashboard: https://addons.mozilla.org/developers/
- Needs: signed build, `gecko.id` (currently `repo-swap@chrisradd.dev` — confirm).
