---
name: zensical-docs-setup-navigation
description: Configure Zensical navigation, instant features, table-of-contents behavior, and page-level visibility controls.
---

# Zensical Docs: Setup navigation

Use this skill when the user asks about nav hierarchy, feature flags for navigation UI, instant navigation, previews, or sidebars.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/navigation/

## What to cover

- Implicit and explicit navigation
- Navigation sections and external links
- Theme feature flags for navigation behavior
- Instant navigation and instant previews prerequisites
- TOC behavior, breadcrumbs, back-to-top, and page-level hiding

## Explicit nav examples

```toml
[project]
nav = [
  "index.md",
  "about.md"
]
```

```toml
[project]
nav = [
  {"Home" = "index.md"},
  {"About" = [
    "about/index.md",
    "about/vision.md",
    "about/team.md"
  ]}
]
```

External link in nav:

```toml
[project]
nav = [
  {"GitHub Repo" = "https://github.com/zensical/docs"}
]
```

## Feature flags examples

Instant navigation:

```toml
[project.theme]
features = ["navigation.instant"]
```

Instant prefetching and progress:

```toml
[project.theme]
features = [
  "navigation.instant",
  "navigation.instant.prefetch",
  "navigation.instant.progress"
]
```

Tabs, sections, pruning, path, top:

```toml
[project.theme]
features = [
  "navigation.tabs",
  "navigation.sections",
  "navigation.prune",
  "navigation.path",
  "navigation.top"
]
```

TOC behavior:

```toml
[project.theme]
features = ["toc.follow", "toc.integrate"]
```

## Front matter interactions

Hide sidebars:

```yaml
---
hide:
  - navigation
  - toc
---
```

Hide navigation path:

```yaml
---
hide:
  - path
---
```

## Guidance rules

- Require site_url when enabling instant navigation or instant previews.
- Use explicit nav only when users need strict ordering or labels.
- Recommend section index pages with navigation.indexes for overview pages.
