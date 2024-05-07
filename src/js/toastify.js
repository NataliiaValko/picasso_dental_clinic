import Toastify from 'toastify-js';

export const errorNotification = () => {
  Toastify({
    text: 'Помилка під час відправки форми',
    className: 'error-notification',
  }).showToast();
};

export const successNotification = () => {
  Toastify({
    text: 'Форма відправлена успішно',
    className: 'success-notification',
  }).showToast();
};
