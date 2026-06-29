---
name: zensical-docs-authoring-tooltips
description: Add tooltips, abbreviations, and glossary-style definitions across pages.
---

# Zensical Docs: Authoring tooltips

Use this skill when the user asks for inline definitions and glossary behavior.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/tooltips/

## Required configuration

```toml
[project.markdown_extensions.abbr]
[project.markdown_extensions.attr_list]
[project.markdown_extensions.pymdownx.snippets]

[project.theme]
features = ["content.tooltips"]
```

## Core syntax

Link tooltip:

```markdown
[Hover me](https://example.com "Tooltip text")
```

Abbreviation:

```markdown
The HTML spec ...

\*[HTML]: Hyper Text Markup Language
```

## Guidance rules

- Keep glossary definitions in a shared snippet file for consistency.
- Prefer concise tooltip text to avoid visual clutter.
