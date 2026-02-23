<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">{{ t('services_page.page_title') }}</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">{{ t('services_page.breadcrumb.home') }}</router-link>
                    <span class="separator">›</span>
                    <span>{{ t('services_page.breadcrumb.current') }}</span>
                </div>
            </div>
        </div>
        
        <div class="services-page-section">
            <div class="container mx-auto px-6">
                <div class="section-header">
                    <h2 class="section-title">{{ t('services_page.section_title') }}</h2>
                    <p class="section-description">{{ t('services_page.section_description') }}</p>
                </div>
                
                <div class="services-grid">
                    <!-- Outpatient Department (OPD) -->
                    <div class="service-card">
                        <div class="service-header">
                            <div class="service-icon">
                                <i class="fas fa-user-injured"></i>
                            </div>
                            <h3 class="service-title">{{ t('services_page.opd.name') }}</h3>
                        </div>
                        <div class="service-body">
                            <p class="service-description">{{ t('services_page.opd.full_description') }}</p>
                            <router-link @click="goToService('opd')" class="read-more-link">
                                {{ t('services_page.read_more') }} <i class="fas fa-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>

                    <!-- Inpatient Department (IPD) -->
                    <div class="service-card">
                        <div class="service-header">
                            <div class="service-icon">
                                <i class="fas fa-procedures"></i>
                            </div>
                            <h3 class="service-title">{{ t('services_page.ipd.name') }}</h3>
                        </div>
                        <div class="service-body">
                            <p class="service-description">{{ t('services_page.ipd.full_description') }}</p>
                            <router-link :to="'/services/ipd'" class="read-more-link">
                                {{ t('services_page.read_more') }} <i class="fas fa-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>

                    <!-- Maternity Care -->
                    <div class="service-card">
                        <div class="service-header">
                            <div class="service-icon">
                                <i class="fas fa-female"></i>
                            </div>
                            <h3 class="service-title">{{ t('services_page.maternity.name') }}</h3>
                        </div>
                        <div class="service-body">
                            <p class="service-description">{{ t('services_page.maternity.full_description') }}</p>
                            <router-link :to="'/services/maternity'" class="read-more-link">
                                {{ t('services_page.read_more') }} <i class="fas fa-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>

                    <!-- Emergency Services -->
                    <div class="service-card">
                        <div class="service-header">
                            <div class="service-icon">
                                <i class="fas fa-ambulance"></i>
                            </div>
                            <h3 class="service-title">{{ t('services_page.emergency.name') }}</h3>
                        </div>
                        <div class="service-body">
                            <p class="service-description">{{ t('services_page.emergency.full_description') }}</p>
                            <router-link :to="'/services/emergency'" class="read-more-link">
                                {{ t('services_page.read_more') }} <i class="fas fa-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>

                    <!-- Theatre & Surgery -->
                    <div class="service-card">
                        <div class="service-header">
                            <div class="service-icon">
                                <i class="fas fa-syringe"></i>
                            </div>
                            <h3 class="service-title">{{ t('services_page.theatre.name') }}</h3>
                        </div>
                        <div class="service-body">
                            <p class="service-description">{{ t('services_page.theatre.full_description') }}</p>
                            <router-link :to="'/services/theatre'" class="read-more-link">
                                {{ t('services_page.read_more') }} <i class="fas fa-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>

                    <!-- Laboratory Services -->
                    <div class="service-card">
                        <div class="service-header">
                            <div class="service-icon">
                                <i class="fas fa-flask"></i>
                            </div>
                            <h3 class="service-title">{{ t('services_page.laboratory.name') }}</h3>
                        </div>
                        <div class="service-body">
                            <p class="service-description">{{ t('services_page.laboratory.full_description') }}</p>
                            <router-link :to="'/services/laboratory'" class="read-more-link">
                                {{ t('services_page.read_more') }} <i class="fas fa-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>

                    <!-- Radiology Services -->
                    <div class="service-card">
                        <div class="service-header">
                            <div class="service-icon">
                                <i class="fas fa-x-ray"></i>
                            </div>
                            <h3 class="service-title">{{ t('services_page.radiology.name') }}</h3>
                        </div>
                        <div class="service-body">
                            <p class="service-description">{{ t('services_page.radiology.full_description') }}</p>
                            <router-link :to="'/services/radiology'" class="read-more-link">
                                {{ t('services_page.read_more') }} <i class="fas fa-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>

                    <!-- Pharmacy -->
                    <div class="service-card">
                        <div class="service-header">
                            <div class="service-icon">
                                <i class="fas fa-pills"></i>
                            </div>
                            <h3 class="service-title">{{ t('services_page.pharmacy.name') }}</h3>
                        </div>
                        <div class="service-body">
                            <p class="service-description">{{ t('services_page.pharmacy.full_description') }}</p>
                            <router-link :to="'/services/pharmacy'" class="read-more-link">
                                {{ t('services_page.read_more') }} <i class="fas fa-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>

                    <!-- ICU / HDU -->
                    <div class="service-card">
                        <div class="service-header">
                            <div class="service-icon">
                                <i class="fas fa-heartbeat"></i>
                            </div>
                            <h3 class="service-title">{{ t('services_page.icu.name') }}</h3>
                        </div>
                        <div class="service-body">
                            <p class="service-description">{{ t('services_page.icu.full_description') }}</p>
                            <router-link :to="'/services/icu'" class="read-more-link">
                                {{ t('services_page.read_more') }} <i class="fas fa-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>

                    <!-- Specialized Clinics -->
                    <div class="service-card">
                        <div class="service-header">
                            <div class="service-icon">
                                <i class="fas fa-stethoscope"></i>
                            </div>
                            <h3 class="service-title">{{ t('services_page.specialized.name') }}</h3>
                        </div>
                        <div class="service-body">
                            <p class="service-description">{{ t('services_page.specialized.full_description') }}</p>
                            <router-link :to="'/services/specialized-clinics'" class="read-more-link">
                                {{ t('services_page.read_more') }} <i class="fas fa-arrow-right"></i>
                            </router-link>
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

