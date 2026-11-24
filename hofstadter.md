---
layout: default
title: Douglas Hofstadter, Analogy as the Core of Cognition
permalink: /hofstadter/
---

# Hofstadter, Analogy as the Core of Cognition

Plain text summarizes the source. Indented blocks marked **My note** are my own thoughts and questions.

## Summary

Texts referenced: *Gödel, Escher, Bach: An Eternal Golden Braid*, which is about how cognition, intelligence and consciousness emerge from inanimate matter, and *Analogy as the Core of Cognition*.

The central claim is that analogical reasoning is closely tied to problem solving. Analogy is "the freeway of cognition". Categorization is the name of the cognition game, and analogy is the mechanism that does it.

## Key ideas

**What an analogy is**

- A connection between two mental representations.
- A lot of analogies are just reminding events. They don't serve a purpose.
- Analogies are often highly fleeting. Some have an effect on you without you being able to recognize it.

**How concepts grow**

- Repeated analogies expand concepts. "Number" starts with 1, 2, 3, stretches to 1/2 and 3/4, and keeps widening until it covers e, π, e^π and beyond.
- Sometimes a concept expands by seeing new instances, but even a single occurrence can make it spread and leak.
- There is no difference between a single memory trace and a concept or category.

**Chunking and the membrane**

- The human mind has endless limited chunking: a cluster of dots becomes one circle.
- Eventually the "membrane" disappears. The individual instances inside a concept vanish and the concept is a black box, though it may be semi-visible.
- When you think "airline" you don't think about plane, company, brand, routes, trips, money, hub and so on. It is all one chunked concept.

> **My note:** Trauma? Maybe this visibility and lack of visibility is related to trauma and emotional reactions. If you haven't done therapy, you may often act in ways you don't understand or feel things you don't understand. Part of CBT seeks to find the underlying core beliefs behind different everyday situations, which involves really looking back on your history too. Is this the basis of therapy, especially CBT?

**The continuum of concepts**

There is no fundamental difference between primordial tangible concepts and highly chunked abstract concepts. Once you know them, you know them. "Chair" is just as known as "sleazeball".

- *Labeled concepts:* "mama" (primordial words), "family" (simple words), "to and fro" (compound words), "excuse me" (phrases), "speak of the devil" (proverbs). You know exactly where these should be used, and you can tell when a non-native speaker uses one wrong.
- *Unlabeled concepts:* fleeting remindings, me-too's, political analogies, personal-situation mappings, scientific leaps.

## Evidence and examples

**Pluralization.** A single entity becomes a wide category: "Milton Babbitt is no Mozart", "There may be 2 or 3 Einsteins among us", "It's the next Catcher in the Rye".

**Blends reveal competing concepts.** Slips of the tongue show a competition between concepts that is normally hidden.

- *Word blends:* "I don't know, I'll go seek" (see / check). "Don't leave your car there, you mate get a ticket" (may / might).
- *Pronunciation distortions:* blends can be subtle. "I was having trouble finding it" (find / figure out). "It was po-ized on the banister" (posed / poised). Sometimes you start a word wrong because you were about to say a different word.
- *Phrase blends:* "I hope the package got there in one shape" (in one piece / in good shape).

> **My note:** What connection is there to people with bad memories who do this more often than others? Or to a lack of confidence in your analogical capabilities?

This reveals the subterranean competition. When the battle is a landslide, there is no evidence. When the battle is close, there is evidence galore.

> **My note:** What happens when we only have very weak analogies, like when a baby is learning to walk?

**Scientific discovery.** Nobody had thought of connecting ideal gas, light and molecules. Einstein made the discovery based on a connection between two bell curves.

> **My note:** Is intelligence determined by the quality of analogy making? Maybe the quantity of analogies of quantity of remote but sound analogies.

## Relevance to my question

> **My note:** Everything in this section is my own thinking about how these ideas can be translated into mathematical, computer science, or ML techniques.

**Benchmarking (ConceptARC).** Things a benchmark should test:

- Concept formation (instance, then membrane, then black box, with the membrane semi-visible)
- Categorization
- The "fighting" mechanism, where concepts compete
- Analogy, including analogy without a purpose
- Quality and quantity as separate parameters of analogy

Letter-string example from my notes: abc → xyz :: def → ? (candidate answers tuv or dez).

**Concept formation and representation.** A concept must be able to:

- show similarity, for categorization
- carry typed relations, for analogy mapping
- have a notion of abstractness
- slip to nearby concepts
- combine several concepts into one structured relational unit
- spawn new concepts from data

**Basic relations**

- Bind: XOR / element-wise multiplication
- Bundle: majority vote / element-wise sum
- Similarity: cosine similarity / dot product
- Unbind: XOR again / multiply by the inverse

Dirichlet process clustering is the growth mechanism.

## Critiques and limitations

## Open questions

- Is intelligence determined by the quality of analogy making? Probably quantity too.
- What happens when we only have very weak analogies, like when a baby is learning to walk?
- Is there a connection between people with bad memories who produce blends more often than others, or a lack of confidence in one's analogical capabilities?
- Is the visibility or invisibility of a chunked concept related to trauma and emotional reactions, including acting or feeling in ways we don't understand? Could CBT's search for core beliefs be a way of opening the black box?

## References

- Hofstadter, *Gödel, Escher, Bach: An Eternal Golden Braid*
- *Analogy as the Core of Cognition*
- ConceptARC
