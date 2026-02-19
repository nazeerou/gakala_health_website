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
                    
                    <!-- Main Content -->
                    <div class="lg:col-span-2">
                        <div class="about-content-card" data-aos="fade-right">
                            <h2 class="about-content-title">Basic Hospital Identity</h2>

                            <p class="about-content-text">
                                <strong>Official Name:</strong><br>
                                <span class="text-primary font-semibold">GAKALA HEALTH CENTRE</span>
                            </p>

                            <p class="about-content-text">
                                Gakala Health Centre is a privately owned healthcare facility established in 2025
                                with the primary objective of improving access to quality, affordable, and reliable
                                healthcare services within Geita Region and neighboring communities.
                                The facility was founded to respond to the growing demand for comprehensive medical
                                services closer to the community, reducing the need for long-distance referrals.
                            </p>

                            <p class="about-content-text">
                                <strong>Ownership Type:</strong><br>
                                Gakala Health Centre operates under private ownership, enabling flexible decision-making,
                                faster adoption of modern healthcare practices, and a strong focus on patient satisfaction
                                and service quality.
                            </p>

                            <p class="about-content-text">
                                <strong>Hospital Category / Level:</strong><br>
                                The facility is classified as a Health Centre, offering a wide range of outpatient,
                                inpatient, emergency, and specialized clinical services aligned with national
                                healthcare standards.
                            </p>

                            <div class="about-highlight-box">
                                <p>
                                    <strong>Tagline / Slogan:</strong><br>
                                    “TUNATIBU, MUNGU ANAPONYA”<br><br>
                                    This slogan reflects the centre’s belief in combining professional medical care
                                    with compassion, humility, and respect for life, recognizing both medical science
                                    and faith in healing.
                                </p>
                            </div>
                        </div>

                        <div class="about-content-card" data-aos="fade-right" data-aos-delay="100">
                            <h2 class="about-content-title">Legal & Registration Details</h2>
                            
                            <p class="about-content-text">
                                Gakala Health Centre is a fully registered and legally compliant healthcare institution 
                                operating under the laws and regulations of the United Republic of Tanzania.
                            </p>

                            <p class="about-content-text">
                                <strong>Ministry of Health Registration:</strong><br>
                                The facility holds a valid Ministry of Health Facility Registration Number 
                                <span class="text-primary font-semibold">(124899-6)</span> and operates under an approved 
                                license that authorizes it to provide medical services to the public.
                            </p>

                            <p class="about-content-text">
                                <strong>NHIF Accreditation:</strong><br>
                                The centre is officially accredited by the 
                                <span class="text-primary font-semibold">National Health Insurance Fund (NHIF)</span>, 
                                allowing insured patients to access services seamlessly.
                            </p>
                        </div>

                        <div class="about-content-card" data-aos="fade-right" data-aos-delay="200">
                            <h2 class="about-content-title">Location & Contact Information</h2>
                            
                            <p class="about-content-text">
                                <strong>Physical Location:</strong><br>
                                Gakala Health Centre is strategically located in 
                                <span class="text-primary font-semibold">Kagili Masumbwe, Mbogwe District, Geita Region</span>, 
                                an area that serves both semi-urban and rural populations. This location allows the facility 
                                to act as a critical healthcare hub for surrounding communities that previously faced challenges 
                                accessing timely medical care.
                            </p>

                            <p class="about-content-text">
                                <strong>Accessibility:</strong><br>
                                The facility is easily accessible by road and supported by ambulance services for emergency 
                                referrals.
                            </p>
                        </div>
                    </div>

                    <!-- Sidebar -->
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
                                    <div class="text-2xl font-bold text-primary">2025</div>
                                    <div class="text-gray-600">Year Established</div>
                                </div>
                                <div class="info-card">
                                    <div class="info-icon"><i class="fas fa-user-md"></i></div>
                                    <div class="text-2xl font-bold text-primary">43</div>
                                    <div class="text-gray-600">Medical Specialists</div>
                                </div>
                                <div class="info-card">
                                    <div class="info-icon"><i class="fas fa-id-card"></i></div>
                                    <div class="text-2xl font-bold text-primary">124899-6</div>
                                    <div class="text-gray-600">Ministry Reg. Number</div>
                                </div>
                                <div class="info-card">
                                    <div class="info-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="text-lg font-bold text-primary">NHIF Accredited</div>
                                    <div class="text-gray-600">Insurance Partner</div>
                                </div>
                                <!-- <div class="info-card">
                                    <div class="info-icon"><i class="fas fa-procedures"></i></div>
                                    <div class="text-2xl font-bold text-primary">15K+</div>
                                    <div class="text-gray-600">Patients Yearly</div>
                                </div> -->
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
    /* border-left: 5px solid var(--primary); */
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