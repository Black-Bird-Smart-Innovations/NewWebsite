import { useEffect } from 'react';

export function useScrollEffects() {
  useEffect(() => {
    const nav = document.getElementById('nav');

    const handleScroll = () => {
      if (!nav) return;
      if (window.pageYOffset > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      // Parallax for ambient orbs
      const orbs = document.querySelectorAll('.gradient-orb');
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.02;
        orb.style.transform = `translateY(${window.pageYOffset * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.feature-card, .step, .pricing-card, .trust-badge, .value-card, .frc-profile-card, .product-card, .spec-item, .emergency-card');
    elements.forEach(el => {
      el.classList.add('fade-in-element');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
