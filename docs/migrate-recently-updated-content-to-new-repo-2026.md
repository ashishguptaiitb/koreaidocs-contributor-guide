---
title: Sync new and old repos after the latest release
description: Step-by-step task list to manually port the recent doc updates and release content from the old docs repo to the new repo.
sidebar_label: Sync latest content across repos
---

# Porting Documentation Updates from Old Repo

Use the following steps to manually port the recently updated content from the old repository to the new repository. The files are already added to the repo but the actual content must be incorporated into the new articles.

1. **What Latest Updates**
   - In the new repo, select your product branch and fetch the latest updates. Look for the local folder `latest-doc-updates-from-old-repos`.
   - Start with the .md files of your product area only. The .yml and .txt files aren't available as those are redundant in the new repo.
   - Remember the exact content update you made for a topic and find it in the relevant .md files.
   - If not sure, then review the recent commits in the old repo for a particular .md file. Look only for the commits after Feb 21, 2026. It'll give you the exact changes made in a specific .md file.

1. **Locate the Same Topic in the New Repo**
   - Search the new repo for the equivalent topic in a .mdx file. Use VSCode's search to exclude a few files and limit the search only to your product folder.
   - If you can't find then relax your VSCode search to include .md files instead of excluding those. Also, use Mintlify's search on the published doc site. Ask in our group chat if you can't find it.
   - If the content resides in a .md file and not in any .mdx file, then report it. We'll create the new file afresh if the topic was missed during migration.
   - Don't add any new .mdx files in the TOC. Post a request in our group chat.

1. **Merge the Content Updates**
   - Manually merge the content updates into the destination .mdx file. Don't copy the entire contents of the old .md file. Adhere to the writing and structuring style of the new content.
   - Adjust sub-heading order in the added content.
   - Look for opportunities to backlink to this net-new content from other high-level articles (.mdx files).

1. **How to Handle Graphics**
   - Check .png images that were added in the old repo.
   - Determine if the screenshot is still required in the new docs. Again, adhere to the new style of writing + the usage guidelines for screenshots that I shared in our team's group chat.
   - Add the image in an existing `images` folder that's 'nearest to the .mdx file' in the folder hierarchy.
   - Be mindful to add root-relative path for images, as I demoed in our onboarding meetings.

1. **Final Checks in the New Contents**
   - Inline links work.
   - Images follow the guidance shared in team's group chat.
   - Tables are in MD syntax.
   - No HTML formatting is present.
   - Admonitions are in Mintlify's syntax.
   - Preview in a local build or on stage after creating a PR.

1. **Commit Small, Focused Changes**
   - Commit one topic at a time rather than working on large batches of content.
   - Handle text > links > images, in this order.
   - Use clear commit messages instead of generic ones like 'doc updates'. It helps everyone know what went into the new repo, makes searching across PRs easy, and avoids duplicate work across writers.

1. **Flag Ambiguous Content**
   - If the edits are too large to handle, flag it. 
   - If the changes seem ambitious (say, revamps that don't make sense), then flag it.
   - If the correct destination topic is unclear, flag it.
   - If you struggle with the toolchain, ask for help.
   - If you can't run local builds or your staging build fails, flag it. (At times, the Mintlify stage deployment inside PRs fails and has to be manually triggered.)
