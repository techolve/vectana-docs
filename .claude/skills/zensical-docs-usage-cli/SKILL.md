---
name: zensical-docs-usage-cli
description: Explain Zensical command-line structure and command discovery workflow.
---

# Zensical Docs: Usage CLI

Use this skill when the user asks for Zensical command syntax or help usage.

## Scope

This skill is based on:

- https://zensical.org/docs/usage/cli/

## Core syntax

```bash
zensical COMMAND [OPTIONS] [ARGS]...
```

## Main commands

- new
- serve (documented under preview)
- build

## Help commands

General help:

```bash
zensical --help
```

Command help:

```bash
zensical <command> --help
```

## Guidance rules

- Start from zensical --help when user intent is broad.
- Switch to command-level help before proposing exact flags.
