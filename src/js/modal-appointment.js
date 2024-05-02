// const openButton = document.getElementById('openModal');

// openButton.addEventListener('click', openAppointmentModal);

// Функция для открытия модального окна по ID кнопки
export function openAppointmentModal() {
  const appointmentModal = document.getElementById('appointment-modal');
  if (!appointmentModal) {
    console.error('Modal not found');
    return;
  }
  appointmentModal.style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
  const appointmentModal = document.getElementById('appointment-modal');
  if (!appointmentModal) {
    console.error('Modal not found');
    return;
  }
  appointmentModal.style.display = 'none';
}

// Обработчик клика на кнопку закрытия модального окна
document
  .getElementById('appointment-modal-close')
  .addEventListener('click', function () {
    closeModal();
  });

// Закрытие модального окна при клике вне его области
document
  .getElementById('appointment-modal')
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
