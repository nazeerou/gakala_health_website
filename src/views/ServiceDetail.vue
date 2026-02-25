<template>
    <div>
        <!-- Header -->
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">{{ serviceData.pageTitle }}</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">{{ t('service.breadcrumb.home') }}</router-link>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <router-link to="/services">{{ t('service.breadcrumb.services') }}</router-link>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <span>{{ serviceData.breadcrumb }}</span>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="py-20 bg-white">
            <div class="container mx-auto px-6">

                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                        {{ serviceData.sectionTitle }}
                    </h2>
                </div>

                <!-- Service Item -->
                <div class="clinic-row mb-16">
                    
                    <!-- LEFT: Image -->
                    <div class="clinic-image">
                        <img :src="serviceData.image" :alt="serviceData.title">
                    </div>

                    <!-- RIGHT: Description -->
                    <div class="clinic-content">
                        <h3 class="clinic-title">{{ serviceData.title }}</h3>
                        <span class="clinic-subtitle">{{ serviceData.subtitle }}</span>

                        <p class="clinic-text">
                            {{ serviceData.description }}
                        </p>

                        <!-- Features Section -->
                        <div class="service-features" v-if="serviceData.features && serviceData.features.length > 0">
                            <!-- <h4 class="features-title">{{ t('service.features_title') }}</h4> -->
                            <!-- <ul class="features-list">
                                <li v-for="(feature, index) in serviceData.features" :key="index">
                                    <i class="fas fa-check-circle"></i>
                                    <span>{{ feature }}</span>
                                </li>
                            </ul> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

