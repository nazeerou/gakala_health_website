<template>
    <transition name="fade">
        <div v-if="loading" class="loading-screen">
            <div class="loading-content">
                <div class="loading-logo">
                    <img src="/assets/logo_2_gakala.png" alt="Gakala Health Centre">
                </div>
                <div class="loading-spinner">
                    <div class="spinner"></div>
                </div>
                <!-- <p class="loading-text">Loading ...</p> -->
            </div>
        </div>
    </transition>
</template>

<script setup>
defineProps({
    loading: {
        type: Boolean,
        default: true
    }
})
</script>

<style scoped>
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--primary-dark), var(--primary));
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.loading-content {
    text-align: center;
    animation: pulse 2s infinite;
}

.loading-logo {
    width: 150px;
    height: 150px;
    /* margin: 0 auto 30px; */
    /* background: white; */
    /* border-radius: 30px; */
    padding: 20px;
    /* box-shadow: 0 20px 40px rgba(0,0,0,0.2); */
}

.loading-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.loading-spinner {
    margin: 10px 0;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto;
}

.loading-text {
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

@media (max-width: 768px) {
    .loading-logo {
        width: 120px;
        height: 120px;
    }
}
</style>