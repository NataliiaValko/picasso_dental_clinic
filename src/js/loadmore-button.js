document.addEventListener('DOMContentLoaded', initializeWorkLoad);

function initializeWorkLoad() {
  const button = document.querySelector('.portfolio-btn');
  const itemsPerPage = 4;
  const hiddenItems = document.querySelectorAll(
    '.portfolio-item:nth-child(n + ' + (itemsPerPage + 1) + ')'
  );
  let currentIndex = 0;

  if (window.innerWidth <= 833) {
    hideItems();
  }

  button.addEventListener('click', function () {
    showNextItems();
  });

  function showNextItems() {
    if (window.innerWidth > 833) return;

    const lastIndex = currentIndex + itemsPerPage;
    for (let i = currentIndex; i < lastIndex && i < hiddenItems.length; i++) {
      hiddenItems[i].style.display = 'block';
    }

    currentIndex = lastIndex;

    if (currentIndex >= hiddenItems.length) {
      button.disabled = true;
      button.classList.add('disabled-button');
    } else {
      button.disabled = false;
      button.classList.remove('disabled-button');
    }
  }

  function hideItems() {
    for (let i = 0; i < hiddenItems.length; i += 1) {
      hiddenItems[i].style.display = 'none';
    }
  }
}
