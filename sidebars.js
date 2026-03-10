// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

const sidebars = {
  tutorialSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Docs Repo v2',
      items: [
        'get-started-docs-repo',
        'migrate-recently-updated-content-to-new-repo-2026'
      ],
    },
  ],
};

module.exports = sidebars;
