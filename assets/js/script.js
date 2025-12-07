// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

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
