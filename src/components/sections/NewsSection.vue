<template>
    <section class="py-20">
        <div class="container mx-auto px-6">
            <div class="grid lg:grid-cols-3 gap-8">
                <!-- Main News Content (2 columns) -->
                <div class="lg:col-span-2">
                    <div class="section-header text-left mb-8" data-aos="fade-up">
                        <span>NEWS & EVENTS</span>
                        <h2 class="section-title">Latest Updates</h2>
                        <p class="section-subtitle">Stay informed with the latest news and events from Gakala Health Centre.</p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-8">
                        <div v-for="(news, index) in newsEvents.slice(0, 4)" :key="index" 
                             class="news-card" data-aos="fade-up" :data-aos-delay="index * 100">
                            <img :src="news.image" :alt="news.title" class="news-image">
                            <div class="news-content">
                                <div class="news-date">
                                    <i class="far fa-calendar-alt"></i> {{ news.date }}
                                </div>
                                <h3 class="news-title">{{ news.title }}</h3>
                                <p class="news-excerpt">{{ news.excerpt }}</p>
                                <a href="#" class="read-more" @click.prevent="$emit('open-external', news.link)">
                                    Read More <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-center mt-12">
                        <router-link to="/news" class="btn-outline">
                            View All News
                            <i class="fas fa-arrow-right ml-2"></i>
                        </router-link>
                    </div>
                </div>
                
                <!-- Announcements Sidebar (1 column) -->
                <div class="lg:col-span-1" data-aos="fade-left">
                    <div class="announcements-sidebar">
                        <div class="announcements-header">
                            <div class="announcements-icon">
                                <i class="fas fa-bullhorn"></i>
                            </div>
                            <div>
                                <h3 class="announcements-title">Announcements</h3>
                                <p class="announcements-subtitle">Important updates & notices</p>
                            </div>
                        </div>
                        
                        <div class="announcements-list">
                            <div v-for="(announcement, index) in announcements" :key="index" class="announcement-item">
                                <div class="announcement-badge"></div>
                                <div class="announcement-content">
                                    <div class="announcement-date">{{ announcement.date }}</div>
                                    <div class="announcement-text">{{ announcement.title }}</div>
                                    <a href="#" class="announcement-link" @click.prevent="$emit('open-external', announcement.link)">
                                        Read More <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    newsEvents: {
        type: Array,
        default: () => []
    },
    announcements: {
        type: Array,
        default: () => []
    }
})

defineEmits(['open-external'])
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
    margin-bottom: 50px;
}

.section-header span {
    color: var(--primary);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.9rem;
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
}

.read-more i {
    margin-left: 5px;
    transition: transform 0.3s;
}

.read-more:hover i {
    transform: translateX(5px);
}

.announcements-sidebar {
    background: white;
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 10px 30px rgba(30, 75, 124, 0.1);
    border: 1px solid rgba(30, 75, 124, 0.1);
    height: fit-content;
    position: sticky;
    top: 100px;
}

.announcements-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--primary-soft);
}

.announcements-icon {
    width: 40px;
    height: 40px;
    background: var(--primary-soft);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-size: 1.2rem;
}

.announcements-title {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--primary-dark);
}

.announcements-subtitle {
    font-size: 0.8rem;
    color: var(--text-light);
}

.announcements-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.announcement-item {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background: var(--primary-very-light);
    border-radius: 12px;
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

.announcement-item:hover {
    transform: translateX(5px);
    border-color: var(--primary);
    background: white;
    box-shadow: 0 5px 15px rgba(30, 75, 124, 0.1);
}

.announcement-badge {
    width: 8px;
    height: 8px;
    background: var(--primary);
    border-radius: 50%;
    margin-top: 0.5rem;
    animation: pulse-soft 2s infinite;
}

.announcement-content {
    flex: 1;
}

.announcement-date {
    font-size: 0.7rem;
    color: var(--primary);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.25rem;
}

.announcement-text {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-dark);
    margin-bottom: 0.25rem;
}

.announcement-link {
    font-size: 0.8rem;
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    transition: gap 0.3s ease;
    cursor: pointer;
}

.announcement-link:hover {
    gap: 0.5rem;
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

@keyframes pulse-soft {
    0% { box-shadow: 0 0 0 0 rgba(30, 75, 124, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(30, 75, 124, 0); }
    100% { box-shadow: 0 0 0 0 rgba(30, 75, 124, 0); }
}

@media (max-width: 768px) {
    .section-title {
        font-size: 1.8rem;
    }
}
</style>