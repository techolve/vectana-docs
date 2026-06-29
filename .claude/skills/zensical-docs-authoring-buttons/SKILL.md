---
name: zensical-docs-authoring-buttons
description: Turn links into styled buttons with attribute lists and optional icons.
---

# Zensical Docs: Authoring buttons

Use this skill when the user asks for CTA button syntax in markdown.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/buttons/

## Required configuration

```toml
[project.markdown_extensions.attr_list]
```

## Core syntax

Secondary button:

```markdown
[Action](#){ .md-button }
```

Primary button:

```markdown
[Action](#){ .md-button .md-button--primary }
```

Button with icon:

```markdown
[Send :fontawesome-solid-paper-plane:](#){ .md-button }
```

## Guidance rules

- Attribute list syntax is required for class suffixes.
- Use primary button sparingly for clear visual hierarchy.
