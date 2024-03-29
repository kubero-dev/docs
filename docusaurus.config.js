// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kubero Docs',
  tagline: 'Use Heroku Workflows to deploy your App',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.kubero.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kubero-dev', // Usually your GitHub org/user name.
  projectName: 'kubero', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', //https://ricard.dev/how-to-set-docs-as-homepage-for-docusaurus/
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kubero-dev/docs/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      metadata: [{name: 'keywords', content: 'documentation, paas, kubernetes, IDP, self-hosted, kubero'}],
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'Kubero Logo',
          src: 'img/logo.svg',
        },
        items: [
          /*
          {
            type: 'doc',
            docId: '1quickstart',
            position: 'left',
            label: 'Docs',
          },
          */
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://demo.kubero.dev/',
            label: 'Demo',
            position: 'right',
          },
          {
            href: 'https://github.com/kubero-dev/kubero',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.kubero.dev/',
            label: 'Kubero',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Website',
                href: 'https://www.kubero.dev',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github Discussions',
                href: 'https://github.com/kubero-dev/kubero/discussions',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/tafRPMWS4r',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/kubero/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              /*
              {
                label: 'Blog',
                to: '/blog',
              },
              */
              {
                label: 'GitHub',
                href: 'https://github.com/kubero-dev/kubero',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;