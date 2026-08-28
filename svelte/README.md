# Redutzu-MDT - Svelte Template

If you don't know how Svelte works, you should use the vanilla JS template instead.

## Installing modules

1. Install node.js
2. `cd` to the `nui` folder and run `npm i`, wait for it to complete.

## Developing the app

1. Run `npm run dev`.
2. Go to http://localhost:3001 in your browser to see the app.
3. `window.mdt` isn't available outside FiveM, so `public/fallback.js` installs a mock automatically when it's missing - `emitNui` calls will reject, everything else works enough to build the UI against.

## Building the app

1. Run `npm run build` to build the app. The build will be in the `dist` folder.
2. `client.lua` registers `nui/dist/index.html` as the page, so the resource always serves the built output, not the source.
3. `refresh; ensure <resource>` (or restart it from txAdmin) so redutzu-mdt picks up the new build.

Never open `dist/index.html` directly from disk - browsers block ES module scripts under the `file://` protocol, so nothing will render. Use `npm run dev`, or `npx vite preview` after building, or restart the resource in FiveM instead.
