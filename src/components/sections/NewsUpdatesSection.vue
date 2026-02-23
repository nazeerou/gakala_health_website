<template>
    <section class="news-section">
        <div class="container">
            <!-- Section Header -->
            <div class="section-header">
                <div class="section-badge">{{ t('news.badge') }}</div>
                <h2 class="section-title">{{ t('news.title') }}</h2>
                <p class="section-subtitle">{{ t('news.subtitle') }}</p>
            </div>

            <div class="news-grid">
                <!-- Left Column - News Items in 2-Column Grid -->
                <div class="news-left scrollable">
                    <div class="news-grid-2col">
                        <!-- Free Medical Camp -->
                        <div class="news-item featured">
                            <div class="news-image-wrapper">
                                <img src="/assets/img4.jpg" alt="Free Medical Camp" class="news-image">
                                <div class="image-overlay"></div>
                            </div>
                            <div class="news-content">
                                <div class="news-date">{{ t('news.items.camp.date') }}</div>
                                <h3 class="news-item-title">{{ t('news.items.camp.title') }}</h3>
                                <p class="news-item-description">{{ t('news.items.camp.description') }}</p>
                                <a href="#" class="read-more">{{ t('news.read_more') }} <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <!-- Health Awareness Seminar -->
                        <div class="news-item">
                            <div class="news-image-wrapper">
                                <img src="/assets/img1.jpg" alt="Health Awareness Seminar" class="news-image">
                                <div class="image-overlay"></div>
                            </div>
                            <div class="news-content">
                                <div class="news-date">{{ t('news.items.seminar.date') }}</div>
                                <h3 class="news-item-title">{{ t('news.items.seminar.title') }}</h3>
                                <p class="news-item-description">{{ t('news.items.seminar.description') }}</p>
                                <a href="#" class="read-more">{{ t('news.read_more') }} <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <!-- New Pediatric Wing Opening -->
                        <div class="news-item">
                            <div class="news-image-wrapper">
                                <img src="/assets/img17.jpg" alt="Pediatric Wing" class="news-image">
                                <div class="image-overlay"></div>
                            </div>
                            <div class="news-content">
                                <div class="news-date">February 28, 2026</div>
                                <h3 class="news-item-title">New Pediatric Wing Opening</h3>
                                <p class="news-item-description">State-of-the-art pediatric facility now accepting patients.</p>
                                <a href="#" class="read-more">{{ t('news.read_more') }} <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <!-- Community Health Workshop -->
                        <div class="news-item">
                            <div class="news-image-wrapper">
                                <img src="/assets/img6.jpg" alt="Health Workshop" class="news-image">
                                <div class="image-overlay"></div>
                            </div>
                            <div class="news-content">
                                <div class="news-date">February 20, 2026</div>
                                <h3 class="news-item-title">Community Health Workshop</h3>
                                <p class="news-item-description">Free workshop on diabetes prevention and management.</p>
                                <a href="#" class="read-more">{{ t('news.read_more') }} <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

    <!-- Right Column - Announcements -->
   <!-- Right Column - Announcements -->
<div class="news-right">
    <div class="announcement-header">
        <div class="announcements-icon">
            <i class="fas fa-bullhorn"></i>
        </div>
        <div class="announcement-header-text">
            <h3 class="announcement-title">{{ t('news.announcements.title') }}</h3>
            <p class="announcement-subtitle">{{ t('news.announcements.subtitle') }}</p>
        </div>
    </div>

    <div class="announcement-list">
        <!-- Today -->
        <div class="announcement-item">
            <div class="announcement-timeline">
                <span class="timeline-dot today"></span>
                <span class="timeline-line"></span>
            </div>
            <div class="announcement-content">
                <div class="announcement-time today-badge">{{ t('news.announcements.today') }}</div>
                <p class="announcement-text">{{ t('news.announcements.items.mri.text') }}</p>
                <a href="#" class="announcement-link">
                    {{ t('news.read_more') }} <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>

        <!-- Yesterday -->
        <div class="announcement-item">
            <div class="announcement-timeline">
                <span class="timeline-dot"></span>
                <span class="timeline-line"></span>
            </div>
            <div class="announcement-content">
                <div class="announcement-time">{{ t('news.announcements.yesterday') }}</div>
                <p class="announcement-text">{{ t('news.announcements.items.camp.text') }}</p>
                <a href="#" class="announcement-link">
                    {{ t('news.read_more') }} <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>

        <!-- 2 Days Ago -->
        <div class="announcement-item">
            <div class="announcement-timeline">
                <span class="timeline-dot"></span>
                <span class="timeline-line"></span>
            </div>
            <div class="announcement-content">
                <div class="announcement-time">{{ t('news.announcements.two_days_ago') }}</div>
                <p class="announcement-text">{{ t('news.announcements.items.booster.text') }}</p>
                <a href="#" class="announcement-link">
                    {{ t('news.read_more') }} <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>

        <!-- 1 Week Ago -->
        <div class="announcement-item">
            <div class="announcement-timeline">
                <span class="timeline-dot"></span>
                <span class="timeline-line"></span>
            </div>
            <div class="announcement-content">
                <div class="announcement-time">{{ t('news.announcements.one_week_ago') }}</div>
                <p class="announcement-text">{{ t('news.announcements.items.maternity.text') }}</p>
                <a href="#" class="announcement-link">
                    {{ t('news.read_more') }} <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
