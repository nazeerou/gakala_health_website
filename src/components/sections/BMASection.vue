<template>
    <div>
        <!-- About Us Section -->
        <section class="about-section">
            <div class="about-container">
                <!-- Section Header - Centered -->
                <div class="section-header">
                    <div class="about-badge">
                        <span>ABOUT US</span>
                    </div>
                    
                    <h2 class="about-title">
                        <span class="highlight">Gakala Health Centre</span>
                    </h2>
                    
                    <p class="section-subtitle">
                        Providing quality healthcare with compassion and faith since 2014
                    </p>
                </div>

                <div class="about-grid">
                    <!-- Left Column - Image -->
                    <div class="about-image-wrapper" data-aos="fade-right">
                        <img 
                            src="/assets/img5.jpg" 
                            alt="Gakala Health Centre - Our Facility"
                            class="about-image"
                            loading="lazy"
                        />
                        <div class="image-overlay"></div>
                        <div class="image-caption">
                            <i class="fas fa-calendar-alt"></i>
                            <span>Est. 2014</span>
                        </div>
                        
                        <!-- Decorative Elements -->
                        <div class="image-dots"></div>
                        <div class="image-shape"></div>
                    </div>
                    
                    <!-- Right Column - Content -->
                    <div class="about-content" data-aos="fade-left">
                        <div class="about-description">
                            <p class="lead">
                                <i class="fas fa-quote-left quote-icon"></i>
                                Gakala Health Centre is a community-based health facility located in Masumbwe, 
                                Geita Region, committed to providing quality, safe, and compassionate healthcare 
                                services to the community.
                            </p>
                            
                            <p>
                                We focus on preventive and curative care delivered by qualified health professionals, 
                                guided by integrity, professionalism, and respect for every patient. We continuously 
                                work with health authorities and partners to improve our services and ensure accessible 
                                healthcare for all.
                            </p>
                            
                           
                            
                            <div class="motto-box">
                                <div class="motto-icon-wrapper">
                                    <i class="fas fa-praying-hands"></i>
                                </div>
                                <div class="motto-content">
                                    <span class="motto-label">Our Motto</span>
                                    <p class="motto-text">
                                        <span class="motto-quote">“We Treat, God Heals”</span>
                                        <span class="motto-meaning">— combining professional medical care with faith, hope, and compassion for complete healing.</span>
                                    </p>
                                </div>
                            </div>
                            
                            <p class="closing-statement">
                                <strong>Gakala Health Centre – Your health, our priority.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const values = ref([
    {
        icon: 'fas fa-user-md',
        title: 'Qualified Professionals',
        description: 'Expert healthcare team',
        color: 'blue'
    },
    {
        icon: 'fas fa-clock',
        title: '24/7 Service',
        description: 'Always here for you',
        color: 'green'
    },
    {
        icon: 'fas fa-hand-holding-heart',
        title: 'Compassionate Care',
        description: 'With faith & respect',
        color: 'purple'
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Quality Assured',
        description: 'Safe & reliable',
        color: 'orange'
    }
])

const stats = ref([
    { number: '5000+', label: 'Patients Yearly' },
    { number: '15+', label: 'Qualified Staff' },
    { number: '10+', label: 'Years Service' }
])
</script>

<style scoped>
/* About Section Styles */
.about-section {
    padding: clamp(40px, 8vw, 100px) 0;
    background: linear-gradient(135deg, #f8fafd 0%, #ffffff 100%);
    position: relative;
    overflow: hidden;
}

.about-section::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 80%;
    height: 80%;
    background: radial-gradient(circle, rgba(30, 75, 124, 0.03) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.about-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(16px, 5vw, 40px);
    position: relative;
    z-index: 2;
}

/* Section Header - Centered */
.section-header {
    text-align: center;
    margin-bottom: clamp(30px, 6vw, 60px);
    position: relative;
    z-index: 2;
}

.about-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    /* gap: clamp(8px, 2vw, 12px); */
    /* background: linear-gradient(135deg, rgba(30, 75, 124, 0.1), rgba(46, 108, 163, 0.15)); */
    /* color: var(--primary, #1e4b7c); */
    /* padding: clamp(8px, 2vw, 10px) clamp(20px, 4vw, 30px); */
    /* border-radius: 50px; */
    font-weight: 600;
    font-size: clamp(0.85rem, 2vw, 1rem);
    /* margin-bottom: clamp(15px, 3vw, 20px); */
    /* border: 1px solid rgba(30, 75, 124, 0.2); */
    /* backdrop-filter: blur(5px); */
    /* box-shadow: 0 5px 15px rgba(30, 75, 124, 0.1); */
}

