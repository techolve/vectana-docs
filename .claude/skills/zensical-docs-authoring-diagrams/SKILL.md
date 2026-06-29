---
name: zensical-docs-authoring-diagrams
description: Author Mermaid diagrams with native Zensical integration.
---

# Zensical Docs: Authoring diagrams

Use this skill when the user asks for flowcharts or sequence diagrams in docs.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/diagrams/

## Required configuration

```toml
[project.markdown_extensions.pymdownx.superfences]
custom_fences = [
  { name = "mermaid", class = "mermaid", format = "pymdownx.superfences.fence_code_format" }
]
```

## Core syntax

````markdown
```mermaid
graph LR
  A --> B
```
````

```

## Guidance rules

- Prefer diagram types showcased in the Zensical documentation linked above for best theme behavior.
- Keep diagram source concise and split large diagrams across sections.
```
