---
name: zensical-docs-usage-new-project
description: Use zensical new to scaffold a project and explain generated files.
---

# Zensical Docs: Usage new project

Use this skill when the user asks to create a new Zensical project from CLI.

## Scope

This skill is based on:

- https://zensical.org/docs/usage/new/

## Command

```bash
zensical new [OPTIONS] PROJECT_DIRECTORY
```

## Typical output structure

```text
.
├─ .github/workflows
│  └─ docs.yml
├─ docs/
│  ├─ index.md
│  └─ markdown.md
└─ zensical.toml
```

## Behavioral notes

- Creates target path if it does not exist.
- Does not overwrite existing files.
- Returns error if zensical.toml already exists.

## Guidance rules

- Recommend running in an empty directory for first-time setup.
- Point users to setup guides for zensical.toml customization.
