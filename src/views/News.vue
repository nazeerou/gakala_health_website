<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">{{ t('news.page_title') || 'News & Events' }}</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">{{ t('news.breadcrumb.home') || 'Home' }}</router-link>
                    <span class="separator">›</span>
                    <span>{{ t('news.breadcrumb.current') || 'News' }}</span>
                </div>
            </div>
        </div>
        
        <div class="news-section">
            <div class="container mx-auto px-6">
                <div class="section-header">
                    <div class="section-badge1">{{ t('news.badge') || 'NEWS & EVENTS' }}</div>
                    <h2 class="section-title">{{ t('news.title') || 'Latest Updates' }}</h2>
                    <p class="section-description">{{ t('news.subtitle') || 'Stay informed with the latest news and events from Gakala Health Centre.' }}</p>
                </div>
                
                <div class="news-main-grid">
                    <!-- Left Column - News Cards (3 columns) -->
                    <div class="news-left-grid">
                        <!-- Free Medical Camp -->
                        <div class="news-card">
                            <img src="/assets/img4.jpg" alt="Free Medical Camp" class="news-image">
                            <div class="news-content">
                                <div class="news-date">
                                    <i class="far fa-calendar-alt"></i> {{ t('news.items.camp.date') || 'March 15, 2026' }}
                                </div>
                                <h3 class="news-title">{{ t('news.items.camp.title') || 'Free Medical Camp This Weekend' }}</h3>
                                <p class="news-excerpt">{{ t('news.items.camp.description') || 'Join us for a free medical camp offering consultations and health screenings.' }}</p>
                                <a href="#" class="read-more" @click.prevent="$emit('open-external', '/news/medical-camp')">
                                    {{ t('news.read_more') || 'Read More' }} <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <!-- Health Awareness Seminar -->
                        <div class="news-card">
                            <img src="/assets/img1.jpg" alt="Health Awareness Seminar" class="news-image">
                            <div class="news-content">
                                <div class="news-date">
                                    <i class="far fa-calendar-alt"></i> {{ t('news.items.seminar.date') || 'March 5, 2026' }}
                                </div>
                                <h3 class="news-title">{{ t('news.items.seminar.title') || 'Health Awareness Seminar' }}</h3>
                                <p class="news-excerpt">{{ t('news.items.seminar.description') || 'Join our cardiologists for a seminar on heart health.' }}</p>
                                <a href="#" class="read-more" @click.prevent="$emit('open-external', '/news/health-seminar')">
                                    {{ t('news.read_more') || 'Read More' }} <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <!-- New MRI Machine -->
                        <div class="news-card">
                            <img src="/assets/img17.jpg" alt="New MRI Machine" class="news-image">
                            <div class="news-content">
                                <div class="news-date">
                                    <i class="far fa-calendar-alt"></i> March 10, 2026
                                </div>
                                <h3 class="news-title">New MRI Machine Installed</h3>
                                <p class="news-excerpt">State-of-the-art MRI machine now available for accurate diagnostics at our facility.</p>
                                <a href="#" class="read-more" @click.prevent="$emit('open-external', '/news/mri-machine')">
                                    {{ t('news.read_more') || 'Read More' }} <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <!-- Free Medical Camp City Center -->
                        <div class="news-card">
                            <img src="/assets/img6.jpg" alt="Medical Camp City Center" class="news-image">
                            <div class="news-content">
                                <div class="news-date">
                                    <i class="far fa-calendar-alt"></i> March 8, 2026
                                </div>
                                <h3 class="news-title">Free Medical Camp at City Center</h3>
                                <p class="news-excerpt">Free medical camp this Saturday at City Center offering consultations and health screenings.</p>
                                <a href="#" class="read-more" @click.prevent="$emit('open-external', '/news/city-center-camp')">
                                    {{ t('news.read_more') || 'Read More' }} <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <!-- COVID-19 Booster -->
                        <div class="news-card">
                            <img src="/assets/img2.jpg" alt="COVID-19 Booster" class="news-image">
                            <div class="news-content">
                                <div class="news-date">
                                    <i class="far fa-calendar-alt"></i> March 3, 2026
                                </div>
                                <h3 class="news-title">COVID-19 Booster Shots Available</h3>
                                <p class="news-excerpt">COVID-19 booster shots available for all adults. Walk-ins welcome.</p>
                                <a href="#" class="read-more" @click.prevent="$emit('open-external', '/news/covid-booster')">
                                    {{ t('news.read_more') || 'Read More' }} <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <!-- Maternity Wing Renovation -->
                        <div class="news-card">
                            <img src="/assets/img5.jpg" alt="Maternity Wing" class="news-image">
                            <div class="news-content">
                                <div class="news-date">
                                    <i class="far fa-calendar-alt"></i> February 28, 2026
                                </div>
                                <h3 class="news-title">Maternity Wing Renovation Completed</h3>
                                <p class="news-excerpt">Our newly renovated maternity wing is now open with modern facilities for mothers and newborns.</p>
                                <a href="#" class="read-more" @click.prevent="$emit('open-external', '/news/maternity-renovation')">
                                    {{ t('news.read_more') || 'Read More' }} <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column - Announcements -->
                    <div class="announcements-sidebar">
                        <div class="announcements-header">
                            <div class="announcements-icon">
                                <i class="fas fa-bullhorn"></i>
                            </div>
                            <div>
                                <h3 class="announcements-title">{{ t('news.announcements.title') || 'Announcements' }}</h3>
                                <p class="announcements-subtitle">{{ t('news.announcements.subtitle') || 'Important updates & notices' }}</p>
                            </div>
                        </div>
                        
                        <div class="announcements-list">
                            <!-- Today - MRI Machine -->
                            <div class="announcement-item">
                                <div class="announcement-timeline">
                                    <span class="timeline-dot today"></span>
                                    <span class="timeline-line"></span>
                                </div>
                                <div class="announcement-content">
                                    <div class="announcement-time today-badge">{{ t('news.announcements.today') || 'TODAY' }}</div>
                                    <p class="announcement-text">{{ t('news.announcements.items.mri.text') || 'New MRI machine installed - Book your appointment now' }}</p>
                                    <a href="#" class="announcement-link" @click.prevent="$emit('open-external', '/news/mri-machine')">
                                        {{ t('news.read_more') || 'Read More' }} <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            <!-- Yesterday - Medical Camp -->
                            <div class="announcement-item">
                                <div class="announcement-timeline">
                                    <span class="timeline-dot"></span>
                                    <span class="timeline-line"></span>
                                </div>
                                <div class="announcement-content">
                                    <div class="announcement-time">{{ t('news.announcements.yesterday') || 'YESTERDAY' }}</div>
                                    <p class="announcement-text">{{ t('news.announcements.items.camp.text') || 'Free medical camp this Saturday at City Center' }}</p>
                                    <a href="#" class="announcement-link" @click.prevent="$emit('open-external', '/news/city-center-camp')">
                                        {{ t('news.read_more') || 'Read More' }} <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            <!-- 2 Days Ago - Booster Shots -->
                            <div class="announcement-item">
                                <div class="announcement-timeline">
                                    <span class="timeline-dot"></span>
                                    <span class="timeline-line"></span>
                                </div>
                                <div class="announcement-content">
                                    <div class="announcement-time">{{ t('news.announcements.two_days_ago') || '2 DAYS AGO' }}</div>
                                    <p class="announcement-text">{{ t('news.announcements.items.booster.text') || 'COVID-19 booster shots available for all adults' }}</p>
                                    <a href="#" class="announcement-link" @click.prevent="$emit('open-external', '/news/covid-booster')">
                                        {{ t('news.read_more') || 'Read More' }} <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            <!-- 1 Week Ago - Maternity Wing -->
                            <div class="announcement-item">
                                <div class="announcement-timeline">
                                    <span class="timeline-dot"></span>
                                    <span class="timeline-line"></span>
                                </div>
                                <div class="announcement-content">
                                    <div class="announcement-time">{{ t('news.announcements.one_week_ago') || '1 WEEK AGO' }}</div>
                                    <p class="announcement-text">{{ t('news.announcements.items.maternity.text') || 'Maternity wing renovation completed' }}</p>
                                    <a href="#" class="announcement-link" @click.prevent="$emit('open-external', '/news/maternity-renovation')">
                                        {{ t('news.read_more') || 'Read More' }} <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- View All Announcements Link -->
                        <div class="mt-6 text-center">
                            <a href="#" class="view-all-announcements" @click.prevent="$emit('open-external', '/news/announcements')">
                                {{ t('news.view_all_announcements') || 'View All Announcements' }}
                                <i class="fas fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- View All News Button -->
                <div class="text-center mt-12">
                    <router-link to="/news" class="view-all-btn">
                        {{ t('news.view_all') || 'View All News' }}
                        <i class="fas fa-arrow-right ml-2"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineEmits(['open-external'])
