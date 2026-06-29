---
name: zensical-docs-setup-repository
description: Configure repository metadata, content action links, and repository-related icons.
---

# Zensical Docs: Setup repository

Use this skill when the user asks to link docs with source repository and page actions.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/repository/

## Key configuration

Repository URL and name:

```toml
[project]
repo_url = "https://github.com/zensical/zensical"
repo_name = "zensical/zensical"
```

Repository icon:

```toml
[project.theme.icon]
repo = "fontawesome/brands/git-alt"
```

Page actions:

```toml
[project.theme]
features = ["content.action.edit", "content.action.view"]

[project]
edit_uri = "edit/main/docs/"
```

## Guidance rules

- Use absolute edit_uri when docs are hosted in a different repository.
- Enable content.action flags only when URL derivation is valid.
