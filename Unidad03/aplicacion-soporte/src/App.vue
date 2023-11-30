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
              <a
              href="#"
              class="nav-link text-white"
              :class="{ active: opcionSeleccionada === OpcionesMenu.EnProgreso }"
              @click="cambiarOpcion(OpcionesMenu.EnProgreso)"
              >
                Pendientes y en progreso
              </a>
            </li>
            <li>
              <a
                href="#"
                class="nav-link text-white"
                :class="{ active: opcionSeleccionada === OpcionesMenu.Cerrados }"
                @click="cambiarOpcion(OpcionesMenu.Cerrados)"
              >
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
    <FormularioTiquete
    :tiquete="tiqueteSeleccionado"
    @clickCerrar="cerrarFormulario"
    @clickGuardar="actualizarTiquete"
    v-if="tiqueteSeleccionado !== undefined"
    />
    <ListaTiquetes
      titulo="Tiquetes pendientes y en progreso"
      :tiquetes="pendientes"
      @tiqueteSeleccionado="mostrarInfoTiquete"
      v-else-if="opcionSeleccionada === OpcionesMenu.EnProgreso && tiqueteSeleccionado === undefined"
    />
    <ListaTiquetes
      titulo="Tiquetes completos y cerrados"
      @tiqueteSeleccionado="mostrarInfoTiquete"
      :tiquetes="completados"
      v-else
    />
  </main>
</template>

<script>

import ListaTiquetes from './components/ListaTiquetes.vue';
import FormularioTiquete from './components/FormularioTiquete.vue';
import TIQUETES from './data/tiquetes';

export default {
  name: 'App',
  components: {
    ListaTiquetes,
    FormularioTiquete,
  },
  data: function () {
    return {
      'tiquetes': TIQUETES,
      OpcionesMenu: {
        EnProgreso: 'EnProgreso',
        Cerrados: 'Cerrados',
      },
      opcionSeleccionada: undefined,
      tiqueteSeleccionado: undefined,
    };
  },
  methods: {
    cambiarOpcion (opcion){
      this.opcionSeleccionada = opcion
    },
    mostrarInfoTiquete(tiquete){
      this.tiqueteSeleccionado = tiquete;
    },
    cerrarFormulario(){
      this.tiqueteSeleccionado = undefined;
    },
    actualizarTiquete(tiqueteInfo){
      const index = this.tiquetes.findIndex(tiquete => tiquete.id === tiqueteInfo.id);
      if(index > -1){
        this.tiquetes = this.tiquetes.toSpliced(index, 1, tiqueteInfo);
      } else {
        this.tiquetes.push(tiqueteInfo);
      }
      this.tiqueteSeleccionado = undefined;
    }
  },
  computed: {
    completados: function () {
      return this.tiquetes.filter(tiquete => tiquete.estado === 'Completado' || tiquete.estado === 'Cerrado')
    },
    pendientes: function () {
      return this.tiquetes.filter(tiquete => tiquete.estado === 'Pendiente' || tiquete.estado === 'En progreso')
    }
  },
  mounted: function () {
    this.opcionSeleccionada = this.OpcionesMenu.EnProgreso;
  },
}
</script>

<style>
body{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
