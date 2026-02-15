<template>
    <div>
        <!-- Why Choose Us Section -->
        <section class="why-choose-section">
            <div class="container mx-auto px-4 sm:px-6">
                <!-- Section Header -->
                <div class="section-header" data-aos="fade-up">
                    <div class="section-badge">
                        <i class="fas fa-question-circle"></i>
                        <span>Why Choose Us</span>
                    </div>
                    <h2 class="section-title">
                        Exceptional Care, <span class="highlight">Compassionate Heart</span>
                    </h2>
                    <p class="section-subtitle">
                        Discover what makes Gakala Health Centre the trusted choice for healthcare in Masumbwe and beyond
                    </p>
                </div>

                <!-- Main Content Grid -->
                <div class="choose-grid">
                    <!-- Left Column - Image Collage -->
                    <div class="image-collage" data-aos="fade-right">
                        <div class="collage-grid">
                            <div class="collage-item main-image">
                                <img src="/assets/img1.jpg" alt="Doctor with patient" loading="lazy">
                                <div class="image-overlay-glow"></div>
                            </div>
                            <div class="collage-item small-image-1">
                                <img src="/assets/img2.jpg" alt="Medical equipment" loading="lazy">
                            </div>
                            <div class="collage-item small-image-2">
                                <img src="/assets/img4.jpg" alt="Happy medical staff" loading="lazy">
                            </div>
                            <!-- <div class="collage-item small-image-3">
                                <img src="/assets/img5.jpg" alt="Emergency care" loading="lazy">
                            </div> -->
                            
                            <!-- Floating Stats -->
                       
                        </div>
                    </div>

                    <!-- Right Column - Features List -->
                    <div class="features-content" data-aos="fade-left">
                        <div class="features-list">
                            <!-- Feature 1 -->
                            <div class="feature-card" v-for="(feature, index) in features" :key="index"
                                 @mouseenter="feature.hover = true"
                                 @mouseleave="feature.hover = false">
                                <div class="feature-icon-wrapper" :class="{ 'hovered': feature.hover }">
                                    <div class="feature-icon" :style="{ background: feature.iconColor }">
                                        <i :class="feature.icon"></i>
                                    </div>
                                    <div class="icon-pulse"></div>
                                </div>
                                <div class="feature-content">
                                    <h3>{{ feature.title }}</h3>
                                    <p>{{ feature.description }}</p>
                                    <div class="feature-tags">
                                        <span v-for="(tag, idx) in feature.tags" :key="idx">{{ tag }}</span>
                                    </div>
                                </div>
                            </div>

                          
                        </div>
                    </div>
                </div>
            </div>

            <!-- Background Decorations -->
            <div class="bg-decoration">
                <div class="decoration-circle circle-1"></div>
                <div class="decoration-circle circle-2"></div>
                <div class="decoration-plus plus-1">+</div>
                <div class="decoration-plus plus-2">+</div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
    {
        icon: 'fas fa-heart',
        iconColor: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
        title: 'Compassionate Care',
        description: 'We treat every patient with dignity, respect, and genuine compassion, combining medical expertise with emotional support.',
        tags: ['Patient-Centered', 'Empathetic', 'Supportive'],
        hover: false
    },
    {
        icon: 'fas fa-stethoscope',
        iconColor: 'linear-gradient(135deg, #1e4b7c, #2e6ca3)',
        title: 'Expert Medical Team',
        description: 'Our team of qualified professionals brings years of experience and continuous learning to provide the best care possible.',
        tags: ['Qualified', 'Experienced', 'Dedicated'],
        hover: false
    },
    {
        icon: 'fas fa-flask',
        iconColor: 'linear-gradient(135deg, #6b46c1, #9f7aea)',
        title: 'Modern Facilities',
        description: 'State-of-the-art equipment and modern facilities enable accurate diagnosis and effective treatment.',
        tags: ['Modern Equipment', 'Clean', 'Well-Equipped'],
        hover: false
    }
])

