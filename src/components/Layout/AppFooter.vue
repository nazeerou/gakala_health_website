<template>
    <footer class="footer">
        <div class="container mx-auto px-6">
            <!-- Main Footer Content -->
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                <!-- Company Info -->
                <div class="footer-section" data-aos="fade-up">
                    <div class="flex items-center space-x-3 mb-6">
                        <div class="logo-wrapper">
                            <img src="/assets/logo_2_gakala.png" alt="Gakala Health Centre" class="logo-img">
                        </div>
                    </div>
                    
                    <p class="text-white/70 mb-6 text-sm leading-relaxed">
                        Providing quality healthcare with compassion and excellence since 2016.
                    </p>
                    
                    <div class="motto-box mb-6">
                        <p class="text-primary-soft font-semibold italic">
                            "Tunatibu Mungu anaponya"
                        </p>
                        <p class="text-white/60 text-xs">We treat, God heals</p>
                    </div>
                    
                    <div class="social-links">
                        <h5 class="text-white/90 text-sm font-semibold mb-3">Connect With Us</h5>
                        <div class="flex space-x-3">
                            <a 
                                v-for="social in socialLinks" 
                                :key="social.name" 
                                :href="social.link" 
                                target="_blank" 
                                class="social-icon"
                                :aria-label="social.name"
                            >
                                <i :class="social.icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Quick Links -->
                <div class="footer-section" data-aos="fade-up" data-aos-delay="100">
                    <h4 class="footer-title">Quick Links</h4>
                    <ul class="footer-links">
                        <li v-for="link in quickLinks" :key="link.name">
                            <router-link :to="link.path" class="footer-link">
                                <i class="fas fa-chevron-right link-icon"></i>
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                
                <!-- Our Services -->
                <div class="footer-section" data-aos="fade-up" data-aos-delay="200">
                    <h4 class="footer-title">Our Services</h4>
                    <ul class="footer-links">
                        <li v-for="service in serviceLinks" :key="service.name">
                            <router-link :to="service.path" class="footer-link">
                                <i class="fas fa-chevron-right link-icon"></i>
                                {{ service.name }}
                            </router-link>
                        </li>
                    </ul>
                    
                </div>
                
                <!-- Contact Info -->
                <div class="footer-section" data-aos="fade-up" data-aos-delay="300">
                    <h4 class="footer-title">Contact Info</h4>
                    
                    <ul class="contact-list">
                        <li class="contact-item">
                            <div class="contact-icon-wrapper">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-details">
                                <span class="contact-label">Visit Us</span>
                                <span class="contact-value">Mwanza, Tanzania</span>
                                <span class="contact-sub">Mtaa wa Mabatini</span>
                            </div>
                        </li>
                        
                        <li class="contact-item">
                            <div class="contact-icon-wrapper">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div class="contact-details">
                                <span class="contact-label">Call Us</span>
                                <a href="tel:+255718400400" class="contact-value hover:text-white transition-colors">
                                    +255 718 400 400
                                </a>
                                <a href="tel:+255718400401" class="contact-value hover:text-white transition-colors">
                                    +255 718 400 401
                                </a>
                            </div>
                        </li>
                        
                        <li class="contact-item">
                            <div class="contact-icon-wrapper">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <span class="contact-label">Email Us</span>
                                <a href="mailto:info@gakalahealth.co.tz" class="contact-value hover:text-white transition-colors">
                                    info@gakalahealth.co.tz
                                </a>
                                <a href="mailto:appointments@gakalahealth.co.tz" class="contact-value hover:text-white transition-colors text-sm">
                                    appointments@gakalahealth.co.tz
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
           
        </div>
    </footer>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    socialLinks: {
        type: Array,
        default: () => []
    }
})

const currentYear = computed(() => new Date().getFullYear())

const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Mission', path: '/mission' },
    { name: 'Our Vision', path: '/vision' },
    { name: 'Our Doctors', path: '/doctors' },
    { name: 'News & Events', path: '/news' },
    { name: 'Contact Us', path: '/contact' }
]

const serviceLinks = [
    { name: 'General Medicine', path: '/services/general-medicine' },
    { name: 'Maternity Care', path: '/services/maternity-care' },
    { name: 'Emergency Services', path: '/services/emergency-services' },
    { name: 'Cardiology', path: '/services/cardiology' },
    { name: 'Neurology', path: '/services/neurology' },
    { name: 'Diagnostic Imaging', path: '/services/diagnostic-imaging' }
]
</script>

