<template>
    <header>
        <!-- Custom Loader Overlay - Single loader for entire app -->
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
                    <!-- <div class="loader-text">Gakala Health Centre</div> -->
                    <!-- <div class="loader-subtext">Loading...</div> -->
                </div>
            </div>
        </div>

        <nav class="fixed top-0 left-0 right-0 z-50 navbar-modern" :class="{ 'scrolled': scrolled }">
            <div class="container mx-auto px-6">
                <div class="flex items-center justify-between h-20">
                    <!-- Logo -->
                    <div class="logo-container" @click="goToHome">
                        <div class="logo-image">
                            <img src="/assets/logo_2_gakala.png" alt="Gakala Health Centre Logo">
                        </div>
                    </div>

                    <!-- Desktop Menu - Hidden on mobile, visible on lg and up -->
                    <div class="hidden lg:flex nav-menu">
                        <div v-for="item in menuItems" :key="item.name" class="nav-item">
                            <!-- Regular items with paths -->
                            <a 
                                v-if="!item.external && item.path !== '#'" 
                                :href="item.path" 
                                class="nav-link-modern"
                                :class="{ 'router-link-active': $route.path === item.path }"
                                @click="handleNavigationWithLoader($event, item.path)"
                            >
                                {{ item.name }}
                                <span class="nav-indicator"></span>
                            </a>
                            
                            <!-- Dropdown parent items (About, Services) with arrow -->
                            <a 
                                v-else-if="item.path === '#'" 
                                href="#" 
                                class="nav-link-modern"
                                :class="{ 'active': isDropdownActive(item) }"
                                @click.prevent
                            >
                                {{ item.name }}
                                <i class="fas fa-chevron-down dropdown-arrow" :class="{ 'rotate': isDropdownHovered(item.name) }"></i>
                                <span class="nav-indicator"></span>
                            </a>
                            
                            <!-- External links -->
                            <a v-else :href="item.link" target="_blank" class="nav-link-modern">
                                {{ item.name }}
                                <i class="fas fa-external-link-alt ml-1 text-xs"></i>
                                <span class="nav-indicator"></span>
                            </a>
                            
                            <!-- About Dropdown -->
                            <div v-if="item.name === 'About'" class="nav-dropdown" @mouseenter="setDropdownHover('About')" @mouseleave="setDropdownHover(null)">
                                <a href="/about" class="nav-dropdown-item" :class="{ 'router-link-active': $route.path === '/about' }" @click="handleNavigationWithLoader($event, '/about')">
                                    <span class="item-icon"><i class="fas fa-info-circle"></i></span>
                                    About Us
                                </a>
                                <a href="/mission" class="nav-dropdown-item" :class="{ 'router-link-active': $route.path === '/mission' }" @click="handleNavigationWithLoader($event, '/mission')">
                                    <span class="item-icon"><i class="fas fa-bullseye"></i></span>
                                    Our Mission & Vision
                                </a>
                            </div>

                            <!-- Services Dropdown -->
                            <div v-if="item.name === 'Services'" class="nav-dropdown" style="min-width: 280px;" @mouseenter="setDropdownHover('Services')" @mouseleave="setDropdownHover(null)">
                                <a href="/services" class="nav-dropdown-item font-bold text-primary border-b border-gray-100 mb-2" :class="{ 'router-link-active': $route.path === '/services' }" @click="handleNavigationWithLoader($event, '/services')">
                                    <span class="item-icon"><i class="fas fa-list"></i></span>
                                    All Services
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
                                        {{ service.shortName || service.name }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Desktop Actions - Hidden on mobile, visible on lg and up -->
                    <div class="hidden lg:flex nav-actions">
                        <button class="nav-appointment" @click="$emit('open-appointment')">
                            <i class="fas fa-calendar-check"></i>
                            <span class="hidden lg:inline">Book Now</span>
                        </button>
                    </div>

                    <!-- Mobile Menu Button - Visible only on mobile -->
                    <button class="lg:hidden mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: mobileMenuOpen }">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu - Hidden by default, visible when toggled -->
            <transition name="slide-down">
                <div v-if="mobileMenuOpen" class="lg:hidden mobile-menu">
                    <div class="container mx-auto px-6 py-4">
                        <!-- Mobile Menu Items -->
                        <div v-for="item in menuItems" :key="item.name" class="mb-2">
                            <div v-if="item.name === 'Services'" class="mobile-menu-section">
                                <div class="mobile-menu-item font-bold text-primary bg-primary-soft" @click="toggleMobileSubmenu('services')">
                                    <span class="item-icon"><i class="fas fa-list"></i></span>
                                    Our Services
                                    <i class="fas fa-chevron-down ml-auto transition-transform" :class="{ 'rotate-180': mobileSubmenuOpen === 'services' }"></i>
                                </div>
                                <transition name="slide-down">
                                    <div v-if="mobileSubmenuOpen === 'services'" class="grid grid-cols-2 gap-1 mt-1">
                                        <a 
                                            v-for="service in serviceList" 
                                            :key="service.name" 
                                            :href="`/services/${service.slug}`" 
                                            class="mobile-menu-item text-sm pl-8"
                                            :class="{ 'router-link-active': $route.path === `/services/${service.slug}` }"
                                            @click="handleNavigationWithLoader($event, `/services/${service.slug}`); mobileMenuOpen = false"
                                        >
                                            <span class="item-icon"><i :class="service.icon"></i></span>
                                            {{ service.shortName || service.name }}
                                        </a>
                                    </div>
                                </transition>
                            </div>
                            
                            <div v-else-if="item.name === 'About'" class="mobile-menu-section">
                                <div class="mobile-menu-item font-bold text-primary bg-primary-soft" @click="toggleMobileSubmenu('about')">
                                    <span class="item-icon"><i class="fas fa-info-circle"></i></span>
                                    About
                                    <i class="fas fa-chevron-down ml-auto transition-transform" :class="{ 'rotate-180': mobileSubmenuOpen === 'about' }"></i>
                                </div>
                                <transition name="slide-down">
                                    <div v-if="mobileSubmenuOpen === 'about'" class="mt-1">
                                        <a href="/about" class="mobile-menu-item pl-8" :class="{ 'router-link-active': $route.path === '/about' }" @click="handleNavigationWithLoader($event, '/about'); mobileMenuOpen = false">
                                            <span class="item-icon"><i class="fas fa-info-circle"></i></span>
                                            About Us
                                        </a>
                                        <a href="/mission" class="mobile-menu-item pl-8" :class="{ 'router-link-active': $route.path === '/mission' }" @click="handleNavigationWithLoader($event, '/mission'); mobileMenuOpen = false">
                                            <span class="item-icon"><i class="fas fa-bullseye"></i></span>
                                            Our Mission & Vision
                                        </a>
                                    </div>
                                </transition>
                            </div>
                            
                            <div v-else>
                                <a 
                                    v-if="!item.external" 
                                    :href="item.path" 
                                    class="mobile-menu-item"
                                    :class="{ 'router-link-active': $route.path === item.path }"
                                    @click="handleNavigationWithLoader($event, item.path); mobileMenuOpen = false"
                                >
                                    <span class="item-icon" v-if="item.icon"><i :class="item.icon"></i></span>
                                    {{ item.name }}
                                </a>
                                <a v-else :href="item.link" target="_blank" class="mobile-menu-item" @click="mobileMenuOpen = false">
                                    <span class="item-icon" v-if="item.icon"><i :class="item.icon"></i></span>
                                    {{ item.name }} <i class="fas fa-external-link-alt ml-2 text-xs"></i>
                                </a>
                            </div>
                        </div>
                        
                        <!-- Mobile Appointment Button -->
                        <div class="mt-6 pt-6 border-t border-gray-200">
                            <button class="nav-appointment w-full justify-center" @click="$emit('open-appointment'); mobileMenuOpen = false">
                                <i class="fas fa-calendar-check mr-2"></i>
                                Book Appointment
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

const emit = defineEmits(['open-appointment', 'go-home'])

const route = useRoute()
const mobileMenuOpen = ref(false)
const mobileSubmenuOpen = ref(null)
const hoveredDropdown = ref(null)
const isLoading = ref(false)

// Define routes that should activate the About dropdown
const aboutRoutes = ['/about', '/mission', '/vision']

// Handle navigation with custom loader
const handleNavigationWithLoader = (event, path) => {
    event.preventDefault()
    
    // Close mobile menu if open
    mobileMenuOpen.value = false
    mobileSubmenuOpen.value = null
    
    // Show loader
    isLoading.value = true
    
    // Prevent any default browser loading indicator
    document.body.style.cursor = 'wait'
    
    // Navigate to new page
    window.location.href = path
}

// Special handler for home
const goToHome = () => {
    emit('go-home')
    mobileMenuOpen.value = false
    mobileSubmenuOpen.value = null
    
    // Show loader
    isLoading.value = true
    document.body.style.cursor = 'wait'
    
    // Navigate to home
    window.location.href = '/'
}

// Check if any about route is active
const isDropdownActive = (item) => {
    if (item.name === 'About') {
        return aboutRoutes.includes(route.path)
    }
    if (item.name === 'Services') {
        return route.path.startsWith('/services')
    }
    return false
}

// Check if dropdown is hovered
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

// Close mobile menu on route change
watch(() => route.path, () => {
    mobileMenuOpen.value = false
    mobileSubmenuOpen.value = null
})

// Close mobile menu on window resize
const handleResize = () => {
    if (window.innerWidth >= 1024) {
        mobileMenuOpen.value = false
        mobileSubmenuOpen.value = null
    }
}

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
    if (!mobileMenuOpen.value) {
        mobileSubmenuOpen.value = null
    }
}

