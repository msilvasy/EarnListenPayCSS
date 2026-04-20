/* =============================================
   CHAINTHINK PORTAL - Main JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  // ---- Navbar scroll effect ----
  const navbar = document.querySelector('.navbar');
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // ---- Mobile menu toggle ----
  const menuBtn = document.querySelector('.navbar-menu-btn');
  const navOverlay = document.querySelector('.nav-overlay');
  const navOverlayClose = document.querySelector('.nav-overlay-close');

  if (menuBtn && navOverlay) {
    menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('active');
      navOverlay.classList.toggle('open');
      document.body.style.overflow = navOverlay.classList.contains('open') ? 'hidden' : '';
    });
  }

  if (navOverlayClose) {
    navOverlayClose.addEventListener('click', function () {
      menuBtn.classList.remove('active');
      navOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close nav when clicking a link
  const navLinks = document.querySelectorAll('.nav-overlay a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menuBtn.classList.remove('active');
      navOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ---- Intersection Observer for fade-up animations ----
  const fadeElements = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all elements
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ---- Parallax effect on hero background ----
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', function () {
      const scrolled = window.scrollY;
      const rate = scrolled * 0.3;
      heroBg.style.transform = `translateY(${rate}px)`;
    }, { passive: true });
  }

});
