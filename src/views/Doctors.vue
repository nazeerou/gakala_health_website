<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">Our Specialists</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">Home</router-link>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <span>Staff</span>
                </div>
            </div>
        </div>
        
        <div class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12" data-aos="fade-up">
                    <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Meet Our Expert Staffs</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">Highly qualified medical professionals dedicated to your health and wellbeing.</p>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="(doctor, index) in doctors" :key="doctor.name" 
                         class="doctor-card" data-aos="fade-up" :data-aos-delay="index * 100">
                        <img :src="doctor.image" :alt="doctor.name" class="doctor-image">
                        <div class="doctor-info">
                            <h3 class="doctor-name">{{ doctor.name }}</h3>
                            <p class="doctor-specialty">{{ doctor.specialty }}</p>
                            <div class="flex items-center justify-center space-x-2 mt-3">
                                <span class="text-sm text-gray-500">
                                    <i class="fas fa-star text-[#1e4b7c]"></i> {{ doctor.experience }} Years
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    doctors: {
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

.doctor-card {
    background: var(--white);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,0.02);
    border: 1px solid var(--border-light);
    transition: all 0.3s ease;
}

.doctor-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.1);
    border-color: var(--primary);
}

.doctor-image {
    height: 280px;
    width: 100%;
    object-fit: cover;
    border-bottom: 3px solid var(--primary);
}

.doctor-info {
    padding: 20px;
    text-align: center;
}

.doctor-name {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 5px;
}

.doctor-specialty {
    color: var(--primary);
    font-weight: 500;
    font-size: 0.9rem;
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