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
export const generateMessAppointment = data => {
  return `Запис на прийом!\nІ'мя: ${data.name};\nНомер телефону: ${
    data.phone
  };\nЕлектронна пошта: ${data.email ? data.email : ''}\nКоментар: ${
    data.comment ? data.comment : ''
  }.`;
};
appointmentForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const submitButton = document.getElementById('appointment-form-button');

  const formData = {
    name: e.target.elements.name.value,
    phone: e.target.elements.phone.value,
    email: e.target.elements.email.value,
    comment: e.target.elements.comment.value,
  };

  try {
    submitButton.textContent = 'Відправка...';
    submitButton.disabled = true;

    await fetch('appointment.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        text: generateMessAppointment(formData),
      }),
    }).then(successNotification);

    e.target.reset();
    closeModal();
  } catch (error) {
    errorNotification();
  } finally {
    submitButton.textContent = 'Записатись';
    submitButton.disabled = false;
  }
});
