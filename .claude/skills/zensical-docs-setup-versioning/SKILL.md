---
name: zensical-docs-setup-versioning
description: Set up multi-version documentation via mike integration and default alias strategy.
---

# Zensical Docs: Setup versioning

Use this skill when the user asks to publish and switch multiple docs versions.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/versioning/

## Installation

```bash
pip install git+https://github.com/squidfunk/mike.git
```

## Key configuration

```toml
[project.extra.version]
provider = "mike"
default = "latest"
alias = true
```

## Publish commands

Publish and update alias:

```bash
mike deploy --push --update-aliases 0.1 latest
```

Set default alias:

```bash
mike set-default --push latest
```

## Guidance rules

- Set site_url explicitly and preferably with trailing slash.
- Ensure one alias matches default target.
- Mention current solution is bridge until native versioning arrives.
