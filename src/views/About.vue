<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">{{ t('about_page.title') }}</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">{{ t('about_page.breadcrumb.home') }}</router-link>
                    <span class="separator">›</span>
                    <span>{{ t('about_page.breadcrumb.current') }}</span>
                </div>
            </div>
        </div>
        
        <div class="about-section">
            <div class="container mx-auto px-6">
                <div class="about-grid">
                    <!-- Left Column - Main Content -->
                    <div class="about-main">
                        <!-- Basic Hospital Identity -->
                        <div class="about-card">
                            <h2 class="card-title">{{ t('about_page.identity.title') }}</h2>

                            <div class="info-block">
                                <h3 class="info-block-title">{{ t('about_page.identity.official_name') }}</h3>
                                <p class="info-block-text highlight">GAKALA HEALTH CENTRE</p>
                            </div>

                            <p class="about-text">{{ t('about_page.identity.description') }}</p>

                            <div class="info-block">
                                <h3 class="info-block-title">{{ t('about_page.identity.ownership') }}</h3>
                                <p class="info-block-text">{{ t('about_page.identity.ownership_text') }}</p>
                            </div>

                            <div class="info-block">
                                <h3 class="info-block-title">{{ t('about_page.identity.category') }}</h3>
                                <p class="info-block-text">{{ t('about_page.identity.category_text') }}</p>
                            </div>

                            <div class="highlight-box">
                                <h3 class="highlight-title">{{ t('about_page.identity.tagline_label') }}</h3>
                                <p class="highlight-quote">“{{ t('about_page.identity.tagline') }}”</p>
                                <p class="highlight-text">{{ t('about_page.identity.tagline_text') }}</p>
                            </div>
                        </div>

                        <!-- Legal & Registration Details -->
                        <div class="about-card">
                            <h2 class="card-title">{{ t('about_page.legal.title') }}</h2>
                            
                            <p class="about-text">{{ t('about_page.legal.description') }}</p>

                            <div class="info-block">
                                <h3 class="info-block-title">{{ t('about_page.legal.registration') }}</h3>
                                <p class="info-block-text">{{ t('about_page.legal.registration_text') }} 
                                    <span class="highlight">(124899-6)</span>
                                </p>
                            </div>

                            <div class="info-block">
                                <h3 class="info-block-title">{{ t('about_page.legal.nhif') }}</h3>
                                <p class="info-block-text">{{ t('about_page.legal.nhif_text') }}</p>
                            </div>
                        </div>

                        <!-- Location & Contact Information -->
                        <div class="about-card">
                            <h2 class="card-title">{{ t('about_page.location.title') }}</h2>
                            
                            <div class="info-block">
                                <h3 class="info-block-title">{{ t('about_page.location.address') }}</h3>
                                <p class="info-block-text">{{ t('about_page.location.address_text') }}</p>
                            </div>

                            <div class="info-block">
                                <h3 class="info-block-title">{{ t('about_page.location.accessibility') }}</h3>
                                <p class="info-block-text">{{ t('about_page.location.accessibility_text') }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column - Sidebar -->
                    <div class="about-sidebar">
                        <div class="sidebar-card">
                            <div class="sidebar-header">
                                <div class="sidebar-icon">
                                    <i class="fas fa-info-circle"></i>
                                </div>
                                <h3 class="sidebar-title">{{ t('about_page.sidebar.title') }}</h3>
                            </div>
                            
                            <div class="stats-list">
                                <div class="stat-item">
                                    <div class="stat-icon"><i class="fas fa-calendar-alt"></i></div>
                                    <div class="stat-content">
                                        <div class="stat-value">2025</div>
                                        <div class="stat-label">{{ t('about_page.sidebar.established') }}</div>
                                    </div>
                                </div>
                                
                                <div class="stat-item">
                                    <div class="stat-icon"><i class="fas fa-user-md"></i></div>
                                    <div class="stat-content">
                                        <div class="stat-value">43</div>
                                        <div class="stat-label">{{ t('about_page.sidebar.specialists') }}</div>
                                    </div>
                                </div>
                                
                                <div class="stat-item">
                                    <div class="stat-icon"><i class="fas fa-id-card"></i></div>
                                    <div class="stat-content">
                                        <div class="stat-value">124899-6</div>
                                        <div class="stat-label">{{ t('about_page.sidebar.reg_number') }}</div>
                                    </div>
                                </div>
                                
                                <div class="stat-item">
                                    <div class="stat-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="stat-content">
                                        <div class="stat-value">{{ t('about_page.sidebar.nhif') }}</div>
                                        <div class="stat-label">{{ t('about_page.sidebar.insurance') }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* CSS Variables */
:root {
    --primary: #1e4b7c;
    --primary-dark: #0f2f4f;
    --primary-light: #2e6ca3;
    --primary-soft: rgba(30, 75, 124, 0.05);
    --primary-very-light: #f0f5fa;
    --text-dark: #1e293b;
    --text-light: #475569;
    --text-muted: #64748b;
    --border-color: #e2e8f0;
    --bg-light: #f8fafc;
    --white: #ffffff;
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    --transition: all 0.3s ease;
}

/* Page Header */
.page-header {
    background: linear-gradient(135deg, #0a2a45, #1e4b7c);
    padding: 100px 0 50px;
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
    gap: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
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
}

.page-breadcrumb a:hover {
    opacity: 0.8;
}

/* About Section */
.about-section {
    padding: 20px 0;
    background: var(--bg-light);
}

.about-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
}

/* Left Column - Main Content */
.about-main {
    /* display: flex; */
    flex-direction: column;
    /* gap: 30px; */
}

.about-card {
    background: var(--white);
    border-radius: 12px;
    padding: 35px;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    transition: var(--transition);
}

.about-card:hover {
    box-shadow: var(--shadow-lg);
}

.card-title {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--text-dark);
    /* margin-bottom: 25px; */
    position: relative;
    /* padding-bottom: 2px; */
}

.card-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--primary);
    border-radius: 2px;
}

