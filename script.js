const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.opacity = '0';
      hero.style.transform = 'translateY(24px)';
      requestAnimationFrame(() => {
        hero.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
      });
    }
  });
}
