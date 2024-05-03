import { openAppointmentModal } from './modal-appointment';
(() => {
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const openMenuBtn = document.querySelector('[data-mobile-menu-open]');
  const closeMenuBtn = document.querySelector('[data-mobile-menu-close]');
  const body = document.querySelector('body');
  const mobileAppointmentModalBtn = document.getElementById(
    'mobileAppointmentModalBtn'
  );
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('mobile-menu-is-open');

    if (!isMenuOpen) {
      body.style.overflow = 'hidden'; // Блокуємо прокрутку
    } else {
      body.style.overflow = ''; // Розблоковуємо прокрутку
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  mobileAppointmentModalBtn.addEventListener('click', () => {
    toggleMenu();
    openAppointmentModal();
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('mobile-menu-is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    body.style.overflow = ''; // Розблоковуємо прокрутку при зміні розміру вікна
  });
})();
