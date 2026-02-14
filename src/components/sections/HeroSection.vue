<template>
    <section class="hero-section-unique">
        <div class="hero-background-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
        </div>
        
        <div class="floating-elements">
            <div class="floating-icon icon-1"><i class="fas fa-heartbeat"></i></div>
            <div class="floating-icon icon-2"><i class="fas fa-stethoscope"></i></div>
            <div class="floating-icon icon-3"><i class="fas fa-ambulance"></i></div>
            <div class="floating-icon icon-4"><i class="fas fa-syringe"></i></div>
        </div>
        
        <div class="pulse-circle circle-1"></div>
        <div class="pulse-circle circle-2"></div>

        
        <div class="container mx-auto px-6 hero-content">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <!-- Left Content - Text -->
                <div class="text-white" data-aos="fade-right">
                    <div class="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                        <span class="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                        <span class="text-white font-medium">Welcome to Gakala Health Centre</span>
                    </div>
                    
                    <h1 class="hero-title">
                        Your Health Is Our
                        <span class="highlight">Priority</span>
                    </h1>
                    
                    <p class="hero-subtitle">
                        Providing compassionate, quality healthcare with state-of-the-art facilities and expert medical professionals dedicated to your wellbeing.
                    </p>
                    
                    <!-- <div class="flex flex-wrap gap-4 mb-8">
                        <button class="btn-hero" @click="$emit('open-appointment')">
                            <i class="fas fa-calendar-check mr-2"></i>
                            Book Appointment
                        </button>
                        <a href="https://www.youtube.com/watch?v=example" target="_blank" class="btn-hero-outline">
                            <i class="fas fa-play-circle mr-2"></i>
                            Watch Video
                        </a>
                    </div> -->
                    
                    <!-- Stats -->
                    <div class="hero-stats">
                        <div v-for="stat in heroStats" :key="stat.label" class="hero-stat-item">
                            <div class="hero-stat-number">{{ stat.value }}</div>
                            <div class="hero-stat-label">{{ stat.label }}</div>
                        </div>
                    </div>
                </div>
                
                <!-- Right Content - Image Slider -->
                <div class="relative" data-aos="fade-left" data-aos-delay="200">
                    <div class="hero-slider-container">
                        <div class="swiper heroSwiper">
                            <div class="swiper-wrapper">
                                <div v-for="(image, index) in heroImages" :key="index" class="swiper-slide">
                                    <img :src="image.url" :alt="image.alt" class="w-full h-[500px] object-cover">
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                        
                        <div class="hero-slide-content">
                            <div class="hero-slide-title" v-text="currentSlideTitle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Then use Swiper normally
new Swiper('.heroSwiper', {
    // options
})

const props = defineProps({
    heroStats: {
        type: Array,
        default: () => []
    },
    heroImages: {
        type: Array,
        default: () => []
    }
})

defineEmits(['open-appointment'])

const currentSlideTitle = ref('Gakala Health Centre')

onMounted(() => {
    // Initialize Swiper - using global Swiper from window object
    if (window.Swiper) {
        new window.Swiper('.heroSwiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    } else {
        console.error('Swiper not loaded')
    }
})
</script>

<style scoped>
.hero-section-unique {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, var(--primary-dark), var(--primary));
    overflow: hidden;
    padding: 120px 0 80px;
}

.hero-background-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.shape {
    position: absolute;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 50%;
}

.shape-1 {
    width: 300px;
    height: 300px;
    top: -100px;
    right: -100px;
    animation: rotate 30s linear infinite;
}

.shape-2 {
    width: 200px;
    height: 200px;
    bottom: -50px;
    left: -50px;
    animation: rotate 25s linear infinite reverse;
}

.shape-3 {
    width: 150px;
    height: 150px;
    top: 50%;
    left: 20%;
    background: rgba(255, 255, 255, 0.02);
    animation: morph 15s ease-in-out infinite;
}

.shape-4 {
    width: 100px;
    height: 100px;
    bottom: 20%;
    right: 15%;
    background: rgba(255, 255, 255, 0.02);
    animation: float 8s ease-in-out infinite;
}

.floating-elements {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.floating-icon {
    position: absolute;
    color: rgba(255, 255, 255, 0.1);
    font-size: 2rem;
}

.icon-1 { top: 20%; left: 10%; animation: float 7s ease-in-out infinite; }
.icon-2 { bottom: 30%; right: 10%; animation: float 9s ease-in-out infinite reverse; }
.icon-3 { top: 40%; right: 20%; animation: float 6s ease-in-out infinite 2s; }
.icon-4 { bottom: 20%; left: 20%; animation: float 8s ease-in-out infinite 1s; }

.hero-content {
    position: relative;
    z-index: 10;
}

.hero-title {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: white;
    text-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.hero-title .highlight {
    color: var(--primary-soft);
    position: relative;
    display: inline-block;
}

.hero-title .highlight::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.3);
    z-index: -1;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    margin-bottom: 2rem;
    line-height: 1.6;
}

.hero-stats {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
}

.hero-stat-item {
    text-align: center;
}

.hero-stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    line-height: 1;
}

.hero-stat-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.hero-slider-container {
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
    transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
    transition: all 0.5s ease;
}

.hero-slider-container:hover {
    transform: perspective(1000px) rotateY(0) rotateX(0);
}

.hero-slider-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(30,75,124,0.3), transparent);
    z-index: 2;
    pointer-events: none;
}

.hero-slide-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 30px;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: white;
    z-index: 3;
    transform: translateY(100%);
    transition: transform 0.5s ease;
}

.hero-slider-container:hover .hero-slide-content {
    transform: translateY(0);
}

.hero-slide-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 5px;
}

.floating-badge {
    position: absolute;
    top: -20px;
    right: -20px;
    background: white;
    color: var(--primary);
    padding: 15px 25px;
    border-radius: 50px;
    font-weight: 700;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    z-index: 20;
    animation: float 5s ease-in-out infinite;
}

.floating-badge i {
    margin-right: 10px;
    color: var(--primary);
}

.pulse-circle {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    z-index: 1;
}

.circle-1 {
    top: 20%;
    right: 10%;
    animation: pulse-soft 4s infinite;
}

.circle-2 {
    bottom: 30%;
    left: 5%;
    width: 150px;
    height: 150px;
    animation: pulse-soft 6s infinite reverse;
}

.btn-hero {
    background: white;
    color: var(--primary);
    padding: 15px 35px;
    border-radius: 50px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1.1rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.btn-hero:hover {
    background: var(--primary-soft);
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}

.btn-hero-outline {
    background: transparent;
    color: white;
    padding: 15px 35px;
    border-radius: 50px;
    font-weight: 600;
    border: 2px solid white;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1.1rem;
    text-decoration: none;
    display: inline-block;
}

.btn-hero-outline:hover {
    background: white;
    color: var(--primary);
    transform: translateY(-3px);
}

@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
}

@keyframes pulse-soft {
    0% { box-shadow: 0 0 0 0 rgba(30, 75, 124, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(30, 75, 124, 0); }
    100% { box-shadow: 0 0 0 0 rgba(30, 75, 124, 0); }
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes morph {
    0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
    50% { border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%; }
    100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-stats {
        flex-direction: column;
        gap: 1rem;
    }
}
</style>