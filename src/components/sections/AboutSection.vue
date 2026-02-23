<template>
    <section class="about-section">
        <div class="container">
            <div class="section-header">
                <div class="section-badge1">{{ t('about_us.badge') }}</div>
                <h2 class="section-title highlight">{{ t('about_us.title') }}</h2>
            </div>

            <div class="about-grid">
                   <div class="about-image-wrapper">
                    <img src="/assets/hospital.jpg" :alt="t('about_us.image_alt')" class="about-image">
                    <div class="established-badge">
                        <i class="fas fa-calendar-alt"></i>
                        <span>{{ t('about_us.established') }} 2025</span>
                    </div>
                </div>
                <div class="about-content">
                    <div class="about-description">
                            <p class="lead">
                    <i class="fas fa-quote-left quote-icon"></i>
                    {{ t('about_us.description.para1') }}</p>
                    <p class="about-text">{{ t('about_us.description.para2') }}</p>

                    <div class="motto-card">
                        <div class="motto-icon">
                            <i class="fas fa-praying-hands"></i>
                        </div>
                        <div class="motto-content">
                            <h3>{{ t('about_us.motto.quote') }}</h3>
                            <p>{{ t('about_us.motto.meaning') }}</p>
                        </div>
                    </div>

                    <p class="closing-statement">
                        <strong>{{ t('about_us.closing') }}</strong>
                    </p>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.about-section {
    padding: 20px 0;
    background: white;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section-header {
    text-align: center;
    margin-bottom: 10px;
}

.section-badge {
    display: inline-block;
    background: linear-gradient(135deg, rgba(30, 75, 124, 0.1), rgba(46, 108, 163, 0.15));
    color: #1e4b7c;
    padding: 6px 18px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 15px;
    border: 1px solid rgba(30, 75, 124, 0.2);
}

.highlight {
    color: #4fd6ee;
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
    background: rgba(255, 255, 255, 0.2);
    z-index: -1;
    border-radius: 6px;
}

.section-title {
    font-size: 2.0rem;
    font-weight: 700;
    color: #1a2634;
    margin-bottom: 3px;
}

/* Content Styles */
.about-content {
    /* padding: clamp(0px, 2vw, 20px) 0; */
    width: 100%;
}


.about-description p {
    color: #4a5568;
    line-height: 1.8;
    /* margin-bottom: clamp(15px, 3vw, 20px); */
    font-size: clamp(0.95rem, 2vw, 1.1rem);
}

.about-description .lead {
    font-size: clamp(1rem, 2vw, 1.1rem);
    /* font-weight: 500; */
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


.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.about-text {
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 20px;
    font-size: 1.05rem;
}

.motto-card {
    display: flex;
    gap: 20px;
    background: linear-gradient(135deg, #f8fafd, white);
    padding: 15px;
    border-radius: 20px;
    margin: 10px 0;
    border: 1px solid rgba(30, 75, 124, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.motto-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    flex-shrink: 0;
}

.motto-content h3 {
    color: #1e4b7c;
    font-size: 1.3rem;
    margin-bottom: 10px;
    font-style: italic;
}

.motto-content p {
    color: #4a5568;
    line-height: 1.4;
    margin: 0;
}

.closing-statement {
    font-size: 1.1rem;
    color: #2d3748;
    padding-top: 20px;
    border-top: 2px dashed rgba(30, 75, 124, 0.2);
    text-align: center;
}

.about-image-wrapper {
    position: relative;
}

.about-image {
    width: 100%;
    border-radius: 30px;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

.established-badge {
    position: absolute;
    bottom: 30px;
    left: 30px;
    background: white;
    padding: 12px 20px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    font-weight: 600;
    color: #1e4b7c;
}

.established-badge i {
    color: #1e4b7c;
}

@media (max-width: 1024px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}

@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }
    
    .motto-card {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}
</style>