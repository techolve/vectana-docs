---
name: zensical-docs-create-your-site
description: Guide users through bootstrapping, configuring, previewing, and building a Zensical site.
---

# Zensical Docs: Create your site

Use this skill when the user asks to create a new Zensical documentation site and run the basic authoring loop.

## Scope

This skill is based on:

- https://zensical.org/docs/create-your-site/

## What to cover

- Bootstrap project skeleton
- Minimal required configuration
- Local preview loop
- Production build output

## Canonical workflow

Bootstrap a site in current directory:

```bash
zensical new .
```

Typical generated structure:

```text
.
├─ .github/workflows
│  └─ docs.yml
├─ docs/
│  ├─ index.md
│  └─ markdown.md
└─ zensical.toml
```

Minimal config in zensical.toml:

```toml
[project]
site_name = "My site"
```

Recommended additional config:

```toml
[project]
site_name = "My site"
site_url = "https://example.com"
```

Preview as you write:

```bash
zensical serve
```

Build static site:

```bash
zensical build
```

## Guidance rules

- Treat site_name as required.
- Strongly recommend setting site_url unless offline-only output is intended.
- Explain that the build output is static and deployable on any static host.
