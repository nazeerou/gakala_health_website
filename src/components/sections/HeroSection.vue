<template>
    <section class="hero-section-unique">
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

        <!-- Main Content Container -->
        <div class="hero-container">
            <div class="hero-grid">
                <!-- Left Content - Text Section -->
                <div class="hero-text-section" data-aos="fade-right" data-aos-duration="1000">
                    <!-- Welcome Badge with Pulse -->
                    <div class="welcome-badge">
                        <div class="pulse-dot"></div>
                        <span>Gakala Health Centre</span>
                        <div class="badge-shine"></div>
                    </div>

                    <!-- Main Title with Medical Typography -->
                    <h1 class="hero-main-title">
                        <span class="title-line">Your Health,</span>
                        <span class="title-line gradient-text">Our Commitment</span>
                        <span class="title-line-small">to Excellence in Care</span>
                    </h1>

                    <!-- Description with Medical Icon -->
                    <div class="hero-description">
                        <div class="description-icon">
                            <i class="fas fa-quote-right"></i>
                        </div>
                        <p>
                            Providing compassionate, quality healthcare with state-of-the-art facilities 
                            and expert medical professionals dedicated to your wellbeing. We combine 
                            modern medicine with compassionate care.
                        </p>
                    </div>

                  

                    <!-- Trust Badges -->
                    <div class="trust-badges">
                        <div class="badge-item">
                            <i class="fas fa-certificate"></i>
                            <span>Certified</span>
                        </div>
                        <div class="badge-item">
                            <i class="fas fa-clock"></i>
                            <span>24/7 Emergency</span>
                        </div>
                        <div class="badge-item">
                            <i class="fas fa-user-md"></i>
                            <span>Expert Doctors</span>
                        </div>
                    </div>
                </div>

                <!-- Right Content - Normal Slider -->
                <div class="hero-gallery-section" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
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

                    <!-- Floating Cards -->
                    <div class="floating-cards">
                       
                    </div>

                    <!-- Experience Badge -->
                    <div class="experience-badge">
                        <div class="experience-number">1+</div>
                        <div class="experience-text">Years of<br>Excellence</div>
                    </div>
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

const props = defineProps({
    heroStats: {
        type: Array,
        default: () => [
            { icon: 'fas fa-smile', value: '5000+', label: 'Happy Patients', hover: false },
            { icon: 'fas fa-user-md', value: '15+', label: 'Expert Doctors', hover: false },
            { icon: 'fas fa-trophy', value: '10+', label: 'Years Experience', hover: false }
        ]
    }
})

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
    // Auto-rotate gallery every 5 seconds
    autoRotateInterval = setInterval(() => {
        nextGallery()
    }, 5000)
})

onUnmounted(() => {
    if (autoRotateInterval) {
        clearInterval(autoRotateInterval)
    }
})
</script>

<style scoped>
/* Hero Section Base */
.hero-section-unique {
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

/* Main Container */
.hero-container {
    position: relative;
    z-index: 10;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
    width: 100%;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 60px;
    align-items: center;
}

/* Left Text Section */
.hero-text-section {
    color: white;
}

/* Welcome Badge */
.welcome-badge {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 12px 24px;
    border-radius: 50px;
    margin-bottom: 30px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
}

.pulse-dot {
    width: 8px;
    height: 8px;
    background: #4ade80;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.badge-shine {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
    transform: rotate(45deg);
    animation: shine 3s infinite;
}

/* Main Title */
.hero-main-title {
    margin-bottom: 30px;
}

.title-line {
    display: block;
    font-size: 4.2rem;
    font-weight: 800;
    line-height: 1.1;
}

.gradient-text {
    background: linear-gradient(135deg, #ffffff, #a8d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    display: inline-block;
}

.title-line-small {
    display: block;
    font-size: 1.8rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 10px;
}

/* Description */
.hero-description {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
    background: rgba(255, 255, 255, 0.05);
    padding: 25px;
    border-radius: 20px;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.description-icon {
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.3);
}

.hero-description p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
}

/* CTA Buttons */
.hero-actions {
    display: flex;
    gap: 20px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.btn-primary {
    position: relative;
    padding: 18px 40px;
    background: white;
    border: none;
    border-radius: 60px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a4b7c;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.btn-shine {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
    transform: rotate(45deg);
    animation: shine 3s infinite;
    pointer-events: none;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
}

.btn-primary:hover .btn-icon {
    transform: translateX(5px);
}

.btn-secondary {
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;
    color: white;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 8px 25px 8px 8px;
    border-radius: 60px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s;
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(5px);
}

.btn-circle {
    width: 45px;
    height: 45px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a4b7c;
    font-size: 1rem;
    transition: all 0.3s;
}

.btn-secondary:hover .btn-circle {
    transform: scale(1.1);
}

/* Medical Stats */
.medical-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-bottom: 30px;
}

.stat-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.stat-card:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
}

.stat-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #4ade80, #60a5fa);
    transition: width 0.3s ease;
}

