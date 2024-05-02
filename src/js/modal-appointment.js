// const openButton = document.getElementById('openModal');

// openButton.addEventListener('click', openAppointmentModal);

// Функция для открытия модального окна
export function openAppointmentModal() {
  const appointmentModal = document.getElementById('appointment-modal');
  if (!appointmentModal) {
    console.error('Modal not found');
    return;
  }
  appointmentModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
function closeModal() {
  const appointmentModal = document.getElementById('appointment-modal');
  if (!appointmentModal) {
    console.error('Modal not found');
    return;
  }
  appointmentModal.style.display = 'none';
  document.body.style.overflow = 'auto';
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

const appointmentForm = document.getElementById('appointment-form');

appointmentForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    name: e.target[0].value,
    phone: e.target[1].value,
    email: e.target[2].value,
    comment: e.target[3].value,
  };

  console.log(formData);

  e.target.reset();
  closeModal();
});