.about-text {
    color: var(--text-light);
    line-height: 1.8;
    margin-bottom: 20px;
    font-size: 1rem;
}

.info-block {
    margin-bottom: 25px;
}

.info-block-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.info-block-text {
    color: var(--text-light);
    line-height: 1.7;
    font-size: 1rem;
}

.highlight {
    color: #1e4b7c;
    font-weight: 600;
}

.highlight-box {
    background: rgba(164, 198, 235, 0.2);
    border-radius: 12px;
    padding: 25px;
    margin-top: 20px;
    border-left: 4px solid var(--primary);
}

.highlight-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.highlight-quote {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e4b7c;
    margin-bottom: 10px;
    font-style: italic;
}

.highlight-text {
    color: var(--text-light);
    line-height: 1.7;
    font-size: 0.95rem;
}

/* Right Column - Sidebar */
.about-sidebar {
    position: sticky;
    top: 100px;
    height: fit-content;
}

.sidebar-card {
    background: var(--white);
    border-radius: 12px;
    padding: 30px;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
}

.sidebar-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid rgba(30, 75, 124, 0.2);
}

.sidebar-icon {
    width: 40px;
    height: 40px;
    background: var(--primary-soft);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1e4b7c;
    font-size: 1.2rem;
}

.sidebar-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-dark);
}

.stats-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: rgba(148, 186, 226, 0.2);
    border-radius: 10px;
    transition: var(--transition);
}

.stat-item:hover {
    transform: translateX(1px);
    background: #ffffff;
    box-shadow: var(--shadow-md);
}

.stat-icon {
    width: 45px;
    height: 45px;
    background: var(--white);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-size: 1.2rem;
    transition: var(--transition);
}

.stat-item:hover .stat-icon {
    background: var(--primary);
    color: var(--white);
}

.stat-content {
    flex: 1;
}

.stat-value {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-dark);
    line-height: 1.3;
}

.stat-label {
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 968px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .about-sidebar {
        position: static;
    }
    
    .page-title {
        font-size: 2.5rem;
    }
}

@media (max-width: 768px) {
    .page-header {
        padding: 80px 0 40px;
    }
    
    .page-title {
        font-size: 2rem;
    }
    
    .about-card {
        padding: 25px;
    }
    
    .card-title {
        font-size: 1.5rem;
    }
    
    .highlight-quote {
        font-size: 1.1rem;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 1.75rem;
    }
    
    .stat-item {
        padding: 12px;
    }
    
    .stat-icon {
        width: 40px;
        height: 40px;
        font-size: 1rem;
    }
    
    .stat-value {
        font-size: 1.1rem;
    }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    :root {
        --text-dark: #f1f5f9;
        --text-light: #cbd5e1;
        --text-muted: #94a3b8;
        --border-color: #334155;
        --bg-light: #0f172a;
        --white: #1e293b;
        --primary-soft: rgba(30, 75, 124, 0.2);
    }
    
    .page-header {
        background: linear-gradient(135deg, #0a1a2f, #123456);
    }
    
    .stat-item {
        background: rgba(255, 255, 255, 0.05);
    }
    
    .stat-icon {
        background: var(--white);
    }
}

/* Print Styles */
@media print {
    .page-header {
        background: none;
        color: black;
        padding: 20px 0;
    }
    
    .page-header::before,
    .page-header::after {
        display: none;
    }
    
    .about-sidebar {
        break-inside: avoid;
    }
}
</style>