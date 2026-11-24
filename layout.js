/* Shared header and footer for every page */
(function () {
  var pages = [
    ['index.html', 'Home'],
    ['properties.html', 'Properties'],
    ['new-projects.html', 'New Projects'],
    ['experts.html', 'Experts'],
    ['journal.html', 'Journal'],
    ['contact.html', 'Contact']
  ];
  var cur = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var links = pages.map(function (p) {
    var on = p[0] === cur;
    return '<a href="' + p[0] + '"' + (on ? ' class="on" aria-current="page"' : '') + '>' + p[1] + '</a>';
  }).join('');
  var mark = '<svg width="38" height="38" viewBox="0 0 34 34" fill="none" aria-hidden="true"><path d="M4 31V15C4 7.8 9.8 3 17 3s13 4.8 13 12v16" stroke="#F26B1D" stroke-width="1.6"/><path d="M11 31V17c0-3.9 2.7-6.5 6-6.5s6 2.6 6 6.5v14" stroke="#F26B1D" stroke-width="1.6"/></svg>';

  var h = document.getElementById('site-header');
  if (h) {
    h.outerHTML =
      '<header class="site-header"><div class="wrap bar">' +
      '<a class="brand" href="index.html" aria-label="Sitapura Real Estate, home">' + mark +
      '<span class="brand-t"><b>Sitapura</b><small>Real Estate</small></span></a>' +
      '<nav class="menu" id="menu" aria-label="Main">' + links + '</nav>' +
      '<div class="hdr-actions"><a class="btn sm" href="contact.html#list">List your property</a>' +
      '<button class="burger" id="burger" type="button" aria-expanded="false" aria-controls="menu" aria-label="Open menu"><span></span><span></span><span></span></button></div>' +
      '</div></header>';
    var b = document.getElementById('burger'), m = document.getElementById('menu');
    b.addEventListener('click', function () {
      var open = m.classList.toggle('open');
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var f = document.getElementById('site-footer');
  if (f) {
    f.outerHTML =
      '<footer class="footer"><div class="wrap">' +
      '<div class="cols">' +
      '<div class="c" style="flex:1 1 320px;max-width:400px;gap:18px"><a class="brand" href="index.html">' + mark +
      '<span class="brand-t"><b>Sitapura</b><small>Real Estate</small></span></a>' +
      '<p class="muted">Helping you discover verified homes, plots and projects in Sitapura and across Jaipur, from first search to handover.</p>' +
      '<p class="muted">[Your office address], Sitapura, Jaipur, Rajasthan<br>+91 [00000 00000]<br>[hello@yourdomain.com]</p></div>' +
      '<div class="c"><h4>Explore</h4>' + links + '</div>' +
      '<div class="c"><h4>Properties</h4><a href="properties.html?type=Apartments">Apartments</a><a href="properties.html?type=Villas">Villas</a><a href="properties.html?type=Plots">Plots for sale</a><a href="properties.html?loc=Sitapura">Homes in Sitapura</a></div>' +
      '<div class="c"><h4>Get in touch</h4><a href="contact.html#enquire">Free property advice</a><a href="contact.html#list">Post a property</a><a href="experts.html">Meet the team</a></div>' +
      '</div>' +
      '<div class="disc">Disclaimer: listings shown are sample content. Information displayed is for general purposes only. Verify all details before finalising any transaction.</div>' +
      '</div></footer>';
  }
})();