</div>
</div>
</div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
:root {
    --primary: #1e4b7c;
    --primary-dark: #0f2f4f;
    --primary-light: #2e6ca3;
    --primary-soft: rgba(30, 75, 124, 0.1);
    --text-dark: #1a2634;
    --text-light: #4a5568;
    --text-muted: #64748b;
    --bg-light: #f8fafd;
    --white: #ffffff;
    --border-light: #e2e8f0;
    --shadow-sm: 0 5px 15px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 10px 25px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 20px 40px rgba(30, 75, 124, 0.15);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.news-section {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--bg-light) 0%, var(--white) 100%);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Section Header */
.section-header {
    text-align: left;
    margin-bottom: 50px;
}

.section-badge {
    display: inline-block;
    font-weight: 600;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.section-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-dark);
    /* margin-bottom: 10px; */
    line-height: 1.0;
}

.section-subtitle {
    color: var(--text-muted);
    font-size: 1.1rem;
    max-width: 700px;
    line-height: 1.2;
}

/* News Grid - Main Layout */
.news-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 40px;
    align-items: start;
}

/* Left Column - Scrollable Container */
.news-left {
    max-height: 700px;
    /* overflow-y: auto; */
    padding-right: 20px;
}

/* Custom Scrollbar */
.news-left::-webkit-scrollbar {
    width: 6px;
}

.news-left::-webkit-scrollbar-track {
    background: var(--primary-soft);
    border-radius: 10px;
}

.news-left::-webkit-scrollbar-thumb {
    background: rgba(30, 75, 124, 0.3);
    border-radius: 10px;
    transition: var(--transition);
}

.news-left::-webkit-scrollbar-thumb:hover {
    background: var(--primary);
}

/* 2-Column Grid for News Items */
.news-grid-2col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.news-item {
    background: var(--white);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-light);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    height: fit-content;
}

.news-item.featured {
    box-shadow: var(--shadow-md);
    border-left: 4px solid var(--primary);
}

.news-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-light);
}

.news-image-wrapper {
    position: relative;
    height: 160px;
    overflow: hidden;
}

.news-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.news-item:hover .news-image {
    transform: scale(1.08);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, 
        rgba(30, 75, 124, 0.1) 0%,
        rgba(30, 75, 124, 0.3) 100%);
    transition: var(--transition);
}

.news-item:hover .image-overlay {
    background: linear-gradient(180deg, 
        rgba(30, 75, 124, 0.15) 0%,
        rgba(30, 75, 124, 0.4) 100%);
}

.news-content {
    padding: 10px 0 0 0;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.news-date {
    color: var(--primary);
    font-weight: 600;
    font-size: 0.8rem;
    /* margin-bottom: 8px; */
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.news-item-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 1px;
    line-height: 1.4;
    transition: var(--transition);
}

.news-item:hover .news-item-title {
    color: var(--primary);
}

.news-item-description {
    color: var(--text-light);
    line-height: 1.5;
    margin-bottom: 15px;
    font-size: 0.9rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
}

.read-more {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.85rem;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin-top: auto;
    padding: 5px 0;
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
    background: linear-gradient(90deg, var(--primary), var(--primary-light));
    transition: width 0.3s ease;
}

.read-more:hover {
    color: var(--primary-light);
    gap: 8px;
}

.read-more:hover::after {
    width: 100%;
}

.read-more i {
    font-size: 0.75rem;
    transition: transform 0.3s ease;
}

.read-more:hover i {
    transform: translateX(5px);
}

/* Right Column - Announcements */
.news-right {
    background: linear-gradient(145deg, #ffffff, #fafcff);
    padding: 30px;
    border-radius: 24px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(226, 232, 240, 0.8);
    position: sticky;
    top: 40px;
    transition: var(--transition);
}

.news-right:hover {
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.08);
}

.announcement-header {
    margin-bottom: 10px;
    padding-bottom: 15px;
    border-bottom: 2px solid rgba(30, 75, 124, 0.08);
}

.announcement-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 8px;
    letter-spacing: -0.02em;
    position: relative;
    display: inline-block;
}

