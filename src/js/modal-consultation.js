// const openButton = document.getElementById('openModal');

// openButton.addEventListener('click', openConsultationModal);

// Функция для открытия модального окна по ID кнопки
export function openConsultationModal() {
  const consultationModal = document.getElementById('consultation-modal');
  if (!consultationModal) {
    console.error('Modal not found');
    return;
  }
  consultationModal.style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
  const consultationModal = document.getElementById('consultation-modal');
  if (!consultationModal) {
    console.error('Modal not found');
    return;
  }
  consultationModal.style.display = 'none';
}

// Обработчик клика на кнопку закрытия модального окна
document
  .getElementById('consultation-modal-close')
  .addEventListener('click', function () {
    closeModal();
  });

// Закрытие модального окна при клике вне его области
document
  .getElementById('consultation-modal')
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
