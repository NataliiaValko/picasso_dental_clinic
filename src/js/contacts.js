import { openConsultationModal } from './modal-consultation';
import { openAppointmentModal } from './modal-appointment';

const orderBtn = document.querySelector('.contacts-btn-light');
const consultBtn = document.querySelector('.contacts-btn-dark');

console.log(orderBtn);

orderBtn.addEventListener('click', openAppointmentModal);
consultBtn.addEventListener('click', openConsultationModal);
