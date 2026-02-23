<template> 
    <footer class="footer">
        <div class="footer-container">
            <!-- Main Footer Content -->
            <div class="footer-grid">
                <!-- Company Info -->
                <div class="footer-section">
                    <div class="company-brand">
                        <div class="logo-wrapper">
                            <img src="/assets/logo_2_gakala.png" :alt="t('footer.alt')" class="logo-img">
                        </div>
                    </div>
                    
                    <p class="company-description">{{ t('footer.description') }}</p>
                    
                    <div class="motto-wrapper">
                        <div class="motto-icon">
                            <i class="fas fa-praying-hands"></i>
                        </div>
                        <div class="motto-content">
                            <!-- <p class="motto-text">{{ t('footer.motto.text') }}</p> -->
                            <p class="motto-translation">{{ t('footer.motto.translation') }}</p>
                        </div>
                    </div>
                    
                    <div class="social-section">
                        <h5 class="social-title">{{ t('footer.connect') }}</h5>
                        <div class="social-grid">
                            <a 
                                v-for="social in socialLinks" 
                                :key="social.name" 
                                :href="social.link" 
                                target="_blank" 
                                class="social-link"
                                :aria-label="social.name"
                            >
                                <i :class="social.icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Quick Links -->
                <div class="footer-section">
                    <h4 class="footer-title">{{ t('footer.quick_links') }}</h4>
                    <ul class="footer-links">
                        <li v-for="link in quickLinks" :key="link.name">
                            <router-link :to="link.path" class="footer-link">
                                <i class="fas fa-chevron-right link-icon"></i>
                                <span>{{ t(link.translationKey) }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                
                <!-- Our Services -->
                <div class="footer-section">
                    <h4 class="footer-title">{{ t('footer.our_services') }}</h4>
                    <ul class="footer-links">
                        <li v-for="service in serviceLinks" :key="service.name">
                            <router-link :to="service.path" class="footer-link">
                                <i class="fas fa-chevron-right link-icon"></i>
                                <span>{{ t(service.translationKey) }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                
                <!-- Contact Info -->
                <div class="footer-section">
                    <h4 class="footer-title">{{ t('footer.contact.title') }}</h4>
                    
                    <div class="contact-list">
                        <!-- Address -->
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-details">
                                <span class="contact-label">{{ t('footer.contact.visit') }}</span>
                                <span class="contact-value">{{ t('footer.contact.address') }}</span>
                                <span class="contact-sub">{{ t('footer.contact.country') }}</span>
                            </div>
                        </div>
                        
                        <!-- Phone -->
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div class="contact-details">
                                <span class="contact-label">{{ t('footer.contact.call') }}</span>
                                <a href="tel:+255758709526" class="contact-link">+255 758 709 526</a>
                            </div>
                        </div>
                        
                        <!-- Email -->
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <span class="contact-label">{{ t('footer.contact.email') }}</span>
                                <a href="mailto:info@gakalahealth.co.tz" class="contact-link">info@gakalahealth.co.tz</a>
                                <a href="mailto:appointments@gakalahealth.co.tz" class="contact-link contact-link-small">appointments@gakalahealth.co.tz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Emergency Contact Bar -->
            <div class="emergency-bar">
                <div class="emergency-content">
                    <div class="emergency-icon-wrapper">
                        <i class="fas fa-ambulance"></i>
                    </div>
                    <div class="emergency-text">
                        <span class="emergency-label">{{ t('footer.emergency.label') }}</span>
                        <span class="emergency-phone">
                            <i class="fas fa-phone-alt"></i>
                            <a href="tel:+255758709526">+255 758 709 526</a>
                        </span>
                    </div>
                </div>
                <div class="emergency-badge">
                    <span class="badge-pulse"></span>
                    <span>{{ t('footer.emergency.available') }}</span>
                </div>
            </div>
            
            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <div class="copyright-section">
                    <p class="copyright">
                        &copy; {{ currentYear }} {{ t('footer.copyright') }}
                    </p>
                    <div class="legal-links">
                        <router-link to="/privacy" class="legal-link">{{ t('footer.privacy') }}</router-link>
                        <span class="separator">|</span>
                        <router-link to="/terms" class="legal-link">{{ t('footer.terms') }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    socialLinks: {
        type: Array,
        default: () => [
            { name: 'Facebook', icon: 'fab fa-facebook-f', link: '#' },
            { name: 'Twitter', icon: 'fab fa-twitter', link: '#' },
            { name: 'Instagram', icon: 'fab fa-instagram', link: '#' },
            { name: 'WhatsApp', icon: 'fab fa-whatsapp', link: '#' },
        ]
    }
})

const currentYear = computed(() => new Date().getFullYear())

const quickLinks = [
    { name: 'Home', path: '/', translationKey: 'footer.links.home' },
    { name: 'About Us', path: '/about', translationKey: 'footer.links.about' },
    { name: 'Our Mission', path: '/mission', translationKey: 'footer.links.mission' },
    { name: 'Our Vision', path: '/vision', translationKey: 'footer.links.vision' },
    { name: 'Our Doctors', path: '/doctors', translationKey: 'footer.links.doctors' },
    { name: 'News & Events', path: '/news', translationKey: 'footer.links.news' },
    { name: 'Contact Us', path: '/contact', translationKey: 'footer.links.contact' }
]

const serviceLinks = [
    { name: 'General Medicine', path: '/services/general-medicine', translationKey: 'footer.services.ipd' },
    { name: 'Maternity Care', path: '/services/maternity-care', translationKey: 'footer.services.maternity' },
    { name: 'Emergency Services', path: '/services/emergency-services', translationKey: 'footer.services.emergency' },
    // { name: 'Cardiology', path: '/services/cardiology', translationKey: 'footer.services.cardiology' },
    // { name: 'Neurology', path: '/services/neurology', translationKey: 'footer.services.neurology' },
    // { name: 'Diagnostic Imaging', path: '/services/diagnostic-imaging', translationKey: 'footer.services.imaging' }
]
</script>

<style scoped>
.footer {
    background: linear-gradient(145deg, #0a2a45, #0f3a5a);
    color: white;
    position: relative;
    overflow: hidden;
    margin-top: 4rem;
    padding: 0;
}

/* Background Pattern */
.footer::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.03) 1px, transparent 0);
    background-size: 40px 40px;
    pointer-events: none;
}

