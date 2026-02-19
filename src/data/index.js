// Hero Section Data
export const heroStats = [
    { value: '150K+', label: 'Happy Patients' },
    { value: '30+', label: 'Expert Staff' },
    { value: '24/7', label: 'Emergency' }
]

export const heroImages = [
    { url: './assets/img1.jpg', title: 'Gakala Health Centre', alt: 'Gakala Health Centre' },
    { url: './assets/img2.jpg', title: 'Our Medical Team', alt: 'Medical Team' },
    { url: './assets/img6.jpg', title: 'Modern Facilities', alt: 'Modern Facilities' },
    { url: './assets/img4.jpg', title: 'Patient Care', alt: 'Patient Care' },
    { url: './assets/img5.jpg', title: 'Emergency Services', alt: 'Emergency Services' }
]

// Services Data
export const serviceList = [
    { 
        name: 'Outpatient Department (OPD)', 
        shortName: 'Outpatient Department (OPD)',
        icon: 'fas fa-stethoscope', 
        description: 'Offers general medical consultations, diagnosis, treatment, and follow-up care for common illnesses and chronic conditions.',
        fullDescription: 'Our Outpatient Department (OPD) provides comprehensive primary care for individuals and families, focusing on prevention, diagnosis, and treatment of common illnesses.',
        features: ['General Consultations', 'Chronic Disease Management', 'Preventive Care', 'Immunizations'],
        slug: 'general-medicine'
    },
    { 
        name: 'Inpatient Department (IPD)', 
        shortName: 'Inpatient Department (IPD)',
        icon: 'fas fa-bed', 
        description: 'Provides admission and continuous care for patients requiring close medical supervision, treatment, or post-operative recovery',
        fullDescription: 'Our Inpatient Department offers complete care for medical supervision, treatment, or post-operative recovery',
        features: ['Patient admission and ward care', 'Nursing care and vital signs monitoring',
            'Medical management of acute illnesses', 'Post-operative recovery and observation', 'Doctor ward rounds and treatment follow-up'],
        slug: 'inpatient-department(OPD)'
    },
    { 
        name: 'Maternity Care', 
        shortName: 'Maternity Care',
        icon: 'fas fa-female', 
        description: 'Safe care for mothers and newborns throughout pregnancy.',
        fullDescription: 'Our Maternity department offers complete care for expectant mothers, from prenatal through postnatal, ensuring the health and safety of both mother and baby.',
        features: ['Antenatal Care', 'Delivery Services', 'Postnatal Care', 'Newborn Screening', 'Breastfeeding Support'],
        slug: 'maternity-care'
    },
    { 
        name: 'Emergency Services', 
        shortName: 'Emergency',
        icon: 'fas fa-ambulance', 
        description: '24/7 emergency department for critical cases.',
        fullDescription: 'Our Emergency department operates 24/7 with trained specialists ready to handle any medical emergency, from trauma to cardiac events.',
        features: ['Trauma Care', 'Cardiac Emergencies',  'Ambulance Services'],
        slug: 'emergency-services'
    },
    { 
        name: 'Theatre & Surgery', 
        shortName: 'Theatre & Surgery',
        icon: 'fas fa-user-md', 
        description: 'Well-equipped operating theatre providing safe surgical care by qualified medical professionals.',
        fullDescription: 'Well-equipped operating theatre providing safe surgical care by qualified medical professionals.',
        features: ['Minor surgical procedures', 'Major general surgeries', 'Emergency surgeries', 'Wound management and suturing', 'Post-operative care and monitoring'],
        slug: 'diagnostic-imaging'
    },
    { 
        name: 'Laboratory Services', 
        shortName: 'Laboratory Services',
        icon: 'fas fa-flask', 
        description: 'Offers diagnostic testing to support accurate diagnosis and treatment monitoring.',
        fullDescription: 'Offers diagnostic testing to support accurate diagnosis and treatment monitoring.',
        features: ['Blood tests (CBC, blood sugar)', 'Urine and stool analysis', 'Malaria and typhoid tests', 'HIV and other rapid tests'],
        slug: 'Laboratory-Services'
    },
    { 
        name: 'Radiology Services', 
        shortName: 'Radiology Services',
        icon: 'fas fa-x-ray', 
        description: 'Imaging services to assist clinicians in diagnosis and treatment planning.',
        fullDescription: 'Imaging services to assist clinicians in diagnosis and treatment planning.',
        features: ['X-Ray & Ultrasound', 'CT Scan & MRI'],
        slug: 'Radiology Services'
    },
    { 
        name: 'Pharmacy', 
        shortName: 'Pharmacy',
        icon: 'fas fa-pills', 
        description: 'Dispenses quality-assured medicines with professional guidance.',
        fullDescription: 'Dispenses quality-assured medicines with professional guidance.',
        features: ['Prescription dispensing', 'Over-the-counter medicines', 'Medication counseling', 'Drug safety advice'],
        slug: 'neurology'
    },
       { 
        name: 'ICU / HDU', 
        shortName: ' ICU / HDU',
        icon: 'fas fa-procedures', 
        description: 'Advanced care for critically ill patients requiring close monitoring.',
        fullDescription: 'Advanced care for critically ill patients requiring close monitoring.',
        features: ['Continuous patient monitoring', 'Oxygen therapy', 'Emergency stabilization', 'Post-operative critical care'],
        slug: 'ICU / HDU'
    },
       { 
        name: 'Specialized Clinics', 
        shortName: 'Specialized Clinics',
        icon: 'fas fa-clinic-medical', 
        description: 'Focused clinics offering expert care in specific medical fields.',
        fullDescription: 'Focused clinics offering expert care in specific medical fields.',
        features: ['Dental Clinic – tooth extraction, fillings, oral health care',
             'Eye Clinic – eye examination, treatment of infections, vision assessment', 
             'Orthopedics Clinic – fracture care, joint pain treatment, minor procedures'],
        slug: 'neurology'
    },
]