.about-badge i {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    color: var(--primary, #1e4b7c);
}

.about-title {
    font-size: clamp(1.8rem, 6vw, 3rem);
    font-weight: 700;
    color: #1a2634;
    margin-bottom: clamp(10px, 3vw, 20px);
    line-height: 1.2;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 16px;
}

.highlight {
    color: var(--primary, #1e4b7c);
    position: relative;
    display: inline-block;
}

.highlight::after {
    content: '';
    position: absolute;
    bottom: clamp(4px, 1vw, 8px);
    left: 0;
    width: 100%;
    height: clamp(6px, 1.5vw, 12px);
    background: rgba(46, 108, 163, 0.2);
    z-index: -1;
    border-radius: 6px;
}

.section-subtitle {
    color: #64748b;
    font-size: clamp(0.95rem, 2.5vw, 1.2rem);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
    font-weight: 400;
    padding: 0 20px;
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(30px, 5vw, 60px);
    align-items: center;
    position: relative;
    z-index: 2;
    margin-top: 20px;
}

/* Image Styles */
.about-image-wrapper {
    position: relative;
    border-radius: clamp(20px, 4vw, 30px);
    overflow: hidden;
    box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3);
    height: clamp(250px, 50vw, 550px);
    transform: translateY(0);
    transition: transform 0.3s ease;
    width: 100%;
}

.about-image-wrapper:hover {
    transform: translateY(-5px);
}

.about-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-image-wrapper:hover .about-image {
    transform: scale(1.08);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(30, 75, 124, 0.3) 0%, rgba(46, 108, 163, 0.2) 100%);
    pointer-events: none;
    z-index: 1;
}

