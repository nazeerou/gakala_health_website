<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">{{ t('staff.title') }}</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">{{ t('staff.breadcrumb.home') }}</router-link>
                    <span class="separator">›</span>
                    <span>{{ t('staff.breadcrumb.current') }}</span>
                </div>
            </div>
        </div>
        
        <div class="staff-section">
            <div class="container mx-auto px-6">
                <div class="section-header">
                    <h2 class="section-title">{{ t('staff.section_title') }}</h2>
                    <p class="section-description">{{ t('staff.section_description') }}</p>
                </div>
                
                <div class="staff-grid">
                    <!-- Medical Director -->
                    <div class="staff-card">
                        <img src="/assets/medical-director.jpg" :alt="t('staff.director.title')" class="staff-image">
                        <div class="staff-info">
                            <h3 class="staff-name">{{ t('staff.director.title') }}</h3>
                            <p class="staff-role">{{ t('staff.director.role') }}</p>
                            <p class="staff-description">{{ t('staff.director.description') }}</p>
                        </div>
                    </div>

                    <!-- Hospital Administrator -->
                    <div class="staff-card">
                        <img src="/assets/hospital.jpg" :alt="t('staff.administrator.title')" class="staff-image">
                        <div class="staff-info">
                            <h3 class="staff-name">{{ t('staff.administrator.title') }}</h3>
                            <p class="staff-role">{{ t('staff.administrator.role') }}</p>
                            <p class="staff-description">{{ t('staff.administrator.description') }}</p>
                        </div>
                    </div>

                    <!-- Nursing Officer In-Charge -->
                    <div class="staff-card">
                        <img src="/assets/nursing.jpg" :alt="t('staff.nursing.title')" class="staff-image">
                        <div class="staff-info">
                            <h3 class="staff-name">{{ t('staff.nursing.title') }}</h3>
                            <p class="staff-role">{{ t('staff.nursing.role') }}</p>
                            <p class="staff-description">{{ t('staff.nursing.description') }}</p>
                        </div>
                    </div>

                    <!-- Heads of Departments -->
                    <div class="staff-card">
                        <img src="/assets/hod.jpg" :alt="t('staff.hod.title')" class="staff-image">
                        <div class="staff-info">
                            <h3 class="staff-name">{{ t('staff.hod.title') }}</h3>
                            <p class="staff-role">{{ t('staff.hod.role') }}</p>
                            <p class="staff-description">{{ t('staff.hod.description') }}</p>
                        </div>
                    </div>
                </div>

                <!-- Leadership Team Statement -->
                <div class="leadership-statement">
                    <p class="statement-text">{{ t('staff.leadership_statement') }}</p>
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
    --text-dark: #1e293b;
    --text-light: #475569;
    --text-muted: #64748b;
    --border-light: #e2e8f0;
    --bg-light: #f8fafc;
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

/* Staff Section */
.staff-section {
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

/* Staff Grid */
.staff-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin-bottom: 50px;
}

/* Staff Card */
.staff-card {
    background: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    border: 1px solid #e2e8f0;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    height: 100%;
}

.staff-card:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
    border-color: #1e4b7c;
}

.staff-image {
    height: 260px;
    width: 100%;
    object-fit: cover;
    border-bottom: 3px solid #1e4b7c;
    transition: var(--transition);
}

.staff-card:hover .staff-image {
    filter: brightness(1.05);
}

.staff-info {
    padding: 20px;
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.staff-name {
    font-size: 1.2rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 6px;
    line-height: 1.4;
}

.staff-role {
    color: #1e4b7c;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.staff-description {
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
}

/* Leadership Statement */
.leadership-statement {
    margin-top: 40px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.statement-text {
    color: #475569;
    font-size: 1.1rem;
    line-height: 1.8;
    font-style: italic;
    text-align: center;
    padding: 20px 30px;
    background: rgba(30, 75, 124, 0.03);
    /* border-left: 4px solid #1e4b7c; */
    border-radius: 0 12px 12px 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .staff-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
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
    
    .staff-section {
        padding: 40px 20px;
    }
    
    .section-title {
        font-size: 1.6rem;
    }
    
    .section-description {
        font-size: 1rem;
    }
    
    .staff-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .staff-image {
        height: 240px;
    }
    
    .statement-text {
        font-size: 1rem;
        padding: 20px;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 1.6rem;
        padding-top: 30px;
    }
    
    .staff-name {
        font-size: 1.1rem;
    }
    
    .staff-role {
        font-size: 0.85rem;
    }
    
    .staff-description {
        font-size: 0.85rem;
    }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    .staff-section {
        /* background: #0f172a; */
    }
    
    .page-header {
        /* background: linear-gradient(135deg, #0a1a2f, #1a3a5a); */
    }
    
    .staff-card {
        /* background: #1e293b; */
        /* border-color: #334155; */
    }
    
    .section-title,
    .staff-name {
        /* color: #f1f5f9; */
    }
    
    .section-description,
    .staff-description,
    .statement-text {
        /* color: #cbd5e1; */
    }
    
    .staff-role {
        color: #2e6ca3;
    }
    
    .statement-text {
        background: rgba(255, 255, 255, 0.03);
        border-left-color: #2e6ca3;
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
    
    .staff-card {
        break-inside: avoid;
        box-shadow: none;
        border: 1px solid #ddd;
    }
}
</style>