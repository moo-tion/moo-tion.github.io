// Smooth-scroll is via CSS. Set dynamic links and last-updated date.
document.addEventListener('DOMContentLoaded', () => {
  // Placeholders — update these with your real links
  const githubUrl = 'https://github.com/emireroglu2k/Mootion'; // TODO

  const g1 = document.getElementById('githubLink');
  const g2 = document.getElementById('githubLink2');
  if (g1) g1.href = githubUrl;
  if (g2) g2.href = githubUrl;

  // Last updated: current date in user's locale (Europe/Istanbul suggested)
  try {
    const span = document.getElementById('last-updated');
    if (span) {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'Europe/Istanbul' });
      span.textContent = fmt.format(now).replace(/ /g, '-');
    }
  } catch(e) {}

  // Hamburger menu toggle for mobile
  function setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!menuBtn || !mobileMenu) return;

    // Initial icon (hamburger)
    const hamburgerIcon = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`;
    const closeIcon = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;

    // Set initial icon
    menuBtn.innerHTML = hamburgerIcon;
    menuBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.add('hidden');

    menuBtn.onclick = function () {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', (!expanded).toString());
      mobileMenu.classList.toggle('hidden');
      menuBtn.innerHTML = expanded ? hamburgerIcon : closeIcon;
    };

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.onclick = function () {
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        menuBtn.innerHTML = hamburgerIcon;
      };
    });
  }

  setupMobileMenu();
});
