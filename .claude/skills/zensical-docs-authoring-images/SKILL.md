---
name: zensical-docs-authoring-images
description: Author images with alignment, captions, lazy-loading, and light/dark variants.
---

# Zensical Docs: Authoring images

Use this skill when the user asks for advanced image presentation.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/images/

## Required configuration

```toml
[project.markdown_extensions.attr_list]
[project.markdown_extensions.md_in_html]
[project.markdown_extensions.pymdownx.blocks.caption]
```

## Core syntax

Alignment:

```markdown
![Image](image.png){ align=left }
```

Lazy loading:

```markdown
![Image](image.png){ loading=lazy }
```

Light/dark pair:

```markdown
![Light](image-light.png#only-light)
![Dark](image-dark.png#only-dark)
```

## Guidance rules

- Use figure or caption extension for captions.
- Keep alt text meaningful for accessibility.
- Use GLightbox extension when zoom overlay is required.
