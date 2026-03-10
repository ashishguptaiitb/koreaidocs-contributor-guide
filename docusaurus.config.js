// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Koreai Docs Contributor Guide',
  tagline: 'Documentation contribution guidelines',
  favicon: 'assets/favicon.png',


  // Set the production url of your site here
  url: 'https://ashishguptaiitb.github.io',
  baseUrl: '/koreaidocs-contributor-guide/',

  trailingSlash: true,
  
  // GitHub pages deployment config.
  organizationName: 'ashishguptaiitb',
  projectName: 'koreaidocs-contributor-guide',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
      },
    ],
  ],
};

export default config;
