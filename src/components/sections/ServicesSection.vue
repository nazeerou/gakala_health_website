<template>
    <section class="services-section">
        <div class="container">
            <div class="section-header">
                <div class="section-badge1">{{ t('our_services.badge') }}</div>
                <h2 class="section-title">{{ t('our_services.title') }}</h2>
                <p class="section-subtitle">{{ t('our_services.subtitle') }}</p>
            </div>

            <div class="services-grid">
                <!-- 01. Outpatient Department (OPD) -->
                <div class="service-card">
                    <div class="service-number">01</div>
                    <div class="service-icon">
                        <i class="fas fa-user-injured"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.opd.name') }}</h3>
                    <p class="service-description">{{ t('our_services.opd.description') }}</p>
                    <router-link to="/services/opd" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>

                <!-- 02. Inpatient Department (IPD) -->
                <div class="service-card">
                    <div class="service-number">02</div>
                    <div class="service-icon">
                        <i class="fas fa-procedures"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.ipd.name') }}</h3>
                    <p class="service-description">{{ t('our_services.ipd.description') }}</p>
                    <router-link to="/services/ipd" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>

                <!-- 03. Maternity Care -->
                <div class="service-card">
                    <div class="service-number">03</div>
                    <div class="service-icon">
                        <i class="fas fa-female"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.maternity.name') }}</h3>
                    <p class="service-description">{{ t('our_services.maternity.description') }}</p>
                    <router-link to="/services/maternity" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>

                <!-- 04. Emergency Services -->
                <div class="service-card">
                    <div class="service-number">04</div>
                    <div class="service-icon">
                        <i class="fas fa-ambulance"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.emergency.name') }}</h3>
                    <p class="service-description">{{ t('our_services.emergency.description') }}</p>
                    <router-link to="/services/emergency" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>

                <!-- 05. Theatre & Surgery -->
                <div class="service-card">
                    <div class="service-number">05</div>
                    <div class="service-icon">
                        <i class="fas fa-syringe"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.theatre.name') }}</h3>
                    <p class="service-description">{{ t('our_services.theatre.description') }}</p>
                    <router-link to="/services/theatre" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>

                <!-- 06. Laboratory Services -->
                <div class="service-card">
                    <div class="service-number">06</div>
                    <div class="service-icon">
                        <i class="fas fa-flask"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.laboratory.name') }}</h3>
                    <p class="service-description">{{ t('our_services.laboratory.description') }}</p>
                    <router-link to="/services/laboratory" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>

                <!-- 07. Radiology Services -->
                <div class="service-card">
                    <div class="service-number">07</div>
                    <div class="service-icon">
                        <i class="fas fa-x-ray"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.radiology.name') }}</h3>
                    <p class="service-description">{{ t('our_services.radiology.description') }}</p>
                    <router-link to="/services/radiology" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>

                <!-- 08. Pharmacy -->
                <div class="service-card">
                    <div class="service-number">08</div>
                    <div class="service-icon">
                        <i class="fas fa-pills"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.pharmacy.name') }}</h3>
                    <p class="service-description">{{ t('our_services.pharmacy.description') }}</p>
                    <router-link to="/services/pharmacy" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>

                <!-- 09. ICU / HDU -->
                <div class="service-card">
                    <div class="service-number">09</div>
                    <div class="service-icon">
                        <i class="fas fa-heartbeat"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.icu.name') }}</h3>
                    <p class="service-description">{{ t('our_services.icu.description') }}</p>
                    <router-link to="/services/icu" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>

                <!-- 10. Eye Clinic -->
                <div class="service-card">
                    <div class="service-number">10</div>
                    <div class="service-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.eye_clinic.name') }}</h3>
                    <p class="service-description">{{ t('our_services.eye_clinic.description') }}</p>
                    <router-link to="/services/eye-clinic" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>

                <!-- 11. Reproductive and Child Health (RCH) Clinic -->
                <div class="service-card">
                    <div class="service-number">11</div>
                    <div class="service-icon">
                        <i class="fas fa-baby"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.rch_clinic.name') }}</h3>
                    <p class="service-description">{{ t('our_services.rch_clinic.description') }}</p>
                    <router-link to="/services/rch-clinic" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>

                <!-- 12. Orthopedic Clinic -->
                <div class="service-card">
                    <div class="service-number">12</div>
                    <div class="service-icon">
                        <i class="fas fa-bone"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.orthopedic.name') }}</h3>
                    <p class="service-description">{{ t('our_services.orthopedic.description') }}</p>
                    <router-link to="/services/orthopedic" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>

                <!-- 13. Psychology -->
                <div class="service-card">
                    <div class="service-number">13</div>
                    <div class="service-icon">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.psychology.name') }}</h3>
                    <p class="service-description">{{ t('our_services.psychology.description') }}</p>
                    <router-link to="/services/psychology" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>

                <!-- 14. Care and Development of Premature Babies -->
                <div class="service-card">
                    <div class="service-number">14</div>
                    <div class="service-icon">
                        <i class="fas fa-baby-carriage"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.premature_care.name') }}</h3>
                    <p class="service-description">{{ t('our_services.premature_care.description') }}</p>
                    <router-link to="/services/premature-care" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>

                <!-- 15. Specialized Clinics (New) -->
                <div class="service-card">
                    <div class="service-number">15</div>
                    <div class="service-icon">
                        <i class="fas fa-stethoscope"></i>
                    </div>
                    <h3 class="service-title">{{ t('our_services.specialized.name') }}</h3>
                    <p class="service-description">{{ t('our_services.specialized.description') }}</p>
                    <router-link to="/services/specialized-clinics" class="service-link">
                        {{ t('our_services.learn_more') }} <i class="fas fa-arrow-right"></i>
                    </router-link>
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
.services-section {
    padding: 80px 0;
    background: linear-gradient(135deg, #f8fafd 0%, #ffffff 100%);
    position: relative;
    overflow: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-badge {
    display: inline-block;
    background: linear-gradient(135deg, rgba(30, 75, 124, 0.1), rgba(46, 108, 163, 0.15));
    color: #1e4b7c;
    padding: 8px 20px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.95rem;
    margin-bottom: 10px;
    border: 1px solid rgba(30, 75, 124, 0.2);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a2634;
    margin-bottom: 15px;
}

.section-subtitle {
    color: #64748b;
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.service-card {
    background: white;
    padding: 30px 25px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    transition: all 0.4s ease;
    border: 1px solid rgba(226, 232, 240, 0.6);
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1e4b7c, #2e6ca3);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 50px rgba(30, 75, 124, 0.15);
    border-color: rgba(30, 75, 124, 0.2);
}

.service-card:hover::before {
    opacity: 1;
}

.service-number {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2.5rem;
    font-weight: 800;
    color: rgba(30, 75, 124, 0.1);
    line-height: 1;
    transition: all 0.3s ease;
}

.service-card:hover .service-number {
    color: rgba(30, 75, 124, 0.2);
    transform: scale(1.1);
}

.service-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    margin-bottom: 25px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
}

.service-card:hover .service-icon {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 15px 30px rgba(30, 75, 124, 0.3);
}

.service-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: #1a2634;
    margin-bottom: 15px;
    line-height: 1.3;
}

.service-description {
    color: #4a5568;
    line-height: 1.7;
    margin-bottom: 25px;
    font-size: 0.95rem;
}

.service-link {
    color: #1e4b7c;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    font-size: 1rem;
    padding: 8px 0;
    position: relative;
}

.service-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #1e4b7c, #2e6ca3);
    transition: width 0.3s ease;
}

