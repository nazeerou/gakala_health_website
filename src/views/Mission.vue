<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">{{ t('mission.title') }}</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">{{ t('mission.breadcrumb.home') }}</router-link>
                    <span class="separator">›</span>
                    <router-link to="/about">{{ t('mission.breadcrumb.about') }}</router-link>
                    <span class="separator">›</span>
                    <span>{{ t('mission.breadcrumb.current') }}</span>
                </div>
            </div>
        </div>
        
        <div class="mission-section">
            <div class="container mx-auto px-6">
                <!-- Mission & Vision Cards -->
                <div class="mission-vision-grid">
                    <!-- Mission Card -->
                    <div class="mission-card">
                        <div class="card-icon mission-icon">
                            <i class="fas fa-bullseye"></i>
                        </div>
                        <h2 class="card-title">{{ t('mission.mission.title') }}</h2>
                        <p class="card-text">{{ t('mission.mission.text') }}</p>
                    </div>
                    
                    <!-- Vision Card -->
                    <div class="vision-card">
                        <div class="card-icon vision-icon">
                            <i class="fas fa-eye"></i>
                        </div>
                        <h2 class="card-title">{{ t('mission.vision.title') }}</h2>
                        <p class="card-text">{{ t('mission.vision.text') }}</p>
                    </div>
                </div>
                
                <!-- Core Values Section -->
                <div class="values-section">
                    <h3 class="values-section-title">{{ t('mission.values.title') }}</h3>
                    <div class="values-grid">

                        <!-- Compassion -->
                        <div class="value-card">
                            <div class="value-icon">
                                <i class="fas fa-hand-holding-heart"></i>
                            </div>
                            <h4 class="value-title">{{ t('mission.values.list[0].title') }}</h4>
                            <p class="value-description">{{ t('mission.values.list[0].description') }}</p>
                        </div>

                        <!-- Integrity -->
                        <div class="value-card">
                            <div class="value-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <h4 class="value-title">{{ t('mission.values.list[1].title') }}</h4>
                            <p class="value-description">{{ t('mission.values.list[1].description') }}</p>
                        </div>

                        <!-- Excellence -->
                        <div class="value-card">
                            <div class="value-icon">
                                <i class="fas fa-star"></i>
                            </div>
                            <h4 class="value-title">{{ t('mission.values.list[2].title') }}</h4>
                            <p class="value-description">{{ t('mission.values.list[2].description') }}</p>
                        </div>

                        <!-- Teamwork -->
                        <div class="value-card">
                            <div class="value-icon">
                                <i class="fas fa-handshake"></i>
                            </div>
                            <h4 class="value-title">{{ t('mission.values.list[3].title') }}</h4>
                            <p class="value-description">{{ t('mission.values.list[3].description') }}</p>
                        </div>

                                 <!-- Patient-Centered Care -->
                        <div class="value-card">
                            <div class="value-icon">
                                <i class="fas fa-heart"></i>
                            </div>
                            <h4 class="value-title">{{ t('mission.values.list[4].title') }}</h4>
                            <p class="value-description">{{ t('mission.values.list[4].description') }}</p>
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
    transition: all 0.3s ease;
    border-bottom: 1px solid transparent;
}

.page-breadcrumb a:hover {
    border-bottom-color: white;
    opacity: 1;
}

/* Mission Section */
.mission-section {
    padding: 60px 20px;
    background: #ffffff;
    max-width: 1000px;
    margin: 0 auto;
}

/* Mission & Vision Grid */
.mission-vision-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-bottom: 60px;
}

/* Card Styles */
.mission-card,
.vision-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 35px 30px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.mission-card:hover,
.vision-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    border-color: rgba(30, 75, 124, 0.2);
}

.mission-card::before,
.vision-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    /* background: linear-gradient(90deg, #1e4b7c, #2e6ca3); */
}

.card-icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 2rem;
    transition: all 0.3s ease;
}

.mission-icon {
    background: rgba(30, 75, 124, 0.08);
    color: #1e4b7c;
}

.vision-icon {
    background: rgba(46, 108, 163, 0.08);
    color: #2e6ca3;
}

.mission-card:hover .mission-icon,
.vision-card:hover .vision-icon {
    transform: scale(1.05);
}

.card-title {
    font-size: 1.6rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 15px;
    text-align: center;
    position: relative;
    padding-bottom: 12px;
}

.card-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #1e4b7c, #2e6ca3);
    border-radius: 1px;
}

.card-text {
    color: #475569;
    line-height: 1.7;
    font-size: 1rem;
    text-align: center;
}

/* Values Section */
.values-section {
    margin-top: 40px;
}

.values-section-title {
    font-size: 1.8rem;
    font-weight: 600;
    color: #1e293b;
    text-align: center;
    margin-bottom: 40px;
    position: relative;
    padding-bottom: 15px;
    letter-spacing: -0.01em;
}

.values-section-title::after {
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

/* Values Grid - 3 Columns */
.values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    width: 100%;
}

.value-card {
    background: #ffffff;
    border-radius: 8px;
    padding: 20px 20px 0 20px;
    text-align: center;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.value-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    border-color: rgba(30, 75, 124, 0.2);
}

/* All value icons have the same background */
.value-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    /* Same background for all icons */
    background: rgba(30, 75, 124, 0.08);
    color: #1e4b7c;
}

.value-card:hover .value-icon {
    transform: scale(1.05);
    background: rgba(30, 75, 124, 0.12);
    color: #1e4b7c;
}

.value-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 8px;
}

.value-description {
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
}

/* Responsive Design */
@media (max-width: 968px) {
    .mission-vision-grid {
        grid-template-columns: 1fr;
        gap: 25px;
        margin-bottom: 40px;
    }
    
    .values-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    
    .page-title {
        font-size: 2.2rem;
    }
    
    .card-title {
        font-size: 1.5rem;
    }
}

@media (max-width: 768px) {
    .page-header {
        padding: 60px 0 30px;
    }
    
    .page-title {
        font-size: 2rem;
    }
    
    .mission-card,
    .vision-card {
        padding: 25px 20px;
    }
    
    .card-text {
        font-size: 0.95rem;
    }
    
    .values-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .values-section-title {
        font-size: 1.6rem;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 1.6rem;
    }
    
    .card-title {
        font-size: 1.4rem;
    }
    
    .value-card {
        padding: 25px 15px;
    }
    
    .value-icon {
        width: 55px;
        height: 55px;
        font-size: 1.4rem;
    }
    
    .value-title {
        font-size: 1rem;
    }
    
    .value-description {
        font-size: 0.85rem;
    }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    .mission-section {
        background: #0f172a;
    }
    
    .page-header {
        background: linear-gradient(135deg, #0a1a2f, #1a3a5a);
    }
    
    .mission-card,
    .vision-card,
    .value-card {
        background: #1e293b;
        border-color: #334155;
    }
    
    .card-title,
    .values-section-title,
    .value-title {
        color: #f1f5f9;
    }
    
    .card-text,
    .value-description {
        color: #cbd5e1;
    }
    
    .mission-card:hover,
    .vision-card:hover,
    .value-card:hover {
        border-color: rgba(46, 108, 163, 0.3);
    }
    
    /* Dark mode icon background */
    .value-icon {
        background: rgba(255, 255, 255, 0.08);
        color: #f1f5f9;
    }
    
    .value-card:hover .value-icon {
        background: rgba(255, 255, 255, 0.12);
        color: #f1f5f9;
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
    
    .mission-card,
    .vision-card,
    .value-card {
        break-inside: avoid;
        box-shadow: none;
        border: 1px solid #ddd;
    }
}
</style>