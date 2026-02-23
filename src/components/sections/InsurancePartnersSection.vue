<template>
    <div>
        <!-- Simple BMA Cards Section -->
        <section class="bma-simple-section">
            <div class="bma-simple-container">
                <!-- Header -->
                <h2 class="bma-simple-title">
                    <span class="highlight"><i class="fas fa-shield-alt"></i> {{ t('insurance.title') }}</span>
                </h2>
                
                <!-- Subtitle if needed -->
                <p class="partners-subtitle">{{ t('insurance.subtitle') }}</p>
                                
                <!-- Insurance Cards -->
                <div class="cards-simple-grid">
                    <!-- NHIF Card -->
                    <div class="card-simple nhif-simple">
                        <div class="card-simple-icon">
                            <img src="/assets/nhif.jpg" :alt="t('insurance.nhif.name')" class="partner-logo">
                        </div>
                        <span class="card-simple-badge">
                            <i class="fas fa-check-circle"></i> {{ t('insurance.accepted') }}
                        </span>
                    </div>
                    
                    <!-- Jubilee Card -->
                    <div class="card-simple jubilee-simple">
                        <div class="card-simple-icon">
                            <img src="/assets/jubilee.jpg" :alt="t('insurance.jubilee.name')" class="partner-logo">
                        </div>
                        <span class="card-simple-badge">
                            <i class="fas fa-check-circle"></i> {{ t('insurance.accepted') }}
                        </span>
                    </div>
                </div>
            
            </div>
        </section>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.bma-simple-section {
    padding: 40px 20px;
    background: linear-gradient(135deg, #f8fafd 0%, #ffffff 100%);
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.bma-simple-section::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(30, 75, 124, 0.03) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.bma-simple-container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
}

.bma-simple-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1a2634;
    margin-bottom: 10px;
    line-height: 1.3;
}

.highlight {
    /* color: #1e4b7c; */
    position: relative;
    display: inline-block;
}

.highlight i {
    margin-right: 8px;
    color: #1e4b7c;
}

.highlight::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 8px;
    /* background: rgba(30, 75, 124, 0.2); */
    z-index: -1;
    border-radius: 4px;
}

.partners-subtitle {
    color: #64748b;
    font-size: 1.1rem;
    margin-bottom: 30px;
    /* font-style: italic; */
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.cards-simple-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    margin-bottom: 30px;
}

.card-simple {
    background: white;
    padding: 10px 0px;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    /* border: 1px solid transparent; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
}

.card-simple:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 35px rgba(30, 75, 124, 0.15);
}

.nhif-simple {
    border-color: #6e85eb;
}

.nhif-simple:hover {
    border-color: #4b6bf7;
    background: linear-gradient(135deg, #ffffff, #f0f5ff);
}

.jubilee-simple {
    border-color: #ed1c24;
}

.jubilee-simple:hover {
    border-color: #d41b22;
    background: linear-gradient(135deg, #ffffff, #fff5f5);
}

.card-simple-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background: white;
    padding: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.card-simple:hover .card-simple-icon {
    transform: scale(1.05);
    box-shadow: 0 12px 30px rgba(30, 75, 124, 0.2);
}

.partner-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
}

.nhif-simple .card-simple-icon {
    background: linear-gradient(135deg, #ffffff, #f0f5ff);
    border: 2px solid rgba(75, 107, 247, 0.2);
}

.jubilee-simple .card-simple-icon {
    background: linear-gradient(135deg, #ffffff, #fff5f5);
    border: 2px solid rgba(237, 28, 36, 0.2);
}

.card-simple-badge {
    display: inline-block;
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.nhif-simple .card-simple-badge {
    background: #e8f0fe;
    color: #4b6bf7;
}

.nhif-simple:hover .card-simple-badge {
    background: #4b6bf7;
    color: white;
}

.jubilee-simple .card-simple-badge {
    background: #fee8e8;
    color: #ed1c24;
}

.jubilee-simple:hover .card-simple-badge {
    background: #ed1c24;
    color: white;
}

.card-simple-badge i {
    margin-right: 5px;
    font-size: 0.8rem;
}

.simple-message {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 30px;
    background: white;
    border-radius: 50px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    color: #1e4b7c;
    font-weight: 500;
    font-size: 1.1rem;
    margin-top: 10px;
    border: 1px solid rgba(30, 75, 124, 0.1);
    transition: all 0.3s ease;
}

.simple-message:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(30, 75, 124, 0.15);
    border-color: rgba(30, 75, 124, 0.2);
}

.simple-message i {
    color: #ed1c24;
    font-size: 1.2rem;
    animation: heartbeat 1.5s ease infinite;
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .bma-simple-title {
        font-size: 2rem;
    }
    
    .cards-simple-grid {
        gap: 20px;
    }
    
    .card-simple-icon {
        width: 90px;
        height: 90px;
    }
}

@media (max-width: 480px) {
    .cards-simple-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }
    
    .bma-simple-title {
        font-size: 1.6rem;
    }
    
    .card-simple {
        padding: 20px 15px;
    }
    
    .partners-subtitle {
        font-size: 0.95rem;
        margin-bottom: 20px;
    }
    
    .card-simple-icon {
        width: 80px;
        height: 80px;
        padding: 10px;
    }
    
    .simple-message {
        font-size: 0.95rem;
        padding: 10px 20px;
    }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    .bma-simple-section {
        /* background: linear-gradient(135deg, #1a2634 0%, #2d3748 100%); */
    }
    
    .bma-simple-title {
        /* color: white; */
    }
    
    .partners-subtitle {
        /* color: #a0aec0; */
    }
    
    .card-simple {
        /* background: #2d3748; */
    }
    
    .nhif-simple {
        border-color: #5a6fd8;
    }
    
    .jubilee-simple {
        border-color: #f15156;
    }
    
    .simple-message {
        background: #2d3748;
        color: white;
        border-color: #4a5568;
    }
}
</style>