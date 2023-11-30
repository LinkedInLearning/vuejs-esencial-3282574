<template>
    <div class='p-5 rounded'>
      <h3>{{ titulo }}</h3>
      <table class='table table-bordered mt-5'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nombre solicitante</th>
            <th scope='col'>Categoría</th>
            <th scope='col'>Estado</th>
            <th scope='col'>Asunto</th>
            <th scope='col'>Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='tiquete in tiquetes' v-bind:key='tiquete.id'>
            <th scope='row'>{{ tiquete.id }}</th>
            <td>{{ tiquete.nombre }}</td>
            <td>{{ tiquete.categoria }}</td>
            <td :class="{
              'bg-pendiente': tiquete.estado === 'Pendiente',
              'bg-progreso': tiquete.estado === 'En progreso',
              'bg-completo': tiquete.estado === 'Completado',
              'bg-cerrado': tiquete.estado === 'Cerrado',
              }">{{ tiquete.estado }}</td>
            <td>{{ tiquete.asunto }}</td>
            <td>
              <button type='button' class='btn btn-outline-primary btn-sm' @click="notificarClickTiquete(tiquete)">
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-eye-fill'
                  viewBox='0 0 16 16'>
                  <path d='M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z' />
                  <path d='M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z' />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script setup>

import { defineProps, defineEmits } from 'vue';

// Definición de props:
defineProps(['tiquetes', 'titulo']);

// Definición de emits:
const emit = defineEmits(['tiqueteSeleccionado']);

// Declaración de métodos:
const notificarClickTiquete = (tiquete) => {
  emit('tiqueteSeleccionado', tiquete);
};
</script>

<style scoped>
.bg-pendiente{
  background-color: #ffe5d0;
}
.bg-progreso{
  background-color: #d1e7dd;
}
.bg-completo{
  background-color: #cff4fc;
}
.bg-cerrado{
  background-color: #f8f9fa;
}
</style>