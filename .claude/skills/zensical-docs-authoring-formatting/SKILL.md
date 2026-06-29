---
name: zensical-docs-authoring-formatting
description: Apply enhanced formatting syntax for highlight, sub/superscript, and keyboard keys.
---

# Zensical Docs: Authoring formatting

Use this skill when users ask for inline emphasis beyond core markdown.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/formatting/

## Required configuration

```toml
[project.markdown_extensions.pymdownx.caret]
[project.markdown_extensions.pymdownx.keys]
[project.markdown_extensions.pymdownx.mark]
[project.markdown_extensions.pymdownx.tilde]
```

## Core syntax

Highlight and edits:

```markdown
==mark==
^^insert^^
~~delete~~
```

Sub/superscript:

```markdown
H~2~O
A^T^A
```

Keyboard keys:

```markdown
++ctrl+alt+del++
```

## Guidance rules

- Use enhanced formatting only when it clarifies technical concepts, emphasizes key points, or distinguishes between similar terms.
- Keep key chord notation consistent across pages.
