---
title: Docs Repo v2 — Team Guidelines and Workflow
description: Standards, workflow steps, and conventions for contributing to the consolidated docs-v2 repository using Mintlify.
sidebar_label: New Repo Guidelines
---

This document is the team's reference guide for the `docs-v2` repository (https://github.com/Koredotcom/docs-v2/). We cover onboarding, daily workflow, content standards, and QC processes in the following sections.

<br />
<br />
<br />

**THIS DOC IS A WORK IN PROGRESS**

<br />
<br />
<br />

## Prerequisites

Before you can contribute to the new docs repo, ensure the following:

- Join the repo as a collaborator. Check invite in your Inbox. 
- Complete GitHub 2FA setup. Join Kore.ai's GitHub org if you aren't a part of it.
- Clone the repo locally. Install the recommended VSCode extensions.
- Install Mintlify CLI on your laptop. Check team chat [here](https://chat.google.com/room/AAQAYijP1fQ/F5LqDNvDg3k/F5LqDNvDg3k?cls=10).
- Make sure that the local build is working. Run `mint dev` command in the repo folder.

## Repo Architecture and Setup

We're now using a single repo containing content of all products, instead of separate forks for each product.

- The `main` branch always represents the production-ready state. Never commit directly to `main` and don't merge PRs.
- Each product has a dedicated dev branch named, for example, `ai-for-service-dev` and `agent-platform-dev`. Author new content in a product's dev branch.
- Config files at repo root are explained in [the repo's readme file](https://github.com/Koredotcom/docs-v2/blob/main/README.md).
- Details of each folder and asset in the repo is documented in the [new repo's readme file](https://github.com/Koredotcom/docs-v2/blob/main/README.md).
- Alongside `main`, all product branches are protected.

### VSCode Setup

:::note

Don't open a folder in VSCode editor manually. Always open VSCode editor from GitHub Desktop client after selecting the appropriate product branch. It is required for root-relative paths to work.

:::

Verify that the top of the VSCode Explorer panel should show the repository root name (`docs-v2`). If it shows any other folder name, the repo is not open from its root and root-relative paths will fail.

| Recommended extensions                                                                                          | Description                                                                                                                                                                                                                                                          |
|:----------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Copy Relative Path Posix](https://marketplace.visualstudio.com/items?itemName=rssowl.copy-relative-path-posix) | Provides Unix-style (forward-slash) relative paths when you right-click a file tab. The native VSCode "Copy Relative Path" uses backslashes, which break on all platforms.                                                                                           |
| [Mintlify MDX](https://marketplace.visualstudio.com/items?itemName=mintlify.mintlify-snippets)                  | Makes it easy to insert Mintlify-specific foramtting and syntax in the content.                                                                                                                                                                                      |
| [MDX preview](https://marketplace.visualstudio.com/items?itemName=xyc.vscode-mdx-preview)                       | In-editor preview of MDX files. Mintlify-specific components (`<Note>`, `<Warning>`) will show errors in this preview — this is expected and harmless. Use local build or staging for full rendering. Doesn't work with Mintlify-specific formatting in the article. |
| [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)              | MD linting and style checking based on CommonMark specs.                                                                                                                                                                                                             |
| [JSON lint](https://marketplace.visualstudio.com/items?itemName=rioj7.vscode-json-validate)                     |                                                                                                                                                                                                                                                                      |
| [Prettifier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)                        |                                                                                                                                                                                                                                                                      |
| [MD Enhanced Preview](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)  |                                                                                                                                                                                                                                                                      |

### File Naming Conventions

Applies to help article files, folders, image names, and more.

- No capital letter. No spaces. No underscores. No parenthesis. No other characters.
- All new and revamped articles use the `.mdx` extension.
- All screenshots are in .png format.
- A few illustrations can be in .svg and Mermaid format. Mermaid code is inserted in the .mdx file and not externalized.

### Know the Content Hierarchy

The documentation has a logical, three-tier structure. It physically manifests in some places in the published docs, but it really is a logical understanding of how we treat our articles.

| Level  | Description                                                                                                                                      | Appears in left nav?                       |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| **L1** | High-level product overviews and major feature categories. A few such articles per product. Don't change over time.                              | Yes. Single-click access.                  |
| **L2** | Detailed feature topics. Some appear under L1 entries in the left nav.                                                                           | Yes. Nested under TOC categories.          |
| **L3** | Deep-dive how-to articles or references such as API ref, integration pages, Search AI connectors. Discoverable via inline links and site search. | No. Linked inline from L1 and L2 articles. |

This structure intentionally reduces the number of left-nav entries. What were previously five to six separate articles for a single feature are now consolidated into one or two L2 articles with clear sections and anchored headings.

:::tip

If content is logically difficult to locate then is a sequencing/structuring and a discoverability is the issue worth fixing. It's not a reason to add more top-level navigation entries.

:::

## Update Docs

1. Select the appropriate product branch in GitHub Desktop client.
1. Open the repository in VSCode editor.
1. Follow standard Markdown syntax and [Mintlify's syntax](https://www.mintlify.com/docs).
1. Preview edits in a local build. 
1. Commit to your product branch. Optionally, create a PR if it doesn't exist.

### Preview on Stage

If PR exists or if you create it, then you can preview your updates on the staging link as well. Staging link is available in [the PR here](https://github.com/Koredotcom/docs-v2/pulls).

:::note

When a PR is merged and closed, the staging link doesn't work.

:::

- The staging URL is static and based on the branch name. Bookmark the relevant links from the below list:

  - AI for Service: https://koreai-ai-for-service-dev.mintlify.app/home
  - Agent Platform: https://koreai-agent-platform-dev.mintlify.app/home
  - AI for Work: https://koreai-ai-for-work-dev.mintlify.app/home
  - AI for Process: https://koreai-ai-for-process-dev.mintlify.app/home
  - Agent Management Platform: https://koreai-agent-management-platform-dev.mintlify.app/home

- Access the staging link via: GitHub → the PR → **Show environments**.
- A reviewer must approve the PR before it can be merged to `main`.

### Creating a link

:::note

All hyperlinks and image references use root-relative paths (starting with `/` from the repository root).

:::

1. In VSCode, right-click the destination file's **tab** (not the sidebar — the tab at the top of the editor).
2. Select **Copy Relative Path Posix**.
3. Paste into Markdown link syntax: `[link text](/path/to/file)`.
4. Manually add the leading `/` — the extension does not include it.
5. Remove the `.mdx` extension from the path — links with `.mdx` do not render correctly in the Mintlify build.

### Creating an image path

1. Right-click the image file's tab and select **Copy Relative Path Posix**.
2. Add the leading `/`.
3. Keep the file extension (for example, `.png`) — image references require the full extension.

### Anchor links

After the file path, add `#` followed by the heading anchor (heading text in lowercase, spaces replaced with hyphens). VSCode may autocomplete this — if it does not, type it manually.

### Live URL reconstruction

The live URL for any file is `docs.kore.ai` + the file path without the `.mdx` extension. Use this to reconstruct a file's location from its URL, or vice versa.

## Mintlify-specific Syntax

:::warning

**Don't** use HTML in articles going forward. Remove or replace all HTML with Markdown syntax or native Mintlify components.

:::

### Admonitions

Use Mintlify's tag syntax:

```mdx
<Note>Short informational note — one to two lines only.</Note>
<Warning>Warning text here.</Warning>
<Info>Contextual information here.</Info>
```

Keep admonitions short. If the content is long enough to need a multi-line admonition, move it into the article body instead. No nested lists, no images, no code snippets, no list of tips and tricks, etc. inside admonitions please.

### Frontmatter

Every article begins with YAML frontmatter. Minimum requirement is to have a `title` entry. L1 and L2 articles must also contain `sidebarTitle`. For L3 articles that aren't part of the left nav, `sidebarTitle` isn't needed.

```yaml
---
title: Article Title Here. It becomes H1 in the published article.
sidebarTitle: Left nav entry
Description: meta description from SERP point of view.
---
```

### Other formatting rules

- **Tables:** Use Markdown table syntax. No HTML tables.
- **Accordions:** Use Mintlify accordion syntax (see [Mintlify docs](https://mintlify.com/docs)) to reduce scroll length on long articles.
- **Badges:** Use at the top of some L3 articles, to let users go back to the main article. For example, Search AI connectors, Agent AI integrations, and Agent Platform APIs. Copy the badge syntax from an existing L3 article and update the link destination. Don't use fancy colors to maintain consistency.

## Writing and Formatting Style

- **Action-oriented and direct.** Use action verbs, short sentences, active voice.
- **No marketing language.** No adjectives or adverbs in body content. No promotional framing or marketing mumo-jumbo.
- **Minimal images.** Remove screenshots that don't add meaningful information. Capture screenshots at a resolution that is meaningful at full page width.
- **ASCII diagrams** replace many illustrations. Must be embedded in div tags.
- **Lists and tables frequently,** but avoid back-to-back multiple lists or tables.
- **Few admonitions,** used only when genuinely necessary.

## About TOC Sidebar

The left navigation or sidebar or TOC is defined in `docs.json` at the repository root. Only high-level articles are added to it - we won't change it frequently.

To add a new entry to the navigation:

1. Discuss in the team first.
1. Add the entry following the existing JSON structure.
1. Verify in the local build (`mint dev`) before committing.

The left-nav label for each entry comes from the `sidebarTitle` field in the article's frontmatter and not from `docs.json`. The JSON file defines the path and sequence; the article's frontmatter defines the label.

## QC Checklist

Run QC in this priority order:

1. **Fix MD-to-MDX links.** In VSCode, search within the `ai-for-service` folder, file filter `*.mdx`, for the pattern `.md)`. These links will break as soon as the MD files are deleted.
2. **Fix broken image paths.** Scroll through each TOC article on the staging site. Empty bordered boxes indicate missing images.
3. **Remove unnecessary images.** Start with L2 articles.
4. **Verify L1/L2 coverage.** Confirm that all major feature topics for your product area appear in the left nav, in a logical sequence.
5. **Add badges** to all L3 articles not linked from the left nav.
6. **Check for 404s in the left nav.** If a left-nav link is broken, flag it to Prabat immediately.

## Porting Delta Content

A `_delta` folder in the new repository contains only the files that changed in the old repository since migration began. This content must be ported manually — automated file-diff tools are not usable because the new MDX articles are completely restructured.

To port a changed file:

1. Open the `_delta` folder and locate the changed file for your product.
2. Review the commit history in the old repository to understand what changed.
3. Locate the equivalent section in the new MDX article.
4. Insert the changed content, adapting it to the new article's style.
5. If the content chunk is large and style adaptation would take too long, insert it as-is and flag it for AI-assisted reformatting.

Run QC and delta porting in parallel — doing them sequentially delays go-live significantly.

## Old Repository Freeze

The old repository is deprecated. Do not make new edits there unless the work is explicitly critical release content.

Any PM requesting a change to the old repository should be redirected: the change will be made in the new repository and will go live from the new site.

---

## Working with Stakeholders

Stakeholders (PMs and others) may be unfamiliar with the new documentation structure. Key differences they will notice:

- Fewer left-nav entries (by design — content is consolidated, not removed).
- Fewer images per article (by design — minimalist image policy).
- Features that previously had standalone articles now appear as sections within a single L2 article.

Before go-live, run a one-time orientation session for PM stakeholders. The goal is to give them context before release — not to seek approval for decisions already made. Cover:

- The L1/L2/L3 model and why fewer left-nav entries is intentional.
- The minimalist image policy and why it improves the reading experience.
- How to find content using site search and the in-page right-side TOC.
- How to submit requests for new documentation going forward.

When PMs request changes, the writer's role is to champion content quality proactively. Make the case for consolidation and minimalism using the end user's reading experience as the measure of success.
