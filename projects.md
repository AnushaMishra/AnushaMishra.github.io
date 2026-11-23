---
layout: default
title: Projects
permalink: /projects/
---

# Projects

My work, projects and ideas. Click a node on the map to open it.

<div id="map" class="map"></div>

<p class="legend"><span class="key key-circle"></span> topic or idea <span class="key key-square"></span> literature review</p>

<script>
window.SITE_BASE = "{{ site.baseurl }}";
window.PROJECT_NODES = {{ site.data.projects | jsonify }};
</script>
<script src="{{ '/assets/js/map.js' | relative_url }}"></script>

## All projects and ideas

{% for n in site.data.projects %}
- {% if n.url %}[{{ n.title }}]({{ n.url | relative_url }}){% else %}{{ n.title }}{% endif %}{% if n.type == "review" %} (literature review){% elsif n.type != "topic" %} ({{ n.type }}){% endif %}{% if n.blurb %} - {{ n.blurb }}{% endif %}
{% endfor %}