// Service data mapping for all your routes
const serviceData = computed(() => {
    const serviceId = route.path.split('/').pop() 
    
    const services = {
        // Outpatient Department
        opd: {
            pageTitle: t('service.opd.pageTitle'),
            breadcrumb: t('service.opd.breadcrumb'),
            sectionTitle: t('service.opd.sectionTitle'),
            title: t('service.opd.title'),
            subtitle: t('service.opd.subtitle'),
            description: t('service.opd.description'),
            features: t('service.opd.features', { returnObjects: true }),
            image: '../../assets/outpatient.jpg'
        },
        
        // Inpatient Department
        ipd: {
            pageTitle: t('service.ipd.pageTitle'),
            breadcrumb: t('service.ipd.breadcrumb'),
            sectionTitle: t('service.ipd.sectionTitle'),
            title: t('service.ipd.title'),
            subtitle: t('service.ipd.subtitle'),
            description: t('service.ipd.description'),
            features: t('service.ipd.features', { returnObjects: true }),
            image: '../../assets/img2.jpg'
        },
        
        // Maternity Care
        maternity: {
            pageTitle: t('service.maternity.pageTitle'),
            breadcrumb: t('service.maternity.breadcrumb'),
            sectionTitle: t('service.maternity.sectionTitle'),
            title: t('service.maternity.title'),
            subtitle: t('service.maternity.subtitle'),
            description: t('service.maternity.description'),
            features: t('service.maternity.features', { returnObjects: true }),
            image: '../../assets/maternity3.jpg'
        },
        
        // Emergency Services
        emergency: {
            pageTitle: t('service.emergency.pageTitle'),
            breadcrumb: t('service.emergency.breadcrumb'),
            sectionTitle: t('service.emergency.sectionTitle'),
            title: t('service.emergency.title'),
            subtitle: t('service.emergency.subtitle'),
            description: t('service.emergency.description'),
            features: t('service.emergency.features', { returnObjects: true }),
            image: '../../assets/img2.jpg'
        },
        
        // Theatre & Surgery
        theatre: {
            pageTitle: t('service.theatre.pageTitle'),
            breadcrumb: t('service.theatre.breadcrumb'),
            sectionTitle: t('service.theatre.sectionTitle'),
            title: t('service.theatre.title'),
            subtitle: t('service.theatre.subtitle'),
            description: t('service.theatre.description'),
            features: t('service.theatre.features', { returnObjects: true }),
            image: '../../assets/img4.jpg'
        },
        
        // Laboratory Services
        laboratory: {
            pageTitle: t('service.laboratory.pageTitle'),
            breadcrumb: t('service.laboratory.breadcrumb'),
            sectionTitle: t('service.laboratory.sectionTitle'),
            title: t('service.laboratory.title'),
            subtitle: t('service.laboratory.subtitle'),
            description: t('service.laboratory.description'),
            features: t('service.laboratory.features', { returnObjects: true }),
            image: '../../assets/img5.jpg'
        },
        
        // Radiology Services
        radiology: {
            pageTitle: t('service.radiology.pageTitle'),
            breadcrumb: t('service.radiology.breadcrumb'),
            sectionTitle: t('service.radiology.sectionTitle'),
            title: t('service.radiology.title'),
            subtitle: t('service.radiology.subtitle'),
            description: t('service.radiology.description'),
            features: t('service.radiology.features', { returnObjects: true }),
            image: '../../assets/img7.jpg'
        },
        
        // Pharmacy
        pharmacy: {
            pageTitle: t('service.pharmacy.pageTitle'),
            breadcrumb: t('service.pharmacy.breadcrumb'),
            sectionTitle: t('service.pharmacy.sectionTitle'),
            title: t('service.pharmacy.title'),
            subtitle: t('service.pharmacy.subtitle'),
            description: t('service.pharmacy.description'),
            features: t('service.pharmacy.features', { returnObjects: true }),
            image: '../../assets/img10.jpg'
        },
        
        // ICU / HDU
        icu: {
            pageTitle: t('service.icu.pageTitle'),
            breadcrumb: t('service.icu.breadcrumb'),
            sectionTitle: t('service.icu.sectionTitle'),
            title: t('service.icu.title'),
            subtitle: t('service.icu.subtitle'),
            description: t('service.icu.description'),
            features: t('service.icu.features', { returnObjects: true }),
            image: '../../assets/icu.jpg'
        },
        
        // Eye Clinic
        'eye-clinic': {
            pageTitle: t('service.eye_clinic.pageTitle'),
            breadcrumb: t('service.eye_clinic.breadcrumb'),
            sectionTitle: t('service.eye_clinic.sectionTitle'),
            title: t('service.eye_clinic.title'),
            subtitle: t('service.eye_clinic.subtitle'),
            description: t('service.eye_clinic.description'),
            features: t('service.eye_clinic.features', { returnObjects: true }),
            image: '../../assets/img16.jpg'
        },
        
        // Reproductive and Child Health (RCH) Clinic
        'rch-clinic': {
            pageTitle: t('service.rch_clinic.pageTitle'),
            breadcrumb: t('service.rch_clinic.breadcrumb'),
            sectionTitle: t('service.rch_clinic.sectionTitle'),
            title: t('service.rch_clinic.title'),
            subtitle: t('service.rch_clinic.subtitle'),
            description: t('service.rch_clinic.description'),
            features: t('service.rch_clinic.features', { returnObjects: true }),
            image: '../../assets/outpatient.jpg'
        },
        
        // Orthopedic Clinic
        'orthopedic': {
            pageTitle: t('service.orthopedic.pageTitle'),
            breadcrumb: t('service.orthopedic.breadcrumb'),
            sectionTitle: t('service.orthopedic.sectionTitle'),
            title: t('service.orthopedic.title'),
            subtitle: t('service.orthopedic.subtitle'),
            description: t('service.orthopedic.description'),
            features: t('service.orthopedic.features', { returnObjects: true }),
            image: '../../assets/img7.jpg'
        },
        
        // Psychology
        'psychology': {
            pageTitle: t('service.psychology.pageTitle'),
            breadcrumb: t('service.psychology.breadcrumb'),
            sectionTitle: t('service.psychology.sectionTitle'),
            title: t('service.psychology.title'),
            subtitle: t('service.psychology.subtitle'),
            description: t('service.psychology.description'),
            features: t('service.psychology.features', { returnObjects: true }),
            image: '../../assets/img9.jpg'
        },
        
        // Care and Development of Premature Babies
        'premature-care': {
            pageTitle: t('service.premature_care.pageTitle'),
            breadcrumb: t('service.premature_care.breadcrumb'),
            sectionTitle: t('service.premature_care.sectionTitle'),
            title: t('service.premature_care.title'),
            subtitle: t('service.premature_care.subtitle'),
            description: t('service.premature_care.description'),
            features: t('service.premature_care.features', { returnObjects: true }),
            image: '../../assets/img15.jpg'
        },
        
        // Specialized Clinics 
        'specialized-clinics': {
            pageTitle: t('service.specialized.pageTitle'),
            breadcrumb: t('service.specialized.breadcrumb'),
            sectionTitle: t('service.specialized.sectionTitle'),
            title: t('service.specialized.title'),
            subtitle: t('service.specialized.subtitle'),
            description: t('service.specialized.description'),
            features: t('service.specialized.features', { returnObjects: true }),
            image: '../../assets/nursing.jpg'
        },
        
        // Default fallback
        default: {
            pageTitle: t('service.default.pageTitle'),
            breadcrumb: t('service.default.breadcrumb'),
            sectionTitle: t('service.default.sectionTitle'),
            title: t('service.default.title'),
            subtitle: t('service.default.subtitle'),
            description: t('service.default.description'),
            features: t('service.default.features', { returnObjects: true }),
            image: '../../assets/default-service.jpg'
        }
    }
    
    return services[serviceId] || services.default
})
</script>

<style scoped>
/* ===== PAGE HEADER STYLES ===== */
.page-header {
    background: linear-gradient(135deg, #1e4b7c 0%, #0f2f4f 100%);
    padding: 120px 0 60px;
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.page-header::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    animation: rotate 30s linear infinite;
}

.page-header::after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    animation: rotate 25s linear infinite reverse;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.page-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
    letter-spacing: -0.02em;
}

.page-breadcrumb {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    position: relative;
    z-index: 2;
}

.page-breadcrumb a {
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    border-bottom: 1px solid transparent;
}

.page-breadcrumb a:hover {
    border-bottom-color: white;
}

.page-breadcrumb i {
    font-size: 0.75rem;
    opacity: 0.7;
}

