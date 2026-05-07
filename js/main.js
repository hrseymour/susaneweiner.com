/* Susan E. Weiner Consulting — minimal site JS
   (mobile menu toggle + current-page highlighting) */

(function () {
  'use strict';

  var toggle = document.querySelector('.menu-toggle');
  var nav    = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      });
    });
  }

  var here = window.location.pathname.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav a').forEach(function (link) {
    var href = link.getAttribute('href').replace(/index\.html$/, '').replace(/\/$/, '') || '/';
    if (href === here) link.setAttribute('aria-current', 'page');
  });
})();
