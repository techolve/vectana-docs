---
name: zensical-docs-setup-offline-usage
description: Build docs for filesystem distribution and configure offline plugin safely.
---

# Zensical Docs: Setup offline usage

Use this skill when the user asks for zip distribution or local filesystem browsing without web server.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/offline/

## Key configuration

```toml
[project.plugins.offline]
```

Disable plugin explicitly:

```toml
[project.plugins.offline]
enabled = false
```

## Limitations

Features depending on fetch API can fail offline. Review and disable as needed:

- instant navigation
- site analytics
- repository integration
- comment systems

## Guidance rules

- Pair with offline-friendly URL strategy and output verification.
- Validate search behavior from file system after build.
