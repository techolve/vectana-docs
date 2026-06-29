---
name: zensical-docs-setup-extensions-python-markdown-extensions
description: Configure supported PyMdown extensions for advanced technical writing workflows.
---

# Zensical Docs: Extensions python-markdown-extensions

Use this skill when the user asks about advanced markdown authoring features.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/extensions/python-markdown-extensions/

## Common enables

```toml
[project.markdown_extensions.pymdownx.details]
[project.markdown_extensions.pymdownx.keys]
[project.markdown_extensions.pymdownx.smartsymbols]
[project.markdown_extensions.pymdownx.snippets]
```

Code and tabs baseline:

```toml
[project.markdown_extensions.pymdownx.highlight]
anchor_linenums = true
line_spans = "__span"

[project.markdown_extensions.pymdownx.superfences]

[project.markdown_extensions.pymdownx.tabbed]
alternate_style = true
```

Task list:

```toml
[project.markdown_extensions.pymdownx.tasklist]
custom_checkbox = true
```

## Guidance rules

- Use supported options first; other options may behave unexpectedly.
- For math rendering, pair arithmatex with runtime script configuration.
