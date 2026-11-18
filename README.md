# Taffy docs

The developer documentation for [Taffy](https://github.com/alazso/taffy), the shared library behind the so.alaz
Paper plugins, served at https://alaz.so/taffy/docs. Built with Next.js and Fumadocs.

## Local development

Requires Node.js 24 and npm.

```bash
npm ci
```

```bash
npm run dev
```

The site runs at http://localhost:3000/taffy, with the docs at http://localhost:3000/taffy/docs.

| Command | What it does |
| --- | --- |
| `npm run build` | Production build into `.next/standalone` |
| `npm run types:check` | Generates the route types, then runs `tsc` |
| `npm start` | Serves a production build |

## Content

Pages are MDX files in `content/docs`, with module pages in `content/docs/modules`. The sidebar order comes from
`meta.json` in each folder. Every page needs a `title` and a `description` in its front matter: they are the page
heading, the search entry, the OG image and the description in search results.

Pages describe the Taffy API as it is on `main` of the library repository: real class, method, Gradle id and
catalog alias names, and code examples that compile against them. A change to the library's public API ships
with the matching change here.

Besides Markdown, MDX pages can use `Callout`, `Cards` and `Card`, `Steps` and `Step`, and `Tabs` and `Tab`
without an import.

## Base path

The site is served under `/taffy` (`basePath` in `next.config.mjs`, exposed as `NEXT_PUBLIC_BASE_PATH`). Next.js
adds it to links and rewrites; the code adds it to the search endpoint (`app/layout.tsx`), the Markdown URL of
each page (`app/docs/[[...slug]]/page.tsx`), the links in `llms.txt` and `llms-full.txt` (`lib/source.ts`) and the
Markdown negotiation in `proxy.ts`. Content links are written without it (`/docs/modules/storage`).

Each page is also served as Markdown at `/taffy/docs/<page>.md`, and to clients that send
`Accept: text/markdown`. The whole site is at `/taffy/llms.txt` and `/taffy/llms-full.txt`.

## Deployment

`.github/workflows/deploy.yml` builds the Docker image and pushes it to `ghcr.io/alazso/taffy-docs` with the tags
`latest` and `sha-<short sha>`, on every push to `main` and on demand (`workflow_dispatch`). The image is a
Next.js standalone server on `node:24.22.1-alpine`, listening on port 3000 as the `node` user.

The reverse proxy for `alaz.so` forwards `/taffy` and everything under it to the container without stripping the
prefix. `robots.txt` belongs to the origin root, which lists `https://alaz.so/taffy/sitemap.xml`.