</script>

<style scoped>
/* CSS Variables - Direct colors */
:root {
    --primary: #1e4b7c;
    --primary-dark: #0f2f4f;
    --primary-light: #2e6ca3;
    --primary-soft: rgba(30, 75, 124, 0.1);
    --text-dark: #1e293b;
    --text-light: #475569;
    --text-muted: #64748b;
    --border-light: #e2e8f0;
    --white: #ffffff;
    --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    --transition: all 0.3s ease;
}

/* Page Header */
.page-header {
    background: linear-gradient(135deg, #0a2a45, #1e4b7c);
    padding: 80px 0 40px;
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.page-header::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 50%;
    animation: float 20s infinite;
}

.page-header::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -10%;
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 50%;
    animation: float 25s infinite reverse;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, -20px); }
}

.page-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    position: relative;
    z-index: 2;
    letter-spacing: -0.02em;
}

.page-breadcrumb {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
    position: relative;
    z-index: 2;
}

.page-breadcrumb .separator {
    color: rgba(255, 255, 255, 0.4);
    font-size: 1.2rem;
    line-height: 1;
}

.page-breadcrumb a {
    color: white;
    text-decoration: none;
    transition: var(--transition);
    border-bottom: 1px solid transparent;
}

.page-breadcrumb a:hover {
    border-bottom-color: white;
}

