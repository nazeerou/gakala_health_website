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
import SpecializedClinics from '../views/SpecializedClinics.vue'

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
      },
       {
        path: '/services/opd',
        name: 'OPD',
        component: ServiceDetail,
        meta: { title: 'OPD' }
      },
       {
        path: '/services/ipd',
        name: 'IPD',
        component: ServiceDetail,
        meta: { title: 'IPD' }
      },
      {
        path: '/services/maternity',
        name: 'Maternity',
        component: ServiceDetail,
        meta: { title: 'Maternity' }
      },
      {
        path: '/services/emergency',
        name: 'Emergency',
        component: ServiceDetail,
        meta: { title: 'Emergency' }
      },
      {
        path: '/services/theatre',
        name: 'Theatre & Surgery',
        component: ServiceDetail,
        meta: { title: 'Theatre' }
      },
      {
        path: '/services/pharmacy',
        name: 'Pharmacy',
        component: ServiceDetail,
        meta: { title: 'Pharmacy' }
      },
      {
        path: '/services/laboratory',
        name: 'Laboratory',
        component: ServiceDetail,
        meta: { title: 'Labs' }
      },
      {
        path: '/services/radiology',
        name: 'radiology',
        component: ServiceDetail,
        meta: { title: 'radiology' }
      },
      {
        path: '/services/icu',
        name: 'ICU',
        component: ServiceDetail,
        meta: { title: 'ICU' }
      },
       {
        path: '/services/specialized-clinics',
        name: 'Specialized Clinics',
        component: SpecializedClinics,
        meta: { title: 'Specialized Clinics' }
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