</script>

<style scoped>
/* CSS Variables - Direct colors */
:root {
    --primary: #1e4b7c;
    --primary-dark: #0f2f4f;
    --primary-light: #2e6ca3;
    --primary-soft: rgba(30, 75, 124, 0.1);
    --primary-very-light: #f0f5fa;
    --text-dark: #1e293b;
    --text-light: #475569;
    --text-muted: #64748b;
    --border-light: #e2e8f0;
    --white: #ffffff;
    --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
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

/* Services Section */
.services-page-section {
    padding: 60px 20px;
    background: linear-gradient(135deg, #ffffff, #f0f5fa);
    max-width: 1000px;
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
    color: #1e293b;
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
    background: linear-gradient(90deg, #1e4b7c, #2e6ca3);
    border-radius: 2px;
}

.section-description {
    color: #475569;
    font-size: 1.1rem;
    line-height: 1.7;
}

/* Services Grid */
.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

/* Service Card */
.service-card {
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    border: 1px solid #e2e8f0;
    transition: var(--transition);
    height: 100%;
    display: flex;
    flex-direction: column;
}

.service-card:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
    border-color: #1e4b7c;
}

.service-header {
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    padding: 25px 20px;
    color: white;
    text-align: center;
}

.service-icon {
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 12px;
    font-size: 2rem;
    backdrop-filter: blur(5px);
    transition: var(--transition);
}

.service-card:hover .service-icon {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.25);
}

.service-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 5px;
    line-height: 1.4;
}

.service-body {
    padding: 25px 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.service-description {
    color: #475569;
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 20px;
    flex-grow: 1;
}

/* Read More Link */
.read-more-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #1e4b7c;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    transition: var(--transition);
    margin-top: auto;
    padding: 8px 0;
    position: relative;
    width: fit-content;
}

.read-more-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #1e4b7c, #2e6ca3);
    transition: width 0.3s ease;
}

.read-more-link:hover {
    color: #2e6ca3;
    gap: 12px;
}

.read-more-link:hover::after {
    width: 100%;
}

.read-more-link i {
    font-size: 0.85rem;
    transition: transform 0.3s ease;
}

.read-more-link:hover i {
    transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
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
    
    .services-page-section {
        padding: 40px 20px;
    }
    
    .section-title {
        font-size: 1.6rem;
    }
    
    .section-description {
        font-size: 1rem;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .service-header {
        padding: 20px 15px;
    }
    
    .service-icon {
        width: 60px;
        height: 60px;
        font-size: 1.6rem;
    }
    
    .service-title {
        font-size: 1.2rem;
    }
    
    .service-body {
        padding: 20px 15px;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 1.6rem;
    }
    
    .service-title {
        font-size: 1.1rem;
    }
    
    .service-description {
        font-size: 0.9rem;
    }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    .services-page-section {
        background: #0f172a;
    }
    
    .page-header {
        background: linear-gradient(135deg, #0a1a2f, #1a3a5a);
    }
    
    .service-card {
        background: #1e293b;
        border-color: #334155;
    }
    
    .section-title,
    .service-title {
        color: #f1f5f9;
    }
    
    .section-description,
    .service-description {
        color: #cbd5e1;
    }
    
    .read-more-link {
        color: #2e6ca3;
    }
    
    .read-more-link:hover {
        color: #3d8bc4;
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
    
    .service-card {
        break-inside: avoid;
        box-shadow: none;
        border: 1px solid #ddd;
    }
    
    .read-more-link {
        display: none;
    }
}
</style>