<template>
    <section class="hero-section">
        <!-- Animated Medical Background -->
        <div class="hero-background">
            <div class="medical-pattern"></div>
            <div class="gradient-overlay"></div>
            
            <!-- Animated Medical Icons -->
            <div class="floating-icons">
                <div class="float-icon icon-1"><i class="fas fa-heartbeat"></i></div>
                <div class="float-icon icon-2"><i class="fas fa-stethoscope"></i></div>
                <div class="float-icon icon-3"><i class="fas fa-syringe"></i></div>
                <div class="float-icon icon-4"><i class="fas fa-pills"></i></div>
                <div class="float-icon icon-5"><i class="fas fa-microscope"></i></div>
                <div class="float-icon icon-6"><i class="fas fa-ambulance"></i></div>
                <div class="float-icon icon-7"><i class="fas fa-hospital"></i></div>
                <div class="float-icon icon-8"><i class="fas fa-bone"></i></div>
            </div>
            
            <!-- Pulse Wave Animation -->
            <div class="pulse-waves">
                <div class="wave wave1"></div>
                <div class="wave wave2"></div>
                <div class="wave wave3"></div>
            </div>
            
            <!-- EKG Line Animation -->
            <div class="ekg-line">
                <svg viewBox="0 0 1200 200" preserveAspectRatio="none">
                    <path class="ekg-path" d="M0,100 L50,100 L70,180 L90,20 L110,100 L200,100 L220,180 L240,20 L260,100 L350,100 L370,180 L390,20 L410,100 L500,100 L520,180 L540,20 L560,100 L650,100 L670,180 L690,20 L710,100 L800,100 L820,180 L840,20 L860,100 L950,100 L970,180 L990,20 L1010,100 L1100,100 L1120,180 L1140,20 L1160,100 L1200,100" 
                          stroke="rgba(255,255,255,0.15)" 
                          fill="none" 
                          stroke-width="3"/>
                </svg>
            </div>
        </div>

        <div class="hero-container">
            <!-- Left Content - Text Section -->
            <div class="hero-content">
                <div class="hero-badge1">
                    <span>{{ t('hero.badge') }}</span>
                </div>
                
                <h1 class="hero-title">
                    <span class="title-line">{{ t('hero.title.line1') }}</span>
                    <span class="title-line highlight">{{ t('hero.title.line2') }}</span>
                    <span class="title-line-small">{{ t('hero.title.line3') }}</span>
                </h1>

                <div class="hero-description">
                    <i class="fas fa-quote-left quote-icon"></i>
                    <p>{{ t('hero.description') }}</p>
                </div>

                <div class="hero-badges">
                    <div class="badge-item">
                        <i class="fas fa-certificate"></i>
                        <span>{{ t('hero.badges.certified') }}</span>
                    </div>
                    <div class="badge-item">
                        <i class="fas fa-clock"></i>
                        <span>{{ t('hero.badges.emergency') }}</span>
                    </div>
                    <div class="badge-item">
                        <i class="fas fa-user-md"></i>
                        <span>{{ t('hero.badges.expert_doctors') }}</span>
                    </div>
                </div>

                <div class="hero-actions">
                    <!-- <button class="btn-primary" @click="$emit('open-appointment')">
                        {{ t('hero.book_button') }}
                        <i class="fas fa-arrow-right"></i>
                    </button> -->
                </div>
            </div>

            <!-- Right Content - Slider -->
            <div class="hero-gallery-section">
                <!-- Main Slider Container -->
                <div class="slider-container">
                    <!-- Main Slider -->
                    <div class="main-slider">
                        <div v-for="(image, index) in galleryImages" 
                             :key="index" 
                             class="slider-item"
                             :class="{ active: currentGalleryIndex === index }">
                            <img :src="image.url" :alt="image.alt" class="slider-image">
                            <div class="slider-overlay">
                                <div class="slider-content">
                                    <h3>{{ image.title }}</h3>
                                    <p>{{ image.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slider Navigation -->
                    <button class="slider-nav prev" @click="prevGallery">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="slider-nav next" @click="nextGallery">
                        <i class="fas fa-chevron-right"></i>
                    </button>

                    <!-- Slider Dots -->
                    <div class="slider-dots">
                        <span v-for="(dot, index) in galleryImages" 
                              :key="index"
                              :class="{ active: currentGalleryIndex === index }"
                              @click="setCurrentGallery(index)"></span>
                    </div>

                    <!-- Slide Counter -->
                    <div class="slide-counter">
                        {{ currentGalleryIndex + 1 }} / {{ galleryImages.length }}
                    </div>
                </div>

                <!-- Thumbnail Strip -->
                <div class="thumbnail-strip">
                    <div v-for="(image, index) in galleryImages" 
                         :key="index"
                         class="thumbnail-item"
                         :class="{ active: currentGalleryIndex === index }"
                         @click="setCurrentGallery(index)">
                        <img :src="image.url" :alt="image.alt">
                        <div class="thumbnail-overlay"></div>
                    </div>
                </div>

                <!-- Experience Badge -->
                <div class="experience-badge">
                    <div class="experience-number">1+</div>
                    <div class="experience-text">{{ t('hero.experience') }}</div>
                </div>
            </div>
        </div>

        <!-- Bottom Wave Divider -->
        <div class="wave-divider">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path d="M0,0 C480,100 960,100 1440,0 L1440,120 L0,120 Z" fill="#ffffff"></path>
            </svg>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
defineEmits(['open-appointment'])

const galleryImages = ref([
    {
        url: '/assets/img11.jpg',
        alt: 'Modern Facility',
        title: 'Modern Facility',
        description: 'State-of-the-art equipment'
    },
    {
        url: '/assets/img1.jpg',
        alt: 'Expert Doctors',
        title: 'Expert Doctors',
        description: 'Qualified professionals'
    },
    {
        url: '/assets/img4.jpg',
        alt: 'Patient Care',
        title: 'Patient Care',
        description: 'Compassionate service'
    },
    {
        url: '/assets/img5.jpg',
        alt: 'Emergency Services',
        title: 'Emergency Services',
        description: '24/7 availability'
    },
    {
        url: '/assets/img9.jpg',
        alt: 'Emergency Services',
        title: 'Emergency Services',
        description: '24/7 availability'
    },
    {
        url: '/assets/img8.jpg',
        alt: 'Emergency Services',
        title: 'Emergency Services',
        description: '24/7 availability'
    },
    {
        url: '/assets/img7.jpg',
        alt: 'Emergency Services',
        title: 'Emergency Services',
        description: '24/7 availability'
    }
])

const currentGalleryIndex = ref(0)
let autoRotateInterval = null

const setCurrentGallery = (index) => {
    currentGalleryIndex.value = index
}

const prevGallery = () => {
    currentGalleryIndex.value = (currentGalleryIndex.value - 1 + galleryImages.value.length) % galleryImages.value.length
}

const nextGallery = () => {
    currentGalleryIndex.value = (currentGalleryIndex.value + 1) % galleryImages.value.length
}

onMounted(() => {
    autoRotateInterval = setInterval(() => {
        nextGallery()
    }, 5500)
})

onUnmounted(() => {
    if (autoRotateInterval) {
        clearInterval(autoRotateInterval)
    }
})
</script>

<style scoped>
.hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(145deg, #0b2b4a 0%, #1a4b7c 50%, #2e6ca3 100%);
    overflow: hidden;
    padding: 100px 0;
    font-family: 'Inter', sans-serif;
}

/* Animated Background */
.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.medical-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' stroke='rgba(255,255,255,0.03)' fill='none' stroke-width='1'/%3E%3C/svg%3E");
    animation: patternMove 20s linear infinite;
}

.gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                linear-gradient(135deg, rgba(11,43,74,0.9) 0%, rgba(26,75,124,0.7) 100%);
}

