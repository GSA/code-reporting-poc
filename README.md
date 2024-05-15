# Code Reporter POC

Proof-of-concept for harvesting code.json data and building a report.

1. Create a GitHub token with `repo` and `read:org` permissions
2. Set the `GITHUB_TOKEN` environment variable to a token that has access to the repositories you want to scan
3. Run `npm run inventory` to generate a `_data/code.json` file
4. Run `npm run dev` to run the Eleventy dev server to preview the site
