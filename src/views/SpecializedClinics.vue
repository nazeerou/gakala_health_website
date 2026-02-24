<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">{{ t('specialized_clinics.page_title') }}</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">{{ t('specialized_clinics.breadcrumb.home') }}</router-link>
                    <span class="separator">›</span>
                    <router-link to="/services">{{ t('specialized_clinics.breadcrumb.services') }}</router-link>
                    <span class="separator">›</span>
                    <span>{{ t('specialized_clinics.breadcrumb.current') }}</span>
                </div>
            </div>
        </div>

        <div class="clinics-section">
            <div class="container mx-auto px-6">
                <!-- Section Header -->
                <div class="section-header">
                    <h2 class="section-title">{{ t('specialized_clinics.title') }}</h2>
                    <p class="section-description">{{ t('specialized_clinics.description') }}</p>
                </div>

                <!-- Clinics List - Each clinic in a two-column layout -->
                <div class="clinics-list">
                    <!-- Cardiology Clinic -->
                    <div class="clinic-item" v-for="(clinic, index) in clinics" :key="index">
                        <div class="clinic-grid" :class="{ 'reverse': index % 2 !== 0 }">
                            <!-- Left Column - Image -->
                            <div class="clinic-image-col">
                                <div class="clinic-image-wrapper">
                                    <img :src="clinic.image" :alt="clinic.name" class="clinic-image">
                                    <div class="image-overlay"></div>
                                </div>
                            </div>

                            <!-- Right Column - Description -->
                            <div class="clinic-content-col">
                                <div class="clinic-content">
                                    <h3 class="clinic-name">{{ clinic.name }}</h3>
                                    <p class="clinic-description">{{ clinic.description }}</p>
                                    
                                    <div class="clinic-details">
                                        <div class="detail-item" v-if="clinic.specialists">
                                            <i class="fas fa-user-md"></i>
                                            <span><strong>{{ t('specialized_clinics.specialists') }}:</strong> {{ clinic.specialists }}</span>
                                        </div>
                                        <div class="detail-item" v-if="clinic.schedule">
                                            <i class="fas fa-clock"></i>
                                            <span><strong>{{ t('specialized_clinics.schedule') }}:</strong> {{ clinic.schedule }}</span>
                                        </div>
                                        <div class="detail-item" v-if="clinic.location">
                                            <i class="fas fa-map-marker-alt"></i>
                                            <span><strong>{{ t('specialized_clinics.location') }}:</strong> {{ clinic.location }}</span>
                                        </div>
                                    </div>

                                    <div class="clinic-services" v-if="clinic.services">
                                        <h4 class="services-title">{{ t('specialized_clinics.services_offered') }}</h4>
                                        <ul class="services-list">
                                            <li v-for="(service, idx) in clinic.services" :key="idx">
                                                <i class="fas fa-check-circle"></i>
                                                <span>{{ service }}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="clinic-cta">
                                        <button class="btn-appointment" @click="$emit('open-appointment')">
                                            {{ t('specialized_clinics.book_appointment') }} <i class="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineEmits(['open-appointment'])

// Clinic data with translations
const clinics = [
    {
        name: t('specialized_clinics.cardiology.name'),
        description: t('specialized_clinics.cardiology.description'),
        image: '/assets/cardiology-clinic.jpg',
        specialists: t('specialized_clinics.cardiology.specialists'),
        schedule: t('specialized_clinics.cardiology.schedule'),
        location: t('specialized_clinics.cardiology.location'),
        services: t('specialized_clinics.cardiology.services', { returnObjects: true })
    },
    {
        name: t('specialized_clinics.neurology.name'),
        description: t('specialized_clinics.neurology.description'),
        image: '/assets/neurology-clinic.jpg',
        specialists: t('specialized_clinics.neurology.specialists'),
        schedule: t('specialized_clinics.neurology.schedule'),
        location: t('specialized_clinics.neurology.location'),
        services: t('specialized_clinics.neurology.services', { returnObjects: true })
    },
    {
        name: t('specialized_clinics.pediatric.name'),
        description: t('specialized_clinics.pediatric.description'),
        image: '/assets/pediatric-clinic.jpg',
        specialists: t('specialized_clinics.pediatric.specialists'),
        schedule: t('specialized_clinics.pediatric.schedule'),
        location: t('specialized_clinics.pediatric.location'),
        services: t('specialized_clinics.pediatric.services', { returnObjects: true })
    },
    {
        name: t('specialized_clinics.orthopedic.name'),
        description: t('specialized_clinics.orthopedic.description'),
        image: '/assets/orthopedic-clinic.jpg',
        specialists: t('specialized_clinics.orthopedic.specialists'),
        schedule: t('specialized_clinics.orthopedic.schedule'),
        location: t('specialized_clinics.orthopedic.location'),
        services: t('specialized_clinics.orthopedic.services', { returnObjects: true })
    },
    {
        name: t('specialized_clinics.diabetes.name'),
        description: t('specialized_clinics.diabetes.description'),
        image: '/assets/diabetes-clinic.jpg',
        specialists: t('specialized_clinics.diabetes.specialists'),
        schedule: t('specialized_clinics.diabetes.schedule'),
        location: t('specialized_clinics.diabetes.location'),
        services: t('specialized_clinics.diabetes.services', { returnObjects: true })
    }
]
</script>

<style scoped>
/* CSS Variables */
:root {
    --primary: #1e4b7c;
    --primary-dark: #0f2f4f;
    --primary-light: #2e6ca3;
    --primary-soft: rgba(30, 75, 124, 0.1);
    --text-dark: #1e293b;
    --text-light: #475569;
    --text-muted: #64748b;
    --border-color: #e2e8f0;
    --bg-light: #f8fafc;
    --white: #ffffff;
    --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

/* Page Header */
.page-header {
    background: linear-gradient(135deg, #0a2a45, #1e4b7c);
    padding: 80px 0 40px;
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.page-header::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 50%;
    animation: float 20s infinite;
}

.page-header::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -10%;
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 50%;
    animation: float 25s infinite reverse;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, -20px); }
}

