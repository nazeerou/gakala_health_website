<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">{{ t('contact.title') }}</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">{{ t('contact.breadcrumb.home') }}</router-link>
                    <span class="separator">›</span>
                    <span>{{ t('contact.breadcrumb.current') }}</span>
                </div>
            </div>
        </div>

        
        <div class="contact-section">
            <div class="container mx-auto px-6">
                <div class="contact-grid">
                    <!-- Left Column - Contact Form (Send Message) -->
                    <div class="contact-form-col">
                        <h2 class="form-title">{{ t('contact.form.title') }}</h2>
                        <form @submit.prevent="submitContactForm" class="contact-form">
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label">{{ t('contact.form.name') }}</label>
                                    <input 
                                        type="text" 
                                        v-model="contactForm.name" 
                                        class="form-input" 
                                        :placeholder="t('contact.form.name')"
                                        required
                                    >
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label">{{ t('contact.form.email') }}</label>
                                    <input 
                                        type="email" 
                                        v-model="contactForm.email" 
                                        class="form-input" 
                                        :placeholder="t('contact.form.email')"
                                        required
                                    >
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label">{{ t('contact.form.phone') }}</label>
                                    <input 
                                        type="tel" 
                                        v-model="contactForm.phone" 
                                        class="form-input" 
                                        :placeholder="t('contact.form.phone')"
                                        required
                                    >
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label">{{ t('contact.form.subject') }}</label>
                                    <input 
                                        type="text" 
                                        v-model="contactForm.subject" 
                                        class="form-input" 
                                        :placeholder="t('contact.form.subject')"
                                        required
                                    >
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label">{{ t('contact.form.message') }}</label>
                                    <textarea 
                                        v-model="contactForm.message" 
                                        rows="5" 
                                        class="form-input" 
                                        :placeholder="t('contact.form.message')"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <button type="submit" class="submit-btn">{{ t('contact.form.submit') }}</button>
                            </div>
                        </form>
                    </div>
                    
                    <!-- Right Column - Contact Details -->
                    <div class="contact-info-col">
                        <h2 class="info-main-title">{{ t('contact.info.title') }}</h2>
                        <p class="info-description">{{ t('contact.info.description') }}</p>
                        
                        <div class="info-items">
                            <!-- Address -->
                            <div class="info-card">
                                <div class="info-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="info-content">
                                    <h3 class="info-title">{{ t('contact.info.address.title') }}</h3>
                                    <p class="info-text">{{ t('contact.info.address.line1') }}</p>
                                </div>
                            </div>
                            
                            <!-- Phone -->
                            <div class="info-card">
                                <div class="info-icon">
                                    <i class="fas fa-phone-alt"></i>
                                </div>
                                <div class="info-content">
                                    <h3 class="info-title">{{ t('contact.info.phone.title') }}</h3>
                                    <a href="tel:+255758709526" class="info-link">{{ t('contact.info.phone.number') }}</a>
                                </div>
                            </div>
                            
                            <!-- Email -->
                            <div class="info-card">
                                <div class="info-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="info-content">
                                    <h3 class="info-title">{{ t('contact.info.email.title') }}</h3>
                                    <a href="mailto:info@gakalahealth.co.tz" class="info-link">{{ t('contact.info.email.general') }}</a>
                                    <a href="mailto:appointments@gakalahealth.co.tz" class="info-link">{{ t('contact.info.email.appointments') }}</a>
                                </div>
                            </div>
                            
                            <!-- Working Hours -->
                            <div class="info-card">
                                <div class="info-icon">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div class="info-content">
                                    <h3 class="info-title">{{ t('contact.info.hours.title') }}</h3>
                                    <p class="info-text">{{ t('contact.info.hours.schedule') }}</p>
                                    <p class="info-text emergency">{{ t('contact.info.hours.emergency') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const contactForm = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
})

const submitContactForm = () => {
    console.log('Contact form submitted:', contactForm)
    alert(t('contact.form.success'))
    
    contactForm.name = ''
    contactForm.email = ''
    contactForm.phone = ''
    contactForm.subject = ''
    contactForm.message = ''
}
</script>

<style scoped>
/* CSS Variables */
:root {
    --primary: #1e4b7c;
    --primary-dark: #0f2f4f;
    --primary-light: #2e6ca3;
    --primary-soft: rgba(30, 75, 124, 0.05);
    --text-dark: #1e293b;
    --text-light: #475569;
    --text-muted: #64748b;
    --border-color: #e2e8f0;
    --bg-light: #f8fafc;
    --white: #ffffff;
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    --transition: all 0.3s ease;
}

