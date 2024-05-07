import axios from 'axios';
import { errorNotification, successNotification } from './toastify';

// Функция для открытия модального окна
export function openAppointmentModal() {
  const appointmentModal = document.getElementById(
    'appointment-modal-backdrop'
  );
  if (!appointmentModal) {
    console.error('Modal not found');
    return;
  }
  document.body.style.overflow = 'hidden';
  appointmentModal.style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
  const appointmentModal = document.getElementById(
    'appointment-modal-backdrop'
  );
  if (!appointmentModal) {
    console.error('Modal not found');
    return;
  }
  document.body.style.overflow = 'auto';
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
  .getElementById('appointment-modal-backdrop')
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

appointmentForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    phone: e.target.phone.value,
    email: e.target.email.value,
    comment: e.target.comment.value,
  };

  try {
    const res = await axios.post(
      'http://localhost:3001/api/forms/appointment',
      formData
    );

    successNotification();
    e.target.reset();
    closeModal();
  } catch (error) {
    errorNotification();
  }
});
