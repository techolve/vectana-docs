---
name: zensical-docs-setup-extensions-mkdocstrings
description: Integrate mkdocstrings for API references and configure python handler options.
---

# Zensical Docs: Extensions mkdocstrings

Use this skill when the user asks to generate API docs from source code.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/extensions/mkdocstrings/

## Install

```bash
pip install mkdocstrings-python
```

## Configuration example

```toml
[project.plugins.mkdocstrings.handlers.python]
inventories = ["https://docs.python.org/3/objects.inv"]
paths = ["src"]

[project.plugins.mkdocstrings.handlers.python.options]
docstring_style = "google"
inherited_members = true
show_source = false
```

## Guidance rules

- Treat integration as preliminary and verify feature expectations.
- Prefer source paths inside project directory for reliable watch/rebuild behavior.
