(function () {
  var data = window.PROJECT_NODES || [];
  var base = window.SITE_BASE || '';
  var el = document.getElementById('map');
  if (!el || !data.length) return;
  var W = 900, H = 640, cx = W / 2, cy = H / 2;
  var NS = 'http://www.w3.org/2000/svg';
  var RAD = { hub: 46, topic: 34, project: 26, idea: 20 };
  var byId = {};
  data.forEach(function (n) { byId[n.id] = n; n.kids = []; });
  data.forEach(function (n) { if (n.parent && byId[n.parent]) byId[n.parent].kids.push(n); });
  var topics = data.filter(function (n) { return !n.parent; });

  function mk(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function wrap(s, n) {
    var words = s.split(' '), lines = [], cur = '';
    words.forEach(function (w) {
      if (cur && (cur + ' ' + w).length > n) { lines.push(cur); cur = w; }
      else { cur = cur ? cur + ' ' + w : w; }
    });
    if (cur) lines.push(cur);
    return lines;
  }

  var svg = mk('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': 'Map of projects and ideas' }, el);
  var linkLayer = mk('g', {}, svg);
  var nodeLayer = mk('g', {}, svg);

  function link(a, b) {
    mk('line', { x1: a.x, y1: a.y, x2: b.x, y2: b.y, class: 'link' }, linkLayer);
  }

  function drawNode(n, x, y) {
    var r = RAD[n.type] || 22;
    var href = n.url ? (n.url.charAt(0) === '/' ? base + n.url : n.url) : null;
    var g = href ? mk('a', { href: href }, nodeLayer) : mk('g', {}, nodeLayer);
    g.setAttribute('class', href ? 'clickable' : 'static');
    var tip = mk('title', {}, g);
    tip.textContent = n.title + (n.status ? ' (' + n.status + ')' : '') + (n.blurb ? ' - ' + n.blurb : '');
    mk('circle', { cx: x, cy: y, r: r, class: 'node ' + n.type }, g);
    var inside = n.type === 'hub';
    var lines = wrap(n.title, inside ? 10 : 16);
    var y0 = inside ? y - (lines.length - 1) * 7 + 5 : y + r + 16;
    var t = mk('text', { x: x, y: y0, 'text-anchor': 'middle', class: 'label ' + n.type }, g);
    lines.forEach(function (ln, i) {
      var s = mk('tspan', { x: x, dy: i === 0 ? 0 : 15 }, t);
      s.textContent = ln;
    });
  }

  var hub = { x: cx, y: cy, title: 'Projects', type: 'hub' };
  topics.forEach(function (t, i) {
    var a = (2 * Math.PI * i) / topics.length - Math.PI / 2;
    var R = topics.length === 1 ? 150 : 165;
    t.x = cx + R * Math.cos(a);
    t.y = cy + R * Math.sin(a);
    link(hub, t);
    t.kids.forEach(function (k, j) {
      var m = t.kids.length;
      var step = Math.min(1.2, 3.2 / m);
      var b = a + (j - (m - 1) / 2) * step;
      k.x = t.x + 130 * Math.cos(b);
      k.y = t.y + 130 * Math.sin(b);
      link(t, k);
    });
  });
  drawNode(hub, cx, cy);
  topics.forEach(function (t) {
    drawNode(t, t.x, t.y);
    t.kids.forEach(function (k) { drawNode(k, k.x, k.y); });
  });
})();
