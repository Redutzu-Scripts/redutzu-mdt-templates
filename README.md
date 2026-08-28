# Redutzu-MDT - Custom Page Templates

This repository contains templates for redutzu-mdt custom pages, showcasing most functions provided by the MDT SDK.

## Templates

- [react](./react) - React + TypeScript app template
- [vue](./vue) - Vue 3 app template
- [svelte](./svelte) - Svelte app template
- [vanilla](./vanilla) - Vanilla HTML/JS app template (no build step)

## Documentation

Custom pages in redutzu-mdt automatically get access to `window.mdt`, injected by the MDT's own SDK script tag (already wired up in every template's `index.html`). Use the `window.` prefix for all of these - they are not available as bare globals.

The context (`window.mdt.ready`, `window.mdt.getContext()`, `window.mdt.onContextChange(listener)`) is:

- `resource` - the name of your own custom page's resource, use this when emitting NUI events to yourself
- `name` - the page identifier your `client.lua` registered it under
- `locale` - the officer's selected locale
- `theme` - the MDT's active theme

`window.mdt` also exposes:

- `emitNui(event, data?)` - calls a `RegisterNUICallback` in your own resource and resolves with its response
- `formatDate(timestamp, includeTime?)`, `formatNumber(value)`, `formatCurrency(amount)` - format a value using the MDT's own locale-aware formatters
- `toast(message, options?)` - shows one of the MDT's own toasts
- `confirm(options)` - shows the MDT's own confirm dialog and resolves with the officer's choice

For the full type shape, see `src/types.d.ts` in the React, Vue, or Svelte templates. For the full API reference, see redutzu-mdt's own `docs/custom-pages.md`.
