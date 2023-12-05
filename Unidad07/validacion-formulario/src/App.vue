<template>
  <header class="bg-black"></header>
  <FormularioVuelidate />
  <footer class="bg-black"></footer>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// import FormularioSimple from './components/FormularioSimple.vue';
import FormularioVuelidate from './components/FormularioVuelidate.vue';

onMounted(() => {
  initFlowbite();
})

</script>

<style>
header,
footer {
  height: 50px;
}
</style>
