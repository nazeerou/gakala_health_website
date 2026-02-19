<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">Our Mission & Vision</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">Home</router-link>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <router-link to="/about">About</router-link>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <span>Mission</span>
                </div>
            </div>
        </div>
        
        <div class="about-page-section">
            <div class="container mx-auto px-6">
                <div class="mission-vision-grid">
                    <div class="mission-card" data-aos="fade-right">
                        <div class="mission-icon"><i class="fas fa-bullseye"></i></div>
                        <h2 class="mission-title">Our Mission & Vision </h2>
                        <p class="mission-text">To deliver high-quality, affordable, and patient-centered healthcare services 
                            through skilled professionals, 
                            modern medical equipment, ethical practice, and continuous improvement in service delivery</p>
                        <ul class="mission-list">
                            <li><i class="fas fa-check-circle"></i> Deliver patient-centered care</li>
                            <li><i class="fas fa-check-circle"></i> Maintain the highest medical standards</li>
                            <li><i class="fas fa-check-circle"></i> Serve all members of our community</li>
                        </ul>
                    </div>
                    
                    <div class="vision-card" data-aos="fade-left">
                        <div class="vision-icon"><i class="fas fa-eye"></i></div>
                        <h2 class="vision-title">Our Vision</h2>
                        <p class="vision-text">To become a trusted and leading health centre in Geita Region,
                             recognized for excellence in patient care, service reliability, and community impact.</p>
                        <ul class="vision-list">
                            <li><i class="fas fa-check-circle"></i> Expand our facilities and services</li>
                            <li><i class="fas fa-check-circle"></i> Invest in cutting-edge technology</li>
                        </ul>
                    </div>
                </div>
                
                <div class="mt-16" data-aos="fade-up">
                    <h3 class="text-2xl font-bold text-center text-primary-dark mb-8">Our Core Values</h3>
                    <div class="values-grid">
                        <div v-for="value in coreValues" :key="value.title" class="value-item">
                            <div class="value-icon"><i :class="value.icon"></i></div>
                            <h4 class="value-title">{{ value.title }}</h4>
                            <p class="value-description">{{ value.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    coreValues: {
        type: Array,
        default: () => []
    }
})
</script>

<style scoped>
.page-header {
    background: linear-gradient(135deg, var(--primary-dark), var(--primary));
    padding: 120px 0 60px;
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.page-header::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255,255,255,0.05);
    border-radius: 50%;
    animation: rotate 30s linear infinite;
}

.page-header::after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255,255,255,0.05);
    border-radius: 50%;
    animation: rotate 25s linear infinite reverse;
}

.page-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
}

.page-breadcrumb {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: rgba(255,255,255,0.8);
    font-size: 1rem;
    position: relative;
    z-index: 2;
}

.page-breadcrumb a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.page-breadcrumb a:hover {
    color: var(--primary-soft);
}

.about-page-section {
    padding: 5rem 0;
    background: linear-gradient(135deg, #ffffff, var(--primary-very-light));
}

.mission-vision-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 3rem 0;
}

.mission-card,
.vision-card {
    background: white;
    border-radius: 30px;
    padding: 3rem 2rem;
    text-align: center;
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.1);
    border: 1px solid rgba(30, 75, 124, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.mission-card:hover,
.vision-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(30, 75, 124, 0.15);
}

.mission-card::before,
.vision-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, var(--primary), var(--primary-light));
}

.mission-icon,
.vision-icon {
    width: 100px;
    height: 100px;
    background: var(--primary-soft);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
    color: var(--primary);
    font-size: 3rem;
    transition: all 0.3s ease;
}

.mission-card:hover .mission-icon,
.vision-card:hover .vision-icon {
    background: var(--primary);
    color: white;
    transform: rotate(360deg);
}

.mission-title,
.vision-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 1rem;
}

.mission-text,
.vision-text {
    color: var(--text-light);
    line-height: 1.8;
    margin-bottom: 2rem;
    font-size: 1.1rem;
}

.mission-list,
.vision-list {
    text-align: left;
    margin: 1.5rem 0;
}

.mission-list li,
.vision-list li {
    margin-bottom: 1rem;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.mission-list li i,
.vision-list li i {
    color: var(--primary);
    font-size: 1rem;
    width: 20px;
}

.values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 3rem;
}

.value-item {
    background: white;
    border-radius: 20px;
    padding: 2rem 1.5rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(30, 75, 124, 0.05);
    border: 1px solid rgba(30, 75, 124, 0.1);
    transition: all 0.3s ease;
}

.value-item:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
}

.value-icon {
    width: 60px;
    height: 60px;
    background: var(--primary-soft);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: var(--primary);
    font-size: 1.5rem;
    transition: all 0.3s ease;
}

.value-item:hover .value-icon {
    background: var(--primary);
    color: white;
}

.value-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-dark);
    margin-bottom: 0.5rem;
}

.value-description {
    color: var(--text-light);
    font-size: 0.9rem;
    line-height: 1.6;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2.2rem;
    }
    
    .mission-vision-grid {
        grid-template-columns: 1fr;
    }
    
    .values-grid {
        grid-template-columns: 1fr;
    }
    
    .mission-card, .vision-card {
        padding: 2rem 1.5rem;
    }
}
</style>