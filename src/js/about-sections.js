import { openAppointmentModal } from "./modal-appointment"
import { openConsultationModal } from "./modal-consultation"

const aboutContactsAppointmentBtn = document.getElementById('#about-contacts-appointment-modal')
const aboutContactsConsultationBtn = document.getElementById('#about-contacts-consultation-modal')

aboutContactsAppointmentBtn.addEventListener('click', openAppointmentModal)
aboutContactsConsultationBtn.addEventListener('click', openConsultationModal)