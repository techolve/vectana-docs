---
name: zensical-docs-setup-basics
description: Provide foundational Zensical configuration guidance from setup basics, including required and recommended settings.
---

# Zensical Docs: Setup basics

Use this skill when the user needs core zensical.toml setup, migration notes from MkDocs, or explanation of baseline project settings.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/basics/

## What to cover

- zensical.toml as primary configuration format
- project scope structure
- Theme variant selection
- Core settings and implications
- Known unsupported MkDocs settings

## Baseline configuration

```toml
[project]
site_name = "My Zensical project"
site_url = "https://example.com"
docs_dir = "docs"
site_dir = "site"
```

## Key settings to explain

- site_name: required
- site_url: strongly recommended unless offline usage
- site_description and site_author: metadata for head tags
- copyright: footer notice
- use_directory_urls: URL style control
- dev_addr: local serve bind address, default localhost:8000
- watch: extra files or folders to trigger rebuild
- extra table: arbitrary template variables via project.extra

## Constraints and compatibility

- docs_dir cannot currently be set to dot.
- Zensical can read mkdocs.yml for migration, but zensical.toml is preferred for new projects.
- Unsupported MkDocs settings include remote_branch, remote_name, exclude_docs, draft_docs, not_in_nav, hooks.

## Guidance rules

- If the user migrates from MkDocs, prioritize minimal compatible mapping first.
- For new projects, always propose zensical.toml-first examples.
- Mention classic theme variant for visual compatibility with Material for MkDocs.
