<template>
    <transition name="modal">
        <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
            <div class="modal-content p-6" data-aos="zoom-in">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-2xl font-bold text-[#1e4b7c]">Book Appointment</h3>
                    <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                <form @submit.prevent="handleSubmit">
                    <div class="space-y-4">
                        <div>
                            <label class="form-label">Full Name</label>
                            <input type="text" v-model="form.name" class="form-input" required>
                        </div>
                        <div>
                            <label class="form-label">Phone Number</label>
                            <input type="tel" v-model="form.phone" class="form-input" required>
                        </div>
                        <div>
                            <label class="form-label">Email</label>
                            <input type="email" v-model="form.email" class="form-input" required>
                        </div>
                        <div>
                            <label class="form-label">Service</label>
                            <select v-model="form.service" class="form-input" required>
                                <option value="">Select Service</option>
                                <option v-for="service in serviceList" :key="service.name">{{ service.name }}</option>
                            </select>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="form-label">Date</label>
                                <input type="date" v-model="form.date" class="form-input" required>
                            </div>
                            <div>
                                <label class="form-label">Time</label>
                                <input type="time" v-model="form.time" class="form-input" required>
                            </div>
                        </div>
                        <button type="submit" class="btn-primary w-full">Submit Appointment</button>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    serviceList: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(['close', 'submit'])

const form = ref({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
})

// Reset form when modal closes
watch(() => props.show, (newVal) => {
    if (!newVal) {
        form.value = {
            name: '',
            phone: '',
            email: '',
            service: '',
            date: '',
            time: ''
        }
    }
})

const handleSubmit = () => {
    emit('submit', { ...form.value })
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.modal-content {
    background: white;
    border-radius: 30px;
    max-width: 500px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
}

.form-input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid var(--border-light);
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
</style>