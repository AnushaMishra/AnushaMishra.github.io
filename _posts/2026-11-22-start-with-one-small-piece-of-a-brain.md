---
layout: post
title: "Starting with one small piece of a brain"
status: draft
description: Why my first component is a concept space that solves one-step analogies, and how I plan to test it.
---

I want to build a cognitive model of two real people from their writing. That is a big project, and big architecture diagrams with nothing running are easy to draw and hard to learn from. So I'm starting with the smallest piece that still does something interesting: **a concept space that can solve one-step analogies.**

## Why analogy

Analogy is one of the places where people still look clearly different from language models. People carry a relational structure across to a new domain from very few examples. Models do well on familiar patterns, but the research literature suggests they get brittle when the same problem is disguised.

It's also a good first component because it forces the core ideas into a small space:

- Concepts are vectors (hypervectors or embeddings).
- Similarity and "opposite" come from comparing vectors, not hand-written rules.
- Relations are built by binding and bundling, so a relation like $a : b :: c : ?$ becomes algebra.
- Concepts activate each other and compete, a tiny version of the slipnet in Hofstadter's Copycat.

## The toy problem

The classic Copycat domain is letter strings:

```
abc -> abd
ijk -> ?
```

The rule is "replace the last letter with its successor," so the answer is `ijl`.

In vector terms, if $r$ is the relation vector that takes `c` to `d`, then the answer is whichever concept is closest to the successor of `k` under that same relation:

$$\hat{x} = \arg\max_{x} \; \mathrm{sim}\big(x,\; \mathrm{apply}(r, k)\big)$$

Here is the shape of the first experiment, as a sketch rather than finished code:

```python
def solve(a, b, c, space):
    """Solve a : b :: c : ? by transferring the relation a -> b onto c."""
    relation = space.bind_relation(a, b)      # what changed from a to b?
    target = space.apply(relation, c)         # apply that change to c
    return space.nearest(target, exclude={a, b, c})
```

## How I'll test it

The part I find most useful is the **counterfactual** version of the task. Keep the abstract rule, but change the surface: scramble the alphabet so that "successor" refers to a new ordering.

| Setting | Rule | Alphabet |
|---|---|---|
| Standard | replace last letter with its successor | `a b c d ...` |
| Counterfactual | same rule | shuffled order |

A system that has the abstract rule should do about as well on both. A system leaning on memorized patterns should drop on the shuffled version. That drop is the evidence. It's cheap to generate hundreds of variants by shuffling the alphabet, swapping letters for symbols, or changing the step size, and to compare my concept space against a language-model baseline on both sets.

This setup comes from an ongoing debate in the literature. One group of researchers argues that language models show emergent analogical reasoning, and another group finds they are less robust than people once the problems are perturbed. I'm not trying to settle that here. I want a small system I can inspect, and a test that makes its failures visible.

## The rule I'm holding myself to

> Don't add the next component until this one does something I can measure.

The plan, in order:

1. **This post:** the idea and why this component comes first.
2. **Next:** a working toy with a few dozen concepts, including where it fails.
3. **After that:** what surprised me, and which piece comes next (competition between concepts, then memory, then the second "person").

## Things I'd like feedback on

- Are there existing hypervector analogy systems I should compare against besides the ones I've found?
- Is shuffled-alphabet the right counterfactual, or are there cleaner perturbations?
- What would convince you that a concept space is doing something other than memorizing?

If you have pointers, I'd love to hear them.
