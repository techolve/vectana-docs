---
name: zensical-docs-authoring-footnotes
description: Add and format footnote references and definitions with optional tooltip rendering.
---

# Zensical Docs: Authoring footnotes

Use this skill when the user asks for citations or side notes in long-form docs.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/footnotes/

## Required configuration

```toml
[project.markdown_extensions.footnotes]
```

Optional tooltip mode:

```toml
[project.theme]
features = ["content.footnote.tooltips"]
```

## Core syntax

Reference:

```markdown
Sentence with note[^1].
```

Definition single line:

```markdown
[^1]: Footnote content.
```

Definition multiline:

```markdown
[^2]:
    First line
    Second line
```

## Guidance rules

- Keep identifier consistency between reference and definition.
- Use multiline indentation with four spaces.
