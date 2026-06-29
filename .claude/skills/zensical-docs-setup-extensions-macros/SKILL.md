---
name: zensical-docs-setup-extensions-macros
description: Use Jinja2 macros extension for variables, filters, tabular data ingestion, and per-page rendering control.
---

# Zensical Docs: Extensions macros

Use this skill when the user asks for dynamic templating in markdown pages.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/extensions/macros/

## Enable

```toml
[project.markdown_extensions.zensical.extensions.macros]
```

## Common options

```toml
[project.markdown_extensions.zensical.extensions.macros]
module_name = "macros"
include_yaml = ["data/variables.yml"]
include_dir = "includes"
render_by_default = true
on_error_fail = true
on_undefined = "strict"
```

## Per-page override

```yaml
---
render_macros: false
---
```

## Guidance rules

- Expose macros via define_env(env) in configured module.
- Register external data files in watch for preview rebuild consistency.
- Install pandas and tabulate when using read\_\* helpers for tabular data.