.image-caption {
    position: absolute;
    bottom: clamp(15px, 3vw, 30px);
    left: clamp(15px, 3vw, 30px);
    background: rgba(255, 255, 255, 0.95);
    padding: clamp(8px, 2vw, 12px) clamp(16px, 3vw, 25px);
    border-radius: 50px;
    font-weight: 600;
    color: var(--primary, #1e4b7c);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    z-index: 2;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    font-size: clamp(0.8rem, 2vw, 1rem);
    display: flex;
    align-items: center;
    gap: 8px;
}

.image-caption i {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
}

.image-dots {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-image: radial-gradient(rgba(255,255,255,0.3) 2px, transparent 2px);
    background-size: 10px 10px;
    z-index: 2;
    pointer-events: none;
}

.image-shape {
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
    border-radius: 50%;
    z-index: 0;
}

/* Content Styles */
.about-content {
    padding: clamp(0px, 2vw, 20px) 0;
    width: 100%;
}

.about-description {
    margin-bottom: 30px;
}

.about-description p {
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: clamp(15px, 3vw, 20px);
    font-size: clamp(0.95rem, 2vw, 1.1rem);
}

.about-description .lead {
    font-size: clamp(1.1rem, 2.5vw, 1.3rem);
    font-weight: 500;
    color: #2d3748;
    border-left: 4px solid var(--primary, #1e4b7c);
    padding-left: clamp(15px, 3vw, 25px);
    position: relative;
    background: linear-gradient(to right, rgba(30, 75, 124, 0.02), transparent);
    border-radius: 0 20px 20px 0;
}

.quote-icon {
    color: var(--primary, #1e4b7c);
    opacity: 0.3;
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    margin-right: 10px;
}

/* Values Grid */
.values-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(12px, 2vw, 20px);
    margin: clamp(25px, 4vw, 35px) 0;
}

.value-item {
    display: flex;
    align-items: center;
    gap: clamp(10px, 2vw, 15px);
    padding: clamp(12px, 2vw, 18px);
    background: white;
    border-radius: clamp(14px, 3vw, 18px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border: 1px solid rgba(226, 232, 240, 0.6);
    width: 100%;
}

.value-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(30, 75, 124, 0.15);
    border-color: rgba(30, 75, 124, 0.2);
}

.value-icon {
    width: clamp(45px, 8vw, 55px);
    height: clamp(45px, 8vw, 55px);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: clamp(1.2rem, 3vw, 1.4rem);
    flex-shrink: 0;
    transition: transform 0.3s ease;
}

.value-item:hover .value-icon {
    transform: scale(1.1) rotate(5deg);
}

.value-icon.blue {
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
}

.value-icon.green {
    background: linear-gradient(135deg, #2e7d5e, #3ca374);
}

.value-icon.purple {
    background: linear-gradient(135deg, #6b46c1, #9f7aea);
}

.value-icon.orange {
    background: linear-gradient(135deg, #c05621, #ed8936);
}

.value-text h4 {
    font-size: clamp(0.9rem, 2vw, 1.05rem);
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 4px;
}

.value-text p {
    font-size: clamp(0.75rem, 1.8vw, 0.9rem);
    color: #718096;
    margin: 0;
}

/* Motto Box */
.motto-box {
    background: linear-gradient(135deg, #ffffff, rgba(30, 75, 124, 0.03));
    border-radius: clamp(16px, 3vw, 20px);
    padding: clamp(20px, 4vw, 25px);
    margin: clamp(20px, 4vw, 30px) 0;
    display: flex;
    align-items: flex-start;
    gap: clamp(15px, 3vw, 20px);
    border: 1px solid rgba(30, 75, 124, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    width: 100%;
}

.motto-icon-wrapper {
    width: clamp(50px, 8vw, 60px);
    height: clamp(50px, 8vw, 60px);
    background: linear-gradient(135deg, var(--primary, #1e4b7c), #2e6ca3);
    border-radius: clamp(12px, 3vw, 15px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: clamp(1.5rem, 3vw, 1.8rem);
    flex-shrink: 0;
    box-shadow: 0 10px 20px rgba(30, 75, 124, 0.3);
}

.motto-content {
    flex: 1;
}

.motto-label {
    display: inline-block;
    background: rgba(30, 75, 124, 0.1);
    padding: clamp(4px, 1vw, 4px) clamp(10px, 2vw, 12px);
    border-radius: 20px;
    font-size: clamp(0.7rem, 1.8vw, 0.8rem);
    font-weight: 600;
    color: var(--primary, #1e4b7c);
    margin-bottom: clamp(8px, 2vw, 10px);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.motto-text {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.motto-quote {
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 700;
    color: var(--primary, #1e4b7c);
    font-style: italic;
    line-height: 1.4;
}

.motto-meaning {
    color: #4a5568;
    line-height: 1.7;
    font-size: clamp(0.85rem, 2vw, 1rem);
}

/* Stats Row */
.stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(12px, 2vw, 20px);
    margin: clamp(20px, 4vw, 30px) 0;
    padding: clamp(15px, 3vw, 20px);
    background: linear-gradient(135deg, #ffffff, #f8fafd);
    border-radius: clamp(20px, 4vw, 25px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(226, 232, 240, 0.8);
    width: 100%;
}

.stat-item {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: clamp(8px, 2vw, 10px);
    border-right: 1px solid #e2e8f0;
}

.stat-item:last-child {
    border-right: none;
}

.stat-number {
    font-size: clamp(1.4rem, 3.5vw, 2rem);
    font-weight: 700;
    color: var(--primary, #1e4b7c);
    line-height: 1.2;
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.stat-label {
    font-size: clamp(0.7rem, 1.8vw, 0.9rem);
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
}

.closing-statement {
    font-size: clamp(1rem, 2.2vw, 1.2rem);
    color: #2d3748;
    margin-top: clamp(20px, 4vw, 25px);
    padding-top: clamp(15px, 3vw, 20px);
    border-top: 2px dashed rgba(30, 75, 124, 0.2);
    text-align: center;
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .about-image-wrapper {
        max-width: 700px;
        margin: 0 auto;
        width: 100%;
    }
    
    .about-content {
        max-width: 700px;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .values-grid {
        grid-template-columns: 1fr;
    }
    
    .motto-box {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .stats-row {
        grid-template-columns: 1fr;
    }
    
    .stat-item {
        border-right: none;
        border-bottom: 1px solid #e2e8f0;
        padding: 12px 0;
    }
    
    .stat-item:last-child {
        border-bottom: none;
    }
}

@media (max-width: 480px) {
    .value-item {
        flex-direction: column;
        text-align: center;
    }
    
    .value-icon {
        margin-bottom: 8px;
    }
    
    .image-dots,
    .image-shape {
        display: none;
    }
}

/* Landscape Mode */
@media (max-width: 900px) and (orientation: landscape) {
    .about-grid {
        gap: 30px;
    }
    
    .about-image-wrapper {
        height: 300px;
    }
    
    .values-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Small Desktop/Laptop */
@media (min-width: 1025px) and (max-width: 1280px) {
    .about-container {
        max-width: 1200px;
    }
    
    .values-grid {
        gap: 15px;
    }
}

/* 4K and Ultra-wide */
@media (min-width: 1920px) {
    .about-container {
        max-width: 1600px;
    }
    
    .about-title {
        font-size: 3.5rem;
    }
    
    .about-image-wrapper {
        height: 650px;
    }
}

/* High Contrast Mode */
@media (prefers-contrast: high) {
    .about-section {
        background: white;
    }
    
    .about-badge {
        border: 2px solid #1e4b7c;
        background: white;
    }
    
    .value-item {
        border: 2px solid #1e4b7c;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .about-image,
    .about-image-wrapper,
    .value-item {
        transition: none;
    }
    
    .about-image-wrapper:hover .about-image {
        transform: none;
    }
    
    .value-item:hover {
        transform: none;
    }
}

/* Print Styles */
@media print {
    .about-section {
        padding: 20px 0;
        background: white;
    }
    
    .about-image-wrapper,
    .image-dots,
    .image-shape {
        break-inside: avoid;
        box-shadow: none;
        border: 1px solid #ddd;
    }
    
    .about-content {
        color: black;
    }
    
    .stat-number {
        -webkit-text-fill-color: #1e4b7c;
    }
}
</style>