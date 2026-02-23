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

        <nav class="fixed top-0 left-0 right-0 z-50 navbar-modern" :class="{ 'scrolled': scrolled }">
            <div class="container mx-auto px-4 lg:px-6">
                <div class="flex items-center justify-between h-20 lg:h-24">
                    <!-- Logo -->
                    <div class="logo-container" @click="goToHome">
                        <div class="logo-image">
                            <img src="/assets/logo_2_gakala.png" alt="Gakala Health Centre Logo">
                        </div>
                    </div>

                    <!-- Desktop Navigation - Hidden on mobile -->
                    <div class="hidden lg:flex items-center flex-1 justify-center">
                        <div class="nav-menu">
                            <div v-for="item in menuItems" :key="item.name" class="nav-item">
                                <!-- Regular nav items -->
                                <a 
                                    v-if="!item.external && item.path !== '#'" 
                                    :href="item.path" 
                                    class="nav-link-modern"
                                    :class="{ 'router-link-active': $route.path === item.path }"
                                    @click="handleNavigationWithLoader($event, item.path)"
                                >
                                    {{ getTranslatedText(item.name, item.translations) }}
                                    <span class="nav-indicator"></span>
                                </a>
                                
                                <!-- Dropdown parent items -->
                                <a 
                                    v-else-if="item.path === '#'" 
                                    href="#" 
                                    class="nav-link-modern"
                                    :class="{ 'active': isDropdownActive(item) }"
                                    @click.prevent
                                >
                                    {{ getTranslatedText(item.name, item.translations) }}
                                    <i class="fas fa-chevron-down dropdown-arrow" :class="{ 'rotate': isDropdownHovered(item.name) }"></i>
                                    <span class="nav-indicator"></span>
                                </a>
                                
                                <!-- External links -->
                                <a v-else :href="item.link" target="_blank" class="nav-link-modern">
                                    {{ getTranslatedText(item.name, item.translations) }}
                                    <i class="fas fa-external-link-alt ml-1 text-xs"></i>
                                    <span class="nav-indicator"></span>
                                </a>
                                
                                <!-- About Dropdown -->
                                <div v-if="item.name === 'About'" class="nav-dropdown" @mouseenter="setDropdownHover('About')" @mouseleave="setDropdownHover(null)">
                                    <a href="/about" class="nav-dropdown-item" :class="{ 'router-link-active': $route.path === '/about' }" @click="handleNavigationWithLoader($event, '/about')">
                                        <span class="item-icon"><i class="fas fa-info-circle"></i></span>
                                        {{ currentLanguage === 'sw' ? 'Kuhusu Sisi' : 'About Us' }}
                                    </a>
                                    <a href="/mission" class="nav-dropdown-item" :class="{ 'router-link-active': $route.path === '/mission' }" @click="handleNavigationWithLoader($event, '/mission')">
                                        <span class="item-icon"><i class="fas fa-bullseye"></i></span>
                                        {{ currentLanguage === 'sw' ? 'Dhamira na Maono' : 'Our Mission & Vision' }}
                                    </a>
                                </div>

                                <!-- Services Dropdown -->
                                <div v-if="item.name === 'Services'" class="nav-dropdown" style="min-width: 280px;" @mouseenter="setDropdownHover('Services')" @mouseleave="setDropdownHover(null)">
                                    <a href="/services" class="nav-dropdown-item font-bold text-primary border-b border-gray-100 mb-2" :class="{ 'router-link-active': $route.path === '/services' }" @click="handleNavigationWithLoader($event, '/services')">
                                        <span class="item-icon"><i class="fas fa-list"></i></span>
                                        {{ currentLanguage === 'sw' ? 'Huduma Zote' : 'All Services' }}
                                    </a>
                                    <div class="grid grid-cols-2 gap-1">
                                        <a 
                                            v-for="service in serviceList" 
                                            :key="service.name" 
                                            :href="`/services/${service.slug}`" 
                                            class="nav-dropdown-item text-sm"
                                            :class="{ 'router-link-active': $route.path === `/services/${service.slug}` }"
                                            @click="handleNavigationWithLoader($event, `/services/${service.slug}`)"
                                        >
                                            <span class="item-icon"><i :class="service.icon"></i></span>
                                            {{ getTranslatedServiceName(service) }}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Desktop Right Side Actions -->
                    <div class="hidden lg:flex items-center gap-6">
                        <!-- Book Now Button -->
                        <button class="nav-appointment" @click="$emit('open-appointment')">
                            <i class="fas fa-calendar-check mr-2"></i>
                            <span>{{ currentLanguage === 'sw' ? 'Weka Miadi' : 'Book Now' }}</span>
                        </button>

                        &nbsp;&nbsp;&nbsp;
                        <!-- Language Switcher with Divider -->
                        <div class="language-switcher-wrapper">
                            <div class="language-switcher">
                                <button 
                                    class="lang-btn" 
                                    :class="{ active: currentLanguage === 'sw' }"
                                    @click="changeLanguage('sw')"
                                >
                                    <span class="lang-text">Swahili</span>
                                </button>
                                <button 
                                    class="lang-btn" 
                                    :class="{ active: currentLanguage === 'en' }"
                                    @click="changeLanguage('en')"
                                >
                                    <span class="lang-text">English</span>
                                </button>
                            </div>
                        </div>
                    </div>

                                            &nbsp;&nbsp;&nbsp;

                    <!-- Mobile Right Side Actions -->
                    <div class="flex lg:hidden items-center gap-2">
                        <!-- Mobile Book Now Icon -->
                        <!-- <button class="mobile-appointment-icon" @click="$emit('open-appointment')">
                            <i class="fas fa-calendar-check"></i>
                        </button> -->

                        <!-- Mobile Language Switcher -->
                        <div class="mobile-language-switcher">
                            <button 
                                class="mobile-lang-btn" 
                                :class="{ active: currentLanguage === 'sw' }"
                                @click="changeLanguage('sw')"
                            >
                                <span class="flag">SW</span>
                            </button>
                            <button 
                                class="mobile-lang-btn" 
                                :class="{ active: currentLanguage === 'en' }"
                                @click="changeLanguage('en')"
                            >
                                <span class="flag">EN</span>
                            </button>
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
                <div v-if="mobileMenuOpen" class="lg:hidden mobile-menu">
                    <div class="container mx-auto px-4 py-6">
                        <!-- Mobile Navigation -->
                        <div class="space-y-2">
                            <div v-for="item in menuItems" :key="item.name">
                                <!-- Services Mobile Section -->
                                <div v-if="item.name === 'Services'" class="mobile-menu-section">
                                    <div class="mobile-menu-item font-bold text-primary bg-primary-soft" @click="toggleMobileSubmenu('services')">
                                        <span class="item-icon"><i class="fas fa-list"></i></span>
                                        {{ currentLanguage === 'sw' ? 'Huduma Zetu' : 'Our Services' }}
                                        <i class="fas fa-chevron-down ml-auto transition-transform" :class="{ 'rotate-180': mobileSubmenuOpen === 'services' }"></i>
                                    </div>
                                    <transition name="slide-down">
                                        <div v-if="mobileSubmenuOpen === 'services'" class="grid grid-cols-2 gap-2 mt-2">
                                            <a 
                                                v-for="service in serviceList" 
                                                :key="service.name" 
                                                :href="`/services/${service.slug}`" 
                                                class="mobile-menu-item text-sm py-2"
                                                :class="{ 'router-link-active': $route.path === `/services/${service.slug}` }"
                                                @click="handleNavigationWithLoader($event, `/services/${service.slug}`); mobileMenuOpen = false"
                                            >
                                                <span class="item-icon"><i :class="service.icon" class="text-primary"></i></span>
                                                {{ getTranslatedServiceShortName(service) }}
                                            </a>
                                        </div>
                                    </transition>
                                </div>
                                
                                <!-- About Mobile Section -->
                                <div v-else-if="item.name === 'About'" class="mobile-menu-section">
                                    <div class="mobile-menu-item font-bold text-primary bg-primary-soft" @click="toggleMobileSubmenu('about')">
                                        <span class="item-icon"><i class="fas fa-info-circle"></i></span>
                                        {{ currentLanguage === 'sw' ? 'Kuhusu' : 'About' }}
                                        <i class="fas fa-chevron-down ml-auto transition-transform" :class="{ 'rotate-180': mobileSubmenuOpen === 'about' }"></i>
                                    </div>
                                    <transition name="slide-down">
                                        <div v-if="mobileSubmenuOpen === 'about'" class="mt-2 space-y-1">
                                            <a href="/about" class="mobile-menu-item pl-8" :class="{ 'router-link-active': $route.path === '/about' }" @click="handleNavigationWithLoader($event, '/about'); mobileMenuOpen = false">
                                                <span class="item-icon"><i class="fas fa-info-circle"></i></span>
                                                {{ currentLanguage === 'sw' ? 'Kuhusu Sisi' : 'About Us' }}
                                            </a>
                                            <a href="/mission" class="mobile-menu-item pl-8" :class="{ 'router-link-active': $route.path === '/mission' }" @click="handleNavigationWithLoader($event, '/mission'); mobileMenuOpen = false">
                                                <span class="item-icon"><i class="fas fa-bullseye"></i></span>
                                                {{ currentLanguage === 'sw' ? 'Dhamira na Maono' : 'Mission & Vision' }}
                                            </a>
                                        </div>
                                    </transition>
                                </div>
                                
                                <!-- Regular Mobile Items -->
                                <div v-else>
                                    <a 
                                        v-if="!item.external" 
                                        :href="item.path" 
                                        class="mobile-menu-item"
                                        :class="{ 'router-link-active': $route.path === item.path }"
                                        @click="handleNavigationWithLoader($event, item.path); mobileMenuOpen = false"
                                    >
                                        <span class="item-icon" v-if="item.icon"><i :class="item.icon"></i></span>
                                        {{ getTranslatedText(item.name, item.translations) }}
                                    </a>
                                    <a v-else :href="item.link" target="_blank" class="mobile-menu-item" @click="mobileMenuOpen = false">
                                        <span class="item-icon" v-if="item.icon"><i :class="item.icon"></i></span>
                                        {{ getTranslatedText(item.name, item.translations) }}
                                        <i class="fas fa-external-link-alt ml-2 text-xs"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Mobile Full Appointment Button -->
                        <div class="mt-8 pt-6 border-t border-gray-200">
                            <button class="mobile-full-appointment w-full" @click="$emit('open-appointment'); mobileMenuOpen = false">
                                <i class="fas fa-calendar-check mr-2"></i>
                                {{ currentLanguage === 'sw' ? 'Weka Miadi Sasa' : 'Book Appointment Now' }}
                            </button>
                        </div>
                    </div>
                </div>
            </transition>
        </nav>
    </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, provide } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
    scrolled: {
        type: Boolean,
        default: false
    },
    menuItems: {
        type: Array,
        default: () => []
    },
    serviceList: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(['open-appointment', 'go-home', 'language-change'])

