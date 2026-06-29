---
name: zensical-docs-authoring-math
description: Configure MathJax or KaTeX and author inline/block equations in markdown.
---

# Zensical Docs: Authoring math

Use this skill when the user asks for mathematical notation in documentation.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/math/

## Core syntax

Block equation:

```markdown
$$
\\cos x=\\sum_{k=0}^{\\infty}\\frac{(-1)^k}{(2k)!}x^{2k}
$$
```

Inline equation:

```markdown
The map $f$ is injective.
```

## Runtime setup

- Configure arithmatex extension.
- Add either MathJax or KaTeX runtime script via extra JavaScript.

## Guidance rules

- Choose KaTeX for speed, MathJax for broader feature coverage.
- Keep delimiter conventions consistent across the whole project.
