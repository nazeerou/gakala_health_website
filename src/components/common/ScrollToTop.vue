<template>
    <transition name="fade">
        <button v-if="show" class="scroll-to-top" @click="$emit('click')" aria-label="Scroll to top">
            <i class="fas fa-arrow-up"></i>
        </button>
    </transition>
</template>

<script setup>
defineProps({
    show: {
        type: Boolean,
        default: false
    }
})

defineEmits(['click'])
</script>

<style scoped>
.scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 5px 20px rgba(30, 75, 124, 0.3);
    transition: all 0.3s ease;
    z-index: 99;
}

.scroll-to-top:hover {
    background: var(--primary-light);
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(30, 75, 124, 0.4);
}

.scroll-to-top:active {
    transform: translateY(0);
}

@media (max-width: 768px) {
    .scroll-to-top {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
        font-size: 1rem;
    }
}
</style>