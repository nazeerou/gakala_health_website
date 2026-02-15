<template>
    <div id="app">
        <!-- Loading Screen -->
        <LoadingScreen :loading="isLoading" />

        <!-- Main Layout -->
        <AppLayout v-show="!isLoading" />
    </div>
</template>
 

<script setup>
import { ref, onMounted } from 'vue'
import LoadingScreen from './components/common/LoadingScreen.vue'
import AppLayout from './components/Layout/AppLayout.vue'

const isLoading = ref(true)

onMounted(() => {
    // Simulate loading time
    setTimeout(() => {
        isLoading.value = false
    }, 100)
})
</script>