import { createRouter, createWebHistory } from 'vue-router'

// Import views directly
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import ServiceDetail from '../views/ServiceDetail.vue'
import About from '../views/About.vue'
import Mission from '../views/Mission.vue'
import Vision from '../views/Vision.vue'
import Doctors from '../views/Doctors.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'

// Define routes - NO siteData references first
const routes = [
    { path: '/', component: Home },
    { path: '/services', component: Services },
    { path: '/services/:slug', component: ServiceDetail },
    { path: '/about', component: About },
    { path: '/mission', component: Mission },
    { path: '/vision', component: Vision },
    { path: '/doctors', component: Doctors },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

// Verify routes is an array
console.log('✅ Routes is array?', Array.isArray(routes))
console.log('✅ Routes count:', routes.length)

// Create router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router