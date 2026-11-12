# Shravan Patel — Systems & AI Portfolio

A responsive, dark-first personal portfolio built from the supplied Stitch design reference. The visual system uses Obsidian surfaces, electric-cyan accents, hairline borders, Inter, and JetBrains Mono.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Structure

- `src/App.tsx` — page sections, navigation, project details, and interactions
- `src/styles.css` — responsive visual system and layouts
- `src/main.tsx` — React entry point
- `index.html` — document metadata and font loading

## Notes

- This phase is frontend-only and uses static content.
- No backend, database, authentication, or external API is configured.
- GSSoC leaderboard values are labelled as user-reported.
- The AI Cloud Load Balancer PR and Data Density Heatmap change are explicitly shown as not merged upstream.
- The architecture graphics are CSS-built visual summaries, not live telemetry.
- Verify all achievement figures and contact details before publishing.