// Handle click outside to close mobile menu
const handleClickOutside = (event) => {
    const mobileMenu = document.querySelector('.mobile-menu')
    const menuBtn = document.querySelector('.mobile-menu-btn')
    
    if (mobileMenuOpen.value && 
        mobileMenu && 
        !mobileMenu.contains(event.target) && 
        !menuBtn.contains(event.target)) {
        mobileMenuOpen.value = false
        mobileSubmenuOpen.value = null
    }
}

// Hide loader when page loads and reset cursor
onMounted(() => {
    window.addEventListener('resize', handleResize)
    document.addEventListener('click', handleClickOutside)
    
    // Hide loader when page is fully loaded
    window.addEventListener('load', () => {
        isLoading.value = false
        document.body.style.cursor = 'default'
    })
    
    // Also hide loader after a short delay (fallback)
    setTimeout(() => {
        isLoading.value = false
        document.body.style.cursor = 'default'
    }, 10)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.navbar-modern {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(30, 75, 124, 0.1);
    padding: 0.5rem 0;
    transition: all 0.3s ease;
}

.navbar-modern.scrolled {
    padding: 0.25rem 0;
    box-shadow: 0 10px 30px rgba(30, 75, 124, 0.1);
}

.logo-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
}

.logo-image {
    width: 180px;
    height: 70px;
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
    padding: 5px;
}

/* Loader Styles - Single loader for entire app */
.loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
}

