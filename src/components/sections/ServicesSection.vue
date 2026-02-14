<template>
    <section class="services-section-modern">
        <div class="container mx-auto px-6">
            <div class="section-header" data-aos="fade-up">
                <span>OUR SERVICES</span>
                <h2 class="section-title">Comprehensive Medical Services</h2>
                <p class="section-subtitle">We offer a wide range of medical services to meet all your healthcare needs.</p>
            </div>
            
            <div class="grid lg:grid-cols-3 gap-8">
                <div v-for="(service, index) in serviceList" :key="service.name" 
                     class="service-card-modern" data-aos="fade-up" :data-aos-delay="index * 100"
                     @click="$emit('navigate-service', service)">
                    <span class="service-number">{{ (index + 1).toString().padStart(2, '0') }}</span>
                    <div class="service-icon-modern">
                        <i :class="service.icon"></i>
                    </div>
                    <h3 class="service-title-modern">{{ service.name }}</h3>
                    <p class="service-description">{{ service.description }}</p>
                    <div class="service-link-modern">
                        Learn More <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <router-link to="/services" class="btn-outline">
                    View All Services
                    <i class="fas fa-arrow-right ml-2"></i>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    serviceList: {
        type: Array,
        default: () => []
    }
})

defineEmits(['navigate-service'])
</script>

<style scoped>
.services-section-modern {
    padding: 6rem 0;
    background: linear-gradient(135deg, #ffffff, var(--primary-very-light));
    position: relative;
    overflow: hidden;
}

.section-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 0.5rem;
}

.section-subtitle {
    color: var(--text-light);
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.1rem;
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-header span {
    color: var(--primary);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.9rem;
}

.service-card-modern {
    background: white;
    border-radius: 30px;
    padding: 2.5rem 2rem;
    position: relative;
    transition: all 0.4s ease;
    border: 1px solid rgba(30, 75, 124, 0.1);
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba(30, 75, 124, 0.05);
    cursor: pointer;
}

.service-card-modern:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(30, 75, 124, 0.15);
    border-color: var(--primary);
}

.service-icon-modern {
    width: 80px;
    height: 80px;
    background: var(--primary-soft);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: var(--primary);
    font-size: 2.2rem;
    transition: all 0.3s ease;
}

.service-card-modern:hover .service-icon-modern {
    background: var(--primary);
    color: white;
    transform: rotate(5deg) scale(1.1);
}

.service-number {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 3rem;
    font-weight: 800;
    color: rgba(30, 75, 124, 0.05);
    line-height: 1;
    transition: all 0.3s ease;
}

.service-card-modern:hover .service-number {
    color: rgba(30, 75, 124, 0.1);
    transform: scale(1.2);
}

.service-title-modern {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 0.75rem;
}

.service-title-modern::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--primary-light));
    border-radius: 2px;
    transition: width 0.3s ease;
}

.service-card-modern:hover .service-title-modern::after {
    width: 60px;
}

.service-description {
    color: var(--text-light);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
}

.service-link-modern {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    background: var(--primary-soft);
    border-radius: 50px;
    transition: all 0.3s ease;
    align-self: flex-start;
    cursor: pointer;
}

.service-link-modern:hover {
    background: var(--primary);
    color: white;
    gap: 1rem;
    transform: translateX(5px);
}

.btn-outline {
    background: transparent;
    color: var(--primary);
    padding: 12px 30px;
    border-radius: 50px;
    font-weight: 600;
    border: 2px solid var(--primary);
    cursor: pointer;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
}

.btn-outline:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .section-title {
        font-size: 1.8rem;
    }
    
    .service-card-modern {
        padding: 2rem 1.5rem;
    }
}
</style>