/* Floating Medical Icons */
.floating-icons {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.float-icon {
    position: absolute;
    color: rgba(255, 255, 255, 0.1);
    font-size: 2rem;
    filter: drop-shadow(0 0 10px rgba(255,255,255,0.3));
    animation: float 15s infinite;
}

.icon-1 { top: 10%; left: 5%; animation-delay: 0s; }
.icon-2 { top: 70%; left: 15%; animation-delay: 2s; font-size: 2.5rem; }
.icon-3 { top: 20%; right: 10%; animation-delay: 4s; }
.icon-4 { bottom: 15%; right: 20%; animation-delay: 1s; font-size: 1.8rem; }
.icon-5 { top: 50%; left: 10%; animation-delay: 3s; font-size: 2.2rem; }
.icon-6 { bottom: 30%; left: 30%; animation-delay: 5s; }
.icon-7 { top: 40%; right: 5%; animation-delay: 2.5s; font-size: 2.8rem; }
.icon-8 { bottom: 40%; right: 15%; animation-delay: 3.5s; }

/* Pulse Waves */
.pulse-waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    z-index: 3;
}

.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 100% 100% 0 0;
    animation: wave 8s infinite;
}

.wave1 { animation-delay: 0s; opacity: 0.3; }
.wave2 { animation-delay: 2s; opacity: 0.2; }
.wave3 { animation-delay: 4s; opacity: 0.1; }