.page-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    position: relative;
    z-index: 2;
    letter-spacing: -0.02em;
}

.page-breadcrumb {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
    position: relative;
    z-index: 2;
}

.page-breadcrumb .separator {
    color: rgba(255, 255, 255, 0.4);
    font-size: 1.2rem;
    line-height: 1;
}

.page-breadcrumb a {
    color: white;
    text-decoration: none;
    transition: var(--transition);
    border-bottom: 1px solid transparent;
}

.page-breadcrumb a:hover {
    border-bottom-color: white;
}

/* Clinics Section */
.clinics-section {
    padding: 60px 20px;
    background: var(--white);
    max-width: 1200px;
    margin: 0 auto;
}

/* Section Header */
.section-header {
    text-align: center;
    margin-bottom: 50px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.section-title {
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 16px;
    position: relative;
    padding-bottom: 15px;
    letter-spacing: -0.01em;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--primary-light));
    border-radius: 2px;
}

.section-description {
    color: var(--text-light);
    font-size: 1.1rem;
    line-height: 1.7;
}

/* Clinics List */
.clinics-list {
    display: flex;
    flex-direction: column;
    gap: 60px;
}

.clinic-item {
    width: 100%;
}

.clinic-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.clinic-grid.reverse {
    direction: rtl;
}

.clinic-grid.reverse .clinic-content-col {
    direction: ltr;
}

/* Image Column */
.clinic-image-col {
    position: relative;
}

.clinic-image-wrapper {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    height: 350px;
}

.clinic-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.clinic-item:hover .clinic-image {
    transform: scale(1.05);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
        rgba(30, 75, 124, 0.2) 0%,
        rgba(30, 75, 124, 0.4) 100%);
    transition: var(--transition);
}

.clinic-item:hover .image-overlay {
    background: linear-gradient(135deg, 
        rgba(30, 75, 124, 0.3) 0%,
        rgba(30, 75, 124, 0.5) 100%);
}

/* Content Column */
.clinic-content-col {
    padding: 20px;
}

.clinic-content {
    background: var(--white);
    border-radius: 16px;
    padding: 30px;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
}

.clinic-name {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 15px;
    position: relative;
    padding-bottom: 12px;
}

.clinic-name::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--primary-light));
    border-radius: 2px;
}

.clinic-description {
    color: var(--text-light);
    line-height: 1.8;
    margin-bottom: 25px;
    font-size: 1rem;
}

/* Clinic Details */
.clinic-details {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 25px;
    padding: 15px;
    background: var(--bg-light);
    border-radius: 12px;
}

.detail-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-light);
    font-size: 0.95rem;
}

.detail-item i {
    width: 20px;
    color: var(--primary);
    font-size: 1rem;
}

.detail-item strong {
    color: var(--text-dark);
    font-weight: 600;
}

/* Services List */
.clinic-services {
    margin-bottom: 25px;
}

.services-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 15px;
}

.services-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.services-list li {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-light);
    font-size: 0.9rem;
}

.services-list li i {
    color: var(--primary);
    font-size: 0.9rem;
    flex-shrink: 0;
}

/* CTA Button */
.clinic-cta {
    margin-top: 20px;
}

.btn-appointment {
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 10px 20px rgba(30, 75, 124, 0.2);
}

.btn-appointment:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(30, 75, 124, 0.3);
}

.btn-appointment i {
    transition: transform 0.3s ease;
}

.btn-appointment:hover i {
    transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 968px) {
    .clinic-grid,
    .clinic-grid.reverse {
        grid-template-columns: 1fr;
        direction: ltr;
        gap: 30px;
    }
    
    .clinic-image-wrapper {
        height: 300px;
        max-width: 600px;
        margin: 0 auto;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
}

@media (max-width: 768px) {
    .page-header {
        padding: 60px 0 30px;
    }
    
    .page-title {
        font-size: 2rem;
    }
    
    .clinics-section {
        padding: 40px 20px;
    }
    
    .section-title {
        font-size: 1.6rem;
    }
    
    .section-description {
        font-size: 1rem;
    }
    
    .clinic-name {
        font-size: 1.5rem;
    }
    
    .clinic-image-wrapper {
        height: 250px;
    }
    
    .services-list {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 1.6rem;
    }
    
    .clinic-name {
        font-size: 1.3rem;
    }
    
    .clinic-content {
        padding: 20px;
    }
    
    .clinic-image-wrapper {
        height: 200px;
    }
    
    .detail-item {
        font-size: 0.85rem;
    }
    
    .btn-appointment {
        width: 100%;
        justify-content: center;
    }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    .clinics-section {
        background: #0f172a;
    }
    
    .page-header {
        background: linear-gradient(135deg, #0a1a2f, #1a3a5a);
    }
    
    .clinic-content {
        background: #1e293b;
        border-color: #334155;
    }
    
    .clinic-name,
    .services-title,
    .detail-item strong {
        color: #f1f5f9;
    }
    
    .clinic-description,
    .detail-item,
    .services-list li {
        color: #cbd5e1;
    }
    
    .clinic-details {
        background: #0f172a;
    }
}

/* Print Styles */
@media print {
    .page-header {
        background: none;
        color: black;
        padding: 20px 0;
    }
    
    .page-header::before,
    .page-header::after {
        display: none;
    }
    
    .btn-appointment {
        display: none;
    }
}
</style>