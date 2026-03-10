---
title: Docs Repo — Team Guidelines and Workflow
description: Standards, workflow steps, and conventions for contributing to the consolidated docs-v2 repository using Mintlify.
sidebar_label: New Repo Guidelines
---

This document is the team's reference guide for the `docs-v2` repository. It covers onboarding, daily workflow, content standards, and QC processes.

## Prerequisites

Before you start contributing:

- Accept your GitHub repository invite via the email notification. Cloning our public repo is possible without accepting the invite, but push access and pull request (PR) creation require explicit acceptance.
- Complete GitHub 2FA setup.
- Verify both steps are complete independently — don't assume they're done because one step is complete.
- Install the required VS Code extensions listed in the [VS Code Setup](#vs-code-setup) section.
- Confirm the Mintlify CLI is available on your machine by running `mint dev` in the terminal. If the command is not recognized, contact IT to add the CLI to your system's environment variables. Resolve this before you start authoring.

---

## Repository Architecture

The team uses a single consolidated repository (`docs-v2`) instead of separate repositories per product.

- The `main` branch always represents the production-ready state. Never commit directly to `main`.
- Each product has a dedicated dev branch named after the product (for example, `ai-for-service-dev`, `agent-platform-dev`). All authoring happens on the product dev branch.
- Writers should work only within their product folder (for example, `ai-for-service/`) and should not edit root-level configuration files unless explicitly required.
- The `exo` folder is a temporary holding area for legacy content being migrated to the `ai-for-service` folder. It will be deleted once migration is complete. Do not add new content to `exo`.

---

## Daily Workflow

### Making changes

1. Open the repository in VS Code via GitHub Desktop. Always launch VS Code from GitHub Desktop using the correct product dev branch — see [VS Code Setup](#vs-code-setup).
2. Verify you are on the correct product dev branch before editing any files.
3. Make your edits and commit to the product dev branch.

### Staging preview and pull requests

A staging preview link is generated only when a pull request (PR) is open. A PR signals the intent to merge the dev branch into `main` — it does not auto-merge.

- The staging URL is static and based on the branch name. Bookmark it.
- When no PR is open, the staging link returns 404. This is expected.
- Access the staging link via: GitHub → the PR → **Show environments**.
- A reviewer (Prabat or Ashish) must approve the PR before it is merged.
- The PR shows all commits from all contributors since the last merge. Any team member can create the PR.

**For bug fixes and Jira-driven updates:** Commit to the dev branch and notify Prabat. A PR will be created at release time.

---

## VS Code Setup

### Opening the repository

Always open VS Code from GitHub Desktop by selecting the correct branch and clicking **Open in Visual Studio Code**. This ensures VS Code sees the full repository from its root, which is required for root-relative paths to work.

Verify this: the top of the VS Code Explorer panel should show the repository root name (`docs-v2`). If it shows any other folder name, the repo is not open from its root and root-relative paths will fail.

### Required extensions

| Extension | Purpose |
|---|---|
| **Copy Relative Path Posix** | Provides Unix-style (forward-slash) relative paths when you right-click a file tab. The native VS Code "Copy Relative Path" uses backslashes, which break on all platforms. |
| **MDX Preview** | In-editor preview of MDX files. Mintlify-specific components (`<Note>`, `<Warning>`) will show errors in this preview — this is expected and harmless. Use local build or staging for full rendering. |
| **Markdown Lint** | Flags Markdown style issues. |

### Local build

Run `mint dev` in the terminal to preview the site locally with full Mintlify rendering.

---

## File Naming Conventions

- All new and revamped articles use the `.mdx` extension.
- Legacy `.md` files represent old, unconsolidated content being phased out.
- The extension is the team's internal content status signal: `.mdx` = reviewed, new-structure content; `.md` = legacy, to be retired or migrated.
- Both extensions use standard Markdown syntax — there is no functional difference in the build engine.
- **Action required:** MDX articles that link to `.md` files will break as soon as the MD files are deleted. Search within `*.mdx` files for links ending in `.md)` and fix them first — these are the highest-priority broken links.

---

## Content Hierarchy

The documentation uses a three-tier structure.

| Level | Description | Appears in left nav? |
|---|---|---|
| **L1** | High-level product overviews and major feature categories. Few per product. | Yes |
| **L2** | Detailed feature topics. Some appear as children of L1 entries in the nav; others are in the folder but not in the nav. They link to L3 articles via tables and accordions. | Some |
| **L3** | Detailed procedures, integration pages, connector pages, and API references. Discoverable only through links from L1/L2 articles or site search. | No |

This structure intentionally reduces the number of left-nav entries. What were previously five to six separate articles for a single feature are now consolidated into one or two L2 articles with clear sections and anchored headings.

If content is logically difficult to find, that is a sequencing problem to fix during QC — not a reason to add more top-level nav entries.

---

## Linking and Image Paths

All hyperlinks and image references use root-relative paths (starting with `/` from the repository root).

### Creating a link

1. In VS Code, right-click the destination file's **tab** (not the sidebar — the tab at the top of the editor).
2. Select **Copy Relative Path Posix**.
3. Paste into Markdown link syntax: `[link text](/path/to/file)`.
4. Manually add the leading `/` — the extension does not include it.
5. Remove the `.mdx` extension from the path — links with `.mdx` do not render correctly in the Mintlify build.

### Creating an image path

1. Right-click the image file's tab and select **Copy Relative Path Posix**.
2. Add the leading `/`.
3. Keep the file extension (for example, `.png`) — image references require the full extension.

### Anchor links

After the file path, add `#` followed by the heading anchor (heading text in lowercase, spaces replaced with hyphens). VS Code may autocomplete this — if it does not, type it manually.

### Live URL reconstruction

The live URL for any file is `docs.kore.ai` + the file path without the `.mdx` extension. Use this to reconstruct a file's location from its URL, or vice versa.

---

## Mintlify Syntax and Formatting

### No HTML

This is an absolute rule. The old repository used custom HTML for image sizing, numbered lists, and note formatting. Mintlify does not support custom HTML. Remove or replace all HTML with native Mintlify components.

### Admonitions

Use Mintlify's tag syntax:

```mdx
<Note>Short informational note — one to two lines only.</Note>
<Warning>Warning text here.</Warning>
<Info>Contextual information here.</Info>
```

Keep admonitions short. If the content is long enough to need a multi-line admonition, move it into the article body instead.

### Frontmatter

Every MDX file must begin with YAML frontmatter:

```yaml
---
title: Article Title Here
sidebarTitle: Title that shows in the TOC or left nav
Description: meta description from SERP snippet point of view.
---
```

Add a `sidebarTitle` field only when the left-nav label should differ from the H1 heading. For most L3 articles (not in the left nav), `sidebarTitle` is not needed.

### Other formatting rules

- **Tables:** Use Markdown table syntax. No HTML tables.
- **Accordions:** Use Mintlify accordion syntax (see [Mintlify docs](https://mintlify.com/docs)) to reduce scroll length on long articles.
- **Badges:** Use for back-navigation on L3 articles. Copy the badge syntax from an existing L3 article (for example, the Azure connector MDX file) and update the link destination.

---

## Content Style

- **Action-oriented and direct.** Use action verbs, short sentences, active voice.
- **No marketing language.** No adjectives or adverbs in body content. No promotional framing.
- **Minimal images.** Remove screenshots that do not add meaningful information. Images that are kept should be captured at a resolution that is meaningful at full page width (Mintlify renders all images at 100% width — no HTML sizing overrides are available).
- **ASCII diagrams** (in code blocks) replace many illustrations.
- **Lists and tables frequently,** but avoid back-to-back multiple lists or tables.
- **Few admonitions,** used only when genuinely necessary.

---

## TOC Management

The left navigation is defined in `docs.json` at the repository root. Treat this file as read-only unless you need to add a new L1 or L2 entry.

To add a new nav entry:

1. Discuss with Prabat first.
2. Add the entry following the existing JSON structure.
3. Verify in the local build (`mint dev`) before committing.

The left-nav label for each entry comes from the `title` or `sidebarTitle` field in the article's frontmatter — not from `docs.json`. The JSON file defines the path and sequence; the article's frontmatter defines the label.

---

## QC Checklist

Run QC in this priority order:

1. **Fix MD-to-MDX links.** In VS Code, search within the `ai-for-service` folder, file filter `*.mdx`, for the pattern `.md)`. These links will break as soon as the MD files are deleted.
2. **Fix broken image paths.** Scroll through each TOC article on the staging site. Empty bordered boxes indicate missing images.
3. **Remove unnecessary images.** Start with L2 articles.
4. **Verify L1/L2 coverage.** Confirm that all major feature topics for your product area appear in the left nav, in a logical sequence.
5. **Add badges** to all L3 articles not linked from the left nav.
6. **Check for 404s in the left nav.** If a left-nav link is broken, flag it to Prabat immediately.

**Additional search patterns for QC:**

- `[]()` or `[](#)` — empty or broken links.

---

## Porting Delta Content

A `_delta` folder in the new repository contains only the files that changed in the old repository since migration began. This content must be ported manually — automated file-diff tools are not usable because the new MDX articles are completely restructured.

To port a changed file:

1. Open the `_delta` folder and locate the changed file for your product.
2. Review the commit history in the old repository to understand what changed.
3. Locate the equivalent section in the new MDX article.
4. Insert the changed content, adapting it to the new article's style.
5. If the content chunk is large and style adaptation would take too long, insert it as-is and flag it for AI-assisted reformatting.

Run QC and delta porting in parallel — doing them sequentially delays go-live significantly.

---

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
