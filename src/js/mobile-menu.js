import { openAppointmentModal } from './modal-appointment';
(() => {
  const refs = {
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    openMenuBtn: document.querySelector('[data-mobile-menu-open]'),
    closeMenuBtn: document.querySelector('[data-mobile-menu-close]'),
    body: document.querySelector('body'),
    mobileAppointmentModalBtn: document.getElementById(
      'mobileAppointmentModalBtn'
    ),
    mobileMenuBackdrop: document.querySelector('.mobile-menu-backdrop'),
    mobileMenuNavLinks: document.querySelectorAll('.mobile-menu-nav-link'),
    mobileMenuSocialsLink: document.querySelectorAll(
      '.mobile-menu-socials-link'
    ),
    mobileMenuContactLink: document.getElementById('mobile-menu-contact-link'),
    mobileMenuHomeLink: document.getElementById('mobile-nav-home-link'),
  };

  const toggleMenu = () => {
    console.log('toggle');
    const isMenuOpen =
      refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.mobileMenu.classList.toggle('mobile-menu-is-open');

    if (!isMenuOpen) {
      refs.body.style.overflow = 'hidden'; // Блокуємо прокрутку
    } else {
      refs.body.style.overflow = ''; // Розблоковуємо прокрутку
    }
  };

  // Відкривання і закривання мобільного меню
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  // Слухач на відкривання модалки запису на візит
  refs.mobileAppointmentModalBtn.addEventListener('click', () => {
    toggleMenu();
    openAppointmentModal();
  });

  // Закриваємо меню по кліку на бекдроп і на посилання в навігації
  refs.mobileMenuBackdrop.addEventListener('click', evt => {
    if (evt.target === refs.mobileMenuContactLink) {
      refs.mobileMenuHomeLink.classList.remove('active');
      evt.target.classList.add('active');
      toggleMenu();
    }
    refs.mobileMenuNavLinks.forEach(link => {
      if (evt.target === link && evt.target !== refs.mobileMenuContactLink) {
        toggleMenu();
      }
    });
    refs.mobileMenuSocialsLink.forEach(link => {
      if (evt.target === link) {
        toggleMenu();
      }
    });
    if (evt.target === refs.mobileMenuBackdrop) {
      toggleMenu();
    }
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    refs.mobileMenu.classList.remove('mobile-menu-is-open');
    refs.openMenuBtn.setAttribute('aria-expanded', false);
    refs.body.style.overflow = ''; // Розблоковуємо прокрутку при зміні розміру вікна
  });
})();
