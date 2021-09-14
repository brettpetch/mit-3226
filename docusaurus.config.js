const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'MIT-3226',
  tagline: 'Communication Through Meme',
  url: 'https://mit3226.brettpetch.ca',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'brettpetch', // Usually your GitHub org/user name.
  projectName: 'MIT-3226', // Usually your repo name.
  
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/brettpetch/MIT-3226/edit/master/',
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
      navbar: {
        title: 'MIT 3829',
        logo: {
          alt: 'MIT 3829',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Notes',
          },
          {
            href: 'https://github.com/brettpetch/MIT-3226',
            label: 'GitHub',
            position: 'right',
            },
            {
                href: 'https://owl.uwo.ca/portal/site/4c5d6e5e-bc57-4d21-bea0-ca21006ec28c',
                label: 'OWL',
                position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Lecture',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/352055548436545547',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/brettpetch',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/brettpetch/MIT-3226',
                },
                {
                label: 'OWL',
                href: 'https://owl.uwo.ca/portal/site/4c5d6e5e-bc57-4d21-bea0-ca21006ec28c',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Brett Petch. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        lightTheme: lightCodeTheme,
      },
    }),
});
