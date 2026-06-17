# Repo Swap — Brand

Single source of truth for the product's visual identity. The extension, landing
page, and social assets all pull from this palette so the product reads as one thing.

## Logo / mark

`icon.svg` — neobrutalist green tile, hard black border, offset drop shadow, bold
up-right swap arrow (↗). Re-export to PNG sizes (16/32/48/128) for the extension.

## Palette (neobrutalism)

| Token | Hex | Use |
|---|---|---|
| Ink | `#0b0b0b` | borders, text, shadows |
| Paper | `#fae9cc` | app/page background (cream) |
| Cream | `#f7efe2` | secondary surface |
| Primary (Green) | `#93f27d` | brand color, primary buttons, logo tile |
| Yellow | `#ffd43d` | warnings, highlights |
| Pink | `#ff7bdc` | tool accent |
| Blue | `#78d6ff` | tool accent |
| Purple | `#c9a1ff` | tool accent |
| Orange | `#ff7a5c` | tool accent |
| White | `#ffffff` | cards |

## Neobrutalist rules

- **Borders:** 2px solid Ink on everything. No soft borders.
- **Shadows:** hard offset (no blur), e.g. `4px 4px 0 #0b0b0b`. Press-down on active.
- **Radius:** small and uniform (`8px` in the extension). RetroUI uses `0` — for the
  landing page we use the extension's `8px` to keep them consistent.
- **Type:** Archivo Black (headings, ~950 weight feel), Space Grotesk (body).
- **Color:** saturated blocks, flat fills, no gradients.

## RetroUI theme mapping (landing page)

RetroUI ships yellow-primary. We retheme to the green/cream identity above:

```css
:root {
  --radius: 8px;            /* not 0 — match the extension */
  --background: #fae9cc;    /* paper */
  --foreground: #0b0b0b;    /* ink */
  --card: #ffffff;
  --card-foreground: #0b0b0b;
  --primary: #93f27d;       /* green (was #ffdb33) */
  --primary-hover: #7be861;
  --primary-foreground: #0b0b0b;
  --secondary: #0b0b0b;
  --secondary-foreground: #ffffff;
  --accent: #ffd43d;        /* yellow accent */
  --accent-foreground: #0b0b0b;
  --destructive: #ff7a5c;
  --destructive-foreground: #ffffff;
  --border: #0b0b0b;
  --input: #ffffff;
}
```
