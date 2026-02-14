// Contact Page Data
export const contactData = {
    pageTitle: 'Contact Us',
    
    info: [
        {
            id: 1,
            type: 'address',
            icon: 'fas fa-map-marker-alt',
            title: 'Visit Us',
            lines: ['Mwanza, Tanzania', 'Mtaa wa Mlango Mmoja, Mabatini'],
            color: '#1e4b7c'
        },
        {
            id: 2,
            type: 'phone',
            icon: 'fas fa-phone-alt',
            title: 'Call Us',
            lines: ['+255 718 400 400', '+255 718 400 401'],
            color: '#2e6ca3'
        },
        {
            id: 3,
            type: 'email',
            icon: 'fas fa-envelope',
            title: 'Email Us',
            lines: ['info@gakalahealth.co.tz', 'appointments@gakalahealth.co.tz'],
            color: '#123456'
        },
        {
            id: 4,
            type: 'hours',
            icon: 'fas fa-clock',
            title: 'Working Hours',
            lines: ['24/7 - Open All Days', 'Emergency services available 24/7'],
            color: '#1e4b7c'
        }
    ],
    
    form: {
        title: 'Send Us a Message',
        fields: [
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Email Address', type: 'email', required: true },
            { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
            { name: 'subject', label: 'Subject', type: 'text', required: true },
            { name: 'message', label: 'Message', type: 'textarea', required: true, rows: 5 }
        ],
        submitButton: 'Send Message'
    },
    
    map: {
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.123456789!2d32.123456!3d-2.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMDcnMjQuNCJTIDMywrAwNyc0NC4yIkU!5e0!3m2!1sen!2stz!4v1234567890',
        height: 300
    }
}