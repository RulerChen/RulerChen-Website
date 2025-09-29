// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
module.exports = async function createConfigAsync() {
  return {
    title: 'RulerChen',
    tagline: 'RulerChen Site',
    favicon: '/img/profile/profile.webp',

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
      locales: ['zh-Hant', 'en'],
      localeConfigs: {
        'zh-Hant': {
          label: '繁體中文',
          direction: 'ltr',
          htmlLang: 'zh-Hant',
        },
        en: {
          label: 'English',
          direction: 'ltr',
          htmlLang: 'en',
        },
      },
    },

    trailingSlash: true,

    future: {
      v4: true,
      experimental_faster: true,
    },

    headTags: [
      {
        tagName: 'meta',
        attributes: {
          name: 'google-site-verification',
          content: 'QrdRbPEcOsJJ_kfRVewqfwR6GjPcRf0UVgRb85I-5fc',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
      },
    ],

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl: 'https://github.com/RulerChen/RulerChen-Website/tree/main/',
            showLastUpdateTime: true,
            remarkPlugins: [(await import('remark-math')).default],
            rehypePlugins: [(await import('rehype-katex')).default],
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
          gtag: {
            trackingID: 'G-8BEHDPLQMG',
            anonymizeIP: true,
          },
          sitemap: {
            changefreq: 'daily',
            priority: 0.5,
            ignorePatterns: [
              '/RulerChen-Website/blog/archive/',
              '/RulerChen-Website/search/',
              '/RulerChen-Website/docs/intro/',
              '/RulerChen-Website/blog/',
            ],
            filename: 'sitemap.xml',
          },
        }),
      ],
    ],
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
      // Local fonts temporarily disabled - using Google Fonts instead
      // '/fonts/fonts.css',
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        algolia: {
          apiKey: '2b8f51df143e1ab1b63c05ce84dd422a',
          indexName: 'RulerChen-Website',
          appId: 'GSV9DQB5UM',
        },
        metadata: [
          {
            name: 'description',
            content: '這是一個關於資訊領域的個人筆記網站，包含了前後端技術，資料結構與演算法等等的相關知識',
          },
        ],
        // Replace with your project's social card
        image: 'img/profile/profile.webp',
        navbar: {
          title: 'RulerChen',
          logo: {
            alt: 'My Site Logo',
            src: 'img/profile/profile.webp',
          },

          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: 'Notes',
            },
            { to: 'blog', label: 'Blog', position: 'left' },
            {
              type: 'localeDropdown',
              position: 'right',
            },
          ],
        },
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: true,
        },
        // footer: {
        //   style: 'dark',
        //   copyright: `Copyright © ${new Date().getFullYear()} RulerChen, Inc. Built with Docusaurus.`
        // },
        prism: {
          additionalLanguages: ['powershell'],
          theme: lightTheme,
          darkTheme: darkTheme,
        },
      }),
  };
};
