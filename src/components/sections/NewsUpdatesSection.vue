<template>
    <section class="news-section">
        <div class="container">
            <!-- Section Header -->
            <div class="section-header">
                <div class="section-badge1">{{ t('news.badge') }}</div>
                <h2 class="section-title">{{ t('news.title') }}</h2>
                <p class="section-subtitle">{{ t('news.subtitle') }}</p>
            </div>

            <div class="news-grid">
                <!-- Left Column - News Items in 2-Column Grid -->
                <div class="news-left">
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
    padding: 60px 0;
    /* background: linear-gradient(135deg, var(--bg-light) 0%, var(--white) 100%); */
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Section Header */
.section-header {
    text-align: left;
    margin-bottom: 40px;
}

.section-badge {
    display: inline-block;
    background: linear-gradient(135deg, rgba(30, 75, 124, 0.1), rgba(46, 108, 163, 0.15));
    color: var(--primary);
    padding: 6px 18px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.85rem;
    margin-bottom: 12px;
    border: 1px solid rgba(30, 75, 124, 0.2);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.section-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 8px;
    line-height: 1.2;
}

.section-subtitle {
    color: var(--text-muted);
    font-size: 1rem;
    max-width: 700px;
    line-height: 1.5;
}

/* News Grid - Main Layout */
.news-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 30px;
    align-items: start;
}

/* Left Column - News Items */
.news-left {
    width: 100%;
}

/* 2-Column Grid for News Items */
.news-grid-2col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.news-item {
    /* background: var(--white); */
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-light);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    height: 100%;
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
    flex-shrink: 0;
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
    padding: 15px 15px 20px 15px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.news-date {
    color: var(--primary);
    font-weight: 600;
    font-size: 0.75rem;
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.news-item-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 8px;
    line-height: 1.4;
    transition: var(--transition);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.news-item:hover .news-item-title {
    color: var(--primary);
}

.news-item-description {
    color: var(--text-light);
    line-height: 1.5;
    margin-bottom: 12px;
    font-size: 0.85rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
}

.read-more {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.8rem;
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
    font-size: 0.7rem;
    transition: transform 0.3s ease;
}

.read-more:hover i {
    transform: translateX(5px);
}

/* Right Column - Announcements */
.news-right {
    background: linear-gradient(145deg, #ffffff, #fafcff);
    padding: 25px;
    border-radius: 24px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(226, 232, 240, 0.8);
    position: sticky;
    top: 40px;
    transition: var(--transition);
}

/* Announcement Header */
.announcement-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid rgba(30, 75, 124, 0.08);
}

.announcements-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* color: white; */
    font-size: 1.5rem;
    /* box-shadow: 0 10px 20px rgba(30, 75, 124, 0.2); */
    flex-shrink: 0;
}

.announcement-header-text {
    flex: 1;
}

.announcement-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 4px;
    letter-spacing: -0.02em;
    line-height: 1.2;
}

.announcement-subtitle {
    color: var(--text-muted);
    font-size: 0.85rem;
    line-height: 1.4;
}

/* Announcement List */
.announcement-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.announcement-item {
    display: flex;
    gap: 15px;
    padding: 12px;
    border-radius: 16px;
    transition: all 0.3s ease;
    position: relative;
    background: transparent;
}

.announcement-item:hover {
    background: linear-gradient(90deg, rgba(30, 75, 124, 0.02), rgba(30, 75, 124, 0.05));
    transform: translateX(5px);
}

.announcement-timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 16px;
    flex-shrink: 0;
}

.timeline-dot {
    width: 10px;
    height: 10px;
    background: var(--primary-light);
    border: 2px solid rgba(30, 75, 124, 0.15);
    border-radius: 50%;
    z-index: 2;
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
    top: 14px;
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
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 4px;
    background: rgba(30, 75, 124, 0.08);
    display: inline-block;
    padding: 2px 10px;
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
    line-height: 1.4;
    margin: 6px 0 8px;
    font-size: 0.9rem;
    font-weight: 500;
}