// Insurance Providers
export const insuranceProviders = [
    { name: 'NHIF', logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'60\' viewBox=\'0 0 150 60\'%3E%3Crect width=\'150\' height=\'60\' fill=\'%231e4b7c\'/%3E%3Ctext x=\'75\' y=\'35\' font-size=\'16\' text-anchor=\'middle\' fill=\'white\'%3ENHIF%3C/text%3E%3C/svg%3E' },
    { name: 'UAP', logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'60\' viewBox=\'0 0 150 60\'%3E%3Crect width=\'150\' height=\'60\' fill=\'%231e4b7c\'/%3E%3Ctext x=\'75\' y=\'35\' font-size=\'16\' text-anchor=\'middle\' fill=\'white\'%3EUAP%3C/text%3E%3C/svg%3E' },
    { name: 'JUBILEE', logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'60\' viewBox=\'0 0 150 60\'%3E%3Crect width=\'150\' height=\'60\' fill=\'%231e4b7c\'/%3E%3Ctext x=\'75\' y=\'35\' font-size=\'14\' text-anchor=\'middle\' fill=\'white\'%3EJUBILEE%3C/text%3E%3C/svg%3E' },
    { name: 'AAR', logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'60\' viewBox=\'0 0 150 60\'%3E%3Crect width=\'150\' height=\'60\' fill=\'%231e4b7c\'/%3E%3Ctext x=\'75\' y=\'35\' font-size=\'16\' text-anchor=\'middle\' fill=\'white\'%3EAAR%3C/text%3E%3C/svg%3E' },
    { name: 'STRATEGIS', logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'60\' viewBox=\'0 0 150 60\'%3E%3Crect width=\'150\' height=\'60\' fill=\'%231e4b7c\'/%3E%3Ctext x=\'75\' y=\'35\' font-size=\'12\' text-anchor=\'middle\' fill=\'white\'%3ESTRATEGIS%3C/text%3E%3C/svg%3E' },
    { name: 'BIMA', logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'60\' viewBox=\'0 0 150 60\'%3E%3Crect width=\'150\' height=\'60\' fill=\'%231e4b7c\'/%3E%3Ctext x=\'75\' y=\'35\' font-size=\'16\' text-anchor=\'middle\' fill=\'white\'%3EBIMA%3C/text%3E%3C/svg%3E' }
]

// Doctors Data
export const doctors = [
    { name: 'Dr. James Komba', specialty: 'Medical Director', experience: '15', image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'%3E%3Crect width=\'400\' height=\'300\' fill=\'%231e4b7c\'/%3E%3Ctext x=\'200\' y=\'150\' font-size=\'24\' text-anchor=\'middle\' fill=\'white\'%3EDr. James%3C/text%3E%3C/svg%3E' },
    { name: 'Dr. Anna Kimaro', specialty: 'General Surgeon', experience: '12', image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'%3E%3Crect width=\'400\' height=\'300\' fill=\'%232e6ca3\'/%3E%3Ctext x=\'200\' y=\'150\' font-size=\'24\' text-anchor=\'middle\' fill=\'white\'%3EDr. Sarah%3C/text%3E%3C/svg%3E' },
    { name: 'Dr. Jose Mushi', specialty: 'Pediatrician', experience: '10', image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'%3E%3Crect width=\'400\' height=\'300\' fill=\'%23123456\'/%3E%3Ctext x=\'200\' y=\'150\' font-size=\'24\' text-anchor=\'middle\' fill=\'white\'%3EDr. Peter%3C/text%3E%3C/svg%3E' },
    { name: 'Dr. Grace Peter', specialty: 'OB/GYN', experience: '14', image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'%3E%3Crect width=\'400\' height=\'300\' fill=\'%231e4b7c\'/%3E%3Ctext x=\'200\' y=\'150\' font-size=\'24\' text-anchor=\'middle\' fill=\'white\'%3EDr. Grace%3C/text%3E%3C/svg%3E' }
]

