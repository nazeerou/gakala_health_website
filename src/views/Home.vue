<template>
    <div>
        <!-- Hero Section -->
        <HeroSection />

        <!-- About Section -->
        <AboutSection />

        <!-- Services Section -->
        <ServicesSection />

        <!-- Why Choose Us Section -->
        <WhyChooseUsSection />

        <!-- News & Updates Section -->
        <NewsUpdatesSection />

        <!-- Insurance Partners Section -->
        <InsurancePartnersSection />

        <ScrollToTop />
    </div>
</template>

<script setup>
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection.vue'
import NewsUpdatesSection from '../components/sections/NewsUpdatesSection.vue'
import InsurancePartnersSection from '../components/sections/InsurancePartnersSection.vue'
import ScrollToTop from '../views/ScrollToTop.vue'
</script>