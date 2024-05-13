import axios from 'axios';
import { errorNotification, successNotification } from './toastify';

// Функция для открытия модального окна
export function openConsultationModal() {
  const consultationModal = document.getElementById(
    'consultation-modal-backdrop'
  );
  if (!consultationModal) {
    console.error('Modal not found');
    return;
  }
  consultationModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
function closeModal() {
  const consultationModal = document.getElementById(
    'consultation-modal-backdrop'
  );
  if (!consultationModal) {
    console.error('Modal not found');
    return;
  }
  consultationModal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Обработчик клика на кнопку закрытия модального окна
document
  .getElementById('consultation-modal-close')
  .addEventListener('click', function () {
    closeModal();
  });

// Закрытие модального окна при клике вне его области
document
  .getElementById('consultation-modal-backdrop')
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

const consultationForm = document.getElementById('consultation-form');
const consultationFormCheckbox = document.getElementById(
  'consultation-form-checkbox'
);
const fileInput = document.getElementById('consultation-form-file');

// Состояние fileInput
fileInput.addEventListener('change', function (e) {
  const file = e.target.files[0];

  if (file === undefined) {
    return;
  }

  const fileLabel = document.getElementById('consultation-form-file-label');
  const filePrg = document.getElementById('consultation-form-file-prg');
  const filePrgAccent = document.getElementById(
    'consultation-form-file-prg-accent'
  );
  const fileClue = document.getElementById('consultation-form-file-clue');

  const allowedExtensions = ['png', 'jpeg', 'jpg', 'pdf', 'zip'];
  const fileExtension = file.name.split('.').pop().toLowerCase();

  if (allowedExtensions.includes(fileExtension)) {
    fileLabel.style.borderColor = '#3f5b6f';
    fileLabel.style.color = '#3f5b6f';
    fileLabel.style.fill = '#3f5b6f';
    fileClue.style.color = '#3f5b6f';
    filePrgAccent.textContent = 'Обрано файл -';
    filePrg.textContent = file.name;
    fileClue.textContent = file.name;
  } else {
    fileLabel.style.borderColor = '#ff0000';
    fileLabel.style.color = '#ff0000';
    fileLabel.style.fill = '#ff0000';
    fileClue.style.color = '#ff0000';
    fileClue.textContent = 'Некоректний формат файлу';
  }
});

// Состояние Checkbox
consultationFormCheckbox.addEventListener('change', function () {
  const checkboxLabel = document.getElementById('checkbox-label');
  if (this.checked) {
    checkboxLabel.style.color = '#3f5b6f';
    checkboxLabel.style.stroke = '#3f5b6f';
  } else {
    checkboxLabel.style.color = '#ff0000';
    checkboxLabel.style.stroke = '#ff0000';
  }
});

// Submit форми
consultationForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const fileLabel = document.getElementById('consultation-form-file-label');
  const filePrg = document.getElementById('consultation-form-file-prg');
  const filePrgAccent = document.getElementById(
    'consultation-form-file-prg-accent'
  );
  const fileClue = document.getElementById('consultation-form-file-clue');

  if (e.target.checkbox.checked === false) {
    const checkboxLabel = document.getElementById('checkbox-label');
    checkboxLabel.style.color = '#ff0000';
    checkboxLabel.style.stroke = '#ff0000';
    return;
  }

  const formData = new FormData();
  formData.append('name', e.target.name.value);
  formData.append('phone', e.target.phone.value);
  formData.append('email', e.target.email.value);
  formData.append('complaint', e.target.complaint.value);
  formData.append('comment', e.target.comment.value);
  formData.append('file', e.target.file.files[0]);

  try {
    const res = await axios.post(
      // 'http://localhost:3001/api/forms/consultation',
      'https://picasso-dental-clinic-back.onrender.com/api/forms/consultation',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    fileLabel.style.borderColor = '#3f5b6f';
    fileLabel.style.color = '#3f5b6f';
    fileLabel.style.fill = '#3f5b6f';
    filePrg.textContent = 'чи перетягніть в цю область';
    filePrgAccent.textContent = 'Оберіть файл';
    fileClue.textContent = '.JPG, .PNG, .PDF, .ZIP формати дозволені';
    successNotification();
    e.target.reset();
    closeModal();
  } catch (e) {
    if (
      e.response.status === 400 &&
      e.response.data.message === 'File too large'
    ) {
      fileLabel.style.borderColor = '#ff0000';
      fileLabel.style.color = '#ff0000';
      fileLabel.style.fill = '#ff0000';
      filePrg.textContent = 'Файл занадто великий, будь ласка архівуйте його!';
      filePrgAccent.textContent = '';
    }
    errorNotification();
  }
});
