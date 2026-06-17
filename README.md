# Repo Swap

Change one word in a GitHub URL → unlock the right tool. A tiny, no-tracking
browser extension (and landing page) with a neobrutalist look.

## What's in here

```txt
repo-swap-product/
├── extension/
│   ├── chromium/        ← SOURCE OF TRUTH — Chrome, Brave, Arc, Edge
│   ├── firefox/         ← generated build (MV3 + gecko id)
│   └── build-firefox.sh ← regenerates firefox/ from chromium/
├── landing/             ← Next.js + shadcn + RetroUI marketing site
├── social/              ← launch assets, copy, per-platform briefs
├── brand/               ← icon.svg + palette.md (shared identity)
└── docs/                ← store listings, publishing notes
```

## ⚠️ Build workflow (do not forget)

**Edit files in `extension/chromium/`, then run `extension/build-firefox.sh`.
Never hand-sync the two extension folders** — `firefox/` is generated.

```bash
cd extension
./build-firefox.sh
```

## The tools it swaps into

GitIngest · GitMCP · GitDiagram · DeepWiki · GitHub.gg · StackBlitz · Star History

## Install (dev)

- Chrome: `chrome://extensions/` → Developer mode → Load unpacked → `extension/chromium`
- Brave: `brave://extensions/` → same
- Arc: `chrome://extensions` → same (pin button near address bar)
- Firefox: `about:debugging#/runtime/this-firefox` → Load Temporary Add-on → `extension/firefox/manifest.json`

## Brand

Identity lives in `brand/` — green `#93f27d` on cream `#fae9cc`, hard black borders,
offset shadows, Archivo Black + Space Grotesk. The landing page rethemes RetroUI to
this palette so the extension and site match.

## Related

- Hermes skill: `repo-url-intelligence` (CLI equivalent of these URL swaps)
- Obsidian: `projects/Repo Swap - Browser Extension.md`
