<template>
  <div class="container">
    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">{{ titulo }}</h1>
        <p class="col-md-8 fs-4">{{ mensaje }}</p>
        <button class="btn btn-secondary btn-lg" type="button">Quiero saber más!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      titulo: 'Vue.js',
      mensaje: 'Vue.js es increíblemente versátil y fácil de aprender, lo que lo convierte en una herramienta poderosa para crear interfaces de usuario dinámicas y atractivas en el desarrollo web moderno.'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
