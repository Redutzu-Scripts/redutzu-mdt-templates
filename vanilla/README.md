# Redutzu-MDT - Vanilla HTML/JS Template

No build step, no node modules - just plain HTML/CSS/JS. This is the template to start from if you don't know React, Vue, or Svelte.

## Developing the app

1. Open `nui/index.html` directly in your browser (double-clicking it works fine here - unlike the framework templates, nothing here is an ES module).
2. `window.mdt` isn't available outside FiveM, so `fallback.js` installs a mock automatically when it's missing - `emitNui` calls will reject, everything else works enough to build the UI against.

## Testing in FiveM

There's nothing to build - `client.lua` registers `nui/index.html` directly. Just `refresh; ensure <resource>` (or restart it from txAdmin) after editing to see your changes.
