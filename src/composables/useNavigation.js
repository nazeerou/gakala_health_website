import { ref } from 'vue'
import { useRouter } from 'vue-router'

export function useNavigation() {
    const router = useRouter()
    const mobileMenuOpen = ref(false)
    const scrolled = ref(false)

    const toggleMobileMenu = () => {
        mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const navigateTo = (path) => {
        router.push(path)
        mobileMenuOpen.value = false
    }

    const navigateToService = (service) => {
        router.push(`/services/${service.slug}`)
        mobileMenuOpen.value = false
    }

    const goToHome = () => {
        router.push('/')
        mobileMenuOpen.value = false
    }

    const openExternalLink = (url) => {
        window.open(url, '_blank')
    }

    const handleScroll = () => {
        scrolled.value = window.scrollY > 50
    }

    return {
        mobileMenuOpen,
        scrolled,
        toggleMobileMenu,
        navigateTo,
        navigateToService,
        goToHome,
        openExternalLink,
        handleScroll
    }
}