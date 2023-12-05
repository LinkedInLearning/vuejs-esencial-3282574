<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TransicionSimple class="contenedor"/>
  <TransicionHooks class="contenedor"/>
</template>

<script>
import TransicionSimple from './components/TransicionSimple.vue';
import TransicionHooks from './components/TransicionHooks.vue';

export default {
  name: 'App',
  components: {
    TransicionSimple, TransicionHooks,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.contenedor {
    margin: 1rem;
    padding: 1rem;
}
</style>