// // News & Events
export const newsEvents = [
    { image: './assets/img2.jpg', date: 'March 15, 2026', title: 'Free Medical Camp This Weekend', excerpt: 'Join us for a free medical camp offering consultations and health screenings.', link: '/news/1' },
    { image: './assets/img6.jpg', date: 'March 10, 2026', title: 'New MRI Machine Installed', excerpt: 'State-of-the-art MRI machine installed for better diagnostics.', link: '/news/2' },
    { image: './assets/img4.jpg', date: 'March 5, 2026', title: 'Health Awareness Seminar', excerpt: 'Join our cardiologists for a seminar on heart health.', link: '/news/3' },
    { image: '/assets/img1.jpg', date: 'February 28, 2026', title: 'New Maternity Wing Opening', excerpt: 'Opening of our new, modern maternity wing.', link: '/news/4' }
]

// Announcements
export const announcements = [
    { date: 'Today', title: 'New MRI machine installed - Book your appointment now', link: '/news/2' },
    { date: 'Yesterday', title: 'Free medical camp this Saturday at City Center', link: '/news/1' },
    { date: '2 days ago', title: 'COVID-19 booster shots available for all adults', link: '/news/5' },
    { date: '1 week ago', title: 'Maternity wing renovation completed', link: '/news/4' }
]

// Testimonials
export const testimonials = [
    { name: 'Jacob K.', text: 'The care at Gakala was exceptional. The doctors were professional and the facilities are modern and clean.', avatar: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'25\' fill=\'%231e4b7c\'/%3E%3Ctext x=\'30\' y=\'40\' font-size=\'20\' text-anchor=\'middle\' fill=\'white\'%3ES%3C/text%3E%3C/svg%3E' },
    { name: 'Faith D.', text: 'I felt safe and well cared for throughout my treatment. The staff went above and beyond.', avatar: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'25\' fill=\'%232e6ca3\'/%3E%3Ctext x=\'30\' y=\'40\' font-size=\'20\' text-anchor=\'middle\' fill=\'white\'%3EJ%3C/text%3E%3C/svg%3E' },
    { name: 'Sadick P.', text: 'Best healthcare experience I have ever had. The maternity ward is wonderful.', avatar: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'25\' fill=\'%23123456\'/%3E%3Ctext x=\'30\' y=\'40\' font-size=\'20\' text-anchor=\'middle\' fill=\'white\'%3EM%3C/text%3E%3C/svg%3E' }
]

// Core Values
export const coreValues = [
    { icon: 'fas fa-star', title: 'Patient-Centered Care', description: 'Prioritizing patient safety, dignity, and satisfaction at all times.' },
    { icon: 'fas fa-heart', title: 'Compassion', description: 'We treat every patient with kindness and empathy.' },
    { icon: 'fas fa-shield-alt', title: 'Integrity', description: 'Operating transparently and honestly in all engagements' },
    { icon: 'fas fa-users', title: 'Teamwork', description: 'Encouraging collaboration among healthcare professionals to achieve optimal patient outcomes.' },
    { icon: 'fas fa-lightbulb', title: 'Professionalism', description: 'Upholding medical ethics, competence, and accountability' },
]

// Future Goals
export const futureGoals = [
    { icon: 'fas fa-building', title: 'Facility Expansion', description: 'New wing with 50 additional beds', target: '2027' },
    { icon: 'fas fa-microscope', title: 'Advanced Lab', description: 'Full-service molecular diagnostics laboratory', target: '2026' },
    { icon: 'fas fa-heartbeat', title: 'Cardiac Center', description: 'Dedicated heart care facility with cath lab', target: '2028' },
    { icon: 'fas fa-graduation-cap', title: 'Training Institute', description: 'Medical education and training programs', target: '2027' },
    { icon: 'fas fa-handshake', title: 'International Partners', description: 'Global healthcare collaborations', target: '2026' },
    { icon: 'fas fa-ambulance', title: 'Fleet Expansion', description: '5 new fully-equipped ambulances', target: '2026' }
]

// Social Links
export const socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', link: 'https://facebook.com' },
    { name: 'Twitter', icon: 'fab fa-twitter', link: 'https://twitter.com' },
    { name: 'Instagram', icon: 'fab fa-instagram', link: 'https://instagram.com' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', link: 'https://linkedin.com' }
]

// Menu Items
export const menuItems = [
    { name: 'Home', path: '/', external: false },
    { name: 'Services', path: '/services', external: false },
    { name: 'About', path: '#', external: false },
    { name: 'Staffs', path: '/doctors', external: false },
    { name: 'News', path: '/news', external: false },
    { name: 'Contact', path: '/contact', external: false }
]