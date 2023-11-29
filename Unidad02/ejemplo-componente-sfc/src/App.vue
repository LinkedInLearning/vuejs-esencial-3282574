<template>
  <MuestraImagen v-if="mostrarImagen"/>
  <MuestraSaludo />
  <button @click="mostrarOcultarImagen">{{ mostrarImagen ? 'Ocultar' : 'Mostrar' }} Imagen</button>
</template>

<script>
import MuestraSaludo from './components/MuestraSaludo.vue'
import MuestraImagen from './components/MuestraImagen.vue';

export default {
  name: 'App',
  components: {
    MuestraSaludo,
    MuestraImagen
  },
  data(){
    return {
      mostrarImagen: true
    }
  },
  methods: {
    mostrarOcultarImagen (){
      this.mostrarImagen = !this.mostrarImagen;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f0f0f0;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #ee4e4e;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
