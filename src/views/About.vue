<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">About Gakala Health Centre</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">Home</router-link>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <span>About Us</span>
                </div>
            </div>
        </div>
        
        <div class="about-page-section">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2">
                        <div class="about-content-card" data-aos="fade-right">
                            <h2 class="about-content-title">Our Story</h2>
                            <p class="about-content-text">
                                Gakala Health Centre was established in 2016 with a vision to provide quality healthcare to the community of Mwanza and beyond. What started as a small clinic has grown into a comprehensive health centre offering a wide range of medical services.
                            </p>
                            <p class="about-content-text">
                                Our journey has been driven by a commitment to excellence and a passion for patient care. Over the years, we have invested in state-of-the-art equipment, recruited the best medical professionals, and expanded our facilities to meet the growing healthcare needs of our community.
                            </p>
                            
                            <div class="about-highlight-box">
                                <p>"TUNATIBU MUNGU ANAPONYA - We treat, God heals. This motto reflects our belief that while we provide the best medical care possible, ultimate healing comes from a higher power."</p>
                                <div class="author">- Dr. James Mwansasu, Medical Director</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:col-span-1">
                        <div class="announcements-sidebar" data-aos="fade-left">
                            <div class="announcements-header">
                                <div class="announcements-icon">
                                    <i class="fas fa-info-circle"></i>
                                </div>
                                <div>
                                    <h3 class="announcements-title">Quick Facts</h3>
                                </div>
                            </div>
                            
                            <div class="space-y-4">
                                <div class="info-card">
                                    <div class="info-icon"><i class="fas fa-calendar-alt"></i></div>
                                    <div class="text-2xl font-bold text-primary">2016</div>
                                    <div class="text-gray-600">Year Established</div>
                                </div>
                                <div class="info-card">
                                    <div class="info-icon"><i class="fas fa-user-md"></i></div>
                                    <div class="text-2xl font-bold text-primary">50+</div>
                                    <div class="text-gray-600">Medical Specialists</div>
                                </div>
                                <div class="info-card">
                                    <div class="info-icon"><i class="fas fa-procedures"></i></div>
                                    <div class="text-2xl font-bold text-primary">15K+</div>
                                    <div class="text-gray-600">Patients Yearly</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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

.about-content-card {
    background: white;
    border-radius: 30px;
    padding: 3rem;
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.1);
    border: 1px solid rgba(30, 75, 124, 0.1);
    margin-bottom: 2rem;
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

.about-highlight-box {
    background: var(--primary-soft);
    border-radius: 20px;
    padding: 2rem;
    margin: 2rem 0;
    border-left: 5px solid var(--primary);
}

.about-highlight-box p {
    font-size: 1.2rem;
    font-style: italic;
    color: var(--primary-dark);
    margin-bottom: 1rem;
}

.about-highlight-box .author {
    font-weight: 600;
    color: var(--primary);
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

.info-card {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(30, 75, 124, 0.05);
    border: 1px solid rgba(30, 75, 124, 0.1);
    transition: all 0.3s ease;
    text-align: center;
}

.info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.1);
    border-color: var(--primary);
}

.info-icon {
    width: 60px;
    height: 60px;
    background: var(--primary-soft);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: var(--primary);
    font-size: 1.5rem;
    transition: all 0.3s ease;
}

.info-card:hover .info-icon {
    background: var(--primary);
    color: white;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2.2rem;
    }
    
    .about-content-card {
        padding: 2rem;
    }
    
    .about-content-title {
        font-size: 2rem;
    }
}
</style>