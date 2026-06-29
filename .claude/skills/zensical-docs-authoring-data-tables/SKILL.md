---
name: zensical-docs-authoring-data-tables
description: Write markdown data tables with alignment and optional client-side sorting.
---

# Zensical Docs: Authoring data tables

Use this skill when the user asks for table syntax in documentation.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/data-tables/

## Required configuration

```toml
[project.markdown_extensions.tables]
```

## Core syntax

```markdown
| Method | Description |
| ------ | ----------- |
| GET    | Fetch       |
| PUT    | Update      |
```

Column alignment:

```markdown
| Left | Center | Right |
| :--- | :----: | ----: |
```

## Customization note

Sortable tables can be added with extra JavaScript using tablesort.

## Guidance rules

- Keep header and delimiter counts aligned.
- Use icons and inline code in cells only where readability remains high.