defineProps({
    doctors: {
        type: Array,
        default: () => [
            { name: 'Dr. James Mwangi', initials: 'JM', specialty: 'Cardiology', experience: 15, color: '#1e4b7c' },
            { name: 'Dr. Sarah Kimani', initials: 'SK', specialty: 'Pediatrics', experience: 12, color: '#2e6ca3' },
            { name: 'Dr. David Omondi', initials: 'DO', specialty: 'Internal Medicine', experience: 10, color: '#123456' },
            { name: 'Dr. Grace Njeri', initials: 'GN', specialty: 'Obstetrics', experience: 14, color: '#2e7d5e' }
        ]
    }
})

defineEmits(['open-appointment'])
</script>

<style scoped>
/* Why Choose Us Section */
.why-choose-section {
    position: relative;
    padding: clamp(60px, 10vw, 100px) 0;
    background: linear-gradient(135deg, #f8fafd 0%, #ffffff 100%);
    overflow: hidden;
}

/* Section Header */
.section-header {
    text-align: center;
    margin-bottom: clamp(40px, 8vw, 60px);
    position: relative;
    z-index: 2;
}

.section-badge {
    display: inline-flex;
    align-items: center;
    gap: clamp(8px, 2vw, 12px);
    background: linear-gradient(135deg, rgba(30, 75, 124, 0.1), rgba(46, 108, 163, 0.15));
    color: var(--primary, #1e4b7c);
    padding: clamp(8px, 2vw, 12px) clamp(20px, 4vw, 30px);
    border-radius: 50px;
    font-weight: 600;
    font-size: clamp(0.85rem, 2vw, 1rem);
    margin-bottom: clamp(15px, 3vw, 20px);
    border: 1px solid rgba(30, 75, 124, 0.2);
    backdrop-filter: blur(5px);
    box-shadow: 0 5px 15px rgba(30, 75, 124, 0.1);
}

.section-badge i {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
}

.section-title {
    font-size: clamp(2rem, 6vw, 3rem);
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

/* Choose Grid */
.choose-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(30px, 5vw, 60px);
    align-items: center;
    position: relative;
    z-index: 5;
}

/* Image Collage */
.image-collage {
    position: relative;
    padding: 20px;
}

.collage-grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    aspect-ratio: 1;
}

.collage-item {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.collage-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.2);
}

.collage-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.collage-item:hover img {
    transform: scale(1.1);
}

.main-image {
    grid-column: span 2;
    height: 300px;
}

.small-image-1,
.small-image-2,
.small-image-3 {
    height: 150px;
}

.image-overlay-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(30, 75, 124, 0.2), transparent);
    pointer-events: none;
}

/* Floating Stats */
.floating-stat {
    position: absolute;
    background: white;
    padding: 12px 20px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    font-weight: 600;
    font-size: 0.9rem;
    color: #1a2634;
    border: 1px solid rgba(30, 75, 124, 0.1);
    animation: float 3s ease-in-out infinite;
    z-index: 10;
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.95);
}

.floating-stat i {
    color: #1e4b7c;
    font-size: 1.1rem;
}

.stat-1 {
    top: 0;
    right: -20px;
    animation-delay: 0s;
}

.stat-2 {
    bottom: 20%;
    left: -20px;
    animation-delay: 1s;
}

.stat-3 {
    top: 40%;
    right: -30px;
    animation-delay: 2s;
}

/* Features Content */
.features-content {
    padding: 20px 0;
}

