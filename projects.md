---
layout: default
title: Projects
permalink: /projects/
---

# Projects

My work, projects and ideas. Click a node on the map to open it.

<div id="map" class="map"></div>

<script>
window.SITE_BASE = "{{ site.baseurl }}";
window.PROJECT_NODES = {{ site.data.projects | jsonify }};
</script>
<script src="{{ '/assets/js/map.js' | relative_url }}"></script>

## All projects and ideas

{% for n in site.data.projects %}
- {% if n.url %}[{{ n.title }}]({{ n.url | relative_url }}){% else %}{{ n.title }}{% endif %} ({{ n.type }}{% if n.status %}, {{ n.status }}{% endif %}){% if n.blurb %} - {{ n.blurb }}{% endif %}
{% endfor %}
