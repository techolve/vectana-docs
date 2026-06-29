---
name: zensical-docs-setup-tags
description: Add and style page tags, including tag icon mapping and per-page visibility control.
---

# Zensical Docs: Setup tags

Use this skill when the user asks to classify pages with tags and customize tag icons.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/tags/

## Usage

Add tags in front matter:

```yaml
---
tags:
  - HTML5
  - JavaScript
  - CSS
---
```

Hide tags on a page:

```yaml
---
hide:
  - tags
---
```

## Icon mapping

Map tag to identifier:

```toml
[project.extra.tags]
Compatibility = "compat"
```

Map identifier to icon:

```toml
[project.theme.icon.tag]
default = "material/tag"
compat = "material/shield-check"
```

## Guidance rules

- Tag identifiers allow alphanumeric, dash, underscore.
- Reuse identifiers to group multiple tags under one icon.
