---
layout: default
title: Cognition
permalink: /cognition/
---

# Cognition and reasoning

Applying ideas from cognitive science and the brain to ML reasoning.

{% for post in site.posts %}{% if post.section == "cognition" %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%B %-d, %Y" }}{% endif %}{% endfor %}
