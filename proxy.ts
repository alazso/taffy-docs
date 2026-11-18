import { NextRequest, NextResponse } from 'next/server';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';
import { docsRoute } from '@/lib/shared';

const { rewrite: rewriteDocs } = rewritePath(
  `${docsRoute}{/*path}`,
  `/llms.mdx${docsRoute}{/*path}.md`,
);

export default function proxy(request: NextRequest) {
  // nextUrl.pathname excludes the basePath, and the cloned URL adds it back.
  const { pathname } = request.nextUrl;
  // `/docs/page.md` and `/docs/page.txt` are served by the rewrites in next.config.mjs.
  const result =
    isMarkdownPreferred(request) && !/\.(md|txt)$/.test(pathname) && rewriteDocs(pathname);

  if (result) {
    const url = request.nextUrl.clone();
    url.pathname = result;
    return NextResponse.rewrite(url, {
      // This URL has two representations, selected by `Accept`.
      headers: { Vary: 'Accept' },
    });
  }

  return NextResponse.next();
}