.announcement-title::after {
    content: '';
    position: absolute;
    bottom: -18px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--primary-light));
    border-radius: 3px;
}

.announcement-subtitle {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-top: 15px;
    line-height: 1.5;
}

.announcement-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
}

/* Timeline Styles */
.announcement-item {
    display: flex;
    gap: 20px;
    padding: 18px 15px;
    border-radius: 16px;
    transition: all 0.3s ease;
    position: relative;
    background: transparent;
}

.announcement-item:hover {
    background: linear-gradient(90deg, rgba(30, 75, 124, 0.02), rgba(30, 75, 124, 0.05));
    transform: translateX(8px);
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
    background: var(--primary-light);
    border: 3px solid rgba(30, 75, 124, 0.15);
    border-radius: 50%;
    z-index: 2;
    transition: all 0.3s ease;
    box-shadow: 0 0 0 0 rgba(30, 75, 124, 0.2);
}

.timeline-dot.today {
    background: #10b981;
    border-color: rgba(16, 185, 129, 0.3);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.3);
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
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 6px;
    background: rgba(30, 75, 124, 0.08);
    display: inline-block;
    padding: 3px 12px;
    border-radius: 30px;
    border: 1px solid rgba(30, 75, 124, 0.1);
}

.announcement-time.today-badge {
    background: rgba(16, 185, 129, 0.1);
    color: #0e9f6e;
    border-color: rgba(16, 185, 129, 0.2);
}

.announcement-text {
    color: var(--text-light);
    line-height: 1.5;
    margin: 8px 0 10px;
    font-size: 0.95rem;
    font-weight: 500;
    padding-right: 5px;
}

.announcement-link {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.85rem;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 0;
    position: relative;
}

.announcement-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), var(--primary-light));
    transition: width 0.3s ease;
}

.announcement-link:hover {
    color: var(--primary-light);
    gap: 10px;
}

.announcement-link:hover::after {
    width: 100%;
}

.announcement-link i {
    font-size: 0.8rem;
    transition: transform 0.3s ease;
}

.announcement-link:hover i {
    transform: translateX(5px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .news-right {
        padding: 25px;
    }
    
    .announcement-item {
        padding: 15px 10px;
    }
    
    .announcement-time {
        font-size: 0.7rem;
        padding: 2px 10px;
    }
    
    .announcement-text {
        font-size: 0.9rem;
    }
    
    .timeline-dot {
        width: 10px;
        height: 10px;
    }
}

@media (max-width: 480px) {
    .announcement-item {
        gap: 15px;
    }
    
    .announcement-time {
        font-size: 0.65rem;
        letter-spacing: 0.5px;
    }
}
/* Announcement Header with Icon Left and Text Right */
.announcement-header {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(30, 75, 124, 0.08);
}

.announcements-icon {
    width: 60px;
    height: 60px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    box-shadow: 0 15px 25px rgba(30, 75, 124, 0.25);
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
}

.announcements-icon::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
    opacity: 0;
    /* transition: opacity 0.5s ease; */
}

.announcement-header:hover .announcements-icon {
    /* transform: rotate(5deg) scale(1.05); */
    box-shadow: 0 20px 30px rgba(30, 75, 124, 0.35);
}

.announcement-header:hover .announcements-icon::before {
    opacity: 1;
    animation: shine 1.5s infinite;
}

@keyframes shine {
    0% {
        transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
        transform: translateX(100%) translateY(100%) rotate(45deg);
    }
}

.announcement-header-text {
    flex: 1;
}

.announcement-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 6px;
    letter-spacing: -0.02em;
    line-height: 1.2;
}

.announcement-subtitle {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.5;
    opacity: 0.8;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .announcement-header {
        gap: 12px;
    }
    
    .announcements-icon {
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        border-radius: 14px;
    }
    
    .announcement-title {
        font-size: 1.4rem;
    }
}

@media (max-width: 480px) {
    .announcement-header {
        gap: 10px;
    }
    
    .announcements-icon {
        width: 45px;
        height: 45px;
        font-size: 1.3rem;
        border-radius: 12px;
    }
    
    .announcement-title {
        font-size: 1.3rem;
    }
    
    .announcement-subtitle {
        font-size: 0.85rem;
    }
}
</style>