<template>
    <section class="why-choose-section">
        <!-- Animated Background Elements -->
        <div class="bg-ornament ornament-1"></div>
        <div class="bg-ornament ornament-2"></div>
        <div class="bg-ornament ornament-3"></div>
        
        <div class="container">
            <!-- Super Header with Unique Design -->
            <div class="super-header">
                <div class="header-shine"></div>
                <span class="super-badge">{{ t('why_choose.super_badge') }}</span>
                <h2 class="super-title">{{ t('why_choose.super_title') }}</h2>
                <div class="title-decoration">
                    <span class="decoration-line"></span>
                    <!-- <i class="fas fa-star-of-life decoration-icon"></i> -->
                    <span class="decoration-line"></span>
                </div>
                <p class="super-subtitle">{{ t('why_choose.super_subtitle') }}</p>
            </div>

            <!-- Cards Grid -->
            <div class="features-grid">
                <!-- Compassionate Care Card -->
                <div class="feature-card">
                    <div class="card-image-wrapper">
                        <img src="/assets/img2.jpg" alt="Compassionate Care" class="card-image">
                        <div class="image-overlay"></div>
                    </div>
                    <div class="card-content">
                        <div class="card-icon">
                            <i class="fas fa-heart"></i>
                        </div>
                        <h3 class="feature-title">{{ t('why_choose.compassion.title') }}</h3>
                        <p class="feature-description">{{ t('why_choose.compassion.description') }}</p>
                        
                        <!-- Feature Points List -->
                        <div class="feature-points">
                            <div class="point-item">
                                <i class="fas fa-check-circle"></i>
                                <span>{{ t('why_choose.compassion.point1') }}</span>
                            </div>
                            <div class="point-item">
                                <i class="fas fa-check-circle"></i>
                                <span>{{ t('why_choose.compassion.point2') }}</span>
                            </div>
                            <div class="point-item">
                                <i class="fas fa-check-circle"></i>
                                <span>{{ t('why_choose.compassion.point3') }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Expert Medical Team Card -->
                <div class="feature-card">
                    <div class="card-image-wrapper">
                        <img src="/assets/img1.jpg" alt="Expert Medical Team" class="card-image">
                        <div class="image-overlay"></div>
                    </div>
                    <div class="card-content">
                        <div class="card-icon">
                            <i class="fas fa-user-md"></i>
                        </div>
                        <h3 class="feature-title">{{ t('why_choose.expert.title') }}</h3>
                        <p class="feature-description">{{ t('why_choose.expert.description') }}</p>
                        
                        <!-- Feature Points List -->
                        <div class="feature-points">
                            <div class="point-item">
                                <i class="fas fa-check-circle"></i>
                                <span>{{ t('why_choose.expert.point1') }}</span>
                            </div>
                            <div class="point-item">
                                <i class="fas fa-check-circle"></i>
                                <span>{{ t('why_choose.expert.point2') }}</span>
                            </div>
                            <div class="point-item">
                                <i class="fas fa-check-circle"></i>
                                <span>{{ t('why_choose.expert.point3') }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modern Facilities Card -->
                <div class="feature-card">
                    <div class="card-image-wrapper">
                        <img src="/assets/img16.jpg" alt="Modern Facilities" class="card-image">
                        <div class="image-overlay"></div>
                    </div>
                    <div class="card-content">
                        <div class="card-icon">
                            <i class="fas fa-hospital"></i>
                        </div>
                        <h3 class="feature-title">{{ t('why_choose.facilities.title') }}</h3>
                        <p class="feature-description">{{ t('why_choose.facilities.description') }}</p>
                        
                        <!-- Feature Points List -->
                        <div class="feature-points">
                            <div class="point-item">
                                <i class="fas fa-check-circle"></i>
                                <span>{{ t('why_choose.facilities.point1') }}</span>
                            </div>
                            <div class="point-item">
                                <i class="fas fa-check-circle"></i>
                                <span>{{ t('why_choose.facilities.point2') }}</span>
                            </div>
                            <div class="point-item">
                                <i class="fas fa-check-circle"></i>
                                <span>{{ t('why_choose.facilities.point3') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Floating Medical Icons -->
            <div class="floating-icons">
                <i class="fas fa-heartbeat float-icon icon-1"></i>
                <i class="fas fa-stethoscope float-icon icon-2"></i>
                <i class="fas fa-syringe float-icon icon-3"></i>
                <i class="fas fa-pills float-icon icon-4"></i>
                <i class="fas fa-microscope float-icon icon-5"></i>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.why-choose-section {
    padding: 10px 0;
    background: linear-gradient(145deg, #f8fafd 0%, #ffffff 100%);
    position: relative;
    overflow: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Animated Background Ornaments */
.bg-ornament {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(30, 75, 124, 0.05) 0%, transparent 70%);
    z-index: 1;
}

.ornament-1 {
    top: -100px;
    left: -100px;
    animation: floatOrnament 20s infinite;
}

.ornament-2 {
    bottom: -150px;
    right: -50px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(46, 108, 163, 0.05) 0%, transparent 70%);
    animation: floatOrnament 25s infinite reverse;
}

.ornament-3 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(30, 75, 124, 0.03) 0%, transparent 70%);
    animation: pulseOrnament 15s infinite;
}

/* Super Header Design */
.super-header {
    text-align: center;
    margin-bottom: 60px;
    position: relative;
    z-index: 10;
}

.header-shine {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(30, 75, 124, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(40px);
    animation: pulseShine 4s infinite;
}

.super-badge {
    font-weight: 600;
    font-size: 0.95rem;
    text-transform: uppercase;
    position: relative;
    z-index: 2;
}

.super-title {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* margin-bottom: 15px; */
    line-height: 1;
    position: relative;
    z-index: 2;
}

.title-decoration {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    /* margin-bottom: 15px; */
    position: relative;
    z-index: 2;
}

.decoration-line {
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #1e4b7c, #2e6ca3, #1e4b7c, transparent);
}

.decoration-icon {
    /* font-size: 1.5rem; */
    color: #1e4b7c;
    animation: rotateStar 8s infinite linear;
}

.super-subtitle {
    font-size: 1.2rem;
    color: #4a5568;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
    position: relative;
    z-index: 2;
}

/* Cards Grid */
.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    position: relative;
    z-index: 20;
}

/* Card Styles */
.feature-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    border: 1px solid rgba(226, 232, 240, 0.6);
}

.feature-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 30px 50px rgba(30, 75, 124, 0.2);
    border-color: rgba(30, 75, 124, 0.2);
}

