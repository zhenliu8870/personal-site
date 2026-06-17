/* ========== Navbar Scroll Effect ========== */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleScroll);
handleScroll();

/* ========== Mobile Nav Toggle ========== */
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* Close mobile nav on link click */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

/* ========== Scroll Animations ========== */
function addFadeUp() {
  const targets = document.querySelectorAll(
    '.section-title, .section-subtitle, .about-grid, .skill-card, .project-card, .contact-grid, .contact-item'
  );
  targets.forEach(el => el.classList.add('fade-up'));
}
addFadeUp();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ========== Skill Bar Animation ========== */
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.skill-fill');
        fills.forEach(fill => {
          const w = fill.getAttribute('data-width');
          setTimeout(() => { fill.style.width = w + '%'; }, 200);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  skillObserver.observe(skillsSection);
}

/* ========== Active Nav Link on Scroll ========== */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) {
      if (navbar.classList.contains('scrolled')) {
        a.style.color = 'var(--primary)';
      }
    }
  });
});

/* ========== Contact Form ========== */
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button');
  const original = btn.textContent;
  btn.textContent = '发送成功！';
  btn.style.background = '#10b981';
  btn.style.borderColor = '#10b981';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.style.borderColor = '';
    contactForm.reset();
  }, 2500);
});

/* ========== Typed Effect for Hero Greeting ========== */
const greetings = ['你好，我是', 'Hello, I am', 'Bonjour, je suis'];
// Uncomment below to enable rotating greetings
// let gi = 0;
// setInterval(() => {
//   gi = (gi + 1) % greetings.length;
//   const el = document.querySelector('.hero-greeting');
//   el.style.opacity = 0;
//   setTimeout(() => { el.textContent = greetings[gi]; el.style.opacity = 1; }, 300);
// }, 3000);
