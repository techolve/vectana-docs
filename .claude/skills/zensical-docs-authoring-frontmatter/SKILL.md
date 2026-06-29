---
name: zensical-docs-authoring-frontmatter
description: Apply Zensical front matter syntax for page metadata, status, templates, and per-page display controls.
---

# Zensical Docs: Authoring front matter

Use this skill when the user asks about per-page metadata syntax in markdown files.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/frontmatter/

## What to cover

- Standard front matter fields
- Page status integration with project config
- Custom template assignment
- Page visibility controls with hide
- Using custom metadata in templates

## Canonical syntax examples

Title and description:

```yaml
---
title: "Page title"
description: "Concise summary for meta tags"
---
```

Page icon:

```yaml
---
icon: lucide/braces
---
```

Page status:

```toml
[project.extra.status]
new = "Recently added"
```

```yaml
---
status: new
---
```

Custom page template:

```yaml
---
template: my_homepage.html
---
```

Hide page chrome elements:

```yaml
---
hide:
  - navigation
  - toc
---
```

Custom metadata for template logic:

```yaml
---
robots: noindex, nofollow
---
```

## Guidance rules

1. Confirm custom templates exist under the configured overrides directory.
2. If status badges are requested, define project.extra.status first, then assign status per page.
3. For SEO controls, always combine metadata fields (e.g., robots) with template overrides for consistent results. Avoid relying solely on page content.
