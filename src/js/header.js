import { openAppointmentModal } from './modal-appointment';
(() => {
  const appointmentModalBtn = document.getElementById('appointmentModalBtn');
  const contactsNavLink = document.getElementById('contact-link');
  const homeLink = document.getElementById('header-nav-link-home');

  function setActiveMenuItem(menuSelector) {
    const currentPagePath = window.location.href;
    const menuLinks = document.querySelectorAll(menuSelector);

    menuLinks.forEach(link => {
      const linkPath = new URL(link.href).href;
      if (linkPath === currentPagePath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  contactsNavLink.addEventListener('click', evt => {
    homeLink.classList.remove('active');
    contactsNavLink.classList.add('active');
  });

  appointmentModalBtn.addEventListener('click', openAppointmentModal);

  document.addEventListener('DOMContentLoaded', () => {
    setActiveMenuItem('.mobile-menu-nav-link');
    setActiveMenuItem('.header-nav-link');
  });
})();
