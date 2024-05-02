(() => {
  const mobileMenu = document.querySelector('.js-mobile-menu-container');
  const openMenuBtn = document.querySelector('.js-open-mobile-menu');
  const closeMenuBtn = document.querySelector('.js-close-mobile-menu');
  const body = document.querySelector('body');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (!isMenuOpen) {
      body.style.overflow = 'hidden'; // Блокуємо прокрутку
    } else {
      body.style.overflow = ''; // Розблоковуємо прокрутку
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    body.style.overflow = ''; // Розблоковуємо прокрутку при зміні розміру вікна
  });
})();
