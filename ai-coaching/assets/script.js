// === Language Toggle ===
let lang = 'de';
const toggle = document.getElementById('langToggle');

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
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    navLinks.style.display = 'flex';
    navLinks.style.cssText += `
      flex-direction: column; position: absolute; top: 72px; left: 0; right: 0;
      background: rgba(250,250,250,.97); backdrop-filter: blur(16px);
      padding: 32px; gap: 20px; border-bottom: 1px solid #eee;
      box-shadow: 0 8px 30px rgba(0,0,0,.06);
    `;
    hamburger.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    hamburger.children[1].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    navLinks.style.cssText = '';
    hamburger.children[0].style.transform = '';
    hamburger.children[1].style.transform = '';
  }
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => { if (menuOpen) hamburger.click(); });
});

// === Nav scroll effect ===
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// === Scroll reveal ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('section, .hero-grid').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// === Smooth scroll ===
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
