import { openAppointmentModal } from "./modal-appointment"
import { openConsultationModal } from "./modal-consultation"

const homeSectionAppointmentBtn = document.getElementById('home-appointment-modal')
const portfolioSectionAppointmentBtn = document.getElementById('portfolio-appointment-modal')
const homeSectionConsultationBtn = document.getElementById('home-consultation-modal')

homeSectionAppointmentBtn.addEventListener('click', openAppointmentModal)
portfolioSectionAppointmentBtn.addEventListener('click', openAppointmentModal)
homeSectionConsultationBtn.addEventListener('click', openConsultationModal)