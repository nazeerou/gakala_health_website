import { ref } from 'vue'

export function useAppointment() {
    const showAppointmentModal = ref(false)
    const appointmentForm = ref({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: ''
    })

    const openAppointmentModal = () => {
        showAppointmentModal.value = true
        document.body.style.overflow = 'hidden'
    }

    const closeAppointmentModal = () => {
        showAppointmentModal.value = false
        document.body.style.overflow = 'auto'
        // Reset form
        appointmentForm.value = {
            name: '',
            phone: '',
            email: '',
            service: '',
            date: '',
            time: ''
        }
    }

    const submitAppointment = () => {
        // Here you would typically send this to your backend
        console.log('Appointment submitted:', appointmentForm.value)
        
        // Show success message
        alert('Appointment request sent successfully! We will contact you shortly.')
        
        closeAppointmentModal()
    }

    return {
        showAppointmentModal,
        appointmentForm,
        openAppointmentModal,
        closeAppointmentModal,
        submitAppointment
    }
}