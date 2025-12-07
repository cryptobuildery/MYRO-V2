// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle('show');
    document.body.classList.toggle('menu-open', isOpen);
  });

  // Close menu when clicking on a link
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      document.body.classList.remove('menu-open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('show') && 
        !navMenu.contains(e.target) && 
        !menuBtn.contains(e.target)) {
      navMenu.classList.remove('show');
      document.body.classList.remove('menu-open');
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      document.body.classList.remove('menu-open');
    }
  });
}

// FAQ toggles
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Copy token address
function copyAddress(addressText) {
  navigator.clipboard.writeText(addressText).then(() => {
      alert("Address copied to clipboard!");
  }).catch(err => {
      console.error('Failed to copy: ', err);
  });
}