const route = useRoute()
const mobileMenuOpen = ref(false)
const mobileSubmenuOpen = ref(null)
const hoveredDropdown = ref(null)
const isLoading = ref(false)
const currentLanguage = ref(localStorage.getItem('language') || 'sw')

// Provide language to child components
provide('currentLanguage', currentLanguage)

// Define routes that should activate the About dropdown
const aboutRoutes = ['/about', '/mission', '/vision']

// Translation helper functions
const getTranslatedText = (defaultText, translations = {}) => {
    if (currentLanguage.value === 'sw' && translations.sw) {
        return translations.sw
    }
    return defaultText
}

const getTranslatedServiceName = (service) => {
    if (currentLanguage.value === 'sw' && service.translations?.sw?.name) {
        return service.translations.sw.name
    }
    return service.name
}

const getTranslatedServiceShortName = (service) => {
    if (currentLanguage.value === 'sw' && service.translations?.sw?.shortName) {
        return service.translations.sw.shortName
    }
    return service.shortName || service.name
}

// Change language
const changeLanguage = (lang) => {
    if (currentLanguage.value === lang) return
    
    currentLanguage.value = lang
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang === 'sw' ? 'sw' : 'en'
    emit('language-change', lang)
    
    // Show brief loader when changing language
    isLoading.value = true
    setTimeout(() => {
        isLoading.value = false
    }, 0)
}

