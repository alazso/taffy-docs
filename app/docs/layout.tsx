import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { appName, description } from '@/lib/shared';
import Link from 'next/link';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      sidebar={{
        banner: (
          <Link
            href="/docs"
            className="block rounded-lg border border-fd-border bg-gradient-to-br from-fd-primary/10 to-transparent p-3 transition-colors hover:border-fd-primary/40"
          >
            <span className="block font-semibold text-fd-foreground">{appName}</span>
            <span className="mt-1 block text-xs text-fd-muted-foreground">{description}</span>
          </Link>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
