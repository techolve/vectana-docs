---
name: zensical-docs-authoring-code-blocks
description: Author syntax-highlighted code blocks with titles, line numbers, annotations, and external snippets.
---

# Zensical Docs: Authoring code blocks

Use this skill when the user asks for fenced code syntax and advanced code presentation.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/code-blocks/

## Required configuration

```toml
[project.markdown_extensions.pymdownx.highlight]
anchor_linenums = true
line_spans = "__span"
pygments_lang_class = true
[project.markdown_extensions.pymdownx.inlinehilite]
[project.markdown_extensions.pymdownx.snippets]
[project.markdown_extensions.pymdownx.superfences]
```

## Core syntax

````markdown
```py title="example.py" linenums="1" hl_lines="2 3"
print("hello")
```
````

````

Inline highlight:

```markdown
Use `#!python range()` for sequences.
````

Embed file:

````markdown
```title=".browserslistrc"
--8<-- ".browserslistrc"
```
````

```

## Guidance rules

- Prefer language identifiers for readable output.
- Use strict indentation inside fenced structures.
- Enable content.code.copy and content.code.select features when needed.
```
