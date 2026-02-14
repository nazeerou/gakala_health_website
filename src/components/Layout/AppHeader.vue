<template>
    <header>
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
                            <router-link 
                                v-if="!item.external && item.path !== '#'" 
                                :to="item.path" 
                                class="nav-link-modern"
                                :class="{ 'router-link-active': $route.path === item.path }"
                            >
                                {{ item.name }}
                                <span class="nav-indicator"></span>
                            </router-link>
                            
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
                                <router-link to="/about" class="nav-dropdown-item" :class="{ 'router-link-active': $route.path === '/about' }">
                                    <i class="fas fa-info-circle mr-2"></i>
                                    About Us
                                </router-link>
                                <router-link to="/mission" class="nav-dropdown-item" :class="{ 'router-link-active': $route.path === '/mission' }">
                                    <i class="fas fa-bullseye mr-2"></i>
                                    Our Mission
                                </router-link>
                                <router-link to="/vision" class="nav-dropdown-item" :class="{ 'router-link-active': $route.path === '/vision' }">
                                    <i class="fas fa-eye mr-2"></i>
                                    Our Vision
                                </router-link>
                            </div>

                            <!-- Services Dropdown - SAME ARROW AS ABOUT -->
                            <div v-if="item.name === 'Services'" class="nav-dropdown" style="min-width: 280px;" @mouseenter="setDropdownHover('Services')" @mouseleave="setDropdownHover(null)">
                                <router-link to="/services" class="nav-dropdown-item font-bold text-primary border-b border-gray-100 mb-2" :class="{ 'router-link-active': $route.path === '/services' }">
                                    <i class="fas fa-list mr-2"></i>
                                    All Services
                                </router-link>
                                <div class="grid grid-cols-2 gap-1">
                                    <router-link 
                                        v-for="service in serviceList" 
                                        :key="service.name" 
                                        :to="`/services/${service.slug}`" 
                                        class="nav-dropdown-item text-sm"
                                        :class="{ 'router-link-active': $route.path === `/services/${service.slug}` }"
                                    >
                                        <i :class="service.icon" class="mr-2" style="width: 16px;"></i>
                                        {{ service.shortName || service.name }}
                                    </router-link>
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
                                    <i class="fas fa-list mr-2"></i>
                                    Our Services
                                    <i class="fas fa-chevron-down ml-auto transition-transform" :class="{ 'rotate-180': mobileSubmenuOpen === 'services' }"></i>
                                </div>
                                <transition name="slide-down">
                                    <div v-if="mobileSubmenuOpen === 'services'" class="grid grid-cols-2 gap-1 mt-1">
                                        <router-link 
                                            v-for="service in serviceList" 
                                            :key="service.name" 
                                            :to="`/services/${service.slug}`" 
                                            class="mobile-menu-item text-sm pl-8"
                                            :class="{ 'router-link-active': $route.path === `/services/${service.slug}` }"
                                            @click="mobileMenuOpen = false"
                                        >
                                            <i :class="service.icon" class="mr-2"></i>
                                            {{ service.shortName || service.name }}
                                        </router-link>
                                    </div>
                                </transition>
                            </div>
                            
                            <div v-else-if="item.name === 'About'" class="mobile-menu-section">
                                <div class="mobile-menu-item font-bold text-primary bg-primary-soft" @click="toggleMobileSubmenu('about')">
                                    <i class="fas fa-info-circle mr-2"></i>
                                    About
                                    <i class="fas fa-chevron-down ml-auto transition-transform" :class="{ 'rotate-180': mobileSubmenuOpen === 'about' }"></i>
                                </div>
                                <transition name="slide-down">
                                    <div v-if="mobileSubmenuOpen === 'about'" class="mt-1">
                                        <router-link to="/about" class="mobile-menu-item pl-8" :class="{ 'router-link-active': $route.path === '/about' }" @click="mobileMenuOpen = false">
                                            <i class="fas fa-info-circle mr-2"></i>
                                            About Us
                                        </router-link>
                                        <router-link to="/mission" class="mobile-menu-item pl-8" :class="{ 'router-link-active': $route.path === '/mission' }" @click="mobileMenuOpen = false">
                                            <i class="fas fa-bullseye mr-2"></i>
                                            Our Mission
                                        </router-link>
                                        <router-link to="/vision" class="mobile-menu-item pl-8" :class="{ 'router-link-active': $route.path === '/vision' }" @click="mobileMenuOpen = false">
                                            <i class="fas fa-eye mr-2"></i>
                                            Our Vision
                                        </router-link>
                                    </div>
                                </transition>
                            </div>
                            
                            <div v-else>
                                <router-link 
                                    v-if="!item.external" 
                                    :to="item.path" 
                                    class="mobile-menu-item"
                                    :class="{ 'router-link-active': $route.path === item.path }"
                                    @click="mobileMenuOpen = false"
                                >
                                    {{ item.name }}
                                </router-link>
                                <a v-else :href="item.link" target="_blank" class="mobile-menu-item" @click="mobileMenuOpen = false">
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

// Define routes that should activate the About dropdown
const aboutRoutes = ['/about', '/mission', '/vision']

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

// Close mobile menu on window resize (if switching to desktop)
const handleResize = () => {
    if (window.innerWidth >= 1024) { // lg breakpoint
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

const goToHome = () => {
    emit('go-home')
    mobileMenuOpen.value = false
    mobileSubmenuOpen.value = null
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

onMounted(() => {
    window.addEventListener('resize', handleResize)
    document.addEventListener('click', handleClickOutside)
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

/* Desktop Menu Styles - Only visible on desktop */
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
    display: block;
    padding: 0.6rem 1rem;
    color: var(--text-dark);
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
}

.nav-dropdown-item:hover,
.nav-dropdown-item.router-link-active {
    background: var(--primary-soft);
    color: var(--primary);
    transform: translateX(5px);
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

/* Mobile Menu Button - Only visible on mobile */
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
    /* Only show on mobile */
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

/* Mobile Menu - Hidden by default, only visible on mobile when open */
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
    /* Hide mobile menu button on desktop */
    .mobile-menu-btn {
        display: none !important;
    }
    
    /* Ensure desktop menu is visible */
    .nav-menu {
        display: flex;
    }
    
    .nav-actions {
        display: flex;
    }
}

@media (max-width: 1023px) {
    /* Hide desktop menu on mobile */
    .nav-menu {
        display: none;
    }
    
    .nav-actions {
        display: none;
    }
    
    /* Show mobile menu button */
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