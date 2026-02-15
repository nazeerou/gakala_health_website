<template>
    <div class="app-container">
        <!-- Header -->
        <AppHeader 
            :scrolled="scrolled"
            :mobile-menu-open="mobileMenuOpen"
            :menu-items="menuItems"
            :service-list="serviceList"
            @toggle-mobile="mobileMenuOpen = $event"
            @open-appointment="openAppointmentModal"
            @go-home="goToHome"
        />

        <!-- Main Content -->
        <main class="main-content">
            <router-view 
                :service-list="serviceList"
                :doctors="doctors"
                :news-events="newsEvents"
                :testimonials="testimonials"
                :insurance-providers="insuranceProviders"
                :hero-images="heroImages"
                :hero-stats="heroStats"
                :announcements="announcements"
                :core-values="coreValues"
                :future-goals="futureGoals"
                @open-appointment="openAppointmentModal"
                @open-external="openExternalLink"
            />
        </main>

        <!-- Footer -->
        <AppFooter 
            :social-links="socialLinks"
        />

        <!-- Appointment Modal -->
        <AppointmentModal 
            :show="showAppointmentModal"
            :service-list="serviceList"
            @close="closeAppointmentModal"
            @submit="submitAppointment"
        />

        <!-- Scroll to Top -->
        <ScrollToTop 
            :show="showScrollTop"
            @click="scrollToTop"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import AppointmentModal from '../common/AppointmentModal.vue'
import ScrollToTop from '../common/ScrollToTop.vue'
import { useAppointment } from '../../composables/useAppointment'
import { useNavigation } from '../../composables/useNavigation'
import { useScroll } from '../../composables/useScroll'
import {
    menuItems,
    serviceList,
    doctors,
    testimonials,
    insuranceProviders,
    heroImages,
    heroStats,
    announcements,
    coreValues,
    futureGoals,
    socialLinks
} from '../../data'

const router = useRouter()
const { showAppointmentModal, openAppointmentModal, closeAppointmentModal, submitAppointment } = useAppointment()
const { mobileMenuOpen, scrolled, goToHome, openExternalLink } = useNavigation()
const { showScrollTop, scrollToTop } = useScroll()

// Initialize AOS
onMounted(() => {
    if (window.AOS) {
        window.AOS.init({
            duration: 800,
            once: true,
            offset: 50
        })
    }
})
</script>

<style scoped>
.app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
    min-height: calc(100vh - 80px - 400px);
    padding-top: 80px;
}
</style>