/* News Section */
.news-section {
    padding: 60px 20px;
    background: var(--white);
    max-width: 1200px;
    margin: 0 auto;
}

/* Section Header */
.section-header {
    text-align: center;
    margin-bottom: 50px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.section-badge {
    display: inline-block;
    background: rgba(30, 75, 124, 0.08);
    color: #1e4b7c;
    padding: 6px 18px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.85rem;
    margin-bottom: 15px;
    border: 1px solid rgba(30, 75, 124, 0.2);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.section-title {
    font-size: 2rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 16px;
    position: relative;
    padding-bottom: 15px;
    letter-spacing: -0.01em;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #1e4b7c, #2e6ca3);
    border-radius: 2px;
}

.section-description {
    color: #475569;
    font-size: 1.1rem;
    line-height: 1.7;
}

/* Main Grid Layout */
.news-main-grid {
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    gap: 30px;
    align-items: start;
}

/* Left Column - News Cards Grid */
.news-left-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

/* News Card */
.news-card {
    background: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
    transition: var(--transition);
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow-sm);
}

.news-card:hover {
    transform: translateY(-6px);
    border-color: #1e4b7c;
    box-shadow: 0 20px 30px rgba(30, 75, 124, 0.1);
}

.news-image {
    height: 180px;
    width: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.news-card:hover .news-image {
    filter: brightness(1.05);
}

.news-content {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.news-date {
    font-size: 0.8rem;
    color: #1e4b7c;
    font-weight: 600;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.news-date i {
    font-size: 0.85rem;
}

.news-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 10px;
    line-height: 1.4;
    transition: var(--transition);
}

.news-card:hover .news-title {
    color: #1e4b7c;
}

.news-excerpt {
    color: #475569;
    font-size: 0.9rem;
    margin-bottom: 15px;
    line-height: 1.6;
    flex-grow: 1;
}

.read-more {
    color: #1e4b7c;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: var(--transition);
    margin-top: auto;
    padding: 8px 0;
    position: relative;
    width: fit-content;
}

.read-more::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #1e4b7c, #2e6ca3);
    transition: width 0.3s ease;
}

.read-more:hover {
    color: #2e6ca3;
    gap: 12px;
}

.read-more:hover::after {
    width: 100%;
}

.read-more i {
    font-size: 0.8rem;
    transition: transform 0.3s ease;
}

.read-more:hover i {
    transform: translateX(5px);
}

/* Announcements Sidebar */
.announcements-sidebar {
    background: #ffffff;
    border-radius: 20px;
    padding: 25px;
    box-shadow: var(--shadow-md);
    border: 1px solid #e2e8f0;
    position: sticky;
    top: 100px;
}

.announcements-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid rgba(30, 75, 124, 0.1);
}

.announcements-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    box-shadow: 0 10px 20px rgba(30, 75, 124, 0.2);
    flex-shrink: 0;
}