.stat-icon {
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    transition: all 0.3s;
}

.stat-icon.pulse {
    animation: iconPulse 0.5s ease;
}

.stat-content {
    display: flex;
    flex-direction: column;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
}

.stat-label {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
}

/* Trust Badges */
.trust-badges {
    display: flex;
    gap: 25px;
}

.badge-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

.badge-item i {
    color: #4ade80;
}

/* Gallery Section */
.hero-gallery-section {
    position: relative;
}

/* Slider Container */
.slider-container {
    position: relative;
    width: 100%;
    height: 500px;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
}

/* Main Slider */
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
    padding: 40px;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: white;
    transform: translateY(100%);
    transition: transform 0.5s ease;
}

.slider-container:hover .slider-overlay {
    transform: translateY(0);
}

.slider-content h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.slider-content p {
    font-size: 1rem;
    opacity: 0.9;
}

/* Slider Navigation */
.slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 20;
}

.slider-nav:hover {
    background: white;
    color: #1a4b7c;
    transform: translateY(-50%) scale(1.1);
}

.slider-nav.prev {
    left: 20px;
}

.slider-nav.next {
    right: 20px;
}

/* Slider Dots */
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

/* Slide Counter */
.slide-counter {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    color: white;
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 600;
    z-index: 20;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Thumbnail Strip */
.thumbnail-strip {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.thumbnail-item {
    position: relative;
    width: 80px;
    height: 60px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
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
    background: rgba(26, 75, 124, 0.3);
    border: 2px solid white;
}

.thumbnail-item:hover {
    transform: scale(1.05);
}

/* Floating Cards */
.floating-cards {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 30;
}

.card {
    position: absolute;
    background: white;
    padding: 12px 20px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    animation: floatCard 6s infinite;
    pointer-events: auto;
    cursor: pointer;
    transition: all 0.3s;
}

.card:hover {
    transform: scale(1.1);
    background: #1a4b7c;
    color: white;
}

.card i {
    color: #1a4b7c;
    font-size: 1.2rem;
}

.card:hover i {
    color: white;
}

.card-1 { top: 10%; right: -20px; animation-delay: 0s; }
.card-2 { bottom: 20%; left: -20px; animation-delay: 2s; }
.card-3 { top: 40%; right: -30px; animation-delay: 1s; }

/* Experience Badge */
.experience-badge {
    position: absolute;
    bottom: 30%;
    right: -20px;
    background: linear-gradient(135deg, #1a4b7c, #2e6ca3);
    padding: 20px;
    border-radius: 60px 60px 60px 20px;
    color: white;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    z-index: 35;
    animation: floatBadge 5s infinite;
}

.experience-number {
    font-size: 2.2rem;
    font-weight: 800;
    line-height: 1;
}

.experience-text {
    font-size: 0.85rem;
    opacity: 0.9;
}

/* Wave Divider */
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

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.5; }
}

@keyframes shine {
    0% { transform: translateX(-100%) rotate(45deg); }
    20%, 100% { transform: translateX(100%) rotate(45deg); }
}

@keyframes drawEKG {
    0% { stroke-dashoffset: 2000; }
    20% { stroke-dashoffset: 0; }
    80% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -2000; }
}

@keyframes wave {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.5); }
}

@keyframes iconPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

@keyframes floatCard {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}

@keyframes floatBadge {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(2deg); }
}

@keyframes patternMove {
    0% { background-position: 0 0; }
    100% { background-position: 100px 100px; }
}

/* Responsive Design */
@media (max-width: 1400px) {
    .hero-container {
        padding: 0 30px;
    }
    
    .title-line {
        font-size: 3.8rem;
    }
}