<style scoped>
.footer {
    background: linear-gradient(135deg, #0a2a45, #123456);
    color: white;
    padding: 60px 0 20px;
    position: relative;
    overflow: hidden;
    margin-top: 4rem;
}

.footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-soft), var(--primary), var(--primary-soft));
}

.footer::after {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 50%;
    pointer-events: none;
}

.footer-section {
    position: relative;
    z-index: 2;
}

.logo-wrapper {
    width: 180px;
    height: 60px;
    background: white;
    border-radius: 15px;
    padding: 8px;
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

.motto-box {
    background: rgba(255, 255, 255, 0.05);
    padding: 15px;
    border-radius: 12px;
    /* border-left: 4px solid var(--primary-soft); */
}

.footer-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.75rem;
    color: white;
    letter-spacing: 0.5px;
}

.footer-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-soft), transparent);
    border-radius: 2px;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0 0 1rem 0;
}

.footer-links li {
    margin-bottom: 0.6rem;
}

.footer-link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    font-size: 0.95rem;
}

.footer-link:hover {
    color: var(--primary-soft);
    transform: translateX(5px);
}

.link-icon {
    font-size: 0.7rem;
    margin-right: 8px;
    color: var(--primary-soft);
    transition: transform 0.3s ease;
}

.footer-link:hover .link-icon {
    transform: translateX(3px);
}

.view-all-link {
    display: inline-flex;
    align-items: center;
    color: var(--primary-soft);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50px;
    transition: all 0.3s ease;
}

.view-all-link:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
}

.contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.contact-item {
    display: flex;
    gap: 12px;
    margin-bottom: 1.2rem;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.contact-icon-wrapper {
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-soft);
    font-size: 1rem;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.contact-item:hover .contact-icon-wrapper {
    background: var(--primary-soft);
    color: var(--primary-dark);
    transform: scale(1.1);
}

.contact-details {
    flex: 1;
}

.contact-label {
    display: block;
    font-size: 0.8rem;
    color: var(--primary-soft);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 2px;
}

.contact-value {
    display: block;
    color: white;
    text-decoration: none;
    font-weight: 500;
    line-height: 1.4;
}

.contact-sub {
    display: block;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 2px;
}

.social-icon {
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;
    text-decoration: none;
}

.social-icon:hover {
    background: var(--primary-soft);
    color: var(--primary-dark);
    transform: translateY(-3px);
}

.emergency-bar {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50px;
    padding: 1rem 2rem;
    margin: 2rem 0 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
}

.emergency-icon {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-soft);
    font-size: 1.5rem;
}

.emergency-phone {
    color: var(--primary-soft);
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    margin-left: 0.5rem;
    transition: all 0.3s ease;
}

.emergency-phone:hover {
    color: white;
    text-decoration: underline;
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.5rem;
    margin-top: 1rem;
}

.copyright {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
}

.legal-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
}

.legal-link {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.legal-link:hover {
    color: var(--primary-soft);
}

.separator {
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.9rem;
}

.alt-names {
    margin-top: 1.5rem;
    text-align: center;
}

.alt-names-text {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.85rem;
    letter-spacing: 0.5px;
}

.developer-credit {
    margin-top: 1rem;
    text-align: center;
}

.credit-text {
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.8rem;
}

.credit-link {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.credit-link:hover {
    color: var(--primary-soft);
}

@media (max-width: 1024px) {
    .footer {
        padding: 40px 0 20px;
    }
    
    .emergency-bar {
        border-radius: 30px;
        padding: 1rem;
    }
    
    .emergency-phone {
        font-size: 1.2rem;
    }
}

@media (max-width: 768px) {
    .footer-section {
        text-align: center;
    }
    
    .footer-title::after {
        left: 50%;
        transform: translateX(-50%);
    }
    
    .footer-link {
        justify-content: center;
    }
    
    .contact-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .contact-icon-wrapper {
        margin-bottom: 0.5rem;
    }
    
    .legal-links {
        justify-content: center;
    }
    
    .emergency-bar .flex-col {
        text-align: center;
    }
    
    .emergency-icon {
        margin: 0 auto;
    }
}

@media (max-width: 480px) {
    .footer {
        padding: 30px 0 15px;
    }
    
    .logo-wrapper {
        width: 50px;
        height: 50px;
        margin: 0 auto;
    }
    
    .legal-links {
        flex-wrap: wrap;
    }
    
    .separator {
        display: none;
    }
    
    .legal-link {
        width: 100%;
        text-align: center;
        padding: 0.3rem 0;
    }
}
</style>