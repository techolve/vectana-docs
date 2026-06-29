---
name: zensical-docs-setup-extensions-overview
description: Configure markdown extensions baseline and manage default extension set in Zensical.
---

# Zensical Docs: Setup extensions overview

Use this skill when the user asks which extensions are supported and how defaults are managed.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/extensions/

## Key points

- Zensical ships with a default extension configuration.
- Default set differs from MkDocs baseline.
- Defaults can be disabled.

Disable defaults:

```toml
[project]
markdown_extensions = {}
```

## Guidance rules

- Prefer defaults first, then customize incrementally.
- If migration issues appear, test with defaults disabled to isolate behavior.
