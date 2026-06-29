---
name: zensical-docs-setup-extensions-glightbox
description: Enable GLightbox image zoom and configure galleries, captions, and lightbox behavior.
---

# Zensical Docs: Extensions glightbox

Use this skill when the user asks for image lightbox behavior.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/extensions/glightbox/

## Enable

```toml
[project.markdown_extensions.zensical.extensions.glightbox]
```

## Common options

```toml
[project.markdown_extensions.zensical.extensions.glightbox]
auto = true
auto_themed = true
width = "800px"
height = "600px"
auto_caption = true
caption_position = "bottom"
skip_classes = ["off-glb"]
```

## Guidance rules

- Use data attributes on images for per-image behavior overrides.
- Keep attr_list extension available when using data-\* attributes in markdown.
