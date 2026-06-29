---
name: zensical-docs-setup-extensions-python-markdown
description: Enable and configure supported Python Markdown extensions in Zensical.
---

# Zensical Docs: Extensions python-markdown

Use this skill when the user asks about enabling core Python Markdown extensions.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/extensions/python-markdown/

## Common extension enables

```toml
[project.markdown_extensions.abbr]
[project.markdown_extensions.admonition]
[project.markdown_extensions.attr_list]
[project.markdown_extensions.def_list]
[project.markdown_extensions.footnotes]
[project.markdown_extensions.md_in_html]
[project.markdown_extensions.tables]
```

TOC options:

```toml
[project.markdown_extensions.toc]
permalink = true
toc_depth = 3
```

## Guidance rules

- Keep toc config explicit when heading depth is large.
- Avoid unsupported extension options unless behavior is verified.
