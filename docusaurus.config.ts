import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import dotenv from 'dotenv';
dotenv.config();

const appId = process.env.DOCSEARCH_APP_ID;
const apiKey = process.env.DOCSEARCH_API_KEY;
const indexName = process.env.DOCSEARCH_INDEX_NAME;
const hasAlgolia = Boolean(appId && apiKey && indexName);

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Anvil 源码导读',
  tagline: '基于 foundry crates/anvil 的结构化解析',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://thneoly.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // Allow override in local dev: BASE_URL="/"
  baseUrl: process.env.BASE_URL || '/anvil-code-walkthrough/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Thneoly', // GitHub 用户名/组织
  projectName: 'anvil-code-walkthrough', // 仓库名

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    localeConfigs: {
      'zh-Hans': { label: '简体中文' },
    },
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
            'https://github.com/Thneoly/anvil-code-walkthrough/edit/main/',
        },
  blog: false,
  theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          filename: 'sitemap.xml',
          // 忽略无关路由
          ignorePatterns: ['/tags/**', '/blog/**'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    // Global <meta> tags applied to all pages (including home)
    metadata: [
      { name: 'algolia-site-verification', content: '13724AD3C37DEC15' },
    ],
    navbar: {
      title: 'Anvil 源码导读',
      logo: {
        alt: 'Anvil Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://github.com/Thneoly/anvil-code-walkthrough',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
  links: [],
  copyright: `Copyright © ${new Date().getFullYear()} Thneoly. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // Docs sidebar behavior
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    // Enable Algolia DocSearch only when env vars are provided
    ...(hasAlgolia
      ? {
          algolia: {
            appId: appId!,
            apiKey: apiKey!,
            indexName: indexName!,
            contextualSearch: true,
          },
        }
      : {}),
  } satisfies Preset.ThemeConfig,
  // Enable Mermaid globally
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
