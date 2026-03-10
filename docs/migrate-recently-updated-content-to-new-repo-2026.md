---
title: Sync new and old repos after the latest release
description: Step-by-step task list to manually port the recent doc updates and release content from the old docs repo to the new repo.
sidebar_label: Sync latest content across repos
---

# Porting Documentation Updates from Old Repo

Use the following steps to manually port the recently updated content from the old repository to the new repository. The files are already added to the repo but the actual content must be incorporated into the new articles.

1. **Sync the Latest Product Branch**
   - In the new repo, pull the latest updates in your product branch.
   - Look for the local folder `latest-doc-updates-from-old-repos`.

1. **Identify Files Relevant to Your Product Area**
   - In the folder `latest-doc-updates-from-old-repos`, start with the .md files of your product area only.
   - You won't find the .yml and .txt files, as those are redundant in the new repo.

1. **Review Each Updated File Before Editing**
   - Review the .md file from old repo and identify the exact content updates that you made.
   - If not sure, then review the recent commits in the old repo for a particular .md file. Look only for the commits after Feb 21, 2026. It'll give you the exact updates made recently after the new repo was created. Only these edits are to be added to the new repo.

1. **Locate the Same Topic in the New Repo**
   - Search the new repo for the equivalent topic. Use the power of VSCode's search to exclude a few files and limit the search only to your product folder.
   - The new destination article must be in the .mdx format. Find this .mdx file.
   - If you can't find then relax your VSCode search to include .md files instead of excluding those.

1. **What to do if You Don't Find the Destination**
   - Use Mintlify's search on the published doc site. 
   - Ask in our group chat. If the content resides in a .md file and not in any .mdx file, then report it.
   - We may have to create the new file afresh in case the topic was missed.
   - We avoid creating a net-new page unless the content clearly does not fit anywhere.
   - Don't add any new .mdx files in the TOC. Post a request in the team's group chat to do so.

1. **Merge the Content Updates**
   - Confirm that the topic fits the current information architecture. 
   - Manually merge the relevant updates into the destination .mdx file.
   - Do not copy the entire old file but add only the updated info. Adhere to the writing and structuring style of the new content.
   - Adjust sub-heading order in the added content.
   - Look for opportunities to backlink to this net-new content from other related high-level files.

9. **How to Handle Graphics**
   - Check .png images that were added in the old repo.
   - Determine if the screenshot is still required in the new docs. Again, adhere to the new style of writing + the usage guidelines for screenshots that I shared in our team's group chat.
   - Add the image in an existing `images` folder that's 'nearest to the .mdx file' in the folder hierarchy.
   - Be mindful to add root-relative path for images, as I demoed in our onboarding meetings.

1. **Final Checks in the New Contents**
   - Check the inline links in the new content. If present, adjust those.
   - If images are present, then follow the above guidance.
   - If tables are present, convert those to MD syntax.
   - If any HTML formatting is present, convert it to MD syntax. Use an AI tool for these conversions and always review as a human.
   - If using admonitions, then change the format to Mintlify's syntax.
   - Preview in a local build or on stage.

1. **Commit Small, Focused Changes**
   - Commit updates topic by topic rather than in large batches.
   - Handle text first, then links and images.
   - Lastly, run basic sanity checks listed above.
   - Use clear commit messages instead of generic ones like 'doc updates'. This helps everyone know what went into the new repo, makes searching across PRs easy, and avoids duplicate work across writers.

1. **Flag Ambiguous Content**
   - If the edits are too large to handle, flag it. 
   - If the changes seem ambitious (say, revamps that don't make sense), then flag it.
   - If the correct destination topic is unclear, flag it.
   - If you struggle with the toolchain, ask for help.
   - If you can't run local builds or your staging build fails, flag it. (At times, the Mintlify stage deployment inside PRs fails and has to be manually triggered.)

