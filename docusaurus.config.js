// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RulerChen',
  tagline: 'RulerChen Site',
  favicon: 'img/profile.png',

  // Set the production url of your site here
  url: 'https://RulerChen.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/RulerChen-Website',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RulerChen', // Usually your GitHub org/user name.
  projectName: 'RulerChen-Website', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant']
  },

  trailingSlash: true,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/RulerChen/RulerChen-Website/tree/main/',
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        gtag: {
          trackingID: 'G-8BEHDPLQMG',
          anonymizeIP: true
        },
      }),
      '@docusaurus/preset-classic',
      {
        sitemap: {
          changefreq: 'daliy',
          priority: 0.5,
          ignorePatterns: ['/docs/intro/', '/blog/', '/blog/archive/'],
          filename: 'sitemap.xml',
        },
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: '2b8f51df143e1ab1b63c05ce84dd422a',
        indexName: 'RulerChen-Website',
        appId: 'GSV9DQB5UM'
      },
      metadata: [
        {
          name: 'google-site-verification',
          content: 'QrdRbPEcOsJJ_kfRVewqfwR6GjPcRf0UVgRb85I-5fc'
        },
        {
          name: 'description',
          content:
            '這是一個關於資訊領域的個人筆記網站，包含了前後端技術，資料結構與演算法等等的相關知識'
        }
      ],
      // Replace with your project's social card
      image: 'img/profile.png',
      navbar: {
        title: 'RulerChen',
        logo: {
          alt: 'My Site Logo',
          src: 'img/profile.png'
        },

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Notes'
          },
          { to: 'blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/RulerChen',
            label: 'GitHub',
            position: 'right'
          },
          {
            href: 'https://www.linkedin.com/in/rulerchen/',
            label: 'Linkdin',
            position: 'right'
          }
        ]
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} RulerChen, Inc. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
