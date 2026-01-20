const tilts = document.querySelectorAll('[data-tilt]');
const revealTargets = document.querySelectorAll('.panel, [data-tilt], .hero-card, .metric');

function handleTilt(event) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const rotateX = ((event.clientY - centerY) / rect.height) * -6;
  const rotateY = ((event.clientX - centerX) / rect.width) * 6;
  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
}

function resetTilt(event) {
  const card = event.currentTarget;
  card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
}

tilts.forEach((card) => {
  card.addEventListener('mousemove', handleTilt);
  card.addEventListener('mouseleave', resetTilt);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealTargets.forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
