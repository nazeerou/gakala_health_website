<template>
    <div>
        <!-- Hero Section -->
        <HeroSection 
            :hero-stats="heroStats"
            :hero-images="heroImages"
            @open-appointment="$emit('open-appointment')"
        />

       
        <BMASection :insurance-providers="insuranceProviders" />

        <!-- Services Section -->
        <ServicesSection 
            :service-list="serviceList"
            @navigate-service="navigateToService"
        />

        <!-- Doctors Section -->
        <DoctorsSection :doctors="doctors" />

        <!-- News and Announcements -->
        <NewsSection 
            :news-events="newsEvents"
            :announcements="announcements"
            @open-external="$emit('open-external', $event)"
        />

        <!-- Testimonials Section -->
        <TestimonialsSection :testimonials="testimonials" />

 <!-- Insurance Section -->
          <BIMASections :BimaSections="bima" />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HeroSection from '../components/sections/HeroSection.vue'
import BMASection from '../components/sections/BMASection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import DoctorsSection from '../components/sections/DoctorsSection.vue'
import NewsSection from '../components/sections/NewsSection.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import BIMASections from '../components/sections/BIMASections.vue'

const props = defineProps({
    heroStats: {
        type: Array,
        default: () => []
    },
    heroImages: {
        type: Array,
        default: () => []
    },
    insuranceProviders: {
        type: Array,
        default: () => []
    },
    serviceList: {
        type: Array,
        default: () => []
    },
    doctors: {
        type: Array,
        default: () => []
    },
    newsEvents: {
        type: Array,
        default: () => []
    },
    announcements: {
        type: Array,
        default: () => []
    },
    testimonials: {
        type: Array,
        default: () => []
    },
    BIMASections: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(['open-appointment', 'open-external'])
const router = useRouter()

const navigateToService = (service) => {
    router.push(`/services/${service.slug}`)
}
</script>