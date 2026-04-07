// ================================================================
//  app.js — Page logic.
//  You do not need to edit this file to update content.
//  All content lives in data.js.
// ================================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Apply site-wide text from data.js ----
  document.title                                        = SITE.pageTitle;
  document.getElementById('brandName').textContent      = SITE.brandName;
  document.getElementById('heroTitle').textContent      = SITE.heroTitle;
  document.getElementById('heroSubtitle').textContent   = SITE.heroSubtitle;
  document.getElementById('footerNote').textContent     = SITE.footerNote;


  // ---- Star rating helper ----
  function makeStars(label, value) {
    var stars = '';
    for (var i = 1; i <= 5; i++) {
      stars += '<span class="star' + (i <= value ? ' filled' : '') + '" aria-hidden="true">★</span>';
    }
    return '<div class="rating-row"><span class="rating-label">' + label + '</span><span class="stars-group">' + stars + '</span></div>';
  }


  // ---- Populate filter dropdown from CATEGORIES ----
  var select = document.getElementById('categoryFilter');
  CATEGORIES.forEach(function (cat) {
    var opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = cat.label;
    select.appendChild(opt);
  });


  // ---- Render product cards ----
  var productsGrid = document.getElementById('productsGrid');
  PRODUCTS.forEach(function (p) {
    var article = document.createElement('article');
    article.className = 'product-card';
    article.dataset.category    = p.category;
    article.dataset.vendor      = p.vendor;
    article.dataset.sovereignty = p.sovereignty;
    article.dataset.tier        = p.tier;
    article.dataset.title       = p.title;
    article.dataset.subtitle    = p.subtitle;
    article.dataset.overview    = p.overview;
    article.dataset.uses        = p.uses.join('||');
    article.tabIndex = 0;
    article.setAttribute('role', 'button');
    article.setAttribute('aria-label', 'Open details for ' + p.title);

    article.innerHTML =
      '<div class="eyebrow">' + p.vendor + '</div>' +
      '<h3>' + p.title + '</h3>' +
      '<p>' + p.description + '</p>' +
      '<div class="card-ratings">' +
        makeStars('Sovereignty', p.sovereignty) +
        makeStars('App Tier', p.tier) +
      '</div>' +
      '<div class="card-meta">' + p.category + '</div>';

    productsGrid.appendChild(article);
  });


  // ---- Render partner cards ----
  var partnersGrid = document.getElementById('partnersGrid');
  PARTNERS.forEach(function (p) {
    var article = document.createElement('article');
    article.className = 'partner-card';
    article.dataset.category = p.category;
    article.dataset.vendor   = 'Partner';

    article.innerHTML =
      '<div class="eyebrow">' + p.category + '</div>' +
      '<h3>' + p.name + '</h3>' +
      '<p>' + p.description + '</p>' +
      '<div class="card-ratings">' +
        makeStars('Sovereignty', p.sovereignty) +
        makeStars('App Tier', p.tier) +
      '</div>';

    partnersGrid.appendChild(article);
  });


  // ---- Filtering ----
  var vendorSelect = document.getElementById('vendorFilter');

  select.addEventListener('change', function () {
    applyFilter(select.value, vendorSelect.value);
  });

  vendorSelect.addEventListener('change', function () {
    applyFilter(select.value, vendorSelect.value);
  });

  function applyFilter(categoryValue, vendorValue) {
    var allCards = document.querySelectorAll('.product-card, .partner-card');
    var totalVisible = 0;

    allCards.forEach(function (card) {
      var categoryMatch = categoryValue === 'all' || card.dataset.category === categoryValue;
      var vendorMatch   = vendorValue === 'all' || card.dataset.vendor === vendorValue;
      var show = categoryMatch && vendorMatch;
      card.style.display = show ? '' : 'none';
      if (show) totalVisible += 1;
    });

    // Show/hide section labels based on whether their cards are visible
    var productsLabel = document.getElementById('productsLabel');
    var partnersLabel = document.getElementById('partnersLabel');

    var hasVisibleProducts = Array.from(document.querySelectorAll('.product-card')).some(function (c) {
      return c.style.display !== 'none';
    });
    var hasVisiblePartners = Array.from(document.querySelectorAll('.partner-card')).some(function (c) {
      return c.style.display !== 'none';
    });

    if (productsLabel) productsLabel.style.display = hasVisibleProducts ? '' : 'none';
    if (partnersLabel) partnersLabel.style.display = hasVisiblePartners ? '' : 'none';

    var emptyState = document.getElementById('emptyState');
    if (emptyState) emptyState.style.display = totalVisible === 0 ? 'block' : 'none';
  }


  // ---- Modal ----
  var backdrop           = document.getElementById('modalBackdrop');
  var closeBtn           = document.getElementById('closeModal');
  var modalTitle         = document.getElementById('modalTitle');
  var modalKicker        = document.getElementById('modalKicker');
  var modalSub           = document.getElementById('modalSubtitle');
  var modalOvr           = document.getElementById('modalOverview');
  var modalUses          = document.getElementById('modalUses');
  var modalSovText       = document.getElementById('modalSovereigntyText');
  var modalTierText      = document.getElementById('modalTierText');
  var sovereigntyDesc    = document.getElementById('sovereigntyDesc');
  var tierDesc           = document.getElementById('tierDesc');
  var sovereigntyBadge   = document.getElementById('sovereigntyBadge');
  var tierBadge          = document.getElementById('tierBadge');
  var lastTrigger        = null;

  function openModal(card) {
    lastTrigger = card;
    modalTitle.textContent  = card.dataset.title || 'Offering';
    modalKicker.textContent = (card.querySelector('.eyebrow') || {}).textContent || '';
    modalSub.textContent    = card.dataset.subtitle || '';
    modalOvr.textContent    = card.dataset.overview || '';
    modalUses.innerHTML     = '';

    (card.dataset.uses || '').split('||').filter(Boolean).forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item;
      modalUses.appendChild(li);
    });

    // Populate rating badges
    var sov  = parseInt(card.dataset.sovereignty) || 0;
    var tier = parseInt(card.dataset.tier)        || 0;
    modalSovText.textContent  = 'Level ' + sov;
    modalTierText.textContent = 'Tier '  + tier;
    sovereigntyDesc.textContent = (RATING_DESCRIPTIONS.sovereignty[sov] || '');
    tierDesc.textContent        = (RATING_DESCRIPTIONS.tier[tier]        || '');

    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastTrigger) lastTrigger.focus();
  }

  // Open modal when clicking a product card
  document.addEventListener('click', function (e) {
    var card = e.target.closest('.product-card');
    if (card) openModal(card);
  });

  // Keyboard support for product cards and Escape to close
  document.addEventListener('keydown', function (e) {
    var card = e.target.closest('.product-card');
    if (card && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      openModal(card);
    }
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeModal();
    }
  });

  closeBtn.addEventListener('click', closeModal);

  // Close when clicking the dark backdrop outside the modal
  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) closeModal();
  });

});
