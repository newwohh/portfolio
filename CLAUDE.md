# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Production build (outputs to `dist/`)
- `npm run lint` — Run ESLint
- `npm run preview` — Preview production build locally

## Architecture

Single-page React portfolio site. All content lives in one component (`src/App.tsx`) — there is no routing, no backend, and no data fetching.

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS 3 + Framer Motion + Lucide React icons.

**Key details:**
- `lucide-react` is excluded from Vite's dependency optimization (see `vite.config.ts`)
- Tailwind uses Inter as the custom sans font, imported via Google Fonts in `src/index.css`
- ESLint uses the flat config format (`eslint.config.js`) with typescript-eslint and react-hooks/react-refresh plugins
- No test framework is configured
