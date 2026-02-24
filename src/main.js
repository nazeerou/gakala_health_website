import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
// import './assets/css/main.css'

import en from './i18n/en.json'
import sw from './i18n/sw.json'

const savedLang = localStorage.getItem('lang') || 'sw'

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'sw',
  messages: { en, sw }
})

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')

  // In your main.js or App.vue mounted() hook
App.mount('#app');
// Call this when you're sure the app is ready
if (window.vueMounted) {
    // Small delay to ensure first paint
    setTimeout(() => {
        window.vueMounted();
    }, 100);
}