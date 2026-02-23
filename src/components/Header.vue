<template>
    <header>
        <!-- Custom Loader Overlay -->
        <div v-if="isLoading" class="loader-overlay">
            <div class="loader-container">
                <div class="medical-loader">
                    <div class="heart-beat">
                        <div class="line line1"></div>
                        <div class="line line2"></div>
                        <div class="line line3"></div>
                        <div class="line line4"></div>
                        <div class="line line5"></div>
                    </div>
                </div>
            </div>
        </div>

        <nav class="navbar" :class="{ 'scrolled': scrolled }">
            <div class="nav-container">
                <!-- Logo with Text -->
                <div class="logo-wrapper" @click="goToHome">
                    <div class="logo-img">
                        <img src="/assets/logo_2_gakala.png" alt="Gakala Health Centre">
                    </div>
                </div>

                <!-- Desktop Navigation -->
                <div class="nav-menu">
                    <router-link to="/" class="nav-item" :class="{ active: $route.path === '/' }">
                        {{ t('menu.home') }}
                    </router-link>
                    
                    <!-- Services Dropdown - all services  -->
                    <div class="dropdown services-dropdown-container" 
                         @mouseenter="openDropdown = 'services'" 
                         @mouseleave="openDropdown = null">
                        <button class="nav-item dropdown-trigger">
                            {{ t('menu.services') }}
                            <i class="fas fa-chevron-down dropdown-arrow" :class="{ 'rotate': openDropdown === 'services' }"></i>
                        </button>
                        <transition name="fade">
                            <div v-if="openDropdown === 'services'" class="dropdown-menu services-menu">
                                <!-- All Services header -->
                                <div class="services-header">
                                    <router-link to="/services" class="dropdown-item all-services" :class="{ active: $route.path === '/services' }">
                                        <i class="fas fa-list-ul dropdown-icon"></i>
                                        <span class="all-services-text">{{ t('services.all') }}</span>
                                    </router-link>
                                </div>
                                
                                <!-- Services Grid - 2 columns as in image -->
                                <div class="services-grid">
                                    <!-- Outpatient Department (OPD) -->
                                    <router-link to="/services/opd" class="dropdown-item service-item" :class="{ active: $route.path === '/services/opd' }">
                                        <i class="fas fa-user-injured dropdown-icon"></i>
                                        {{ t('services.opd') }}
                                    </router-link>

                                    <!-- Inpatient Department (IPD) -->
                                    <router-link to="/services/ipd" class="dropdown-item service-item" :class="{ active: $route.path === '/services/ipd' }">
                                        <i class="fas fa-procedures dropdown-icon"></i>
                                        {{ t('services.ipd') }}
                                    </router-link>

                                    <!-- Maternity Care -->
                                    <router-link to="/services/maternity" class="dropdown-item service-item" :class="{ active: $route.path === '/services/maternity' }">
                                        <i class="fas fa-female dropdown-icon"></i>
                                        {{ t('services.maternity') }}
                                    </router-link>

                                    <!-- Emergency -->
                                    <router-link to="/services/emergency" class="dropdown-item service-item" :class="{ active: $route.path === '/services/emergency' }">
                                        <i class="fas fa-ambulance dropdown-icon"></i>
                                        {{ t('services.emergency') }}
                                    </router-link>

                                    <!-- Theatre & Surgery -->
                                    <router-link to="/services/theatre" class="dropdown-item service-item" :class="{ active: $route.path === '/services/theatre' }">
                                        <i class="fas fa-syringe dropdown-icon"></i>
                                        {{ t('services.theatre') }}
                                    </router-link>

                                    <!-- Laboratory Services -->
                                    <router-link to="/services/laboratory" class="dropdown-item service-item" :class="{ active: $route.path === '/services/laboratory' }">
                                        <i class="fas fa-flask dropdown-icon"></i>
                                        {{ t('services.laboratory') }}
                                    </router-link>

                                    <!-- Radiology Services -->
                                    <router-link to="/services/radiology" class="dropdown-item service-item" :class="{ active: $route.path === '/services/radiology' }">
                                        <i class="fas fa-x-ray dropdown-icon"></i>
                                        {{ t('services.radiology') }}
                                    </router-link>

                                    <!-- Pharmacy -->
                                    <router-link to="/services/pharmacy" class="dropdown-item service-item" :class="{ active: $route.path === '/services/pharmacy' }">
                                        <i class="fas fa-pills dropdown-icon"></i>
                                        {{ t('services.pharmacy') }}
                                    </router-link>

                                    <!-- ICU / HDU -->
                                    <router-link to="/services/icu" class="dropdown-item service-item" :class="{ active: $route.path === '/services/icu' }">
                                        <i class="fas fa-heartbeat dropdown-icon"></i>
                                        {{ t('services.icu') }}
                                    </router-link>

                                    <!-- Specialized Clinics -->
                                    <router-link to="/services/specialized-clinics" class="dropdown-item service-item" :class="{ active: $route.path === '/services/specialized-clinics' }">
                                        <i class="fas fa-stethoscope dropdown-icon"></i>
                                        {{ t('services.specialized') }}
                                    </router-link>
                                </div>
                            </div>
                        </transition>
                    </div>

                    <!-- About Dropdown -->
                    <div class="dropdown" 
                         @mouseenter="openDropdown = 'about'" 
                         @mouseleave="openDropdown = null">
                        <button class="nav-item dropdown-trigger">
                            {{ t('menu.about') }}
                            <i class="fas fa-chevron-down dropdown-arrow" :class="{ 'rotate': openDropdown === 'about' }"></i>
                        </button>
                        <transition name="fade">
                            <div v-if="openDropdown === 'about'" class="dropdown-menu">
                                <router-link to="/about" class="dropdown-item" :class="{ active: $route.path === '/about' }">
                                    {{ t('about.us') }}
                                </router-link>
                                <router-link to="/mission-vision" class="dropdown-item" :class="{ active: $route.path === '/mission-vision' }">
                                    {{ t('about.mission') }}
                                </router-link>
                            </div>
                        </transition>
                    </div>

                    <router-link to="/staff" class="nav-item" :class="{ active: $route.path === '/staff' }">
                        {{ t('menu.staffs') }}
                    </router-link>

                    <router-link to="/news" class="nav-item" :class="{ active: $route.path === '/news' }">
                        {{ t('menu.news') }}
                    </router-link>

                    <router-link to="/contact" class="nav-item" :class="{ active: $route.path === '/contact' }">
                        {{ t('menu.contact') }}
                    </router-link>
                </div>

                <!-- Right Section -->
                <div class="nav-right">
                  
                    <!-- Book Now Button -->
                    <button class="book-btn" @click="$emit('open-appointment')">
                        <i class="fas fa-calendar-check mr-2"></i>
                        {{ t('appointment.book') }}
                    </button>

                      <!-- Language Switcher - Select Dropdown -->
                    <div class="lang-select-wrapper">
                        <select v-model="locale" class="lang-select">
                            <option value="en">EN</option>
                            <option value="sw">SW</option>
                        </select>
                    </div>

                    <!-- Mobile Actions (Language + Hamburger) -->
                    <div class="mobile-actions">
                        <!-- Mobile Language Select - Visible on mobile left of hamburger -->
                         <!-- Mobile Language Select - Radio buttons -->
                        <div class="mobile-lang-radio-group">
                            <label class="mobile-lang-radio" :class="{ active: locale === 'sw' }">
                                <input 
                                    type="radio" 
                                    v-model="locale" 
                                    value="sw" 
                                    name="mobile-language"
                                >
                                <span class="radio-label">SW</span>
                            </label>
                            <label class="mobile-lang-radio" :class="{ active: locale === 'en' }">
                                <input 
                                    type="radio" 
                                    v-model="locale" 
                                    value="en" 
                                    name="mobile-language"
                                >
                                <span class="radio-label">EN</span>
                            </label>
                        </div>

                        <!-- Mobile Menu Button -->
                        <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: mobileMenuOpen }">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <transition name="slide-down">
                <div v-if="mobileMenuOpen" class="mobile-menu1">
                    <div class="mobile-menu-content">
                        <router-link to="/" class="mobile-item" @click="mobileMenuOpen = false">
                            <i class="fas fa-home mobile-icon"></i>
                            {{ t('menu.home') }}
                        </router-link>

                        <!-- Services Mobile Dropdown -->
                        <!-- Services Mobile Dropdown - Updated to match desktop services -->
                    <div class="mobile-dropdown">
                        <button class="mobile-item" @click="toggleMobileSubmenu('services')">
                            <i class="fas fa-list mobile-icon"></i>
                            {{ t('menu.services') }}
                            <i class="fas fa-chevron-down mobile-arrow" :class="{ 'rotate-180': mobileSubmenuOpen === 'services' }"></i>
                        </button>
                        <transition name="slide-down">
                            <div v-if="mobileSubmenuOpen === 'services'" class="mobile-submenu services-mobile-submenu">
                                <!-- All Services -->
                                <router-link to="/services" class="mobile-subitem all-services-mobile" @click="mobileMenuOpen = false">
                                    <i class="fas fa-list-ul mobile-icon"></i>
                                    {{ t('services.all') }}
                                </router-link>
                                
                                <!-- All services from desktop -->
                                <router-link to="/services/opd" class="mobile-subitem" @click="mobileMenuOpen = false">
                                    <i class="fas fa-user-injured mobile-icon"></i>
                                    {{ t('services.opd') }}
                                </router-link>
                                
                                <router-link to="/services/ipd" class="mobile-subitem" @click="mobileMenuOpen = false">
                                    <i class="fas fa-procedures mobile-icon"></i>
                                    {{ t('services.ipd') }}
                                </router-link>
                                
                                <router-link to="/services/maternity" class="mobile-subitem" @click="mobileMenuOpen = false">
                                    <i class="fas fa-female mobile-icon"></i>
                                    {{ t('services.maternity') }}
                                </router-link>
                                
                                <router-link to="/services/emergency" class="mobile-subitem" @click="mobileMenuOpen = false">
                                    <i class="fas fa-ambulance mobile-icon"></i>
                                    {{ t('services.emergency') }}
                                </router-link>
                                
                                <router-link to="/services/theatre" class="mobile-subitem" @click="mobileMenuOpen = false">
                                    <i class="fas fa-syringe mobile-icon"></i>
                                    {{ t('services.theatre') }}
                                </router-link>
                                
                                <router-link to="/services/laboratory" class="mobile-subitem" @click="mobileMenuOpen = false">
                                    <i class="fas fa-flask mobile-icon"></i>
                                    {{ t('services.laboratory') }}
                                </router-link>
                                
                                <router-link to="/services/radiology" class="mobile-subitem" @click="mobileMenuOpen = false">
                                    <i class="fas fa-x-ray mobile-icon"></i>
                                    {{ t('services.radiology') }}
                                </router-link>
                                
                                <router-link to="/services/pharmacy" class="mobile-subitem" @click="mobileMenuOpen = false">
                                    <i class="fas fa-pills mobile-icon"></i>
                                    {{ t('services.pharmacy') }}
                                </router-link>
                                
                                <router-link to="/services/icu" class="mobile-subitem" @click="mobileMenuOpen = false">
                                    <i class="fas fa-heartbeat mobile-icon"></i>
                                    {{ t('services.icu') }}
                                </router-link>
                                
                                <router-link to="/services/specialized-clinics" class="mobile-subitem" @click="mobileMenuOpen = false">
                                    <i class="fas fa-stethoscope mobile-icon"></i>
                                    {{ t('services.specialized') }}
                                </router-link>
                            </div>
                        </transition>
                    </div>

                        <!-- About Mobile Dropdown -->
                        <div class="mobile-dropdown">
                            <button class="mobile-item" @click="toggleMobileSubmenu('about')">
                                <i class="fas fa-info-circle mobile-icon"></i>
                                {{ t('menu.about') }}
                                <i class="fas fa-chevron-down mobile-arrow" :class="{ 'rotate-180': mobileSubmenuOpen === 'about' }"></i>
                            </button>
                            <transition name="slide-down">
                                <div v-if="mobileSubmenuOpen === 'about'" class="mobile-submenu">
                                    <router-link to="/about" class="mobile-subitem" @click="mobileMenuOpen = false">
                                        {{ t('about.us') }}
                                    </router-link>
                                    <router-link to="/mission-vision" class="mobile-subitem" @click="mobileMenuOpen = false">
                                        {{ t('about.mission') }}
                                    </router-link>
                                </div>
                            </transition>
                        </div>

                        <router-link to="/staffs" class="mobile-item" @click="mobileMenuOpen = false">
                            <i class="fas fa-user-md mobile-icon"></i>
                            {{ t('menu.staffs') }}
                        </router-link>

                        <router-link to="/news" class="mobile-item" @click="mobileMenuOpen = false">
                            <i class="fas fa-newspaper mobile-icon"></i>
                            {{ t('menu.news') }}
                        </router-link>

                        <router-link to="/contact" class="mobile-item" @click="mobileMenuOpen = false">
                            <i class="fas fa-envelope mobile-icon"></i>
                            {{ t('menu.contact') }}
                        </router-link>

                        <!-- Mobile Footer with Book Button -->
                        <div class="mobile-footer">
                            <button class="mobile-book" @click="$emit('open-appointment'); mobileMenuOpen = false">
                                <i class="fas fa-calendar-check mr-2"></i>
                                {{ t('appointment.book') }}
                            </button>
                        </div>
                    </div>
                </div>
            </transition>
        </nav>
    </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({
    scrolled: {
        type: Boolean,
        default: false
    },
    serviceList: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(['open-appointment'])

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()

// State
const mobileMenuOpen = ref(false)
const mobileSubmenuOpen = ref(null)
const openDropdown = ref(null)
const isLoading = ref(false)

// Watch locale changes
watch(locale, (val) => {
    localStorage.setItem('lang', val)
    document.documentElement.lang = val
})

// Translation helpers
const getTranslatedServiceName = (service) => {
    if (locale.value === 'sw' && service.translations?.sw?.name) {
        return service.translations.sw.name
    }
    return service.name
}

// Navigation
const goToHome = () => {
    isLoading.value = true
    document.body.style.cursor = 'wait'
    router.push('/')
    setTimeout(() => {
        isLoading.value = false
        document.body.style.cursor = 'default'
    }, 500)
}

// Mobile menu
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
    if (!mobileMenuOpen.value) {
        mobileSubmenuOpen.value = null
    }
}

const toggleMobileSubmenu = (menu) => {
    mobileSubmenuOpen.value = mobileSubmenuOpen.value === menu ? null : menu
}

// Handle resize
const handleResize = () => {
    if (window.innerWidth >= 1024) {
        mobileMenuOpen.value = false
        mobileSubmenuOpen.value = null
        openDropdown.value = null
    }
}

// Handle click outside
const handleClickOutside = (event) => {
    const mobileMenu = document.querySelector('.mobile-menu')
    const menuBtn = document.querySelector('.mobile-menu-btn')
    
    if (mobileMenuOpen.value && 
        mobileMenu && 
        !mobileMenu.contains(event.target) && 
        !menuBtn?.contains(event.target)) {
        mobileMenuOpen.value = false
        mobileSubmenuOpen.value = null
    }
}

// Lifecycle
onMounted(() => {
    const savedLang = localStorage.getItem('lang')
    if (savedLang && (savedLang === 'en' || savedLang === 'sw')) {
        locale.value = savedLang
    }
    
    window.addEventListener('resize', handleResize)
    document.addEventListener('click', handleClickOutside)
    document.documentElement.lang = locale.value
    
    setTimeout(() => {
        isLoading.value = false
    }, 10)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    document.removeEventListener('click', handleClickOutside)
})

// Watch route changes
watch(() => route.path, () => {
    mobileMenuOpen.value = false
    mobileSubmenuOpen.value = null
    openDropdown.value = null
    isLoading.value = false
})
</script>

<style scoped>
.navbar-modern {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(30, 75, 124, 0.1);
    transition: all 0.3s ease;
}
.navbar-modern.scrolled {
    box-shadow: 0 10px 30px rgba(30, 75, 124, 0.1);
}
/* Base Styles */
:root {
    --primary: #1e4b7c;
    --primary-dark: #0a2a44;
    --primary-light: #2a6b9e;
    --text-dark: #333333;
    --text-light: #666666;
    --white: #ffffff;
    --bg-light: #f5f5f5;
    --border-color: #dddddd;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
     background: #1e4b7c;
    box-shadow: var(--shadow); 
    z-index: 1000;
    transition: var(--transition);
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(30, 75, 124, 0.1);
    transition: all 0.3s ease;
}

.navbar.scrolled {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.5rem 0.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
}

/* Logo Section */
.logo-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.logo-img {
    width: 160px;
    height: 70px;
}

.logo-img img {
    width: 100%;
    height: 100%;
}

/* Desktop Navigation */
.nav-menu {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-item {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-dark);
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    white-space: nowrap;
}

.nav-item:hover {
    color: var(--primary);
}

.nav-item.active {
    color: var(--primary);
    font-weight: 600;
}

.nav-item.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 1rem;
    right: 1rem;
    height: 2px;
    background: var(--primary);
    border-radius: 2px;
}

