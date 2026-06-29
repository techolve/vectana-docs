---
name: zensical-docs-get-started
description: Summarize and apply Zensical get-started guidance for installation and initial environment setup.
---

# Zensical Docs: Get started

Use this skill when the user asks how to install Zensical, choose an installation method, or prepare a local environment.

## Scope

This skill is based on:

- https://zensical.org/docs/get-started/

## What to cover

- What Zensical is (modern static site generator for documentation)
- Prerequisites: Python and package manager
- Official install paths
  - pip in virtual environment
  - uv as project dependency and execution with uv run
- Optional paths
  - Docker image usage reference
  - Conda or Mamba availability with support caveat

## Canonical commands

Install with pip:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install zensical
```

Install with uv:

```bash
uv init
uv add --dev zensical
uv run zensical
```

Install with conda:

```bash
conda create -n zensical python=3.14
conda activate zensical
conda install -c conda-forge zensical
```

## Guidance rules

- Recommend virtual environments by default.
- If user uses uv, remind them to run commands through uv run unless the venv is activated.
- Mention that third-party distributions are not officially supported by Zensical maintainers.
- If user asks for Docker flow, point to the official zensical/zensical image docs.
