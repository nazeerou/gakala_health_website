import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import siteData from './data/store' // Import all site data

// Create app with error handler
const app = createApp(App)

// Make data available to all components via provide
app.provide('siteData', siteData)

// Also make available globally for debugging (optional)
window.__GAKALA_DATA__ = siteData

// Global error handler
app.config.errorHandler = (err, instance, info) => {
    console.error('Vue Error:', err)
    console.error('Error Info:', info)
    
    // Optional: Show user-friendly error message
    const errorDiv = document.createElement('div')
    errorDiv.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #ef4444;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 9999;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `
    errorDiv.innerHTML = 'An error occurred. Please refresh the page.'
    document.body.appendChild(errorDiv)
    
    setTimeout(() => errorDiv.remove(), 5000)
}

// Use plugins
app.use(router)

// Mount app with error handling
const mountApp = () => {
    try {
        // Log that data is loaded (for debugging)
        console.log('Site data loaded:', siteData ? 'Yes' : 'No')
        console.log('Hero stats:', siteData?.heroStats?.length || 0)
        console.log('Services:', siteData?.serviceList?.length || 0)
        
        // Mount the app
        app.mount('#app')
        
        // Hide loading indicator with smooth transition
        const loader = document.getElementById('app-loading')
        if (loader) {
            loader.classList.add('fade-out')
            setTimeout(() => {
                loader.style.display = 'none'
            }, 500)
        }
        
        console.log('App mounted successfully')
    } catch (error) {
        console.error('Failed to mount app:', error)
        
        // Show error message to user
        const appElement = document.getElementById('app')
        if (appElement) {
            appElement.innerHTML = `
                <div style="
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    font-family: 'Inter', sans-serif;
                    background: linear-gradient(135deg, #1e4b7c, #123456);
                ">
                    <div style="
                        background: white;
                        padding: 40px;
                        border-radius: 20px;
                        text-align: center;
                        max-width: 400px;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                    ">
                        <i class="fas fa-exclamation-circle" style="
                            font-size: 60px;
                            color: #ef4444;
                            margin-bottom: 20px;
                        "></i>
                        <h2 style="
                            color: #1e4b7c;
                            margin-bottom: 10px;
                            font-size: 24px;
                        ">Something went wrong</h2>
                        <p style="
                            color: #666;
                            margin-bottom: 30px;
                            line-height: 1.6;
                        ">We couldn't load the page. Please try refreshing.</p>
                        <button onclick="location.reload()" style="
                            background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
                            color: white;
                            border: none;
                            padding: 12px 30px;
                            border-radius: 50px;
                            font-size: 16px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: transform 0.2s;
                        " onmouseover="this.style.transform='translateY(-2px)'" 
                           onmouseout="this.style.transform='translateY(0)'">
                            <i class="fas fa-sync-alt mr-2"></i>
                            Refresh Page
                        </button>
                    </div>
                </div>
            `
        }
        
        // Hide loading indicator
        const loader = document.getElementById('app-loading')
        if (loader) {
            loader.classList.add('fade-out')
            setTimeout(() => {
                loader.style.display = 'none'
            }, 500)
        }
    }
}

// Ensure DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountApp)
} else {
    // Use setTimeout to ensure all scripts are loaded
    setTimeout(mountApp, 100)
}

// Handle any uncaught errors
window.addEventListener('error', (event) => {
    console.error('Uncaught error:', event.error)
})

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason)
})