/* Dropdown */
.dropdown {
    position: relative;
}

.dropdown-trigger {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-right: 2rem;
}

.dropdown-arrow {
    font-size: 0.8rem;
    transition: transform 0.3s ease;
    position: absolute;
    right: 0.8rem;
}

.dropdown-arrow.rotate {
    transform: rotate(180deg);
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 200px;
    background: white;
    border-radius: 4px;
    /* padding: 0.5rem 0; */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(30, 75, 124, 0.1);
    /* margin-top: 0.5rem; */
    z-index: 1000; /* Extremely high z-index */
    /* transition: all 0.3s ease; */
    opacity: 0;
    visibility: hidden;
}

.dropdown-item {
    display: block;
    padding: 0.6rem 1.5rem;
    color: var(--text-dark);
    text-decoration: none;
    font-size: 0.95rem;
    transition: var(--transition);
}

.dropdown-item:hover {
    background: rgba(30, 75, 124, 0.05);
    color: var(--primary);
}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    /* transform: translateY(0); */
}
.dropdown-item.active {
    color: var(--primary);
    font-weight: 500;
}

/* Right Section */
.nav-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

/* Language Select */
.lang-select-wrapper {
    position: relative;
}

.lang-select {
    padding: 0.4rem 2rem 0.4rem 1rem;
    border-radius: 4px;
    border: 1px solid var(--border-color);
    background: var(--white);
    color: var(--text-dark);
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.6rem center;
    background-size: 12px;
}

