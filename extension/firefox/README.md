# Repo Swap — Chromium build

This is the **source of truth** for the extension. Edit files here, then run the
build script one level up to regenerate the Firefox build:

```bash
cd ..            # into extension/
./build-firefox.sh
```

Loads in Chrome, Brave, Arc, and Edge.

## Install (dev)

- Chrome: `chrome://extensions/` → Developer mode → Load unpacked → this folder
- Brave: `brave://extensions/` → same
- Arc: `chrome://extensions` → same (pin the button near the address bar)

For Firefox install and full product context, see the root `../../README.md`.

## Files

- `popup.html` / `popup.css` / `popup.js` — the popup (shared with the Firefox build)
- `manifest.json` — Chromium MV3 manifest
- `icons/` — generated PNGs (16/32/48/128) + editable `icon.svg`

## Notes

- Activates only on GitHub repo URLs like `github.com/owner/repo`.
- "Open in a new window" preference is remembered locally.
- Third-party tools are best for public repos — don't send private/client code or secrets.