.announcement-link {
    color: var(--primary);
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
    color: var(--primary-light);
}

.announcement-link i {
    font-size: 0.75rem;
    transition: transform 0.3s ease;
}

.announcement-link:hover i {
    transform: translateX(5px);
}

/* ===== RESPONSIVE BREAKPOINTS ===== */

/* Tablet Landscape (up to 1024px) */
@media (max-width: 1024px) {
    .news-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .news-right {
        position: static;
        max-width: 600px;
        margin: 0 auto;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
}

/* Tablet Portrait (up to 768px) */
@media (max-width: 768px) {
    .news-section {
        padding: 40px 0;
    }
    
    .container {
        padding: 0 15px;
    }
    
    .section-header {
        margin-bottom: 30px;
    }
    
    .section-title {
        font-size: 1.6rem;
    }
    
    .section-subtitle {
        font-size: 0.95rem;
    }
    
    .news-grid-2col {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
    
    .news-image-wrapper {
        height: 140px;
    }
    
    .news-content {
        padding: 12px;
    }
    
    .news-item-title {
        font-size: 0.95rem;
        -webkit-line-clamp: 2;
    }
    
    .news-item-description {
        font-size: 0.8rem;
        -webkit-line-clamp: 2;
        margin-bottom: 10px;
    }
    
    .news-right {
        padding: 20px;
        max-width: 100%;
    }
    
    .announcement-title {
        font-size: 1.3rem;
    }
    
    .announcement-subtitle {
        font-size: 0.8rem;
    }
    
    .announcement-item {
        padding: 10px;
    }
}

/* Mobile (up to 640px) */
@media (max-width: 640px) {
    .news-grid-2col {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .news-image-wrapper {
        height: 180px;
    }
    
    .news-content {
        padding: 15px;
    }
    
    .news-item-title {
        font-size: 1.1rem;
        -webkit-line-clamp: 2;
    }
    
    .news-item-description {
        font-size: 0.9rem;
        -webkit-line-clamp: 3;
    }
    
    .announcement-header {
        gap: 10px;
    }
    
    .announcements-icon {
        width: 45px;
        height: 45px;
        font-size: 1.3rem;
        border-radius: 14px;
    }
    
    .announcement-title {
        font-size: 1.2rem;
    }
}

/* Small Mobile (up to 480px) */
@media (max-width: 480px) {
    .section-title {
        font-size: 1.4rem;
    }
    
    .section-subtitle {
        font-size: 0.9rem;
    }
    
    .news-image-wrapper {
        height: 160px;
    }
    
    .news-item-title {
        font-size: 1rem;
    }
    
    .news-item-description {
        font-size: 0.85rem;
    }
    
    .announcement-item {
        flex-direction: column;
        gap: 8px;
    }
    
    .announcement-timeline {
        flex-direction: row;
        width: 100%;
        gap: 10px;
    }
    
    .timeline-line {
        display: none;
    }
    
    .announcement-time {
        font-size: 0.65rem;
    }
    
    .announcement-text {
        font-size: 0.85rem;
    }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    :root {
        --text-dark: #f1f5f9;
        --text-light: #cbd5e1;
        --text-muted: #94a3b8;
        --border-light: #334155;
        --bg-light: #0f172a;
        --white: #1e293b;
    }
    
    .news-section {
        /* background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); */
    }
    
    .news-item,
    .news-right {
        background: #1e293b;
        border-color: #334155;
    }
    
    .section-badge {
        background: rgba(255, 255, 255, 0.1);
        color: #f1f5f9;
        border-color: rgba(255, 255, 255, 0.2);
    }
    
    .announcements-icon {
        background: linear-gradient(135deg, #2e6ca3, #1e4b7c);
    }
}

/* Print Styles */
@media print {
    .news-section {
        background: white;
        padding: 40px 0;
    }
    
    .news-item,
    .news-right {
        break-inside: avoid;
        box-shadow: none;
        border: 1px solid #ddd;
    }
}
</style>