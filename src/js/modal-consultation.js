// const openButton = document.getElementById('openModal');

// openButton.addEventListener('click', openConsultationModal);

// Функция для открытия модального окна
export function openConsultationModal() {
  const consultationModal = document.getElementById('consultation-modal');
  if (!consultationModal) {
    console.error('Modal not found');
    return;
  }
  consultationModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
function closeModal() {
  const consultationModal = document.getElementById('consultation-modal');
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

const consultationForm = document.getElementById('consultation-form');
const consultationFormCheckbox = document.getElementById(
  'consultation-form-checkbox'
);
const fileInput = document.getElementById('consultation-form-file');

fileInput.addEventListener('change', function (e) {
  const file = e.target.files[0];

  if (file === undefined) {
    return;
  }

  const fileLabel = document.getElementById('consultation-form-file-label');
  const fileClue = document.getElementById('consultation-form-file-clue');

  const allowedExtensions = ['png', 'jpeg', 'jpg', 'pdf', 'zip'];
  const fileExtension = file.name.split('.').pop().toLowerCase();

  if (allowedExtensions.includes(fileExtension)) {
    fileLabel.style.borderColor = '#3f5b6f';
    fileLabel.style.color = '#3f5b6f';
    fileLabel.style.fill = '#3f5b6f';
    fileClue.style.color = '#3f5b6f';
    fileClue.textContent = file.name;
  } else {
    fileLabel.style.borderColor = '#ff0000';
    fileLabel.style.color = '#ff0000';
    fileLabel.style.fill = '#ff0000';
    fileClue.style.color = '#ff0000';
    fileClue.textContent = 'Некоректний формат файлу';
  }
});

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

consultationForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (e.target.checkbox.checked === false) {
    const checkboxLabel = document.getElementById('checkbox-label');
    checkboxLabel.style.color = '#ff0000';
    checkboxLabel.style.stroke = '#ff0000';
    return;
  }

  const formData = {
    name: e.target.name.value,
    phone: e.target.phone.value,
    email: e.target.email.value,
    complaint: e.target.complaint.value,
    comment: e.target.comment.value,
    file: e.target.file.files[0],
  };

  console.log(formData);

  // e.target.reset();
  // closeModal();
});
