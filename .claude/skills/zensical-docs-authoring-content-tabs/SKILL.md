---
name: zensical-docs-authoring-content-tabs
description: Create and link content tabs for code and narrative alternatives.
---

# Zensical Docs: Authoring content tabs

Use this skill when users need grouped alternatives, such as language-specific snippets.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/content-tabs/

## Required configuration

```toml
[project.markdown_extensions.pymdownx.superfences]
[project.markdown_extensions.pymdownx.tabbed]
alternate_style = true
```

Optional linked tabs:

```toml
[project.theme]
features = ["content.tabs.link"]
```

## Core syntax

````markdown
=== "Python"

    ``` py
    print("hello")
    ```

=== "JavaScript"

    ``` js
    console.log("hello")
    ```
````

## Guidance rules

- Ensure tab labels use the same naming conventions, capitalization, and formatting to enable linked tab behavior.
- Use slugify config for cleaner anchor links when sharing tab URLs.