// Handle navigation with loader
const handleNavigationWithLoader = (event, path) => {
    event.preventDefault()
    mobileMenuOpen.value = false
    mobileSubmenuOpen.value = null
    isLoading.value = true
    document.body.style.cursor = 'wait'
    window.location.href = path
}

// Go to home
const goToHome = () => {
    emit('go-home')
    mobileMenuOpen.value = false
    mobileSubmenuOpen.value = null
    isLoading.value = true
    document.body.style.cursor = 'wait'
    window.location.href = '/'
}

// Check if dropdown is active
const isDropdownActive = (item) => {
    if (item.name === 'About') {
        return aboutRoutes.includes(route.path)
    }
    if (item.name === 'Services') {
        return route.path.startsWith('/services')
    }
    return false
}

// Dropdown hover state
const isDropdownHovered = (itemName) => {
    return hoveredDropdown.value === itemName
}

const setDropdownHover = (itemName) => {
    hoveredDropdown.value = itemName
}

// Toggle mobile submenu
const toggleMobileSubmenu = (menu) => {
    if (mobileSubmenuOpen.value === menu) {
        mobileSubmenuOpen.value = null
    } else {
        mobileSubmenuOpen.value = menu
    }
}

// Toggle mobile menu
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
    if (!mobileMenuOpen.value) {
        mobileSubmenuOpen.value = null
    }
}

