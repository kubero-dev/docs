import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'PaaS for Kubernetes',
  tagline: 'Deploy 12-Factor Apps on Kubernetes Easily - Simple, Scalable, Cloud-Native.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.kubero.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  organizationName: 'kubero-dev',
  projectName: 'kubero',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl:
            'https://github.com/kubero-dev/docs/tree/release/v2',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {name: 'keywords', content: 'Kubero Kubernetes Cluster PaaS Operator deployment CI/CD'},
      {name: 'description', content: 'Kubero is a platform as a service (PaaS) that enables developers to build, run, and operate applications on Kubernetes.'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    announcementBar: {
      id: "star",
      content:
        '⭐️ If you like Kubero, please give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/kubero-dev/kubero">GitHub</a>! ⭐️',
      backgroundColor: '#6c6bbb',
      textColor: '#fff',
      isCloseable: true,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Kubero',
      logo: {
        alt: 'Kubero Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://demo.kubero.dev/',
          label: 'Demo',
          position: 'right',
        },
        {
          href: "https://github.com/kubero-dev/kubero",
          position: "right",
          className: "header--github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Legal',
          items: [
            {
              label: 'Impressum',
              to: '/impressum',
            },
            {
              label: 'Datenschutz',
              to: '/datenschutz',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github Discussions',
              href: 'https://github.com/orgs/kubero-dev/discussions',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/tafRPMWS4r',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Documentations',
              to: '/docs',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kubero-dev/kubero',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kubero.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;