.features-list {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.feature-card {
    display: flex;
    gap: 20px;
    padding: 20px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(226, 232, 240, 0.6);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.feature-card:hover {
    transform: translateX(10px);
    box-shadow: 0 15px 35px rgba(30, 75, 124, 0.1);
    border-color: rgba(30, 75, 124, 0.2);
}

.feature-card:hover::before {
    opacity: 1;
}

.feature-icon-wrapper {
    position: relative;
    width: 70px;
    height: 70px;
    flex-shrink: 0;
}

.feature-icon {
    width: 100%;
    height: 100%;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.8rem;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
}

.feature-icon-wrapper.hovered .feature-icon {
    transform: scale(1.1) rotate(5deg);
}

.icon-pulse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 18px;
    background: inherit;
    opacity: 0.3;
    z-index: 1;
    animation: pulse 2s infinite;
}

.feature-content {
    flex: 1;
}

.feature-content h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #1a2634;
    margin-bottom: 8px;
}

.feature-content p {
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 12px;
    font-size: 0.95rem;
}

.feature-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.feature-tags span {
    background: rgba(30, 75, 124, 0.05);
    color: #1e4b7c;
    padding: 4px 12px;
    border-radius: 30px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid rgba(30, 75, 124, 0.1);
}

/* Differentiators */
.differentiators {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin: 30px 0;
    padding: 20px;
    background: linear-gradient(135deg, rgba(30, 75, 124, 0.02), rgba(46, 108, 163, 0.02));
    border-radius: 20px;
    border: 1px dashed rgba(30, 75, 124, 0.2);
}

.diff-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #1a2634;
    font-weight: 500;
}

.diff-item i {
    color: #2e7d5e;
    font-size: 1.2rem;
}

/* CTA Section */
.choose-cta {
    text-align: center;
    margin-top: 20px;
}

.cta-button {
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    color: white;
    border: none;
    padding: 16px 40px;
    border-radius: 60px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 15px;
    transition: all 0.3s ease;
    box-shadow: 0 15px 30px rgba(30, 75, 124, 0.3);
    position: relative;
    overflow: hidden;
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.4);
}

.cta-button:hover::before {
    left: 100%;
}

.cta-button i {
    transition: transform 0.3s ease;
}

.cta-button:hover i {
    transform: translateX(5px);
}

.cta-note {
    margin-top: 15px;
    color: #64748b;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.cta-note i {
    color: #1e4b7c;
}

/* Staff Section */
.staff-section {
    padding: clamp(60px, 10vw, 100px) 0;
    background: linear-gradient(135deg, #ffffff, #f8fafd);
    position: relative;
}

.doctors-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin-bottom: 40px;
}

.doctor-card {
    height: 100%;
    perspective: 1000px;
}

.doctor-card-inner {
    background: white;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(226, 232, 240, 0.6);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.doctor-card:hover .doctor-card-inner {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.15);
    border-color: rgba(30, 75, 124, 0.3);
}

.doctor-avatar {
    position: relative;
    width: 140px;
    height: 140px;
    margin: 30px auto 15px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    border: 4px solid white;
    transition: all 0.3s ease;
}

.doctor-card:hover .doctor-avatar {
    transform: scale(1.05) rotate(5deg);
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.25);
}

.doctor-initials {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 2;
    position: relative;
}

.avatar-badge {
    position: absolute;
    bottom: 5px;
    right: 5px;
    background: #2e7d5e;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border: 2px solid white;
    z-index: 3;
}

.avatar-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
    z-index: 1;
}

.doctor-info {
    padding: 0 20px 25px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.doctor-name {
    font-size: 1.2rem;
    font-weight: 700;
    color: #1a2634;
    margin-bottom: 5px;
    text-align: center;
}

.doctor-specialty {
    color: #1e4b7c;
    font-weight: 600;
    font-size: 0.95rem;
    text-align: center;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 2px dashed rgba(30, 75, 124, 0.1);
}

.doctor-stats {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 15px;
}

.stat {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    color: #4a5568;
}

.stat i {
    color: #fbbf24;
    font-size: 0.9rem;
}

.doctor-bio {
    margin-bottom: 20px;
    text-align: center;
}

.doctor-bio p {
    color: #64748b;
    font-size: 0.9rem;
    line-height: 1.6;
}

.doctor-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 15px;
    border-top: 1px solid rgba(226, 232, 240, 0.8);
}

