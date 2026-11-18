import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Taffy';
export const description = 'The shared library behind the so.alaz Paper plugins.';

/** The Next.js basePath. Fumadocs does not apply it to fetch URLs, Markdown URLs or llms.txt links. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const siteUrl = `https://alaz.so${basePath}`;

export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';

export const discordUrl = 'https://discord.gg/m3AKQfrMS5';

/** The library repository. */
export const libraryRepo = 'https://github.com/alazso/taffy';

/** This site's repository, used for the edit links of each page. */
export const gitConfig = {
  user: 'alazso',
  repo: 'taffy-docs',
  branch: 'main',
};

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
