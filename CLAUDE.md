# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

**droni-kit** (`@dronico/droni-kit`) is a Vue 3 + TypeScript UI component library published to npm for Droni.co projects. Built with Vite in library mode, styled with Tailwind CSS 4, documented and visually tested with Storybook.

## Commands

```bash
npm run dev              # Vite dev server (playground via src/App.vue)
npm run build             # vue-tsc -b (typecheck + .d.ts) then vite build -> dist/
npm run preview           # Preview the production build
npm run storybook         # Storybook dev server on port 6006
npm run build-storybook   # Static Storybook build -> storybook-static/
npm run test              # Vitest (runs the vitest.workspace.ts projects, incl. Storybook browser tests via Playwright)
npm run release           # semantic-release (CI only; do not run locally)
```

There is no separate lint script; type safety is enforced via `vue-tsc -b` during `build`.

### Tests

Tests are driven by `vitest.workspace.ts`, which wires up **Storybook's Vitest addon**: every `*.stories.ts` file is executed as a browser test (Playwright + Chromium, headless) rather than there being hand-written `*.spec.ts` files. Component behavior is verified through stories, not a separate test suite. To run/filter a single component's tests, target its story file, e.g.:

```bash
npx vitest run -t "DuiButton"
```

## Architecture

### Component catalog and export surface

- All components live under `src/stories/`, grouped by category: `Elements/`, `Forms/`, `Widgets/`.
- Every component is a `.vue` file paired with a `.stories.ts` file of the same name (Storybook is both the docs site and the test runner).
- `src/index.ts` is the single public entry point: it imports every component, imports `./style.css`, and re-exports the components by name. **Any new component must be registered here** to be part of the published package.
- `vite.config.ts` builds `src/index.ts` as a library (ES + CJS), externalizes `vue`, and uses `vite-plugin-dts` to emit `dist/index.d.ts`. `package.json` exposes `dist/droni-kit.es.js` / `dist/droni-kit.cjs` / `dist/droni-kit.css` via `exports`.
- Consumers must separately import `@dronico/droni-kit/dist/droni-kit.css`; the library does not inject styles automatically at runtime.

### Component prop conventions

Components share a common design-system prop vocabulary (see `README.md` "Directrices para componentes" and `DuiButton.vue` for the canonical example):

- `variant?: 'solid' | 'outline' | 'ghost'`
- `color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'`
- `size?: 'sm' | 'md' | 'lg'`
- `rounded?: 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'`
- `disabled?: boolean`
- `block?: boolean`

Pattern to follow when adding/editing a component:
- Define a `DuiXxxProps` interface, exported for external consumers.
- Use `withDefaults(defineProps<DuiXxxProps>(), {...})` for defaults.
- Build class strings with per-variant/per-color/per-size lookup objects (see `variantClasses`, `sizeClasses`, `roundedClasses` in `DuiButton.vue`) combined in a single `computed(() => ...)`.

### Tailwind prefixing

Tailwind is imported twice in `src/style.css`: once unprefixed and once with `prefix(dk)`. **All component classes use the `dk:` prefix** (e.g. `dk:bg-zinc-200`, `dk:hover:bg-zinc-300`) to avoid collisions with consuming apps' own Tailwind setup. Dark mode uses `dk:dark:*` variants driven by a `.dark` class ancestor (`@custom-variant dark (&:where(.dark, .dark *));`).

### Router-agnostic navigation

`DuiButton` and `DuiAction` render polymorphically (`<component :is="componentType">`) to support apps with or without Vue Router, using `src/utils/router-detection.ts`:
- `getRouterComponentType(to)` inspects the current app instance for a registered `RouterLink`/`$router` to decide between `'RouterLink'`, plain `'a'`, or `'button'`.
- `getRouterComponentProps(to, componentType, additionalProps)` builds the right prop set per resolved component type (e.g. `href`/`role="button"` for plain `<a>`, `to` for `RouterLink`).

Reuse this utility for any new component that needs a `to` prop instead of re-implementing router detection.

### Storybook as the docs/test surface

- Storybook config: `.storybook/main.ts` (stories glob `src/**/*.stories.@(js|jsx|mjs|ts|tsx)` and `src/**/*.mdx`), addons include `addon-vitest`, `addon-a11y`, `addon-docs`, `addon-themes`, Chromatic.
- `chromatic.config.json` configures visual regression testing against `storybook-static`.
- `storybook-static/` and `dist/` are build outputs — don't hand-edit them.

### Release process

Releases are fully automated via `semantic-release` (`release.config.ts`): commit-analyzer + release-notes-generator based on **Conventional Commits**, changelog written to `CHANGELOG.md`, npm publish, and a `chore(release): x.y.z [skip ci]` commit back to git. This runs in CI, not locally — commit messages must follow Conventional Commits (`feat:`, `fix:`, `docs:`, etc.) since they directly drive versioning.