.doctor-social {
    display: flex;
    gap: 8px;
}

.social-icon {
    width: 32px;
    height: 32px;
    background: rgba(30, 75, 124, 0.05);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1e4b7c;
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 0.9rem;
}

.social-icon:hover {
    background: #1e4b7c;
    color: white;
    transform: rotate(360deg);
}

.appointment-btn {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    border: none;
    border-radius: 12px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
}

.appointment-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(30, 75, 124, 0.3);
}

/* View All Link */
.view-all {
    text-align: center;
    margin-top: 40px;
}

.view-all-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: #1e4b7c;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 12px 30px;
    background: rgba(30, 75, 124, 0.05);
    border-radius: 50px;
    transition: all 0.3s ease;
}

.view-all-link:hover {
    background: #1e4b7c;
    color: white;
    gap: 20px;
}

.view-all-link i {
    transition: transform 0.3s ease;
}

.view-all-link:hover i {
    transform: translateX(5px);
}

/* Background Decorations */
.bg-decoration {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.decoration-circle {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(30, 75, 124, 0.03), rgba(46, 108, 163, 0.03));
}

.circle-1 {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -150px;
    animation: rotate 30s linear infinite;
}

.circle-2 {
    width: 200px;
    height: 200px;
    bottom: -100px;
    left: -100px;
    animation: rotate 25s linear infinite reverse;
}

.decoration-plus {
    position: absolute;
    color: rgba(30, 75, 124, 0.03);
    font-size: 4rem;
    font-weight: 300;
}

.plus-1 {
    top: 20%;
    left: 10%;
    animation: pulse 4s ease-in-out infinite;
}

.plus-2 {
    bottom: 30%;
    right: 15%;
    animation: pulse 6s ease-in-out infinite reverse;
}

/* Animations */
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.2); opacity: 0.1; }
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 1200px) {
    .doctors-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 1024px) {
    .choose-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .image-collage {
        max-width: 600px;
        margin: 0 auto;
    }
    
    .doctors-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .floating-stat {
        display: none;
    }
    
    .differentiators {
        grid-template-columns: 1fr;
    }
    
    .feature-card {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .feature-card:hover {
        transform: translateY(-5px);
    }
    
    .feature-tags {
        justify-content: center;
    }
    
    .doctors-grid {
        grid-template-columns: 1fr;
        max-width: 350px;
        margin: 0 auto 30px;
    }
}

@media (max-width: 480px) {
    .cta-button {
        width: 100%;
        justify-content: center;
    }
    
    .feature-icon-wrapper {
        width: 60px;
        height: 60px;
    }
    
    .feature-icon {
        font-size: 1.5rem;
    }
    
    .doctor-avatar {
        width: 120px;
        height: 120px;
    }
    
    .doctor-initials {
        font-size: 2rem;
    }
}

/* Landscape Mode */
@media (max-width: 900px) and (orientation: landscape) {
    .choose-grid {
        gap: 30px;
    }
    
    .main-image {
        height: 200px;
    }
    
    .small-image-1,
    .small-image-2,
    .small-image-3 {
        height: 100px;
    }
}

/* High Contrast Mode */
@media (prefers-contrast: high) {
    .feature-card {
        border: 2px solid #1e4b7c;
    }
    
    .floating-stat {
        border: 2px solid #1e4b7c;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .feature-card,
    .doctor-card-inner,
    .floating-stat,
    .decoration-circle {
        animation: none !important;
        transition: none !important;
    }
    
    .feature-card:hover {
        transform: none;
    }
}

/* Print Styles */
@media print {
    .why-choose-section,
    .staff-section {
        padding: 20px 0;
        background: white;
    }
    
    .floating-stat,
    .bg-decoration,
    .cta-button {
        display: none;
    }
}
</style>