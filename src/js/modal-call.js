import axios from 'axios';
import { errorNotification, successNotification } from './toastify';

// Функція для відкриття модального вікна
export function openCallModal() {
  const callModal = document.getElementById('call-modal-backdrop');
  if (!callModal) {
    console.error('Modal not found');
    return;
  }
  document.body.style.overflow = 'hidden';
  callModal.style.display = 'block';
}

// Закриття модального вікна
function closeModal() {
  const callModal = document.getElementById('call-modal-backdrop');
  if (!callModal) {
    console.error('Modal not found');
    return;
  }
  document.body.style.overflow = 'auto';
  callModal.style.display = 'none';
}

// Обробник кліка на кнопку закриття модального вікна
document
  .getElementById('call-modal-close')
  .addEventListener('click', function () {
    closeModal();
  });

// Закриття модального вікна при кліку поза його областю
document
  .getElementById('call-modal-backdrop')
  .addEventListener('click', function (event) {
    if (event.target === this) {
      closeModal();
    }
  });

// Закриття модального вікна при натисканні клавіші Escape
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Submit форми
const callForm = document.getElementById('call-form');

callForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const submitButton = document.getElementById('call-form-button');

  const formData = {
    name: e.target.name.value,
    phone: e.target.phone.value,
  };

  try {
    submitButton.textContent = 'Відправка...';
    submitButton.disabled = true;

    // Використання URLSearchParams для закодування даних
    const params = new URLSearchParams();
    params.append('text', generateMessAppointment(formData));

    const res = await axios.post('callme.php', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    successNotification();
    e.target.reset();
    closeModal();
  } catch (error) {
    errorNotification();
  } finally {
    submitButton.textContent = 'Замовити';
    submitButton.disabled = false;
  }
});