.loader-container {
    text-align: center;
}

.medical-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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
        background: linear-gradient(135deg, var(--primary), var(--primary-light));
    }
    50% {
        height: 60px;
        opacity: 1;
        background: linear-gradient(135deg, var(--primary-light), var(--primary-dark));
        box-shadow: 0 0 20px rgba(30, 75, 124, 0.5);
    }
}

.loader-text {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-dark);
    letter-spacing: 2px;
    animation: pulse 2s ease-in-out infinite;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.loader-subtext {
    font-size: 1.2rem;
    color: var(--primary);
    font-weight: 500;
    letter-spacing: 1px;
}

@keyframes pulse {
    0%, 100% {
        opacity: 0.8;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
        text-shadow: 0 0 20px rgba(30, 75, 124, 0.5);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Desktop Menu Styles */
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
    padding: 0.75rem 1.2rem;
    font-weight: 500;
    color: var(--text-dark);
    text-decoration: none;
    border-radius: 50px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    font-size: 0.95rem;
    cursor: pointer;
    gap: 0.5rem;
}

.nav-link-modern::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-soft), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
}

.nav-link-modern:hover::before,
.nav-link-modern.active::before,
.nav-link-modern.router-link-active::before {
    opacity: 1;
}

.nav-link-modern:hover,
.nav-link-modern.active,
.nav-link-modern.router-link-active {
    color: var(--primary);
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
    background: linear-gradient(90deg, var(--primary), var(--primary-light));
    border-radius: 3px 3px 0 0;
    transition: width 0.3s ease;
}

.nav-link-modern:hover .nav-indicator,
.nav-link-modern.active .nav-indicator,
.nav-link-modern.router-link-active .nav-indicator {
    width: 80%;
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
    color: var(--text-dark);
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
    gap: 0.5rem;
}

.nav-dropdown-item:hover,
.nav-dropdown-item.router-link-active {
    background: var(--primary-soft);
    color: var(--primary);
    transform: translateX(5px);
}

.item-icon {
    display: inline-flex;
    width: 20px;
    justify-content: center;
}

/* Desktop Actions */
.nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 1.5rem;
}

.nav-appointment {
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(30, 75, 124, 0.3);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
}

.nav-appointment:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 75, 124, 0.4);
}

.nav-appointment::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
}

.nav-appointment:hover::after {
    left: 100%;
}

/* Mobile Menu Button */
.mobile-menu-btn {
    width: 45px;
    height: 45px;
    border-radius: 12px;
    background: var(--primary-soft);
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
}

.mobile-menu-btn span {
    width: 25px;
    height: 2px;
    background: var(--primary);
    border-radius: 2px;
    transition: all 0.3s ease;
}

.mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Menu */
.mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 20px 40px rgba(30, 75, 124, 0.15);
    border-radius: 0 0 30px 30px;
    z-index: 100;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
}

.mobile-menu-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    color: var(--text-dark);
    text-decoration: none;
    font-weight: 500;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    gap: 0.5rem;
}

.mobile-menu-item:hover,
.mobile-menu-item.router-link-active {
    background: var(--primary-soft);
    color: var(--primary);
}

.mobile-menu-section {
    margin-bottom: 1rem;
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
    .mobile-menu-btn {
        display: none !important;
    }
    
    .nav-menu {
        display: flex;
    }
    
    .nav-actions {
        display: flex;
    }
}

@media (max-width: 1023px) {
    .nav-menu {
        display: none;
    }
    
    .nav-actions {
        display: none;
    }
    
    .mobile-menu-btn {
        display: flex;
    }
}

@media (max-width: 768px) {
    .logo-image {
        width: 140px;
        height: 60px;
    }
}
</style>