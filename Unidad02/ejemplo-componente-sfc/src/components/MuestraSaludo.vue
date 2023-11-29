<template>
  <div>
    <h1>{{ saludos[indiceSaludo] }}</h1>
    <button @click="cambiarSaludoIndice">Cambiar Saludo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      saludos: ['¡Hola, mundo!', '¡Hola a todos!', '¡Hola, Vue!'],
      indiceSaludo: 0
    };
  },
  methods: {
    cambiarSaludoIndice() {
      this.indiceSaludo = this.indiceSaludo + 1 === this.saludos.length ? 0 : this.indiceSaludo + 1;
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente */
div {
  padding: 20px;
  border-radius: 5px;
}
button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
