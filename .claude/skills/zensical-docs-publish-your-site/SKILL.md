---
name: zensical-docs-publish-your-site
description: Provide deployment recipes for publishing Zensical sites, especially GitHub Pages and GitLab Pages.
---

# Zensical Docs: Publish your site

Use this skill when the user asks to deploy Zensical output to hosting platforms.

## Scope

This skill is based on:

- https://zensical.org/docs/publish-your-site/

## What to cover

- GitHub Pages deployment with GitHub Actions
- GitLab Pages deployment with GitLab CI
- Community references for other hosts

## GitHub Actions baseline

Create .github/workflows/docs.yml and include:

```yaml
name: Documentation
on:
  push:
    branches:
      - master
      - main
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/configure-pages@v5
      - uses: actions/checkout@v5
      - uses: actions/setup-python@v5
        with:
          python-version: 3.x
      - run: pip install zensical
      - run: zensical build --clean
      - uses: actions/upload-pages-artifact@v4
        with:
          path: site
      - uses: actions/deploy-pages@v4
        id: deployment
```

## GitLab CI baseline

Create .gitlab-ci.yml and include:

```yaml
pages:
  stage: deploy
  image: python:latest
  script:
    - pip install zensical
    - zensical build --clean
  pages:
    publish: site
  rules:
    - if: "$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH"
```

## Guidance rules

- Keep branch trigger aligned with user default branch.
- Ensure artifact path is site, matching default build output.
- Mention GitLab unique domain and visibility settings when relevant.