/* EKG Line */
.ekg-line {
    position: absolute;
    bottom: 50px;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: 4;
    opacity: 0.2;
}

.ekg-path {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: drawEKG 8s linear infinite;
}

.hero-container {
    position: relative;
    z-index: 10;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 60px;
    align-items: center;
}

/* Left Content Styles - Updated for dark background */
.hero-content {
    color: white;
}

.hero-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.15);
    color: white;
    padding: 8px 20px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.95rem;
    margin-bottom: 25px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
}

.hero-title {
    margin-bottom: 30px;
}

.title-line {
    display: block;
    font-size: 3.2rem;
    font-weight: 700;
    color: white;
    line-height: 1.2;
}

.highlight {
    color: #ffffff;
    position: relative;
    display: inline-block;
}

.highlight::after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    height: 12px;
    /* background: rgba(255, 255, 255, 0.2); */
    z-index: -1;
    border-radius: 6px;
}

.title-line-small {
    display: block;
    font-size: 1.8rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 10px;
}

.hero-description {
    display: flex;
    gap: 15px;
    margin-bottom: 40px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 25px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.quote-icon {
    color: white;
    opacity: 0.5;
    font-size: 1.5rem;
}

.hero-description p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
}

.hero-badges {
    display: flex;
    gap: 30px;
    margin-bottom: 40px;
}

.badge-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
}

.badge-item i {
    color: #4ade80;
    font-size: 1.2rem;
}

.btn-primary {
    background: white;
    color: #1e4b7c;
    border: none;
    padding: 16px 32px;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

/* Right Content - Slider Styles */
.hero-gallery-section {
    position: relative;
}

.slider-container {
    position: relative;
    width: 100%;
    height: 500px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.2);
}

.main-slider {
    position: relative;
    width: 100%;
    height: 100%;
}

.slider-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
}

.slider-item.active {
    opacity: 1;
    visibility: visible;
}

.slider-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slider-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 30px;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: white;
    transform: translateY(100%);
    transition: transform 0.5s ease;
}

.slider-container:hover .slider-overlay {
    transform: translateY(0);
}

.slider-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 5px;
}

.slider-content p {
    font-size: 0.95rem;
    opacity: 0.9;
}

.slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 20;
}

.slider-nav:hover {
    background: white;
    color: #1e4b7c;
    transform: translateY(-50%) scale(1.1);
}

.slider-nav.prev {
    left: 20px;
}

.slider-nav.next {
    right: 20px;
}

.slider-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 20;
}

.slider-dots span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;
}

.slider-dots span.active {
    width: 30px;
    border-radius: 10px;
    background: white;
}

