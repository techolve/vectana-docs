---
name: zensical-docs-authoring-icons-emojis
description: Use icon and emoji shortcode syntax in markdown and templates.
---

# Zensical Docs: Authoring icons and emojis

Use this skill when users ask for visual markers in text.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/icons-emojis/

## Required configuration

```toml
[project.markdown_extensions.attr_list]
[project.markdown_extensions.pymdownx.emoji]
```

## Core syntax

Emoji:

```markdown
:smile:
```

Icon:

```markdown
:fontawesome-regular-face-laugh-wink:
```

Icon with class:

```markdown
:fontawesome-brands-youtube:{ .youtube }
```

## Guidance rules

- Use bundled icon sets or configured custom icons only.
- For template usage, include SVG from .icons path inside twemoji wrapper.
