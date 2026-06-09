/* ========== LOADER ========== */
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const letters = document.querySelectorAll('.sv-letter');
  const tagline = document.querySelector('.sv-tagline');

  // Animate S then V
  setTimeout(() => letters[0].classList.add('show'), 200);
  setTimeout(() => letters[1].classList.add('show'), 400);
  setTimeout(() => tagline.classList.add('show'), 600);

  // Dismiss loader and trigger hero reveals
  setTimeout(() => {
    loader.classList.add('hide');
    document.querySelectorAll('.hero-eyebrow, .hero-name, .hero-role, .hero-bio, .hero-ctas, .hero-photo-wrap')
      .forEach(el => el.classList.add('in'));
  }, 1800);
});

/* ========== NAV HAMBURGER ========== */
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
// close on link click
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
}));

/* ========== SCROLL REVEAL ========== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ========== ACTIVE NAV HIGHLIGHT ========== */
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => a.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.style.color = 'var(--clr-accent2)';
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
