# Contribute to Technical Documentation of Kore.ai Platform

Welcome to the Contributor guide that helps you create, edit, publish, and contribute to the product documentation of Kore.ai Platform and Solutions.

It is published on github.io at [https://ashishguptaiitb.github.io/koreaidocs-contributor-guide/docs/introduction/](https://ashishguptaiitb.github.io/koreaidocs-contributor-guide/docs/introduction/).

## Kore.ai Products and AI Platforms

- **[Agent Platform](https://koreai.mintlify.app/agent-platform/index)** — Build intelligent, autonomous AI agents.
- **[AI for Work](https://koreai.mintlify.app/ai-for-work/index)** — Enterprise productivity platform.
- **[AI for Service](https://koreai.mintlify.app/ai-for-service/index)** — Customer service AI solutions.
- **[AI for Process](https://koreai.mintlify.app/ai-for-process/index)** — Process automation with AI.

## Contribute to Kore.ai Platform docs.

Prerequisites to author and contribute are:

- [Node.js](https://nodejs.org) v20.17.0 or later (LTS version recommended)
- Get write access to this repo.
- Install Mintlify CLI `npm i -g mintlify`.

To author and preview, follow these steps:

1. Clone the repo. Use GitHub Desktop client.
1. Work only in your [product-specific branch](https://github.com/Koredotcom/docs-v2/branches) and your product-specific folder.
1. Create or update the .mdx files or other assets.
1. To preview locally, create a local build using `mint dev` or `mint dev --port xxxx` in the cloned repo's root folder.
1. To preview on stage, create [a pull requests](https://github.com/Koredotcom/docs-v2/pulls) and view the deployment link in it.
1. To publish your doc updates, request a review of your PR and wait for it to be merged. Do NOT merge on your own.

## Publish or update this contributor guide

This guide is a static website, built using [Docusaurus](https://docusaurus.io/).

To create a local build, follow these steps:

* Start local dev server - `npm run start`
* Generate static site - `npm run build`
* Preview built site- `npm run serve`
* Clear cached build artifacts - `npm run clear`

To publish content and update the published web site, just merge the updated content into the `main` branch.
