import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const basePath = '/taffy';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  basePath,
  output: 'standalone',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  async rewrites() {
    return [
      {
        source: '/docs/:path*.md',
        destination: '/llms.mdx/docs/:path*.md',
      },
      {
        source: '/docs/:path*.txt',
        destination: '/llms.mdx/docs/:path*.txt',
      },
    ];
  },
};

export default withMDX(config);
