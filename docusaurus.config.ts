import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Documentation',
  tagline: 'Navigate through our guides',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://johndoe.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'johndoe',
  projectName: 'docs-boilerplate',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yourusername/docs-boilerplate/tree/main/',
          routeBasePath: '/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/yourusername/docs-boilerplate/tree/main/',
          blogTitle: 'Documentation Blog',
          blogDescription: 'Latest insights and tutorials',
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 6,
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    
    // Enable dark mode toggle
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'Documentation Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          to: '/shadcn-demo',
          label: 'shadcn/ui Demo',
          position: 'left',
        },
        {
          to: '/theme-test',
          label: 'Theme Test',
          position: 'left',
        },
        {
          to: '/simple-test',
          label: 'Simple Test',
          position: 'left',
        },
        {
          to: '/css-test',
          label: 'CSS Test',
          position: 'left',
        },

        {
          href: 'https://github.com/yourusername/docs-boilerplate',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Business',
              to: '/docs/business/project-overview',
            },
            {
              label: 'Technical',
              to: '/docs/technical/architecture',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/yourusername/docs-boilerplate',
            },
            {
              label: 'Issues',
              href: 'https://github.com/yourusername/docs-boilerplate/issues',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/yourusername/docs-boilerplate/discussions',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/documentation',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/',
            },
            {
              label: 'X',
              href: 'https://x.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Documentation Platform. Built with modern technologies.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;


