import { openAppointmentModal } from './modal-appointment';
(() => {
  const appointmentModalBtn = document.getElementById('appointmentModalBtn');

  function setActiveMenuItem(menuSelector) {
    const currentPageUrl = window.location.href;
    const menuLinks = document.querySelectorAll(menuSelector);

    menuLinks.forEach(link => {
      if (link.href === currentPageUrl) {
        link.classList.add('active');
      }
    });
  }

  appointmentModalBtn.addEventListener('click', openAppointmentModal);

  document.addEventListener('DOMContentLoaded', () => {
    setActiveMenuItem('.mobile-menu-nav-link');
    setActiveMenuItem('.header-nav-link');
  });
})();
