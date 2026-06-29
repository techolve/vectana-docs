---
name: zensical-docs-customization
description: Explain Zensical theme customization via extra assets, template overrides, and packaged themes.
---

# Zensical Docs: Customization

Use this skill when the user asks to customize visual design, behavior, templates, or package a reusable theme.

## Scope

This skill is based on:

- https://zensical.org/docs/customization/

## What to cover

- Adding custom CSS and JavaScript assets
- Template override workflow with custom_dir
- Custom page templates and 404 page
- Overriding blocks and partials
- Packaging themes as Python distributions

## Asset configuration

Add extra CSS:

```toml
[project]
extra_css = ["stylesheets/extra.css"]
```

Add extra JavaScript:

```toml
[project]
extra_javascript = ["javascripts/extra.js"]
```

JS module or async attributes:

```toml
[[project.extra_javascript]]
path = "javascripts/extra.js"
type = "module"

[[project.extra_javascript]]
path = "javascripts/extra.js"
async = true
```

## Template overrides

Configure override directory:

```toml
[project.theme]
custom_dir = "overrides"
```

Recommended approach: override blocks in main.html and use super() when extending existing content.

## Per-page template selection

Use front matter:

```yaml
---
template: my_template.html
---
```

## Theme packaging essentials

- Provide a Python package with pyproject.toml
- Register entry point under mkdocs.themes
- Optionally include mkdocs_theme.yml with extends and defaults

## Guidance rules

- Prefer block-level overrides over replacing base.html directly.
- Keep override file names aligned with original theme structure.
- Explain that users can still override packaged theme defaults in project config.
