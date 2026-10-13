/**
 * Shubhangi Aggarwal - Personal Portfolio Scripts
 * Lightweight, zero-dependency, high-performance interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initActiveNavSpy();
  initSkillsFilter();
  initContactForm();
  initCopyEmail();
  initScrollAnimations();
  initBackToTop();
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/**
 * 1. Navbar Scrolled State
 */
function initNavbar() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Mobile Menu Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    
    // Toggle hamburger icon svg
    toggleBtn.innerHTML = isOpen
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });
  });
}

/**
 * 3. Active Nav Highlighting on Scroll (ScrollSpy)
 */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -65% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * 4. Skills Category Filtering
 */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');
  if (!filterBtns.length || !skillCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.classList.add('fade-in-up', 'is-visible');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 5. Interactive Contact Form with Validation & Feedback Toast
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#name')?.value.trim();
    const email = form.querySelector('#email')?.value.trim();
    const subject = form.querySelector('#subject')?.value.trim() || 'Portfolio Inquiry';
    const message = form.querySelector('#message')?.value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('⚠️ Please enter a valid email address.');
      return;
    }

    // Submit feedback
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `Sending...`;

    setTimeout(() => {
      showToast('✓ Thank you, ' + name + '! Your message was received.');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      // Provide direct mailto fallback option if desired
      const mailtoUrl = `mailto:shubhangi.aggarwal.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Shubhangi,\n\nName: ${name}\nEmail: ${email}\n\n${message}`)}`;
      console.log('Form message handled. Fallback mailto ready:', mailtoUrl);
    }, 800);
  });
}

/**
 * 6. Copy Email to Clipboard with Toast Confirmation
 */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('.copy-email-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const emailToCopy = btn.getAttribute('data-email') || 'shubhangi.aggarwal.dev@gmail.com';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(emailToCopy).then(() => {
          showToast(`📋 Copied "${emailToCopy}" to clipboard!`);
        }).catch(() => {
          fallbackCopyText(emailToCopy);
        });
      } else {
        fallbackCopyText(emailToCopy);
      }
    });
  });
}

function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`📋 Copied "${text}" to clipboard!`);
  } catch (err) {
    showToast(`Email: ${text}`);
  }
  document.body.removeChild(textArea);
}

/**
 * 7. Scroll Animation Observer
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in-up');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

/**
 * 8. Back to Top Button
 */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 9. Toast Notification Handler
 */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  if (window.toastTimeout) {
    clearTimeout(window.toastTimeout);
  }

  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
