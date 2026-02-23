<template>
  <div>
    <div class="page-header">
      <div class="container mx-auto px-6">
        <h1 class="page-title">{{ serviceData.name }}</h1>
        <div class="page-breadcrumb">
          <router-link to="/">{{ t('services_page.breadcrumb.home') }}</router-link>
          <span class="separator">›</span>
          <router-link to="/services">{{ t('services_page.breadcrumb.services') }}</router-link>
          <span class="separator">›</span>
          <span>{{ serviceData.name }}</span>
        </div>
      </div>
    </div>

    <div class="service-detail-section">
      <div class="container mx-auto px-6">
        <div class="service-detail-card">
          <div class="service-detail-header">
            <div class="service-detail-icon" :style="{ background: `linear-gradient(135deg, #1e4b7c, #2e6ca3)` }">
              <i :class="serviceData.icon"></i>
            </div>
            <h2 class="service-detail-title">{{ serviceData.name }}</h2>
          </div>

          <div class="service-detail-content">
            <p class="service-detail-description">{{ serviceData.full_description }}</p>
            
            <div v-if="serviceData.features" class="service-features-section">
              <h3 class="features-title">{{ t('services_page.features_title') }}</h3>
              <ul class="features-list">
                <li v-for="(feature, index) in serviceData.features" :key="index">
                  <i class="fas fa-check-circle"></i>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <div class="service-cta">
              <button class="btn-primary" @click="$emit('open-appointment')">
                {{ t('services_page.book_appointment') }} <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const emit = defineEmits(['open-appointment'])

// Get service ID from route params
// Get the service ID from the URL
const serviceId = computed(() => route.params.serviceId)

// Log to see what's being received
console.log('Service ID from route:', serviceId.value)

// Service data mapping
const serviceData = computed(() => {
  const services = {
    opd: {
      name: t('services_page.opd.name'),
      icon: 'fas fa-user-injured',
      full_description: t('services_page.opd.full_description'),
      features: t('services_page.opd.features', { returnObjects: true })
    },
    ipd: {
      name: t('services_page.ipd.name'),
      icon: 'fas fa-procedures',
      full_description: t('services_page.ipd.full_description'),
      features: t('services_page.ipd.features', { returnObjects: true })
    },
    maternity: {
      name: t('services_page.maternity.name'),
      icon: 'fas fa-female',
      full_description: t('services_page.maternity.full_description'),
      features: t('services_page.maternity.features', { returnObjects: true })
    },
    emergency: {
      name: t('services_page.emergency.name'),
      icon: 'fas fa-ambulance',
      full_description: t('services_page.emergency.full_description'),
      features: t('services_page.emergency.features', { returnObjects: true })
    },
    theatre: {
      name: t('services_page.theatre.name'),
      icon: 'fas fa-syringe',
      full_description: t('services_page.theatre.full_description'),
      features: t('services_page.theatre.features', { returnObjects: true })
    },
    laboratory: {
      name: t('services_page.laboratory.name'),
      icon: 'fas fa-flask',
      full_description: t('services_page.laboratory.full_description'),
      features: t('services_page.laboratory.features', { returnObjects: true })
    },
    radiology: {
      name: t('services_page.radiology.name'),
      icon: 'fas fa-x-ray',
      full_description: t('services_page.radiology.full_description'),
      features: t('services_page.radiology.features', { returnObjects: true })
    },
    pharmacy: {
      name: t('services_page.pharmacy.name'),
      icon: 'fas fa-pills',
      full_description: t('services_page.pharmacy.full_description'),
      features: t('services_page.pharmacy.features', { returnObjects: true })
    },
    icu: {
      name: t('services_page.icu.name'),
      icon: 'fas fa-heartbeat',
      full_description: t('services_page.icu.full_description'),
      features: t('services_page.icu.features', { returnObjects: true })
    },
    'specialized-clinics': {
      name: t('services_page.specialized.name'),
      icon: 'fas fa-stethoscope',
      full_description: t('services_page.specialized.full_description'),
      features: t('services_page.specialized.features', { returnObjects: true })
    }
  }
  
  return services[serviceId.value] || services.opd
})
</script>

<style scoped>
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
    transition: all 0.3s ease;
    border-bottom: 1px solid transparent;
}

.page-breadcrumb a:hover {
    border-bottom-color: white;
}

/* Service Detail Section */
.service-detail-section {
    padding: 60px 20px;
    background: #ffffff;
    max-width: 1000px;
    margin: 0 auto;
}

.service-detail-card {
    background: #ffffff;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
    border: 1px solid #e2e8f0;
}

.service-detail-header {
    background: linear-gradient(135deg, #f8fafc, #ffffff);
    padding: 50px 40px 30px;
    text-align: center;
    border-bottom: 1px solid #e2e8f0;
}

.service-detail-icon {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 3rem;
    color: white;
    box-shadow: 0 20px 30px rgba(30, 75, 124, 0.2);
}

.service-detail-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 10px;
}

.service-detail-content {
    padding: 40px;
}

.service-detail-description {
    color: #475569;
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 30px;
}

/* Features Section */
.service-features-section {
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #e2e8f0;
}

.features-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 20px;
}

.features-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.features-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px dashed #e2e8f0;
}

.features-list li i {
    color: #1e4b7c;
    font-size: 1.1rem;
    margin-top: 3px;
    flex-shrink: 0;
}

.features-list li span {
    color: #475569;
    font-size: 1rem;
    line-height: 1.5;
}

/* CTA Button */
.service-cta {
    margin-top: 40px;
    text-align: center;
}

.btn-primary {
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    color: white;
    padding: 16px 40px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(30, 75, 124, 0.3);
}

.btn-primary i {
    transition: transform 0.3s ease;
}

.btn-primary:hover i {
    transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .page-header {
        padding: 60px 0 30px;
    }
    
    .page-title {
        font-size: 2rem;
    }
    
    .service-detail-section {
        padding: 40px 20px;
    }
    
    .service-detail-title {
        font-size: 1.8rem;
    }
    
    .service-detail-content {
        padding: 30px;
    }
    
    .features-list {
        grid-template-columns: 1fr;
        gap: 10px;
    }
    
    .service-detail-icon {
        width: 100px;
        height: 100px;
        font-size: 2.5rem;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 1.6rem;
    }
    
    .service-detail-title {
        font-size: 1.5rem;
    }
    
    .service-detail-description {
        font-size: 1rem;
    }
    
    .btn-primary {
        width: 100%;
        justify-content: center;
    }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    .service-detail-section {
        background: #0f172a;
    }
    
    .page-header {
        background: linear-gradient(135deg, #0a1a2f, #1a3a5a);
    }
    
    .service-detail-card {
        background: #1e293b;
        border-color: #334155;
    }
    
    .service-detail-header {
        background: linear-gradient(135deg, #1e293b, #2d3748);
        border-bottom-color: #334155;
    }
    
    .service-detail-title,
    .features-title {
        color: #f1f5f9;
    }
    
    .service-detail-description,
    .features-list li span {
        color: #cbd5e1;
    }
    
    .features-list li {
        border-bottom-color: #334155;
    }
    
    .features-list li i {
        color: #2e6ca3;
    }
}
</style>