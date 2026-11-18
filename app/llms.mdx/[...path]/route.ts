import { docsLlms } from '@/lib/source';

export const revalidate = false;
// Paths not generated below answer 404.
export const dynamicParams = false;

export async function GET(_req: Request, { params }: RouteContext<'/llms.mdx/[...path]'>) {
  const { path } = await params;
  return (await docsLlms.serve(`/${path.join('/')}`)) ?? new Response(null, { status: 404 });
}

export async function generateStaticParams() {
  const params: { path: string[] }[] = [];
  for (const file of await docsLlms.files()) {
    // `/llms.txt` and `/llms-full.txt` have their own routes.
    if (!/^\/llms(-full)?\.txt$/.test(file))
      params.push({ path: decodeURI(file).slice(1).split('/') });
  }
  return params;
}
