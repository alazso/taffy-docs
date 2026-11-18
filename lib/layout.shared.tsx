import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { SiteTitle } from '@/components/brand';
import { DiscordIcon, NavButton } from '@/components/nav-button';
import { discordUrl, libraryRepo } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <SiteTitle />,
      transparentMode: 'top',
    },
    links: [
      {
        type: 'custom',
        children: <NavButton href="/docs">Documentation</NavButton>,
      },
      {
        type: 'custom',
        children: <NavButton href="/docs/getting-started">Getting Started</NavButton>,
      },
      {
        type: 'custom',
        children: (
          <NavButton href={discordUrl} external brand>
            <DiscordIcon />
            Discord
          </NavButton>
        ),
      },
    ],
    githubUrl: libraryRepo,
  };
}
