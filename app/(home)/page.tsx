import Link from 'next/link';
import { TaffyMark } from '@/components/brand';
import { appName, discordUrl } from '@/lib/shared';

const modules: { name: string; body: string; href: string }[] = [
  {
    name: 'taffy-platform',
    body: 'The Folia-safe Scheduler, shutdown helpers, Text and Messages, item and skull builders, durations, cooldowns and a Discord webhook.',
    href: '/docs/modules/platform',
  },
  {
    name: 'taffy-config',
    body: 'Strict YAML loading that writes and upgrades config.yml, reports every problem at once and keeps the last good settings on a failed reload.',
    href: '/docs/modules/config',
  },
  {
    name: 'taffy-storage',
    body: 'SQLite, MySQL, MariaDB and PostgreSQL over HikariCP, with transactions on their own threads and schema migrations from the plugin’s scripts.',
    href: '/docs/modules/storage',
  },
  {
    name: 'taffy-hooks',
    body: 'Custom items, Vault, LuckPerms, WorldGuard, PlaceholderAPI and MiniPlaceholders behind Taffy interfaces, each one optional.',
    href: '/docs/modules/hooks',
  },
  {
    name: 'taffy-gui',
    body: 'Chest menus from code or the plugin’s own files, with pagination, click safety and text prompts in chat or an anvil.',
    href: '/docs/modules/gui',
  },
  {
    name: 'taffy-metrics',
    body: 'bStats and FastStats from one set of charts, with handled errors sent to FastStats error tracking.',
    href: '/docs/modules/metrics',
  },
];

const snippet = `pluginManagement {
    repositories {
        exclusiveContent {
            forRepositories(maven("https://repo.alaz.so/releases"))
            filter { includeGroupAndSubgroups("so.alaz.taffy") }
        }
        gradlePluginPortal()
    }
}

plugins {
    id("so.alaz.taffy.settings") version "0.4.7"
}`;

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center">
        <TaffyMark size={64} />
        <div className="mt-6 mb-5 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-fd-muted-foreground">
          <span className="rounded-full border border-fd-border px-3 py-1">Paper / Folia</span>
          <span className="rounded-full border border-fd-border px-3 py-1">Java 25</span>
          <span className="rounded-full border border-fd-border px-3 py-1">Gradle plugins</span>
        </div>

        <h1 className="text-gradient text-5xl font-bold tracking-tight sm:text-6xl">{appName}</h1>
        <p className="mt-4 text-lg font-medium text-fd-foreground sm:text-xl">
          The shared library behind the so.alaz Paper plugins.
        </p>
        <p className="mt-3 max-w-2xl text-fd-muted-foreground">
          Each plugin shades and relocates the Taffy modules it uses, so a server owner installs one
          jar per plugin and nothing else. Gradle plugins set up the toolchain, tests, coverage, the
          shaded jar and publishing in a few lines.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs/getting-started"
            className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
          <Link
            href="/docs"
            className="rounded-lg border border-fd-border px-5 py-2.5 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
          >
            Documentation
          </Link>
          <a
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-fd-border px-5 py-2.5 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
          >
            Discord
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4">
        <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-sm">
          <div className="flex items-center gap-1.5 border-b border-fd-border px-4 py-2.5">
            <span className="size-3 rounded-full bg-[#ff5fa2]/80" />
            <span className="size-3 rounded-full bg-[#ff9ecb]/80" />
            <span className="size-3 rounded-full bg-[#2ec4b6]/80" />
            <span className="ml-2 text-xs text-fd-muted-foreground">settings.gradle.kts</span>
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
            <code className="text-fd-foreground">{snippet}</code>
          </pre>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <Link
              key={m.name}
              href={m.href}
              className="rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:border-fd-primary/40"
            >
              <h3 className="font-mono text-sm font-semibold text-fd-foreground">{m.name}</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">{m.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
