# Rebirth

A monochrome digital exhibition and virtual gallery, built as a responsive
single-page experience with React and Vite.

## Project structure

```text
src/
├── components/       Reusable page sections and UI primitives
├── data/             Exhibition content
├── App.jsx           Page composition
├── main.jsx          Application entry point
└── styles.css        Design system, layout, and animation
```

## Development

```bash
npm install
npm run dev
```

Run `npm run build` to create a production build and `npm run lint` to check
the source.

## GitHub Pages

The production build uses `/rebirth-website/` as its public base path. Pushes
to `main` are automatically built and published by the
`Deploy to GitHub Pages` workflow.

In the repository settings, open **Pages**, set **Source** to **GitHub
Actions**, and save. The deployed site will be available at
`https://ddwukeep.github.io/rebirth-website/` after the workflow succeeds.
