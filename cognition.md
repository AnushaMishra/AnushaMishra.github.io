---
layout: default
title: Cognition
permalink: /cognition/
---

# Cognition and reasoning

**Question:** can ideas from cognitive science improve modern models and make them more generalizable?

**Working hypothesis:** borrowing structure from how people reason (analogy, memory, abstraction) can help models generalize beyond what they were trained on.

It is too early for an exact question, so this is an open exploration. I'm reading what has been tried, then testing small pieces where I can, and writing it up as I go.

{% for post in site.posts %}{% if post.section == "cognition" %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%B %-d, %Y" }}{% endif %}{% endfor %}