/* ===== SECTION HEADER STYLES ===== */
.text-center.mb-12 {
    position: relative;
    margin-bottom: 2rem !important;
}

.text-center {
    text-align: center;
}
.text-center.mb-12 h2 {
    position: relative;
    display: inline-block;
    padding-bottom: 15px;
    font-size: 2.5rem;
    color: #0f2f4f;
    font-weight: 700;
}

.text-center.mb-12 h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #1e4b7c, #2e6ca3);
    border-radius: 3px;
}

/* ===== SERVICE ROW STYLES ===== */
.clinic-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    transition: all 0.3s ease;
}

/* ===== IMAGE STYLES ===== */
.clinic-image {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
}

.clinic-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(30, 75, 124, 0.2), rgba(30, 75, 124, 0.1));
    z-index: 1;
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.clinic-image:hover::before {
    opacity: 1;
}

.clinic-image:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 50px rgba(30, 75, 124, 0.2);
}

.clinic-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.6s ease;
    display: block;
}

.clinic-image:hover img {
    transform: scale(1.05);
}

/* ===== CONTENT STYLES ===== */
.clinic-content {
    background: #ffffff;
    padding: 10px 40px 40px 40px;
    border-radius: 20px;
    border: 1px solid rgba(226, 232, 240, 0.8);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.clinic-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    transition: height 0.4s ease;
}

.clinic-content:hover::before {
    height: 100%;
}

.clinic-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 45px rgba(30, 75, 124, 0.1);
}

.clinic-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #0f2f4f;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    position: relative;
    padding-bottom: 10px;
}

.clinic-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #1e4b7c, #2e6ca3);
    border-radius: 3px;
}

.clinic-subtitle {
    display: inline-block;
    color: #1e4b7c;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 1rem;
    padding: 5px 12px;
    background: rgba(30, 75, 124, 0.08);
    border: 1px solid rgba(30, 75, 124, 0.15);
}

.clinic-text {
    color: #475569;
    margin-top: 1.5rem;
    line-height: 1.8;
    font-size: 1rem;
}

/* Features Styles */
.service-features {
    margin-top: 1.5rem;
}

.features-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #0f2f4f;
    margin-bottom: 0.75rem;
}

.features-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.features-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 0;
    color: #475569;
    font-size: 0.95rem;
}

.features-list li i {
    color: #1e4b7c;
    font-size: 0.9rem;
    width: 20px;
}

/* ===== RESPONSIVE STYLES ===== */
@media (max-width: 1024px) {
    .page-title {
        font-size: 2.5rem;
    }
    
    .clinic-row {
        gap: 2rem;
    }
    
    .clinic-content {
        padding: 30px;
    }
    
    .clinic-title {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {
    .page-header {
        padding: 100px 0 40px;
    }
    
    .page-title {
        font-size: 2rem;
    }
    
    .text-center.mb-12 h2 {
        font-size: 2rem;
    }
    
    .clinic-row {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .clinic-image img {
        height: 300px;
    }
    
    .clinic-content {
        padding: 25px;
    }
    
    .clinic-content::before {
        width: 0;
        height: 4px;
        transition: width 0.4s ease;
    }
    
    .clinic-content:hover::before {
        width: 100%;
        height: 4px;
    }
    
    .clinic-title {
        font-size: 1.8rem;
    }
}

@media (max-width: 480px) {
    .page-header {
        padding: 80px 0 30px;
    }
    
    .page-title {
        font-size: 1.8rem;
    }
    
    .page-breadcrumb {
        font-size: 0.9rem;
        flex-wrap: wrap;
    }
    
    .text-center.mb-12 h2 {
        font-size: 1.6rem;
    }
    
    .clinic-image img {
        height: 220px;
    }
    
    .clinic-content {
        padding: 20px;
    }
    
    .clinic-title {
        font-size: 1.5rem;
    }
    
    .clinic-text,
    .features-list li {
        font-size: 0.95rem;
    }
}

/* ===== DARK MODE SUPPORT ===== */
@media (prefers-color-scheme: dark) {
    .bg-white {
        /* background-color: #0f172a; */
    }
    
    .clinic-content {
        /* background: #1e293b; */
        /* border-color: #334155; */
    }
    
    .clinic-title {
        /* color: #f1f5f9; */
    }
    
    .clinic-text,
    .features-list li {
        /* color: #cbd5e1; */
    }
    
    .features-title {
        /* color: #f1f5f9; */
    }
    
    .clinic-subtitle {
        /* background: rgba(255, 255, 255, 0.05);
        color: #f1f5f9;
        border-color: rgba(255, 255, 255, 0.1); */
    color: #1e4b7c;
    /* font-weight: 600;
    font-size: 1rem; */
    /* margin-top: 1rem; */
    /* padding: 5px 12px; */
    background: rgba(30, 75, 124, 0.08);
    }
}

/* ===== ANIMATIONS ===== */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.clinic-row {
    animation: fadeInUp 0.6s ease forwards;
}

/* ===== PRINT STYLES ===== */
@media print {
    .page-header {
        background: none;
        color: black;
        padding: 40px 0;
    }
    
    .page-header::before,
    .page-header::after {
        display: none;
    }
}
</style>