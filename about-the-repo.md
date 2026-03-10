# About the repo and the website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

* Start local dev server - `npm run start`
* Generate static site - `npm run build`
* Preview built site- `npm run serve`
* Clear cached build artifacts - `npm run clear`


## Deployment without GA

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
