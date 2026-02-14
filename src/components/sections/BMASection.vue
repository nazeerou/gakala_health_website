<template>
    <section class="bima-section">
        <div class="container mx-auto px-6">
            <div class="bima-title">
                <i class="fas fa-shield-alt"></i>
                Accepted Insurance Partners - BIMA
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div v-for="insurance in insuranceProviders" :key="insurance.name" 
                     class="insurance-card"
                     :class="[insurance.class]">
                    <span class="insurance-text">{{ insurance.name }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    insuranceProviders: {
        type: Array,
        default: () => []
    }
})
</script>

<style scoped>
.bima-section {
    background: var(--primary-very-light);
    padding: 40px 0;
    border-top: 1px solid var(--border-light);
    border-bottom: 1px solid var(--border-light);
}

.bima-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bima-title i {
    margin-right: 10px;
    font-size: 1.5rem;
}

.insurance-card {
    background: white;
    border: 1px solid var(--border-light);
    border-radius: 16px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    height: 100px;
    position: relative;
    overflow: hidden;
}

.insurance-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(30, 75, 124, 0.1);
}

/* Different colors for each insurance provider */
.insurance-card.nhif {
    background: linear-gradient(135deg, #1e4b7c, #2e6ca3);
}

.insurance-card.uap {
    background: linear-gradient(135deg, #2e6ca3, #3d8ac7);
}

.insurance-card.jubilee {
    background: linear-gradient(135deg, #123456, #1e4b7c);
}

.insurance-card.aar {
    background: linear-gradient(135deg, #0a2a45, #1e4b7c);
}

.insurance-card.strategis {
    background: linear-gradient(135deg, #1e4b7c, #4a6fa5);
}

.insurance-card.bima {
    background: linear-gradient(135deg, #2e6ca3, #1e4b7c);
}

/* Add subtle pattern overlay */
.insurance-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%);
    pointer-events: none;
}

.insurance-card:hover::before {
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 60%);
}

.insurance-text {
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    position: relative;
    z-index: 2;
}

/* Add a subtle border effect */
.insurance-card::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 14px;
    pointer-events: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .insurance-text {
        font-size: 1rem;
    }
    
    .insurance-card {
        height: 80px;
        padding: 15px;
    }
}
</style>