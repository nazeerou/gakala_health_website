<template>
    <section class="py-20 bg-[#f8fafc]">
        <div class="container mx-auto px-6">
            <div class="section-header" data-aos="fade-up">
                <span>TESTIMONIALS</span>
                <h2 class="section-title">What Our Patients Say</h2>
                <p class="section-subtitle">Read about the experiences of those who trusted us with their health.</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(testimonial, index) in testimonials" :key="testimonial.name" 
                     class="testimonial-card" data-aos="fade-up" :data-aos-delay="index * 100">
                    <div class="flex items-center mb-4">
                        <div class="testimonial-avatar mr-4">
                            <img :src="testimonial.avatar" :alt="testimonial.name">
                        </div>
                        <div>
                            <h4 class="font-bold text-primary-dark">{{ testimonial.name }}</h4>
                            <div class="flex text-yellow-400 text-sm">
                                <i v-for="star in 5" :key="star" class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600 italic">"{{ testimonial.text }}"</p>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <router-link to="/testimonials" class="btn-outline">
                    Read More Testimonials
                    <i class="fas fa-arrow-right ml-2"></i>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    testimonials: {
        type: Array,
        default: () => []
    }
})
</script>

<style scoped>
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

.testimonial-card {
    background: var(--white);
    border-radius: 20px;
    padding: 30px;
    border: 1px solid var(--border-light);
    position: relative;
    transition: all 0.3s ease;
}

.testimonial-card:hover {
    border-color: var(--primary);
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.05);
}

.testimonial-card::before {
    content: '"';
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 80px;
    font-family: serif;
    color: var(--primary-soft);
    line-height: 1;
}

.testimonial-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--white);
    box-shadow: 0 5px 15px rgba(30, 75, 124, 0.15);
}

.testimonial-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
}
</style>