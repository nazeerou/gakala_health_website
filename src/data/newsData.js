// News & Events Data
export const newsData = {
    sectionTitle: 'NEWS & EVENTS',
    mainTitle: 'Latest Updates',
    description: 'Stay informed with the latest news and events from Gakala Health Centre.',
    
    news: [
        { 
            id: 1,
            image: '/assets/img2.jpg', 
            date: 'March 15, 2026', 
            title: 'Free Medical Camp This Weekend', 
            excerpt: 'Join us for a free medical camp offering consultations and health screenings.',
            content: 'We are organizing a free medical camp this weekend at our main facility. Services include general consultations, blood pressure checks, diabetes screening, and health education. All are welcome!',
            link: '/news/1',
            category: 'Community',
            author: 'Dr. James Mwansasu'
        },
        { 
            id: 2,
            image: '/assets/img6.jpg', 
            date: 'March 10, 2026', 
            title: 'New MRI Machine Installed', 
            excerpt: 'State-of-the-art MRI machine installed for better diagnostics.',
            content: 'We are proud to announce the installation of a new 3T MRI machine, providing clearer images and faster scan times for our patients.',
            link: '/news/2',
            category: 'Technology',
            author: 'Dr. Sarah Kimaro'
        },
        { 
            id: 3,
            image: '/assets/img4.jpg', 
            date: 'March 5, 2026', 
            title: 'Health Awareness Seminar', 
            excerpt: 'Join our cardiologists for a seminar on heart health.',
            content: 'Learn about heart disease prevention, healthy lifestyle choices, and early warning signs. Free admission, refreshments provided.',
            link: '/news/3',
            category: 'Education',
            author: 'Dr. John Komba'
        },
        { 
            id: 4,
            image: '/assets/img1.jpg', 
            date: 'February 28, 2026', 
            title: 'New Maternity Wing Opening', 
            excerpt: 'Opening of our new, modern maternity wing.',
            content: 'Our expanded maternity wing features private delivery rooms, advanced neonatal care, and enhanced comfort for new mothers.',
            link: '/news/4',
            category: 'Facility',
            author: 'Dr. Grace Mbonde'
        },
        { 
            id: 5,
            image: '/assets/img5.jpg', 
            date: 'February 20, 2026', 
            title: 'COVID-19 Booster Campaign', 
            excerpt: 'Free COVID-19 booster shots available for all adults.',
            content: 'Visit our vaccination center for your COVID-19 booster. No appointment needed, walk-ins welcome.',
            link: '/news/5',
            category: 'Health Alert',
            author: 'Dr. Peter Mushi'
        },
        { 
            id: 6,
            image: '/assets/img6.jpg', 
            date: 'February 15, 2026', 
            title: 'Diabetes Awareness Week', 
            excerpt: 'Join us for diabetes screening and education events.',
            content: 'Free blood sugar testing, nutrition counseling, and expert talks throughout the week.',
            link: '/news/6',
            category: 'Awareness',
            author: 'Dr. Anna Mbwana'
        }
    ],
    
    announcements: [
        { date: 'Today', title: 'New MRI machine installed - Book your appointment now', link: '/news/2', priority: 'high' },
        { date: 'Yesterday', title: 'Free medical camp this Saturday at City Center', link: '/news/1', priority: 'high' },
        { date: '2 days ago', title: 'COVID-19 booster shots available for all adults', link: '/news/5', priority: 'medium' },
        { date: '1 week ago', title: 'Maternity wing renovation completed', link: '/news/4', priority: 'low' },
        { date: '2 weeks ago', title: 'New cardiology specialist joins our team', link: '/doctors', priority: 'medium' }
    ]
}