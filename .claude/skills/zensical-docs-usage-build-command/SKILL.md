---
name: zensical-docs-usage-build-command
description: Build static output with zensical build and apply build-time flags.
---

# Zensical Docs: Usage build

Use this skill when the user asks to generate deployable site artifacts.

## Scope

This skill is based on:

- https://zensical.org/docs/usage/build/

## Command

```bash
zensical build [OPTIONS]
```

Build output goes to site_dir (default: site).

## Options

- --config-file, -f
- --clean, -c
- --strict, -s
- --help

## Guidance rules

- Use --clean when cache-related output issues are suspected.
- Use --strict in CI to fail on warnings (for example validation warnings).
