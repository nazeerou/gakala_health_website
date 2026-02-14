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
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <div v-for="(doctor, index) in doctors" :key="doctor.name" 
                         class="doctor-card" data-aos="fade-up" :data-aos-delay="index * 100">
                        <div class="doctor-avatar" :style="{ backgroundColor: doctor.color }">
                            <span class="doctor-initials">{{ doctor.initials }}</span>
                            <div class="avatar-pattern"></div>
                        </div>
                        <div class="doctor-info">
                            <h3 class="doctor-name">{{ doctor.name }}</h3>
                            <p class="doctor-specialty">{{ doctor.specialty }}</p>
                            
                            <div class="doctor-stats">
                                <div class="stat">
                                    <i class="fas fa-star text-yellow-400"></i>
                                    <span>{{ doctor.experience }} Years</span>
                                </div>
                                <div class="stat">
                                    <i class="fas fa-user-md text-primary"></i>
                                    <span>Specialist</span>
                                </div>
                            </div>
                            
                            <div class="doctor-bio">
                                <p class="text-sm text-gray-600">Expert in {{ doctor.specialty }} with over {{ doctor.experience }} years of experience.</p>
                            </div>
                            
                            <div class="doctor-social">
                                <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
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

.doctor-card {
    background: var(--white);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,0.02);
    border: 1px solid var(--border-light);
    transition: all 0.3s ease;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.doctor-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.1);
    border-color: var(--primary);
}

.doctor-avatar {
    width: 180px;
    height: 180px;
    margin: 30px auto 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    border: 4px solid white;
    transition: all 0.3s ease;
}

.doctor-card:hover .doctor-avatar {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(30, 75, 124, 0.2);
}

.doctor-initials {
    font-size: 3rem;
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    z-index: 2;
    position: relative;
}

.avatar-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%);
    z-index: 1;
}

.doctor-avatar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' opacity='0.1'%3E%3Cpath d='M50 20 L50 80 M20 50 L80 50' stroke='white' stroke-width='2'/%3E%3Ccircle cx='50' cy='50' r='15' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E");
    background-size: 50px 50px;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.2;
    z-index: 1;
}

.doctor-info {
    padding: 0 20px 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.doctor-name {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 5px;
}

.doctor-specialty {
    color: var(--primary);
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 15px;
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
    gap: 5px;
    font-size: 0.9rem;
    color: var(--text-light);
}

.stat i {
    font-size: 0.9rem;
}

.doctor-bio {
    margin-bottom: 20px;
    padding: 0 10px;
}

.doctor-social {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

.social-icon {
    width: 35px;
    height: 35px;
    background: var(--primary-soft);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    transition: all 0.3s ease;
    text-decoration: none;
}

.social-icon:hover {
    background: var(--primary);
    color: white;
    transform: rotate(360deg);
}

.appointment-btn {
    background: var(--primary);
    color: white;
    padding: 10px 20px;
    border-radius: 50px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    margin-top: auto;
}

.appointment-btn:hover {
    background: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(30, 75, 124, 0.3);
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2.2rem;
    }
    
    .doctor-avatar {
        width: 150px;
        height: 150px;
    }
    
    .doctor-initials {
        font-size: 2.5rem;
    }
}
</style>