.slide-counter {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    color: white;
    padding: 6px 12px;
    border-radius: 30px;
    font-size: 0.85rem;
    font-weight: 600;
    z-index: 20;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.thumbnail-strip {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    overflow-x: auto;
}

.thumbnail-strip::-webkit-scrollbar {
    height: 4px;
}

.thumbnail-strip::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

.thumbnail-strip::-webkit-scrollbar-thumb {
    background: #1e4b7c;
    border-radius: 4px;
}

.thumbnail-item {
    position: relative;
    width: 70px;
    height: 50px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.thumbnail-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.thumbnail-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
}

.thumbnail-item.active {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.thumbnail-item.active .thumbnail-overlay {
    background: rgba(30, 75, 124, 0.3);
    border: 2px solid white;
}

.thumbnail-item:hover {
    transform: scale(1.05);
}

.experience-badge {
    position: absolute;
    bottom: 100px;
    right: -20px;
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    padding: 20px;
    border-radius: 60px 60px 60px 20px;
    color: white;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    z-index: 30;
    animation: floatBadge 5s infinite;
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.experience-number {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1;
}

.experience-text {
    font-size: 0.85rem;
    opacity: 0.9;
    line-height: 1.3;
}

.wave-divider {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    z-index: 20;
    line-height: 0;
}

.wave-divider svg {
    width: 100%;
    height: auto;
    fill: #ffffff;
}

/* Animations */
@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(10deg); }
}

@keyframes wave {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.5); }
}

@keyframes drawEKG {
    0% { stroke-dashoffset: 2000; }
    20% { stroke-dashoffset: 0; }
    80% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -2000; }
}

@keyframes patternMove {
    0% { background-position: 0 0; }
    100% { background-position: 100px 100px; }
}

@keyframes floatBadge {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-10px) rotate(2deg);
    }
}

/* Responsive */
@media (max-width: 1200px) {
    .hero-container {
        gap: 40px;
    }
    
    .title-line {
        font-size: 3.2rem;
    }
    
    .slider-container {
        height: 450px;
    }
}

@media (max-width: 1024px) {
    .hero-container {
        grid-template-columns: 1fr;
        gap: 50px;
    }
    
    .hero-content {
        text-align: center;
        max-width: 700px;
        margin: 0 auto;
    }
    
    .hero-badge {
        margin-left: auto;
        margin-right: auto;
    }
    
    .hero-description {
        text-align: left;
    }
    
    .hero-badges {
        justify-content: center;
    }
    
    .hero-gallery-section {
        max-width: 700px;
        margin: 0 auto;
        width: 100%;
    }
    
    .slider-container {
        height: 400px;
    }
    
    .experience-badge {
        right: 20px;
    }
}

@media (max-width: 768px) {
    .hero-section {
        padding: 100px 0 60px;
    }
    
    .hero-container {
        padding: 0 20px;
    }
    
    .title-line {
        font-size: 2.8rem;
    }
    
    .title-line-small {
        font-size: 1.4rem;
    }
    
    .hero-description p {
        font-size: 1rem;
    }
    
    .hero-badges {
        flex-wrap: wrap;
    }
    
    .slider-container {
        height: 350px;
    }
    
    .slider-nav {
        width: 40px;
        height: 40px;
    }
    
    .experience-badge {
        bottom: 80px;
        padding: 15px;
    }
    
    .experience-number {
        font-size: 1.8rem;
    }
}

@media (max-width: 480px) {
    .title-line {
        font-size: 2.2rem;
    }
    
    .title-line-small {
        font-size: 1.2rem;
    }
    
    .slider-container {
        height: 300px;
        border-radius: 20px;
    }
    
    .slider-overlay {
        padding: 20px;
    }
    
    .slider-content h3 {
        font-size: 1.2rem;
    }
    
    .slider-content p {
        font-size: 0.85rem;
    }
    
    .slider-nav.prev {
        left: 10px;
    }
    
    .slider-nav.next {
        right: 10px;
    }
    
    .thumbnail-strip {
        display: none;
    }
    
    .experience-badge {
        bottom: 60px;
        right: 10px;
        padding: 12px;
    }
    
    .experience-number {
        font-size: 1.5rem;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .float-icon,
    .wave,
    .ekg-path,
    .slider-item,
    .slider-overlay,
    .experience-badge,
    .medical-pattern {
        animation: none;
        transition: none;
    }
}
</style>