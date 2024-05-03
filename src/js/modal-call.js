const openButton = document.getElementById('openModal');

openButton.addEventListener('click', openCallModal);

// Функция для открытия модального окна
export function openCallModal() {
  const callModal = document.getElementById('call-modal');
  if (!callModal) {
    console.error('Modal not found');
    return;
  }
  document.body.style.overflow = 'hidden';
  callModal.style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
  const callModal = document.getElementById('call-modal');
  if (!callModal) {
    console.error('Modal not found');
    return;
  }
  document.body.style.overflow = 'auto';
  callModal.style.display = 'none';
}

// Обработчик клика на кнопку закрытия модального окна
document
  .getElementById('call-modal-close')
  .addEventListener('click', function () {
    closeModal();
  });

// Закрытие модального окна при клике вне его области
document
  .getElementById('call-modal')
  .addEventListener('click', function (event) {
    if (event.target === this) {
      closeModal();
    }
  });

// Закрытие модального окна при нажатии клавиши Escape
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

const callForm = document.getElementById('call-form');

callForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    phone: e.target.phone.value,
  };

  console.log(formData);

  e.target.reset();
  closeModal();
});