.announcements-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 4px;
}

.announcements-subtitle {
    color: #64748b;
    font-size: 0.85rem;
}

/* Announcements List */
.announcements-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.announcement-item {
    display: flex;
    gap: 15px;
    position: relative;
}

.announcement-timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 20px;
}

.timeline-dot {
    width: 12px;
    height: 12px;
    background: #1e4b7c;
    border: 3px solid rgba(30, 75, 124, 0.2);
    border-radius: 50%;
    z-index: 2;
    transition: all 0.3s ease;
}

.timeline-dot.today {
    background: #10b981;
    border-color: rgba(16, 185, 129, 0.3);
    animation: pulse-green 2s infinite;
}

@keyframes pulse-green {
    0% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5);
    }
    70% {
        box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
    }
}

.timeline-line {
    position: absolute;
    top: 18px;
    width: 2px;
    height: calc(100% + 20px);
    background: linear-gradient(180deg, 
        rgba(30, 75, 124, 0.2) 0%, 
        rgba(30, 75, 124, 0.1) 50%,
        transparent 100%);
    z-index: 1;
}

.announcement-item:last-child .timeline-line {
    display: none;
}

.announcement-content {
    flex: 1;
}

.announcement-time {
    font-size: 0.7rem;
    font-weight: 700;
    color: #1e4b7c;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
    background: rgba(30, 75, 124, 0.08);
    display: inline-block;
    padding: 3px 10px;
    border-radius: 30px;
    border: 1px solid rgba(30, 75, 124, 0.1);
}

.announcement-time.today-badge {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
    border-color: rgba(16, 185, 129, 0.2);
}

.announcement-text {
    color: #475569;
    line-height: 1.5;
    margin-bottom: 8px;
    font-size: 0.9rem;
    font-weight: 500;
}

.announcement-link {
    color: #1e4b7c;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.8rem;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

.announcement-link:hover {
    gap: 8px;
    color: #2e6ca3;
}

.view-all-announcements {
    color: #1e4b7c;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

.view-all-announcements:hover {
    gap: 8px;
    color: #2e6ca3;
}

/* View All Button */
.view-all-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: #1e4b7c;
    padding: 12px 30px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    border: 2px solid #1e4b7c;
    transition: var(--transition);
}

.view-all-btn:hover {
    background: #1e4b7c;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(30, 75, 124, 0.2);
}

.view-all-btn i {
    transition: transform 0.3s ease;
}

.view-all-btn:hover i {
    transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .news-main-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .news-left-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .announcements-sidebar {
        position: static;
    }
}

@media (max-width: 768px) {
    .page-header {
        padding: 60px 0 30px;
    }
    
    .page-title {
        font-size: 2rem;
    }
    
    .news-section {
        padding: 40px 20px;
    }
    
    .section-title {
        font-size: 1.6rem;
    }
    
    .section-description {
        font-size: 1rem;
    }
    
    .news-left-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .news-image {
        height: 200px;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 1.6rem;
    }
    
    .news-title {
        font-size: 1.1rem;
    }
    
    .news-excerpt {
        font-size: 0.9rem;
    }
    
    .announcements-sidebar {
        padding: 20px;
    }
}
</style>