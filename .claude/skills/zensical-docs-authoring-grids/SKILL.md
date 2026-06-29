---
name: zensical-docs-authoring-grids
description: Build card and generic grid layouts with markdown-friendly container syntax.
---

# Zensical Docs: Authoring grids

Use this skill when the user asks for responsive index-like layouts.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/grids/

## Required configuration

```toml
[project.markdown_extensions.attr_list]
[project.markdown_extensions.md_in_html]
```

## Core syntax

Card grid:

```markdown
<div class="grid cards" markdown>

- Item A
- Item B

</div>
```

Generic grid:

```markdown
<div class="grid" markdown>

Block A

Block B

</div>
```

## Guidance rules

- Use card grids for a list of links to key sections or pages.
- Use generic grids for blocks containing both text and images or other media.