.lang-select:hover {
    border-color: var(--primary);
}

.lang-select:focus {
    outline: none;
    border-color: var(--primary);
}

/* Desktop Book Now Button */
.book-btn {
    background: linear-gradient(135deg, #1e4b7c, #2a6b9e);
    color: white;
    padding: 0.7rem 1.3rem;
    border-radius: 50px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(30, 75, 124, 0.3);
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-size: 0.95rem;
}

.book-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 75, 124, 0.4);
}


/* Mobile Styles */
.mobile-appointment-icon {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: linear-gradient(135deg, #1e4b7c, #2a6b9e);
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(30, 75, 124, 0.2);
}


/* Mobile Actions */
.mobile-actions {
    display: none;
    align-items: center;
    gap: 0.5rem;
}

/* Mobile Language Select - Top */
.mobile-lang-wrapper {
    /* display: none; */
}

.mobile-lang-select-top {
    /* padding: 0.3rem 1.8rem 0.3rem 0.8rem; */
    border-radius: 4px;
    border: 1px solid var(--border-color);
    background: var(--white);
    color: var(--text-dark);
    font-weight: 500;
    font-size: 0.85rem;
    cursor: pointer;
    /* appearance: none; */
    /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E"); */
    /* background-repeat: no-repeat; */
    background-position: right 0.5rem center;
    background-size: 10px;
}

/* Mobile Menu Button */
.mobile-menu-btn {
    width: 40px;
    height: 40px;
    border: 1px solid #5faef0;
    border-radius: 4px;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    transition: var(--transition);
}

.mobile-menu-btn span {
    width: 22px;
    height: 2px;
    background: #4a4cec;
    border-radius: 2px;
    transition: var(--transition);
}


/* Desktop Book Now Button */
.nav-appointment {
    background: linear-gradient(135deg, #1e4b7c, #2a6b9e);
    color: white;
    padding: 0.6rem 1.8rem;
    border-radius: 50px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(30, 75, 124, 0.3);
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-size: 0.95rem;
}

.nav-appointment:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 75, 124, 0.4);
}