.footer::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 80%;
    height: 80%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.02), transparent);
    border-radius: 50%;
    pointer-events: none;
}

.footer-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: clamp(40px, 6vw, 60px) clamp(16px, 5vw, 40px) clamp(20px, 4vw, 30px);
    position: relative;
    z-index: 2;
}

/* Footer Grid */
.footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(20px, 3vw, 40px);
    margin-bottom: clamp(30px, 5vw, 50px);
}

/* Company Info Section */
.company-brand {
    display: flex;
    align-items: center;
    gap: clamp(12px, 2vw, 15px);
    margin-bottom: clamp(15px, 3vw, 20px);
    flex-wrap: wrap;
}

.logo-wrapper {
    width: 250px;
    height: 80px;
    background: white;
    border-radius: clamp(12px, 2vw, 15px);
    padding: clamp(8px, 1.5vw, 10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.company-description {
    color: rgba(255, 255, 255, 0.7);
    font-size: clamp(0.85rem, 1.8vw, 0.95rem);
    line-height: 1.6;
    margin-bottom: clamp(15px, 3vw, 20px);
}

/* Motto Section */
.motto-wrapper {
    display: flex;
    align-items: center;
    gap: clamp(10px, 2vw, 15px);
    background: rgba(255, 255, 255, 0.05);
    padding: clamp(12px, 2vw, 15px);
    border-radius: clamp(12px, 2vw, 15px);
    margin-bottom: clamp(20px, 4vw, 25px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
}

.motto-icon {
    width: clamp(40px, 5vw, 45px);
    height: clamp(40px, 5vw, 45px);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #21dd1b;
    font-size: clamp(1rem, 2vw, 1.2rem);
    flex-shrink: 0;
}

.motto-content {
    flex: 1;
}

.motto-text {
    color: #ffffff;
    font-weight: 600;
    font-size: clamp(0.9rem, 2vw, 1rem);
    font-style: italic;
    margin-bottom: 2px;
}

.motto-translation {
    color: rgba(255, 255, 255, 0.5);
    font-size: clamp(0.7rem, 1.5vw, 0.8rem);
}

/* Social Section */
.social-section {
    margin-top: clamp(15px, 3vw, 20px);
}

.social-title {
    color: rgba(255, 255, 255, 0.9);
    font-size: clamp(0.85rem, 1.8vw, 0.95rem);
    font-weight: 600;
    margin-bottom: clamp(10px, 2vw, 12px);
}

.social-grid {
    display: flex;
    flex-wrap: wrap;
    gap: clamp(8px, 1.5vw, 10px);
}

.social-link {
    width: clamp(36px, 5vw, 40px);
    height: clamp(36px, 5vw, 40px);
    background: rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: clamp(0.9rem, 2vw, 1rem);
    transition: all 0.3s ease;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
    background: linear-gradient(135deg, #21dd1b, #30b85d);
    color: #0a2a45;
    transform: translateY(-3px) scale(1.1);
    border-color: transparent;
}

/* Footer Titles */
.footer-title {
    font-size: clamp(1.1rem, 2.2vw, 1.3rem);
    font-weight: 600;
    margin-bottom: clamp(15px, 3vw, 20px);
    position: relative;
    padding-bottom: clamp(8px, 1.5vw, 10px);
    color: white;
}

.footer-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: clamp(30px, 4vw, 40px);
    height: 3px;
    background: linear-gradient(90deg, #21dd1b, transparent);
    border-radius: 2px;
}

/* Footer Links */
.footer-links {
    list-style: none;
    padding: 0;
    margin: 0 0 clamp(15px, 3vw, 20px) 0;
}

.footer-links li {
    margin-bottom: clamp(8px, 1.5vw, 10px);
}

.footer-link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    font-size: clamp(0.85rem, 1.8vw, 0.95rem);
    line-height: 1.5;
}

.footer-link:hover {
    color: #ffffff;
    transform: translateX(5px);
}

.link-icon {
    font-size: 0.65rem;
    margin-right: clamp(6px, 1vw, 8px);
    color: #21dd1b;
    transition: transform 0.3s ease;
}

.footer-link:hover .link-icon {
    transform: translateX(3px);
}

/* Contact List */
.contact-list {
    display: flex;
    flex-direction: column;
    gap: clamp(15px, 2.5vw, 20px);
}

.contact-item {
    display: flex;
    gap: clamp(10px, 2vw, 15px);
    transition: all 0.3s ease;
}

.contact-icon {
    width: clamp(36px, 5vw, 40px);
    height: clamp(36px, 5vw, 40px);
    background: rgba(33, 221, 27, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #21dd1b;
    font-size: clamp(0.9rem, 2vw, 1rem);
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.contact-item:hover .contact-icon {
    background: #21dd1b;
    color: #0a2a45;
    transform: scale(1.1);
}

.contact-details {
    flex: 1;
    min-width: 0;
}

.contact-label {
    display: block;
    font-size: clamp(0.7rem, 1.5vw, 0.75rem);
    color: #21dd1b;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 4px;
}

.contact-value {
    display: block;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    font-size: clamp(0.85rem, 1.8vw, 0.95rem);
    line-height: 1.4;
    word-break: break-word;
}

.contact-link {
    display: block;
    color: white;
    text-decoration: none;
    font-size: clamp(0.85rem, 1.8vw, 0.95rem);
    line-height: 1.5;
    transition: color 0.3s ease;
    word-break: break-word;
}

.contact-link:hover {
    color: #21dd1b;
}

.contact-link-small {
    font-size: clamp(0.75rem, 1.6vw, 0.85rem);
    color: rgba(255, 255, 255, 0.7);
}

.contact-sub {
    display: block;
    font-size: clamp(0.7rem, 1.5vw, 0.75rem);
    color: rgba(255, 255, 255, 0.5);
    margin-top: 2px;
}

/* Emergency Bar */
.emergency-bar {
    background: rgba(33, 221, 27, 0.1);
    backdrop-filter: blur(10px);
    border-radius: clamp(20px, 4vw, 30px);
    padding: clamp(15px, 3vw, 20px) clamp(20px, 4vw, 30px);
    margin: clamp(30px, 5vw, 40px) 0;
    border: 1px solid rgba(33, 221, 27, 0.2);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: clamp(15px, 3vw, 20px);
}

.emergency-content {
    display: flex;
    align-items: center;
    gap: clamp(15px, 3vw, 20px);
    flex-wrap: wrap;
}

.emergency-icon-wrapper {
    width: clamp(50px, 7vw, 60px);
    height: clamp(50px, 7vw, 60px);
    background: linear-gradient(135deg, #21dd1b, #30b85d);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0a2a45;
    font-size: clamp(1.3rem, 3vw, 1.8rem);
    animation: pulse 2s infinite;
}

.emergency-text {
    display: flex;
    flex-direction: column;
}

.emergency-label {
    color: #21dd1b;
    font-size: clamp(0.8rem, 2vw, 0.9rem);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.emergency-phone {
    display: flex;
    align-items: center;
    gap: clamp(5px, 1vw, 8px);
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 700;
}

.emergency-phone i {
    color: #21dd1b;
    font-size: clamp(0.9rem, 2vw, 1rem);
}

.emergency-phone a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.emergency-phone a:hover {
    color: #21dd1b;
}

.emergency-badge {
    display: flex;
    align-items: center;
    gap: clamp(8px, 1.5vw, 10px);
    background: rgba(255, 255, 255, 0.1);
    padding: clamp(8px, 1.5vw, 10px) clamp(15px, 3vw, 20px);
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.badge-pulse {
    width: 10px;
    height: 10px;
    background: #4ade80;
    border-radius: 50%;
    animation: badgePulse 1.5s infinite;
}

.emergency-badge span {
    color: white;
    font-size: clamp(0.8rem, 1.8vw, 0.9rem);
    font-weight: 500;
}

/* Footer Bottom */
.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: clamp(20px, 4vw, 25px);
    margin-top: clamp(20px, 4vw, 25px);
}

.copyright-section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: clamp(15px, 3vw, 20px);
    margin-bottom: clamp(15px, 3vw, 20px);
}

.copyright {
    color: rgba(255, 255, 255, 0.6);
    font-size: clamp(0.8rem, 1.8vw, 0.9rem);
    margin: 0;
}

.legal-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: clamp(8px, 1.5vw, 12px);
}

.legal-link {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: clamp(0.8rem, 1.8vw, 0.9rem);
    transition: color 0.3s ease;
    white-space: nowrap;
}

.legal-link:hover {
    color: #21dd1b;
}

.separator {
    color: rgba(255, 255, 255, 0.3);
    font-size: clamp(0.8rem, 1.8vw, 0.9rem);
}

/* Animations */
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(33, 221, 27, 0.7);
    }
    50% {
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(33, 221, 27, 0);
    }
}

@keyframes badgePulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.2);
    }
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .copyright-section {
        flex-direction: column;
        text-align: center;
    }
    
    .legal-links {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .footer-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-section {
        text-align: center;
    }
    
    .footer-title::after {
        left: 50%;
        transform: translateX(-50%);
    }
    
    .company-brand {
        justify-content: center;
    }
    
    .motto-wrapper {
        justify-content: center;
        text-align: center;
    }
    
    .social-grid {
        justify-content: center;
    }
    
    .footer-link {
        justify-content: center;
    }
    
    .contact-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .contact-icon {
        margin: 0 auto;
    }
    
    .emergency-bar {
        flex-direction: column;
        text-align: center;
    }
    
    .emergency-content {
        flex-direction: column;
        text-align: center;
    }
    
    .emergency-badge {
        width: 100%;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .legal-links {
        flex-direction: column;
        gap: 8px;
    }
    
    .separator {
        display: none;
    }
    
    .legal-link {
        width: 100%;
        text-align: center;
        padding: 5px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .legal-link:last-child {
        border-bottom: none;
    }
    
    .emergency-phone {
        flex-direction: column;
    }
}
</style>