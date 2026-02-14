<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">Our Vision</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">Home</router-link>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <router-link to="/about">About</router-link>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <span>Vision</span>
                </div>
            </div>
        </div>
        
        <div class="about-page-section">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div data-aos="fade-right">
                        <div class="vision-icon" style="width: 120px; height: 120px; margin-bottom: 2rem;">
                            <i class="fas fa-eye" style="font-size: 3rem;"></i>
                        </div>
                        <h2 class="about-content-title">Our Vision for the Future</h2>
                        <p class="about-content-text">
                            At Gakala Health Centre, we envision a future where quality healthcare is accessible to all members of our community. We are committed to continuous improvement and innovation to make this vision a reality.
                        </p>
                    </div>
                    
                    <div data-aos="fade-left">
                        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                             alt="Future Vision" class="rounded-3xl shadow-2xl w-full">
                    </div>
                </div>
                
                <h3 class="text-2xl font-bold text-center text-primary-dark mb-8">Future Goals & Timeline</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="goal in futureGoals" :key="goal.title" class="goal-card">
                        <div class="goal-icon"><i :class="goal.icon"></i></div>
                        <h4 class="goal-title">{{ goal.title }}</h4>
                        <p class="text-gray-600">{{ goal.description }}</p>
                        <span class="goal-target">{{ goal.target }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    futureGoals: {
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

.about-content-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 1rem;
}

.about-content-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--primary-light));
    border-radius: 2px;
}

.about-content-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-light);
    margin-bottom: 1.5rem;
}

.vision-icon {
    width: 120px;
    height: 120px;
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

.goal-card {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(30, 75, 124, 0.05);
    border: 1px solid rgba(30, 75, 124, 0.1);
    transition: all 0.3s ease;
    text-align: center;
}

.goal-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.1);
}

.goal-icon {
    width: 70px;
    height: 70px;
    background: var(--primary-soft);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: var(--primary);
    font-size: 2rem;
    transition: all 0.3s ease;
}

.goal-card:hover .goal-icon {
    background: var(--primary);
    color: white;
    transform: rotate(5deg) scale(1.1);
}

.goal-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--primary-dark);
    margin-bottom: 0.5rem;
}

.goal-target {
    display: inline-block;
    background: var(--primary-soft);
    color: var(--primary);
    padding: 0.25rem 1rem;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-top: 1rem;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2.2rem;
    }
    
    .about-content-title {
        font-size: 2rem;
    }
}
</style>