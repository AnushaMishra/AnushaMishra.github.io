---
layout: default
title: Home
---

<p class="intro">{{ site.tagline }}</p>

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <p class="meta">
      {{ post.date | date: "%B %-d, %Y" }}
      {% if post.status %}<span class="status">{{ post.status }}</span>{% endif %}
    </p>
    {% if post.excerpt %}<p>{{ post.description | default: post.excerpt | strip_html | truncate: 180 }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
