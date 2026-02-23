<template>
    <transition name="fade-slide">
        <button 
            v-if="showButton" 
            class="scroll-to-top"
            @click="scrollToTop"
            :aria-label="t('scroll_to_top')"
            :title="t('scroll_to_top')"
        >
            <i class="fas fa-arrow-up"></i>
        </button>
    </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const showButton = ref(false)

// Check scroll position to show/hide button
const checkScroll = () => {
    showButton.value = window.scrollY > 400 // Show after scrolling 400px
}

// Smooth scroll to top function
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 5px 20px rgba(30, 75, 124, 0.3);
    transition: all 0.3s ease;
    z-index: 999;
    /* border: 2px solid rgba(255, 255, 255, 0.2); */
}

.scroll-to-top:hover {
    background: linear-gradient(135deg, #2e6ca3, #1e4b7c);
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(30, 75, 124, 0.4);
}

.scroll-to-top:active {
    transform: translateY(0);
}

.scroll-to-top i {
    transition: transform 0.3s ease;
}

.scroll-to-top:hover i {
    transform: translateY(-3px);
}

/* Fade and slide animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

/* Responsive design */
@media (max-width: 768px) {
    .scroll-to-top {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
        font-size: 1.1rem;
    }
}

@media (max-width: 480px) {
    .scroll-to-top {
        bottom: 15px;
        right: 15px;
        width: 40px;
        height: 40px;
        font-size: 1rem;
    }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    .scroll-to-top {
        background: linear-gradient(135deg, #2e6ca3, #1e4b7c);
        border-color: rgba(255, 255, 255, 0.1);
    }
}

/* Print styles */
@media print {
    .scroll-to-top {
        display: none;
    }
}
</style>