/* Card Image */
.card-image-wrapper {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
}

.feature-card:hover .card-image {
    transform: scale(1.1);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, 
        rgba(30, 75, 124, 0.2),
        rgba(30, 75, 124, 0.4));
    transition: all 0.3s ease;
}

.feature-card:hover .image-overlay {
    background: linear-gradient(to bottom, 
        rgba(30, 75, 124, 0.3),
        rgba(30, 75, 124, 0.5));
}

/* Card Content */
.card-content {
    padding: 30px 25px;
    position: relative;
    background: white;
}

.card-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    position: absolute;
    top: -30px;
    left: 25px;
    box-shadow: 0 10px 20px rgba(30, 75, 124, 0.3);
    transition: all 0.3s ease;
    z-index: 30;
}

.feature-card:hover .card-icon {
    transform: rotate(360deg);
    background: linear-gradient(135deg, #2e6ca3, #1e4b7c);
}

.feature-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: #1a2634;
    margin: 15px 0 15px;
    line-height: 1.3;
    padding-top: 10px;
}

.feature-description {
    color: #4a5568;
    line-height: 1.7;
    margin-bottom: 25px;
    font-size: 1rem;
    border-left: 3px solid #1e4b7c;
    padding-left: 15px;
}

/* Feature Points */
.feature-points {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
}

.point-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 15px;
    background: rgba(30, 75, 124, 0.03);
    border-radius: 8px;
    transition: all 0.3s ease;
    border: 1px solid rgba(30, 75, 124, 0.1);
}

.feature-card:hover .point-item {
    background: rgba(30, 75, 124, 0.05);
    transform: translateX(5px);
    border-color: rgba(30, 75, 124, 0.2);
}

.point-item i {
    color: #1e4b7c;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.feature-card:hover .point-item i {
    transform: scale(1.2);
    color: #2e6ca3;
}

.point-item span {
    color: #2d3748;
    font-size: 0.95rem;
    font-weight: 500;
}

/* Floating Icons */
.floating-icons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    pointer-events: none;
}

.float-icon {
    position: absolute;
    color: rgba(30, 75, 124, 0.1);
    font-size: 2rem;
    animation: floatIcon 15s infinite;
}

.icon-1 { top: 10%; left: 5%; animation-delay: 0s; }
.icon-2 { top: 20%; right: 10%; animation-delay: 2s; }
.icon-3 { bottom: 30%; left: 15%; animation-delay: 4s; }
.icon-4 { bottom: 20%; right: 20%; animation-delay: 1s; }
.icon-5 { top: 40%; right: 30%; animation-delay: 3s; }

/* Animations */
@keyframes floatOrnament {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
}

@keyframes pulseOrnament {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

@keyframes pulseShine {
    0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.5; }
    50% { transform: translateX(-50%) scale(1.5); opacity: 0.8; }
}

@keyframes rotateStar {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes floatIcon {
    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
    50% { transform: translateY(-30px) rotate(10deg); opacity: 0.2; }
}

/* Responsive Design */
@media (max-width: 1024px) {
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .super-title {
        font-size: 3rem;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 20px;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
    
    .super-title {
        font-size: 2.5rem;
    }
    
    .super-subtitle {
        font-size: 1.1rem;
        padding: 0 15px;
    }
    
    .card-image-wrapper {
        height: 200px;
    }
    
    .feature-title {
        font-size: 1.4rem;
    }
    
    .title-decoration {
        gap: 10px;
    }
    
    .decoration-line {
        width: 40px;
    }
}

@media (max-width: 480px) {
    .super-title {
        font-size: 2rem;
    }
    
    .card-content {
        padding: 25px 20px;
    }
    
    .card-icon {
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
        top: -25px;
    }
    
    .bg-ornament {
        display: none;
    }

     .card-image-wrapper {
        height: 300px;
    }
}
</style>