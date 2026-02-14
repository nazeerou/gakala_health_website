import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
    const showScrollTop = ref(false)

    const handleScroll = () => {
        showScrollTop.value = window.scrollY > 500
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })

    return {
        showScrollTop,
        scrollToTop
    }
}