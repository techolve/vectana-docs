---
name: zensical-docs-setup-validation
description: Configure link and footnote validation checks and strict build behavior.
---

# Zensical Docs: Setup validation

Use this skill when the user asks about broken links, unresolved refs, or build-time quality gates.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/validation/

## Key configuration

Enable all checks explicitly:

```toml
[project.validation]
unresolved_references = true
unresolved_footnotes = true
unused_definitions = true
unused_footnotes = true
shadowed_definitions = true
shadowed_footnotes = true
invalid_links = true
invalid_link_anchors = true
```

Disable validation globally:

```toml
[project]
validation = false
```

## Strict mode

```bash
zensical build --strict
```

## Guidance rules

- Keep validation enabled in normal and CI workflows.
- Use escaping for literal bracket usage to avoid false positives.
- Use --strict in pipelines that must fail on documentation integrity issues.