/* Page Header */
.page-header {
    background: linear-gradient(135deg, #0a2a45, #1e4b7c);
    padding: 100px 0 50px;
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.page-header::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 50%;
}

.page-header::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -10%;
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 50%;
}

.page-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
}

.page-breadcrumb {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    position: relative;
    z-index: 2;
}

.page-breadcrumb .separator {
    color: rgba(255, 255, 255, 0.4);
    font-size: 1.2rem;
    line-height: 1;
}

.page-breadcrumb a {
    color: white;
    text-decoration: none;
    transition: var(--transition);
}

.page-breadcrumb a:hover {
    opacity: 0.8;
}

/* Contact Section */
.contact-section {
    padding: 60px 0;
    background: var(--white);
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    max-width: 1000px;
    margin: 0 auto;
}

/* Left Column - Form Styles */
.contact-form-col {
    background: var(--white);
    border-radius: 8px;
}

.form-title {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 30px;
    position: relative;
}

.form-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--primary);
}

.contact-form {
    width: 100%;
}

.form-row {
    margin-bottom: 20px;
}

.form-group {
    width: 100%;
}

.form-label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--text-dark);
    font-size: 0.95rem;
}

.form-input {
    width: 100%;
    padding: 12px 10px;
    border-bottom: 1px solid var(--border-color);
    border: 1px solid #dddddd;
    background: transparent;
    font-size: 1rem;
    color: var(--text-dark);
    transition: var(--transition);
    border-radius: 6px;
}

.form-input:focus {
    outline: none;
    border-bottom-color: var(--primary);
}

.form-input::placeholder {
    color: var(--text-muted);
    opacity: 0.7;
}

textarea.form-input {
    resize: vertical;
    min-height: 100px;
}

.submit-btn {
    background: #1e4b7c;
    color: white;
    padding: 14px 40px;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: var(--transition);
    width: 100%;
    border-radius: 30px;
}

.submit-btn:hover {
    background: #0f2f4f;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

/* Right Column - Contact Info Styles */
.contact-info-col {
    padding-left: 20px;
}

.info-main-title {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 15px;
    position: relative;
}

.info-main-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--primary);
}

.info-description {
    color: var(--text-light);
    line-height: 1.7;
    margin-bottom: 40px;
    font-size: 1rem;
}

.info-items {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.info-card {
    display: flex;
    gap: 20px;
    padding: 5px 0;
}

.info-icon {
    width: 40px;
    height: 40px;
    background: var(--primary-soft);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-size: 1.1rem;
    flex-shrink: 0;
}

.info-content {
    flex: 1;
}

.info-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.info-text {
    color: var(--text-light);
    line-height: 1.6;
    font-size: 0.95rem;
    margin-bottom: 4px;
}

.info-text.emergency {
    color: var(--primary);
    font-weight: 500;
}

.info-link {
    color: var(--text-light);
    text-decoration: none;
    transition: var(--transition);
    display: block;
    line-height: 1.8;
    font-size: 0.95rem;
}

.info-link:hover {
    color: var(--primary);
}

/* Responsive Design */
@media (max-width: 968px) {
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 50px;
    }
    
    .contact-info-col {
        padding-left: 0;
    }
    
    .page-title {
        font-size: 2.5rem;
    }
}

@media (max-width: 768px) {
    .page-header {
        padding: 80px 0 40px;
    }
    
    .page-title {
        font-size: 2rem;
    }
    
    .form-title,
    .info-main-title {
        font-size: 1.5rem;
    }
    
    .info-card {
        gap: 15px;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 1.75rem;
    }
    
    .info-icon {
        width: 35px;
        height: 35px;
        font-size: 1rem;
    }
    
    .info-title {
        font-size: 0.95rem;
    }
    
    .info-text,
    .info-link {
        font-size: 0.9rem;
    }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    :root {
        --text-dark: #f1f5f9;
        --text-light: #cbd5e1;
        --text-muted: #94a3b8;
        --border-color: #334155;
        --bg-light: #0f172a;
        --white: #1e293b;
    }
    
    .page-header {
        background: linear-gradient(135deg, #0a1a2f, #123456);
    }
    
    .info-icon {
        background: rgba(255, 255, 255, 0.05);
    }
}

/* Print Styles */
@media print {
    .page-header {
        background: none;
        color: black;
        padding: 20px 0;
    }
    
    .page-header::before,
    .page-header::after {
        display: none;
    }
    
    .submit-btn {
        display: none;
    }
}
</style>