.service-link:hover {
    gap: 12px;
    color: #2e6ca3;
}

.service-link:hover::after {
    width: 100%;
}

.service-link i {
    font-size: 0.9rem;
    transition: transform 0.3s ease;
}

.service-link:hover i {
    transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 1200px) {
    .services-grid {
        gap: 25px;
    }
    
    .service-card {
        padding: 30px 25px;
    }
}

@media (max-width: 1024px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
    }
    
    .section-title {
        font-size: 2.2rem;
    }
}

@media (max-width: 768px) {
    .services-section {
        padding: 60px 0;
    }
    
    .container {
        padding: 0 20px;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .section-subtitle {
        font-size: 1.1rem;
    }
    
    .service-card {
        padding: 25px 20px;
    }
    
    .service-number {
        font-size: 2rem;
    }
    
    .service-icon {
        width: 60px;
        height: 60px;
        font-size: 1.6rem;
    }
    
    .service-title {
        font-size: 1.3rem;
    }
}

@media (max-width: 480px) {
    .section-title {
        font-size: 1.8rem;
    }
    
    .section-subtitle {
        font-size: 1rem;
    }
    
    .service-card {
        padding: 20px 15px;
    }
    
    .service-number {
        font-size: 1.8rem;
        top: 15px;
        right: 15px;
    }
}
</style>