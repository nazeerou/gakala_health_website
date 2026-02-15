import { createRouter, createWebHistory } from 'vue-router'

// Import views
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import ServiceDetail from '../views/ServiceDetail.vue'
import About from '../views/About.vue'
import Mission from '../views/Mission.vue'
import Vision from '../views/Vision.vue'
import Doctors from '../views/Doctors.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: Home,
        meta: { title: 'Home - Gakala ' }
    },
    { 
        path: '/services', 
        name: 'services',
        component: Services,
        meta: { title: 'Our Services' }
    },
    { 
        path: '/services/:slug', 
        name: 'service-detail',
        component: ServiceDetail 
    },
    { 
        path: '/about', 
        name: 'about',
        component: About 
    },
    { 
        path: '/mission', 
        name: 'mission',
        component: Mission 
    },
    { 
        path: '/vision', 
        name: 'vision',
        component: Vision 
    },
    { 
        path: '/doctors', 
        name: 'doctors',
        component: Doctors 
    },
    { 
        path: '/news', 
        name: 'news',
        component: News 
    },
    { 
        path: '/contact', 
        name: 'contact',
        component: Contact 
    },
    { 
        path: '/:pathMatch(.*)*', 
        redirect: { name: 'home' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

// Debug navigation
router.beforeEach((to, from, next) => {
    console.log('Navigating to:', to.path, to.name)
    next()
})

router.afterEach((to, from) => {
    console.log('Successfully navigated to:', to.path)
})

export default router