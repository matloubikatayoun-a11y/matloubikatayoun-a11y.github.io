/* Katayoun Matloubi — site v2: header state, mobile menu, copy buttons. */
(function () {
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('.hero, .banner');

  // Header is transparent over the photo at the top of the page and turns solid
  // as soon as the reader scrolls, so it never sits on top of the page title.
  function setSolid() {
    header.classList.toggle('solid', !hero || window.scrollY > 24);
  }
  if (header) {
    setSolid();
    window.addEventListener('scroll', setSolid, { passive: true });
    window.addEventListener('resize', setSolid);
  }

  // Mobile menu.
  var nav = document.getElementById('site-nav');
  var openBtn = document.getElementById('menu-open');
  var closeBtn = document.getElementById('menu-close');
  function setMenu(open) {
    if (!nav) return;
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    if (openBtn) openBtn.setAttribute('aria-expanded', String(open));
    if (open && closeBtn) closeBtn.focus();
    if (!open && openBtn) openBtn.focus();
  }
  if (openBtn) openBtn.addEventListener('click', function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav && nav.classList.contains('open')) setMenu(false);
  });

  // Copy buttons: citation formats and email address.
  function copy(text, btn) {
    var label = btn.textContent;
    var done = function () {
      btn.textContent = btn.getAttribute('data-done') || 'Copied';
      setTimeout(function () { btn.textContent = label; }, 1600);
    };
    try {
      navigator.clipboard.writeText(text).then(done, done);
    } catch (err) {
      done();
    }
  }
  document.querySelectorAll('.cite .cc').forEach(function (btn) {
    btn.addEventListener('click', function () {
      copy(btn.previousElementSibling.innerText.trim(), btn);
    });
  });
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () { copy(btn.getAttribute('data-copy'), btn); });
  });
})();
