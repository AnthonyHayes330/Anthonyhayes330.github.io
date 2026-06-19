# Anthony Hayes quantitative trading research portfolio

## Portfolio purpose

This repository hosts Anthony Hayes's static GitHub Pages portfolio for graduate quantitative trading, options-trading, market-making and quantitative research applications. The site is designed as a concise technical evidence portfolio: projects must distinguish research questions, assumptions, implementation evidence, evaluation, frictions, risk controls and limitations.

The site intentionally uses plain HTML, CSS and JavaScript. It has no build step, no analytics, no framework dependency and no broker or live-trading connectivity.

## Architecture

- `index.html` renders the homepage.
- `project/index.html` renders a reusable case-study page selected by `?slug=`.
- `assets/data/projects.js` stores all portfolio project records.
- `assets/js/site.js` renders project cards and case-study sections.
- `assets/css/styles.css` defines the visual system.
- `docs/` stores sanitised public source briefs and content rules for future updates.
- `docs/projects/` may be created later for public-safe project reports, notes or figures.

## Local preview

1. Open a terminal in this repository.
2. Run:

```bash
python3 -m http.server 8000
```

3. Open `http://localhost:8000/` in a browser.
4. Open a case study with a URL such as `http://localhost:8000/project/?slug=options-market-making-blueprint`.

Stop the server with `Ctrl+C` when finished.

## How to add a new portfolio project

1. Open `assets/data/projects.js`.
2. Find the commented example project object at the bottom of the file and copy its shape into the `portfolioProjects` array.
3. Create a unique `slug`, using lowercase words separated by hyphens, such as `etf-premium-dynamics`.
4. Choose the correct evidence-based `status`: `Blueprint`, `In development`, `Implemented` or `Validated`.
5. Write a precise `researchQuestion` that names the market, modelling or risk question being investigated.
6. Add methodology, assumptions, evaluation, limitations, next steps and any current outputs. Make only evidence-supported claims.
7. Add optional `repositoryUrl`, `reportUrl` and `demoUrl` values only when public links are valid. Leave unavailable links as empty strings so the site does not render empty buttons.
8. Place genuine project figures or public-safe documents under an appropriate folder such as `docs/projects/your-project-slug/`. Do not add decorative charts, fabricated performance images, private CVs, phone numbers, confidential employer material, API keys, broker credentials or unsupported performance claims.
9. Link public-safe documents from the project object with `documentLinks`, for example `{ label: "Technical note", url: "docs/projects/your-project-slug/technical-note.pdf", type: "PDF" }`.
10. Preview the homepage at `http://localhost:8000/` and the case-study page at `http://localhost:8000/project/?slug=your-project-slug`.
11. Confirm missing optional URLs and empty optional sections do not render.
12. Commit the change with `git add . && git commit -m "Add portfolio project"`.

## Reusable future Codex instruction

Read `AGENTS.md`, inspect the supplied project repository or report, add the project through the central project-data structure, make only evidence-supported claims, test the affected pages and prepare a pull request without merging it.
