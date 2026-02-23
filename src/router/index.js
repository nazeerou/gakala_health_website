import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Mission from '../views/Mission.vue'
import News from '../views/News.vue'
import Staff from '../views/Staff.vue'
import ServiceDetail from '../views/ServiceDetail.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
      { 
        path: 'services', 
        component: Services,
        children: [
          { path: 'opd', component: ServiceDetail },
          { path: 'ipd', component: ServiceDetail },
          { path: 'maternity', component: ServiceDetail },
          { path: 'emergency', component: ServiceDetail },
          { path: 'theatre', component: ServiceDetail },
          { path: 'laboratory', component: ServiceDetail },
          { path: 'radiology', component: ServiceDetail },
          { path: 'pharmacy', component: ServiceDetail },
          { path: 'icu', component: ServiceDetail },
          { path: 'specialized-clinics', component: ServiceDetail }
        ]
      },
      { path: 'contact', component: Contact },
      { path: 'mission-vision', component: Mission },
      { path: 'news', component: News },
      { path: 'staff', component: Staff },
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})