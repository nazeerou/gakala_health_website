<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">Our Medical Services</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">Home</router-link>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <span>Services</span>
                </div>
            </div>
        </div>
        
        <div class="services-page-section">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12" data-aos="fade-up">
                    <h2 class="text-3xl md:text-4xl font-bold text-[#123456] mb-4">Comprehensive Healthcare Services</h2>
                    <p class="text-gray-600 max-w-3xl mx-auto">We offer a wide range of medical services delivered by experienced specialists using state-of-the-art equipment. Each service is designed to provide the highest quality care for our patients.</p>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(service, index) in serviceList" :key="service.name" 
                         class="service-detail-card" data-aos="fade-up" :data-aos-delay="index * 100">
                        <div class="service-detail-header">
                            <div class="service-detail-icon">
                                <i :class="service.icon"></i>
                            </div>
                            <h3 class="service-detail-title">{{ service.name }}</h3>
                        </div>
                        <div class="service-detail-body">
                            <p class="text-gray-600 mb-4">{{ service.fullDescription || service.description }}</p>
                            <ul class="service-detail-list">
                                <li v-for="feature in service.features" :key="feature">
                                    <i class="fas fa-check-circle"></i>
                                    <span>{{ feature }}</span>
                                </li>
                            </ul>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    serviceList: {
        type: Array,
        default: () => []
    }
})

defineEmits(['open-appointment'])
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

.services-page-section {
    padding: 5rem 0;
    background: linear-gradient(135deg, #ffffff, var(--primary-very-light));
}

.service-detail-card {
    background: white;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.1);
    border: 1px solid rgba(30, 75, 124, 0.1);
    transition: all 0.3s ease;
    height: 100%;
}

.service-detail-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(30, 75, 124, 0.15);
    border-color: var(--primary);
}

.service-detail-header {
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    padding: 2rem;
    color: white;
    text-align: center;
}

.service-detail-icon {
    width: 80px;
    height: 80px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    font-size: 2.5rem;
    backdrop-filter: blur(10px);
}

.service-detail-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.service-detail-body {
    padding: 2rem;
}

.service-detail-list {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
}

.service-detail-list li {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 0;
    border-bottom: 1px dashed var(--border-light);
}

.service-detail-list li:last-child {
    border-bottom: none;
}

.service-detail-list li i {
    color: var(--primary);
    width: 24px;
    text-align: center;
}

.service-cta-button {
    display: inline-block;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    width: 100%;
    text-align: center;
}

.service-cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(30, 75, 124, 0.3);
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2.2rem;
    }
}
</style>