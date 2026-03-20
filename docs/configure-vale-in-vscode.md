---
title: How to enable Vale linting in VSCode
description: Instructions to enable Vale linter in VSCode and troubleshooting tips
sidebar_label: Vale in VSCode
---

You must complete the following prerequisites before you begin to install Vale:

| Task | Reason |
|----|----|
| [Trust your workspace](https://code.visualstudio.com/docs/editing/workspaces/workspace-trust#_trusting-a-workspace) in VSCode. | This helps extensions work as desired in your workspace. |
| [Show file extensions in Windows Explorer](https://support.microsoft.com/en-us/windows/common-file-name-extensions-in-windows-da4a4430-8e76-89c5-59f7-1cdbbc75cb01). | It helps avoid confusion when copy-pasting file name or when dragging a file on a command window to get its path. |
| [Update VSCode](https://code.visualstudio.com/docs/supporting/FAQ#_vs-code-versions) to the latest version. | Because it's there! |
| Execute `npm install -g mdx2vast` | Enables Vale checks for .mdx files. |

## Configure to use the Vale extension in VSCode

1. Clone the GitHub repository [https://github.com/ashishguptaiitb/koreaidocs-vale-rules](https://github.com/ashishguptaiitb/koreaidocs-vale-rules) locally. Let's assume that your local path is `C:/Users/X/Documents/GitHub/koreaidocs-vale-rules`.

1. Open the `.vale.ini` file in the above directory and change the value of the `StylesPath` variable to the path of the current folder. In our example, the value of the `StylesPath` variable becomes `C:/Users/X/Documents/GitHub/koreaidocs-vale-rules`. Save and close the `.vale.ini` file. 

    ![Style path variable value in the Vale INI file.]/assets/vale-ini-stylepath.png)

1. Open VSCode that's updated to the latest version. Select **File** > **Preferences** > **Settings**.

1. Install the [Vale extension](https://marketplace.visualstudio.com/items?itemName=ChrisChinchilla.vale-vscode) in VSCode. Restart VSCode editor.
 
1. Search for **Vale** in the search settings field. In the search results, select **Vale** from the left sidebar.

    ![Search vale in the VSCode settings.](./../assets/vscode-vale-settings.png)

1. Select the **Vale: Do Not Show Warning For File To Be Saved Before Linting** option.

1. Select the **Vale: Enable Spellcheck** option.

1. Change the value of the **Vale: Max Number Of Problems** option to 500.

1. In the **Vale > Vale CLI: Config** field, enter the path of the .ini settings file. In our example, the file path is `C:/Users/X/Documents/GitHub/koreaidocs-vale-rules/.vale.ini`.

1. To enable Vale checks for .mdx files, run the command `npm install -g mdx2vast` on a command prompt.

1. Relaunch VSCode to load the new settings.

## Use the extension in VSCode

1. Open any help article and select **View** > **Problems** to view the style issues. Report generation may take some time. Update the content to resolve these issues.

   ![Same problems report](../assets/sample-problems.png)

2. Select each issue and update the content to resolve it. Hover the pointer over the issue to view the option to fix the problem.

   ![Various options to resolve the issue.](../assets/options-to-resolve.png)

3. Optionally, if you choose **Quick Fix**, it provides an AI-generated explanation of the problem, fixes the problem, and then prompts you to accept the updates. Choose **Accept** if you approve of the fix.

   ![Option to accept the automatic fix.](../assets/accept-fix.png)

## Troubleshoot Vale usage and config

* If you see `E100` error in VSCode, in the lower-right corner, it indicates that VSCode Vale extension isn't able to find the vocab files. To resolve, make sure in VSCode settings, the path to the config file that you provide is,

  * Path of the `.vale.ini` file and not of the cloned folder.
  * Not wrapped in double quotes and doesn't contain spaces.

* If you see fatal error when cloning the repo in GitHub desktop client, it indicates either a permissions issue or an incorrect path.

  * Make sure that you are cloning the repo in a folder where you have read-write permissions. For example, don't clone directly into `C:\` but use a folder inside `C:/Users/X/`, for example, the `Documents` folder or the `Desktop` folder.
  * Make sure that you haven't cloned the repo in a mapped drive. For example, OneDrive or Google Drive.
  * Make sure that you haven't added any special characters in the URL or the local folder. Also, make sure that you don't copy an extra space in the URL of the GitHub repo.
