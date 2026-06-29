---
name: zensical-docs-usage-preview
description: Run local preview server with zensical serve and explain preview options.
---

# Zensical Docs: Usage preview

Use this skill when the user asks for local preview, live reload, or preview server flags.

## Scope

This skill is based on:

- https://zensical.org/docs/usage/preview/

## Command

```bash
zensical serve [OPTIONS]
```

Default address is localhost:8000.

## Options

- --config-file, -f
- --open, -o
- --dev-addr, -a <IP:PORT>
- --help

## Guidance rules

- Clarify that built-in server is preview-only, not production hosting.
- Use --open for quick validation loops.
- Use --dev-addr when port conflicts exist.
