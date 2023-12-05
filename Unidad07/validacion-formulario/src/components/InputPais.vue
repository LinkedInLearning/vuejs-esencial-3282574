<template>
    <div class="sm:col-span-3">
        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">País*</label>
        <div class="mt-2">
            <select id="country" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" name="country"
                autocomplete="country-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option>México</option>
                <option>Colombia</option>
                <option>España</option>
                <option>Argentina</option>
                <option>Perú</option>
                <option>Venezuela</option>
                <option>Chile</option>
                <option>Ecuador</option>
                <option>Guatemala</option>
                <option>Cuba</option>
                <option>Bolivia</option>
                <option>Republica Dominicana</option>
                <option>Honduras</option>
                <option>Paraguay</option>
                <option>El Salvador</option>
                <option>Nicaragua</option>
                <option>Costa Rica</option>
                <option>Panama</option>
                <option>Uruguay</option>
                <option>Puerto Rico</option>
                <option>Guinea Ecuatorial</option>
            </select>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    modelValue: { type: String, required: true },
});

defineEmits(['update:modelValue']);

</script>