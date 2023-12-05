<template>
    <div>
        <h1>Contador: {{ cuenta }}</h1>
        <button @click="incrementar">Incrementar</button>
    </div>
</template>
  
<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    valorInicial: {
        type: Number,
        default: 0,
    }
})
const cuenta = ref(props.valorInicial);

const incrementar = () => {
    cuenta.value++;
}
</script>
  