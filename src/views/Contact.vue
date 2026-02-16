<template>
    <div>
        <div class="page-header">
            <div class="container mx-auto px-6">
                <h1 class="page-title">Contact Us</h1>
                <div class="page-breadcrumb">
                    <router-link to="/">Home</router-link>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <span>Contact</span>
                </div>
            </div>
        </div>
        
        <div class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-12">
                    <!-- Contact Form -->
                    <div class="bg-white rounded-3xl shadow-xl p-8 border border-gray-100" data-aos="fade-right">
                        <h2 class="text-2xl font-bold text-primary-dark mb-6">Send Us a Message</h2>
                        <form @submit.prevent="submitContactForm">
                            <div class="space-y-4">
                                <div>
                                    <label class="form-label">Full Name</label>
                                    <input type="text" v-model="contactForm.name" class="form-input" required>
                                </div>
                                <div>
                                    <label class="form-label">Email Address</label>
                                    <input type="email" v-model="contactForm.email" class="form-input" required>
                                </div>
                                <div>
                                    <label class="form-label">Phone Number</label>
                                    <input type="tel" v-model="contactForm.phone" class="form-input" required>
                                </div>
                                <div>
                                    <label class="form-label">Subject</label>
                                    <input type="text" v-model="contactForm.subject" class="form-input" required>
                                </div>
                                <div>
                                    <label class="form-label">Message</label>
                                    <textarea v-model="contactForm.message" rows="5" class="form-input" required></textarea>
                                </div>
                                <button type="submit" class="btn-primary w-full">Send Message</button>
                            </div>
                        </form>
                    </div>
                    
                    <!-- Contact Information -->
                    <div data-aos="fade-left">
                        <h2 class="text-2xl font-bold text-primary-dark mb-6">Get in Touch</h2>
                        <p class="text-gray-600 mb-8">Have questions? We're here to help. Reach out to us through any of the following channels.</p>
                        
                        <div class="space-y-6">
                            <div class="flex items-start gap-4 p-4 bg-primary-soft rounded-xl">
                                <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                    <i class="fas fa-map-marker-alt text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-primary-dark">Visit Us</h3>
                                    <p class="text-gray-600">Masumbwe, Geita Tanzania<br></p>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4 p-4 bg-primary-soft rounded-xl">
                                <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                    <i class="fas fa-phone-alt text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-primary-dark">Call Us</h3>
                                    <a href="tel:+255718400400" class="text-gray-600 hover:text-primary block">+255 752 003 059</a>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4 p-4 bg-primary-soft rounded-xl">
                                <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                    <i class="fas fa-envelope text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-primary-dark">Email Us</h3>
                                    <a href="mailto:info@gakalahealth.co.tz" class="text-gray-600 hover:text-primary block">info@gakalahealth.co.tz</a>
                                    <a href="mailto:appointments@gakalahealth.co.tz" class="text-gray-600 hover:text-primary block">appointments@gakalahealth.co.tz</a>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4 p-4 bg-primary-soft rounded-xl">
                                <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                    <i class="fas fa-clock text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-primary-dark">Working Hours</h3>
                                    <p class="text-gray-600">24/7 - Open All Days<br>Emergency services available 24/7</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Map -->
                        <div class="mt-8 rounded-2xl overflow-hidden shadow-lg">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.123456789!2d32.123456!3d-2.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMDcnMjQuNCJTIDMywrAwNyc0NC4yIkU!5e0!3m2!1sen!2stz!4v1234567890" 
                                width="100%" 
                                height="300" 
                                style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const contactForm = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
})

const submitContactForm = () => {
    // Here you would typically send this to your backend
    console.log('Contact form submitted:', contactForm)
    alert('Thank you for your message! We will get back to you soon.')
    
    // Reset form
    contactForm.name = ''
    contactForm.email = ''
    contactForm.phone = ''
    contactForm.subject = ''
    contactForm.message = ''
}
</script>

<style scoped>
.page-header {
    background: linear-gradient(135deg, var(--primary-dark), var(--primary));
    padding: 120px 0 60px;
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.page-header::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255,255,255,0.05);
    border-radius: 50%;
    animation: rotate 30s linear infinite;
}

.page-header::after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255,255,255,0.05);
    border-radius: 50%;
    animation: rotate 25s linear infinite reverse;
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
    gap: 0.5rem;
    color: rgba(255,255,255,0.8);
    font-size: 1rem;
    position: relative;
    z-index: 2;
}

.page-breadcrumb a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.page-breadcrumb a:hover {
    color: var(--primary-soft);
}

.form-input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #ddd;
    border-radius: 12px;
    transition: all 0.3s ease;
    font-size: 0.95rem;
}

.form-input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(30, 75, 124, 0.1);
    outline: none;
}

.form-label {
    display: block;
    margin-bottom: 6px;
    font-weight: 500;
    color: var(--text-dark);
    font-size: 0.9rem;
}

.btn-primary {
    background: var(--primary);
    color: white;
    padding: 12px 30px;
    border-radius: 50px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(30, 75, 124, 0.3);
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2.2rem;
    }
}
</style>