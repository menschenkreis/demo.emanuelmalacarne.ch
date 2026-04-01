// === Language Toggle ===
let lang = 'de';
const toggle = document.querySelector('.lang-toggle');

function setLanguage() {
  document.querySelectorAll('[data-de][data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  toggle.textContent = lang === 'de' ? 'EN' : 'DE';
}

toggle.addEventListener('click', () => {
  lang = lang === 'de' ? 'en' : 'de';
  setLanguage();
});

// === Mobile Menu ===
const mobileBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
mobileBtn.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '64px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = 'rgba(10,10,10,.95)';
  navLinks.style.padding = '24px';
  navLinks.style.gap = '20px';
  navLinks.style.backdropFilter = 'blur(20px)';
  navLinks.style.borderBottom = '1px solid rgba(255,255,255,.06)';
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 768) navLinks.style.display = 'none';
  });
});

// === Scroll Fade-In ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});

// === Smooth scroll for nav links ===
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
