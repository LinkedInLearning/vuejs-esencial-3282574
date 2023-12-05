<template>
  <nav class="navbar navbar-dark bg-dark" aria-label="Soporte técnico">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Soporte técnico</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark"
        aria-controls="offcanvasNavbarDark" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbarDark"
        aria-labelledby="offcanvasNavbarDarkLabel">
        <div class="offcanvas-header">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg class="bi pe-none me-2" width="40" height="32">
              <use xlink:href="#bootstrap" />
            </svg>
            <span class="fs-4">Soporte técnico</span>
          </a>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <a href="#" class="nav-link text-white" :class="{ active: opcionSeleccionada === OpcionesMenu.EnProgreso }"
                @click="cambiarOpcion(OpcionesMenu.EnProgreso)">
                Pendientes y en progreso
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white" :class="{ active: opcionSeleccionada === OpcionesMenu.Cerrados }"
                @click="cambiarOpcion(OpcionesMenu.Cerrados)">
                Completos
              </a>
            </li>
            <hr>
            <li>
              <a @click="mostrarInfoTiquete({})" href="#" class="nav-link text-white">
                Crear tiquete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <main class='container'>
    <FormularioTiquete :tiquete="tiqueteSeleccionado" @clickCerrar="cerrarFormulario" @clickGuardar="actualizarTiquete"
      v-if="tiqueteSeleccionado !== undefined" />
    <ListaTiquetes titulo="Tiquetes pendientes y en progreso" :tiquetes="pendientes"
      @tiqueteSeleccionado="mostrarInfoTiquete"
      v-else-if="opcionSeleccionada === OpcionesMenu.EnProgreso && tiqueteSeleccionado === undefined" />
    <ListaTiquetes titulo="Tiquetes completos y cerrados" @tiqueteSeleccionado="mostrarInfoTiquete"
      :tiquetes="completados" v-else />
  </main>
</template>

<script setup>

import { ref, reactive, computed, onMounted, watch, onBeforeMount, onBeforeUpdate, onUpdated } from 'vue';

import ListaTiquetes from './components/ListaTiquetes.vue';
import FormularioTiquete from './components/FormularioTiquete.vue';
import TIQUETES from './data/tiquetes';

const OpcionesMenu = {
  EnProgreso: 'EnProgreso',
  Cerrados: 'Cerrados',
};

const tiquetes = reactive(TIQUETES);
// Declaración de propiedades computadas:
const completados = computed(() => tiquetes.filter(tiquete => tiquete.estado === 'Completado' || tiquete.estado === 'Cerrado'));
const pendientes = computed(() => tiquetes.filter(tiquete => tiquete.estado === 'Pendiente' || tiquete.estado === 'En progreso'));

// Valores reactivos:
const opcionSeleccionada = ref(undefined);
const tiqueteSeleccionado = ref(undefined);

watch(opcionSeleccionada, () => {
  console.log('Vista: ', opcionSeleccionada.value);
});

// Declaración de métodos:
const cambiarOpcion = (opcion) => {
  opcionSeleccionada.value = opcion;
  tiqueteSeleccionado.value = undefined;
};

const mostrarInfoTiquete = (tiquete) => {
  tiqueteSeleccionado.value = tiquete;
};

const cerrarFormulario = () => {
  tiqueteSeleccionado.value = undefined;
};

const actualizarTiquete = (tiqueteInfo) => {
  const index = tiquetes.findIndex(tiquete => tiquete.id === tiqueteInfo.id);
  if (index > -1) {
    tiquetes.splice(index, 1, tiqueteInfo);
  } else {
    tiquetes.push(tiqueteInfo);
  }
  tiqueteSeleccionado.value = undefined;
};

// Hooks se declaran utilizando funciones:
onMounted(() => {
  console.log('onMounted');
  opcionSeleccionada.value = OpcionesMenu.EnProgreso;
});

onBeforeMount(() => { console.log('onBeforeMount'); });
onBeforeUpdate(() => { console.log('onBeforeUpdate'); });
onUpdated(() => { console.log('onUpdated'); });

</script>

<style>
body {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