@media (max-width: 1200px) {
    .hero-grid {
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
    .hero-grid {
        grid-template-columns: 1fr;
        gap: 50px;
    }
    
    .hero-text-section {
        text-align: center;
        max-width: 700px;
        margin: 0 auto;
    }
    
    .welcome-badge {
        margin-left: auto;
        margin-right: auto;
    }
    
    .hero-description {
        text-align: left;
    }
    
    .hero-actions {
        justify-content: center;
    }
    
    .medical-stats {
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .trust-badges {
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
    
    .card-1 { right: 0; }
    .card-2 { left: 0; }
    .card-3 { right: 0; }
    .experience-badge { right: 0; }
}

@media (max-width: 768px) {
    .hero-section-unique {
        padding: 80px 0;
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
    
    .hero-actions {
        flex-direction: column;
        align-items: stretch;
    }
    
    .btn-primary, .btn-secondary {
        justify-content: center;
    }
    
    .medical-stats {
        grid-template-columns: 1fr;
    }
    
    .trust-badges {
        flex-wrap: wrap;
    }
    
    .slider-container {
        height: 350px;
    }
    
    .slider-content h3 {
        font-size: 1.4rem;
    }
    
    .slider-nav {
        width: 40px;
        height: 40px;
        font-size: 1rem;
    }
    
    .thumbnail-strip {
        display: none;
    }
    
    .floating-cards {
        display: none;
    }
    
    .experience-badge {
        bottom: 20%;
        right: 10px;
        padding: 12px;
    }
    
    .experience-number {
        font-size: 1.8rem;
    }
    
    .experience-text {
        font-size: 0.7rem;
    }
}

@media (max-width: 480px) {
    .hero-container {
        padding: 0 20px;
    }
    
    .title-line {
        font-size: 2.2rem;
    }
    
    .title-line-small {
        font-size: 1.2rem;
    }
    
    .welcome-badge {
        padding: 8px 16px;
        font-size: 0.9rem;
    }
    
    .hero-description {
        padding: 15px;
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
    
    .slider-nav {
        width: 35px;
        height: 35px;
    }
    
    .slider-nav.prev {
        left: 10px;
    }
    
    .slider-nav.next {
        right: 10px;
    }
    
    .slide-counter {
        top: 10px;
        right: 10px;
        padding: 5px 12px;
        font-size: 0.8rem;
    }
    
    .experience-badge {
        padding: 10px;
    }
    
    .experience-number {
        font-size: 1.5rem;
    }
}

/* Landscape Mode */
@media (max-width: 900px) and (orientation: landscape) {
    .hero-section-unique {
        min-height: auto;
        padding: 60px 0;
    }
    
    .hero-grid {
        gap: 30px;
    }
    
    .slider-container {
        height: 250px;
    }
    
    .thumbnail-strip {
        display: none;
    }
}

/* High Contrast Mode */
@media (prefers-contrast: high) {
    .hero-section-unique {
        background: #0b2b4a;
    }
    
    .gradient-text {
        -webkit-text-fill-color: white;
        background: none;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .float-icon,
    .card,
    .experience-badge,
    .pulse-dot,
    .ekg-path,
    .wave,
    .slider-item,
    .slider-overlay {
        animation: none !important;
        transition: none !important;
    }
    
    .btn-primary:hover {
        transform: none;
    }
}

/* Print Styles */
@media print {
    .hero-section-unique {
        background: white;
        color: black;
        min-height: auto;
        padding: 20px 0;
    }
    
    .hero-background,
    .floating-icons,
    .pulse-waves,
    .ekg-line,
    .wave-divider,
    .btn-primary,
    .btn-secondary,
    .slider-nav,
    .slider-dots,
    .slide-counter,
    .thumbnail-strip,
    .floating-cards,
    .experience-badge {
        display: none;
    }
    
    .hero-text-section {
        color: black;
    }
    
    .gradient-text {
        -webkit-text-fill-color: black;
        background: none;
    }
    
    .slider-container {
        box-shadow: none;
        border: 1px solid #ddd;
    }
    
    .slider-item {
        position: relative;
        opacity: 1;
        visibility: visible;
        height: 300px;
        margin-bottom: 20px;
    }
}
</style>