// Shared layout: injects header and footer into every page.
// Each page sets window.activePage = 'home' | 'writing' before loading this script.

(function () {
  var active = window.activePage || 'home';
  var isEssay = window.isEssay || false;
  var root = isEssay ? '../' : '';

  // --- Header ---
  var headerHTML = '<div class="headerTitleEssay">' +
    '<ul class="header">' +
    '<li class="headerTitle"><a ' + (active === 'home' ? 'class="active" ' : '') + 'href="' + root + 'index.html">Sony Theakanath</a></li>' +
    '</ul>' +
    '</div>';

  // --- Footer ---
  var footerHTML = '<div class="footer">' +
    '<div class="contact"><p>Sony Theakanath</p></div>' +
    '<div class="contact"><p>' +
    '<a href="mailto:stheakanath@gmail.com">Email</a> ' +
    '<a href="https://linkedin.com/in/stheakanath/" target="_blank">LinkedIn</a> ' +
    '<a href="https://scholar.google.com/citations?user=ocplM1oAAAAJ&hl=en" target="_blank">Google Scholar</a>' +
    '</p></div>' +
    '</div>';

  document.addEventListener('DOMContentLoaded', function () {
    // Inject header
    var headerTarget = document.getElementById('layout-header');
    if (headerTarget) headerTarget.innerHTML = headerHTML;

    // Inject footer
    var footerTarget = document.getElementById('layout-footer');
    if (footerTarget) footerTarget.innerHTML = footerHTML;
  });
})();