/* Mobile Styles */
.mobile-appointment-icon {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: linear-gradient(135deg, #1e4b7c, #2a6b9e);
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(30, 75, 124, 0.2);
}

.mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Menu */
.mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--white);
    border-top: 1px solid var(--border-color);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    max-height: calc(100vh - 100px);
    overflow-y: auto;
}

.mobile-menu-content {
    padding: 1rem;
}

.mobile-item {
    display: flex;
    align-items: center;
    padding: 0.8rem 1rem;
    color: var(--text-dark);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    border-radius: 4px;
    transition: var(--transition);
    gap: 0.8rem;
    
}

.mobile-item:active {
    background: rgba(30, 75, 124, 0.05);
}

.mobile-icon {
    width: 20px;
    color: var(--primary);
}

.mobile-arrow {
    margin-left: auto;
    transition: transform 0.3s ease;
}

.mobile-arrow.rotate-180 {
    transform: rotate(180deg);
}

.mobile-dropdown {
    border-bottom: 1px solid var(--border-color);
    
}

.mobile-submenu {
    margin-left: 2.5rem;
    padding-bottom: 0.5rem;
    
}

.mobile-subitem {
    display: block;
    padding: 0.6rem 1rem;
    color: var(--text-dark);
    text-decoration: none;
    font-size: 0.95rem;
    border-radius: 4px;
    transition: var(--transition);
    
}

