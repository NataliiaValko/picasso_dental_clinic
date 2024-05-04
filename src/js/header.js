import { openAppointmentModal } from './modal-appointment';
(() => {
  const appointmentModalBtn = document.getElementById('appointmentModalBtn');
  const contactsSection = document.getElementById('contacts');
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

  // Плавний скрол
  contactsNavLink.addEventListener('click', evt => {
    const contactsSectionOffsetTop = contactsSection?.offsetTop - 138;
    if (!contactsSectionOffsetTop) return;
    evt.preventDefault();
    homeLink.classList.remove('active');

    window.scrollTo({
      top: contactsSectionOffsetTop,
      behavior: 'smooth',
    });
  });

  appointmentModalBtn.addEventListener('click', openAppointmentModal);

  document.addEventListener('DOMContentLoaded', () => {
    setActiveMenuItem('.mobile-menu-nav-link');
    setActiveMenuItem('.header-nav-link');
  });
})();
