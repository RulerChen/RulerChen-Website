import { themes as prismThemes } from 'prism-react-renderer';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config = {
  title: 'RulerChen',
  tagline: 'RulerChen Site',
  favicon: '/img/profile/profile.webp',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: true, // Enable rspack compiler for faster builds
  },

  // Set the production url of your site here
  url: 'https://RulerChen.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/RulerChen-Website',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RulerChen', // Usually your GitHub org/user name.
  projectName: 'RulerChen-Website', // Usually your repo name.

  trailingSlash: true, // Whether to add a trailing slash to the end of URLs.

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://cdn.jsdelivr.net',
        crossorigin: 'anonymous',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/RulerChen/RulerChen-Website/tree/main/',
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: "RulerChen's Blog",
            description: "Welcome to RulerChen's Blog",
            copyright: `Copyright © ${new Date().getFullYear()} RulerChen.`,
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/RulerChen/RulerChen-Website/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
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
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/profile/profile.webp',
    algolia: {
      apiKey: '2b8f51df143e1ab1b63c05ce84dd422a',
      indexName: 'RulerChen-Website',
      appId: 'GSV9DQB5UM',
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
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
    // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: "Docs",
    //       items: [
    //         {
    //           label: "Tutorial",
    //           to: "/docs/intro"
    //         }
    //       ]
    //     },
    //     {
    //       title: "Community",
    //       items: [
    //         {
    //           label: "Stack Overflow",
    //           href: "https://stackoverflow.com/questions/tagged/docusaurus"
    //         },
    //         {
    //           label: "Discord",
    //           href: "https://discordapp.com/invite/docusaurus"
    //         },
    //         {
    //           label: "X",
    //           href: "https://x.com/docusaurus"
    //         }
    //       ]
    //     },
    //     {
    //       title: "More",
    //       items: [
    //         {
    //           label: "Blog",
    //           to: "/blog"
    //         },
    //         {
    //           label: "GitHub",
    //           href: "https://github.com/facebook/docusaurus"
    //         }
    //       ]
    //     }
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
