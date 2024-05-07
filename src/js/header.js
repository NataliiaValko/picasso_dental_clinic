import { openAppointmentModal } from './modal-appointment';
(() => {
  const appointmentModalBtn = document.getElementById('appointmentModalBtn');
  const contactsNavLink = document.getElementById('contact-link');
  const homeLink = document.getElementById('header-nav-link-home');

  function setActiveMenuItem(menuSelector) {
    const currentPagePath = window.location.href;
    const menuLinks = document.querySelectorAll(menuSelector);
    const isHomePage = window.location.pathname === '/';

    menuLinks.forEach(link => {
      const linkPath = new URL(link.href).href;
      link.classList.toggle(
        'active',
        linkPath === currentPagePath || (isHomePage && link === menuLinks[0])
      );
    });
  }

  contactsNavLink.addEventListener('click', () => {
    homeLink.classList.remove('active');
    contactsNavLink.classList.add('active');
  });

  appointmentModalBtn.addEventListener('click', openAppointmentModal);

  document.addEventListener('DOMContentLoaded', () => {
    setActiveMenuItem('.mobile-menu-nav-link');
    setActiveMenuItem('.header-nav-link');
  });
})();
