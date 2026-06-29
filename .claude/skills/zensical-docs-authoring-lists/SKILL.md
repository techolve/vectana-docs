---
name: zensical-docs-authoring-lists
description: Use unordered, ordered, definition, and task list syntaxes in Zensical docs.
---

# Zensical Docs: Authoring lists

Use this skill when users ask about structured list syntax.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/lists/

## Required configuration for extended list types

```toml
[project.markdown_extensions.def_list]
[project.markdown_extensions.pymdownx.tasklist]
custom_checkbox = true
```

## Core syntax

Unordered:

```markdown
- item
- item
```

Ordered:

```markdown
1. item
2. item
```

Definition list:

```markdown
Term
: Definition
```

Task list:

```markdown
- [x] done
- [ ] todo
```

## Guidance rules

- Keep nesting indentation consistent.
- Use task lists only for actionable checkable items.