// Handle resize
const handleResize = () => {
    if (window.innerWidth >= 1024) {
        mobileMenuOpen.value = false
        mobileSubmenuOpen.value = null
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

// Lifecycle hooks
onMounted(() => {
    window.addEventListener('resize', handleResize)
    document.addEventListener('click', handleClickOutside)
    document.documentElement.lang = currentLanguage.value === 'sw' ? 'sw' : 'en'
    
    window.addEventListener('load', () => {
        isLoading.value = false
        document.body.style.cursor = 'default'
    })
    
    setTimeout(() => {
        isLoading.value = false
        document.body.style.cursor = 'default'
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
})
</script>

<style scoped>
/* Navbar Styles */
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

/* Logo Styles */
.logo-container {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.logo-image {
    width: 160px;
    height: 60px;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* Desktop Navigation */
.nav-menu {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.nav-item {
    position: relative;
}

.nav-link-modern {
    display: flex;
    align-items: center;
    padding: 0.6rem 1.2rem;
    font-weight: 500;
    color: #2c3e50;
    text-decoration: none;
    border-radius: 50px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    font-size: 0.95rem;
    gap: 0.5rem;
}

.nav-link-modern::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(30, 75, 124, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
}

.nav-link-modern:hover::before,
.nav-link-modern.router-link-active::before {
    opacity: 1;
}

.nav-link-modern:hover,
.nav-link-modern.router-link-active {
    color: #1e4b7c;
}

.dropdown-arrow {
    font-size: 0.8rem;
    transition: transform 0.3s ease;
}

.nav-item:hover .dropdown-arrow {
    transform: rotate(180deg);
}

.nav-indicator {
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #1e4b7c, #2a6b9e);
    border-radius: 3px 3px 0 0;
    transition: width 0.3s ease;
}

.nav-link-modern:hover .nav-indicator,
.nav-link-modern.router-link-active .nav-indicator {
    width: 70%;
}

/* Dropdown Menu */
.nav-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    min-width: 240px;
    background: white;
    border-radius: 16px;
    padding: 0.75rem;
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.15);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 100;
    border: 1px solid rgba(30, 75, 124, 0.1);
}

.nav-item:hover .nav-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(5px);
}

.nav-dropdown-item {
    display: flex;
    align-items: center;
    padding: 0.6rem 1rem;
    color: #2c3e50;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 500;
    font-size: 0.9rem;
    gap: 0.5rem;
}

.nav-dropdown-item:hover,
.nav-dropdown-item.router-link-active {
    background: rgba(30, 75, 124, 0.1);
    color: #1e4b7c;
    transform: translateX(5px);
}

.item-icon {
    display: inline-flex;
    width: 20px;
    justify-content: center;
}

/* Desktop Right Side */
.language-switcher-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.language-switcher-wrapper::before {
    content: '';
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 30px;
    background: rgba(30, 75, 124, 0.2);
}

.language-switcher {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: #f8fafc;
    padding: 0.25rem;
    border-radius: 50px;
    border: 1px solid rgba(30, 75, 124, 0.1);
}

.lang-btn {
    padding: 0.5rem 1rem;
    border-radius: 50px;
    border: none;
    background: transparent;
    color: #2c3e50;
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.lang-btn.active {
    background: linear-gradient(135deg, #1e4b7c, #2a6b9e);
    color: white;
    box-shadow: 0 4px 10px rgba(30, 75, 124, 0.2);
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

.mobile-language-switcher {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: #f8fafc;
    padding: 0.2rem;
    border-radius: 40px;
    border: 1px solid rgba(30, 75, 124, 0.1);
}

.mobile-lang-btn {
    width: 36px;
    height: 36px;
    border-radius: 36px;
    border: none;
    background: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mobile-lang-btn.active {
    background: linear-gradient(135deg, #1e4b7c, #2a6b9e);
}

.mobile-lang-btn.active .flag {
    filter: brightness(0) invert(1);
}

.mobile-menu-btn {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: rgba(30, 75, 124, 0.1);
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.mobile-menu-btn span {
    width: 20px;
    height: 2px;
    background: #1e4b7c;
    border-radius: 2px;
    transition: all 0.3s ease;
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
    background: white;
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.15);
    border-radius: 0 0 24px 24px;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
}

.mobile-menu-item {
    display: flex;
    align-items: center;
    padding: 0.8rem 1rem;
    color: #2c3e50;
    text-decoration: none;
    font-weight: 500;
    border-radius: 12px;
    transition: all 0.3s ease;
    gap: 0.75rem;
}

.mobile-menu-item:hover,
.mobile-menu-item.router-link-active {
    background: rgba(30, 75, 124, 0.1);
    color: #1e4b7c;
}

.mobile-full-appointment {
    background: linear-gradient(135deg, #1e4b7c, #2a6b9e);
    color: white;
    padding: 1rem;
    border-radius: 50px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(30, 75, 124, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
}

/* Loader Styles */
.loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95));
    backdrop-filter: blur(10px);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
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
    background: linear-gradient(135deg, #1e4b7c, #2a6b9e);
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

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Transitions */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.rotate-180 {
    transform: rotate(180deg);
}

/* Responsive Breakpoints */
@media (min-width: 1024px) {
    .mobile-appointment-icon,
    .mobile-language-switcher,
    .mobile-menu-btn,
    .mobile-full-appointment {
        display: none !important;
    }
}

@media (max-width: 1023px) {
    .nav-menu,
    .language-switcher-wrapper,
    .nav-appointment {
        display: none !important;
    }
    
    .logo-image {
        width: 140px;
        height: 50px;
    }
}

@media (max-width: 480px) {
    .logo-image {
        width: 120px;
        height: 45px;
    }
    
    .mobile-appointment-icon {
        width: 36px;
        height: 36px;
        font-size: 1rem;
    }
    
    .mobile-lang-btn {
        width: 32px;
        height: 32px;
        font-size: 1rem;
    }
    
    .mobile-menu-btn {
        width: 36px;
        height: 36px;
    }
}
</style>