// Make sure this file DOES NOT import router
export const siteData = {
    heroStats: [
        { value: '150K+', label: 'Happy Patients' },
        { value: '30+', label: 'Expert Staff' },
        { value: '24/7', label: 'Emergency' }
    ],
    heroImages: [
        { url: '/assets/img1.jpg', title: 'Gakala Health Centre', alt: 'Gakala Health Centre' },
        { url: '/assets/img2.jpg', title: 'Our Medical Team', alt: 'Medical Team' }
    ],
    serviceList: [
        { 
            name: 'General Medicine', 
            shortName: 'General Med',
            icon: 'fas fa-stethoscope', 
            description: 'Comprehensive healthcare with focus on preventive care.',
            slug: 'general-medicine'
        }
        // ... other services
    ],
    // ... other data
}

export default siteData