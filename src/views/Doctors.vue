<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">Our Specialists</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">Home</router-link>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <span>Staff</span>
                </div>
            </div>
        </div>
        
        <div class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12" data-aos="fade-up">
                    <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Management & Leadership Team</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">The facility is guided by a competent and experienced management team responsible for strategic leadership, operational efficiency, and clinical governance.</p>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Medical Director -->
                    <div class="doctor-card" data-aos="fade-up" data-aos-delay="0">
                        <img src="/assets/medical-director.jpg" alt="Medical Director" class="doctor-image">
                        <div class="doctor-info">
                            <h3 class="doctor-name">Medical Director</h3>
                            <p class="doctor-specialty">Leadership & Clinical Governance</p>
                            <div class="mt-3 text-sm text-gray-600">
                                Provides overall leadership in clinical services, medical ethics, patient safety, and quality assurance.
                            </div>
                        </div>
                    </div>

                    <!-- Hospital Administrator -->
                    <div class="doctor-card" data-aos="fade-up" data-aos-delay="100">
                        <img src="/assets/hospital.jpg" alt="Hospital Administrator" class="doctor-image">
                        <div class="doctor-info">
                            <h3 class="doctor-name">Hospital Administrator</h3>
                            <p class="doctor-specialty">Operations & Administration</p>
                            <div class="mt-3 text-sm text-gray-600">
                                Oversees administrative operations, finance, human resources, procurement, and compliance.
                            </div>
                        </div>
                    </div>

                    <!-- Nursing Officer In-Charge -->
                    <div class="doctor-card" data-aos="fade-up" data-aos-delay="200">
                        <img src="/assets/nursing.jpg" alt="Nursing Officer In-Charge" class="doctor-image">
                        <div class="doctor-info">
                            <h3 class="doctor-name">Nursing Officer In-Charge</h3>
                            <p class="doctor-specialty">Nursing Services</p>
                            <div class="mt-3 text-sm text-gray-600">
                                Coordinates nursing services, ensures adherence to nursing standards, and supervises patient care delivery.
                            </div>
                        </div>
                    </div>

                    <!-- Heads of Departments -->
                    <div class="doctor-card" data-aos="fade-up" data-aos-delay="300">
                        <img src="/assets/hod.jpg" alt="Heads of Departments" class="doctor-image">
                        <div class="doctor-info">
                            <h3 class="doctor-name">Heads of Departments</h3>
                            <p class="doctor-specialty">Departmental Management</p>
                            <div class="mt-3 text-sm text-gray-600">
                                Manage departmental operations, staff performance, equipment utilization, and service quality.
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Leadership Team Statement -->
                <div class="mt-12 text-center max-w-3xl mx-auto" data-aos="fade-up">
                    <p class="text-gray-600 text-lg italic border-l-4  pl-6 py-2 bg-primary-soft/20 rounded-r-lg">
                        The leadership team works collaboratively to ensure smooth operations, efficient service delivery, 
                        and continuous improvement across all departments.
                    </p>
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

.doctor-card {
    background: var(--white);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,0.02);
    border: 1px solid var(--border-light);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.doctor-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.1);
    border-color: var(--primary);
}

.doctor-image {
    height: 280px;
    width: 100%;
    object-fit: cover;
    border-bottom: 3px solid var(--primary);
}

.doctor-info {
    padding: 20px;
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.doctor-name {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 5px;
}

.doctor-specialty {
    color: var(--primary);
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 10px;
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