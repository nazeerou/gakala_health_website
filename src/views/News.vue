<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">News & Events</h1>
                <div class="page-breadcrumb">
                    <a href="/" @click.prevent="goToHome">Home</a>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <span>News</span>
                </div>
            </div>
        </div>
        
        <div class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12" data-aos="fade-up">
                    <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Latest Updates</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">Stay informed with the latest news and events from Gakala Health Centre.</p>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(news, index) in newsEvents" :key="index" 
                         class="news-card" data-aos="fade-up" :data-aos-delay="index * 100">
                        <img :src="news.image" :alt="news.title" class="news-image">
                        <div class="news-content">
                            <div class="news-date">
                                <i class="far fa-calendar-alt"></i> {{ news.date }}
                            </div>
                            <h3 class="news-title">{{ news.title }}</h3>
                            <p class="news-excerpt">{{ news.excerpt }}</p>
                            <a href="#" class="read-more" @click.prevent="handleReadMore(news.link)">
                                Read More <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// News & Events Data
const newsEvents = ref([
    { 
        image: '/assets/img2.jpg', 
        date: 'March 15, 2026', 
        title: 'Free Medical Camp This Weekend', 
        excerpt: 'Join us for a free medical camp offering consultations and health screenings.', 
        link: '/news/1' 
    },
    { 
        image: '/assets/img6.jpg', 
        date: 'March 10, 2026', 
        title: 'New MRI Machine Installed', 
        excerpt: 'State-of-the-art MRI machine installed for better diagnostics.', 
        link: '/news/2' 
    },
    { 
        image: '/assets/img4.jpg', 
        date: 'March 5, 2026', 
        title: 'Health Awareness Seminar', 
        excerpt: 'Join our cardiologists for a seminar on heart health.', 
        link: '/news/3' 
    },
    { 
        image: '/assets/img1.jpg', 
        date: 'February 28, 2026', 
        title: 'New Maternity Wing Opening', 
        excerpt: 'Opening of our new, modern maternity wing.', 
        link: '/news/4' 
    }
])

// Log when component mounts for debugging
onMounted(() => {
    console.log('News component mounted with data:', newsEvents.value)
})

const goToHome = () => {
    // If already on home, reload, otherwise navigate
    if (window.location.pathname === '/') {
        window.location.href = '/'
    } else {
        router.push('/')
    }
}

const handleReadMore = (link) => {
    console.log('Opening news link:', link)
    // You can either emit an event or handle navigation here
    // Option 1: Emit event (if parent needs to handle it)
    // emit('open-external', link)
    
    // Option 2: Direct navigation
    window.open(link, '_blank')
}
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
    cursor: pointer;
}

.page-breadcrumb a:hover {
    color: var(--primary-soft);
}

.news-card {
    background: var(--white);
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--border-light);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.news-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 20px 30px rgba(30, 75, 124, 0.1);
}

.news-image {
    height: 200px;
    width: 100%;
    object-fit: cover;
}

.news-content {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.news-date {
    font-size: 0.8rem;
    color: var(--primary);
    font-weight: 600;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
}

.news-date i {
    margin-right: 5px;
}

.news-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 10px;
    line-height: 1.4;
}

.news-excerpt {
    color: var(--text-light);
    font-size: 0.9rem;
    margin-bottom: 15px;
    line-height: 1.5;
    flex-grow: 1;
}

.read-more {
    color: var(--primary);
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
}

.read-more i {
    margin-left: 5px;
    transition: transform 0.3s;
}

.read-more:hover i {
    transform: translateX(5px);
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