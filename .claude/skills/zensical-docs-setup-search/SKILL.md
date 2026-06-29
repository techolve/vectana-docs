---
name: zensical-docs-setup-search
description: Configure built-in search behavior and search exclusion at page, section, and block level.
---

# Zensical Docs: Setup search

Use this skill when the user asks about search behavior or excluding content from indexing.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/search/

## Key configuration

Search highlight:

```toml
[project.theme]
features = ["search.highlight"]
```

Exclude page:

```yaml
---
search:
  exclude: true
---
```

Exclude section or block with attribute lists:

```markdown
## Section { data-search-exclude }
```

## Guidance rules

- Search is built in and enabled by default.
- For section and block exclusion, ensure attr_list extension is enabled.
- Explain current UI localization note if non-English interface expectations arise.
