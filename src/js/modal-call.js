import axios from 'axios';
import { errorNotification, successNotification } from './toastify';

// Функция для открытия модального окна
export function openCallModal() {
  const callModal = document.getElementById('call-modal-backdrop');
  if (!callModal) {
    console.error('Modal not found');
    return;
  }
  document.body.style.overflow = 'hidden';
  callModal.style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
  const callModal = document.getElementById('call-modal-backdrop');
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
  .getElementById('call-modal-backdrop')
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

// Submit форми
const callForm = document.getElementById('call-form');

callForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    phone: e.target.phone.value,
  };

  try {
    const res = await axios.post(
      // 'http://localhost:3001/api/forms/call',
      'https://picasso-dental-clinic-back.onrender.com/api/forms/call',
      formData
    );

    successNotification();
    e.target.reset();
    closeModal();
  } catch (error) {
    errorNotification();
  }
});