.mobile-subitem:active {
    background: rgba(30, 75, 124, 0.05);
}

.mobile-footer {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
}

.mobile-book {
    width: 100%;
    padding: 0.8rem;
    background: linear-gradient(135deg, #1e4b7c, #2a6b9e);
    color: var(--white);
    border: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
      color: white;
    padding: 0.7rem 1.3rem;
    border-radius: 50px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(30, 75, 124, 0.3);
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-size: 0.95rem;
}
  

/* Loader */
.loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.heart-beat {
    display: flex;
    align-items: center;
    gap: 5px;
    height: 60px;
}

.line {
    width: 8px;
    height: 30px;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    border-radius: 4px;
    animation: beat 1.2s ease-in-out infinite;
}

.line1 { animation-delay: 0s; }
.line2 { animation-delay: 0.2s; }
.line3 { animation-delay: 0.4s; }
.line4 { animation-delay: 0.6s; }
.line5 { animation-delay: 0.8s; }

@keyframes beat {
    0%, 100% {
        height: 30px;
        opacity: 0.5;
    }
    50% {
        height: 60px;
        opacity: 1;
        box-shadow: 0 0 20px rgba(30, 75, 124, 0.5);
    }
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.mr-2 {
    margin-right: 0.5rem;
}

/* Responsive */
@media (min-width: 1024px) {
    .mobile-actions,
    .mobile-menu {
        display: none;
    }
}

@media (max-width: 1023px) {
    .nav-menu,
    .lang-select-wrapper,
    .book-btn {
        display: none;
    }

    .mobile-actions {
        display: flex;
    }

    .mobile-lang-wrapper {
        /* display: block; */
    }

    .nav-container {
        padding: 0.5rem 1rem;
        height: 80px;
    }

    .logo-img {
        width: 120px;
        height: 50px;
    }
}

@media (max-width: 480px) {
    .logo-img {
        width: 100px;
        height: 40px;
    }

    .mobile-menu-btn {
        width: 36px;
        height: 36px;
    }

    .mobile-lang-select-top {
        /* padding: 0.2rem 1.5rem 0.2rem 0.6rem; */
        font-size: 0.8rem;
    }
}

/* Services Menu - Styled like the image */
.services-menu {
    min-width: 500px;
    padding: 1rem;
    left: -50px;
}

.services-header {
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 0.8rem;
    padding-bottom: 0.5rem;
}

.all-services {
    font-weight: 600;
    color: var(--primary);
}

.all-services-text {
    font-size: 1rem;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.3rem;
}

.service-item {
    padding: 0.6rem 1rem;
    white-space: nowrap;
}

/* Mobile Services Menu */
.services-mobile-submenu {
    margin-left: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    max-height: 300px;
    overflow-y: auto;
    padding-right: 0.5rem;
}

.all-services-mobile {
    font-weight: 600;
    color: var(--primary);
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 0.3rem;
    padding-bottom: 0.5rem;
}

/* Scrollbar styling for mobile services */
.services-mobile-submenu::-webkit-scrollbar {
    width: 4px;
}

.services-mobile-submenu::-webkit-scrollbar-track {
    background: var(--bg-light);
}

.services-mobile-submenu::-webkit-scrollbar-thumb {
    background: var(--primary-light);
    border-radius: 4px;
}

/* Mobile Language Radio Group */
.mobile-lang-radio-group {
    display: flex;
    align-items: center;
    background: rgba(30, 75, 124, 0.05);
    border-radius: 30px;
    padding: 2px;
    border: 1px solid rgba(30, 75, 124, 0.2);
    margin-right: 4px;
}

.mobile-lang-radio {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 30px;
    transition: all 0.2s ease;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.mobile-lang-radio input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

.mobile-lang-radio .radio-label {
    color: var(--text-muted);
    transition: color 0.2s ease;
}

.mobile-lang-radio.active {
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    box-shadow: 0 2px 8px rgba(30, 75, 124, 0.3);
}

.mobile-lang-radio.active .radio-label {
    color: white;
}

/* Responsive adjustments for mobile radio */
@media (max-width: 480px) {
    .mobile-lang-radio {
        padding: 3px 6px;
        font-size: 0.7rem;
    }
    
    .mobile-lang-radio-group {
        margin-right: 2px;
    }
}
</style>