---
name: zensical-docs-authoring-admonitions
description: Author admonitions including titles, collapsible variants, nesting, and icon customization.
---

# Zensical Docs: Authoring admonitions

Use this skill when the user asks for callout syntax.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/admonitions/

## Required configuration

```toml
[project.markdown_extensions.admonition]
[project.markdown_extensions.pymdownx.details]
[project.markdown_extensions.pymdownx.superfences]
```

## Core syntax

```markdown
!!! note
Body text
```

Collapsible:

```markdown
??? note
Collapsible content
```

Initially expanded:

```markdown
???+ note
Expanded by default
```

## Guidance rules

1. Use four-space indentation for admonition content.
2. For inline side notes, use inline and inline end modifiers.
3. Customize per-type icons by editing the `project.theme.icon.admonition` mapping in the project configuration file.
