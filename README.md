# Bloom Cycle Care

A gentle, browser-based ovulation calculator. Enter the first day of your most
recent period and your typical cycle length to get an estimated ovulation day
and fertile window.

This app provides estimates for general wellness and educational purposes only.
Cycle timing can vary, and the results should not be used as contraception or as
a substitute for medical advice.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run

Clone the repository, then install dependencies and start the development
server:

```sh
npm ci
npm run dev
```

Vite prints a local URL in the terminal (usually `http://localhost:5173`).
Open it in a browser to use the app.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Vite development server |
| `npm run build` | Type-check and build the production app into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm test -- --runInBand` | Run the Jest tests once |

## How estimates are calculated

The estimate uses the provided cycle length and the first day of the most
recent period. Ovulation is estimated as 14 days before the next period, and
the fertile window is estimated from 17 to 12 days before the next period.
These are simplified calendar estimates; individual cycles and ovulation timing
can differ.

The calculation is implemented as a reusable utility in
[`src/lib/ovulation.ts`](src/lib/ovulation.ts) and covered by Jest tests in
[`tests/ovulation.test.ts`](tests/ovulation.test.ts).

## Technology

- React and TypeScript
- Vite
- Jest
