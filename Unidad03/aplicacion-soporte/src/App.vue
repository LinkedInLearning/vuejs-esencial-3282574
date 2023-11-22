<template>
  <!--
<nav class='navbar navbar-expand-md navbar-dark bg-dark'>
  <div class='container-fluid'>
    <a class='navbar-brand me-auto' href='#'>Soporte técnico</a>
    <form class='d-flex' role='new'>
        <button class='btn btn-success' type='submit'>Nuevo</button>
      </form>
  </div>
</nav>
-->

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
              <a href="#" class="nav-link text-white" aria-current="page">
                Pendientes y en progreso
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white active">
                Completos
              </a>
            </li>
            <hr>
            <li>
              <a href="#" class="nav-link text-white">
                Crear tiquete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <main class='container'>
    <div class='p-5 rounded'>
      <h3>Tiquetes pendientes y en progreso</h3>
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
          <tr v-for='tiquete in pendientes' v-bind:key='tiquete.id'>
            <th scope='row'>{{ tiquete.id }}</th>
            <td>{{ tiquete.nombre }}</td>
            <td>{{ tiquete.categoria }}</td>
            <td>{{ tiquete.estado }}</td>
            <td>{{ tiquete.asunto }}</td>
            <td>
              <button type='button' class='btn btn-outline-success btn-sm'>
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
    <div class='p-5 rounded'>
      <h3>Tiquetes cerrados</h3>
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
          <tr v-for='tiquete in completados' v-bind:key='tiquete.id'>
            <th scope='row'>{{ tiquete.id }}</th>
            <td>{{ tiquete.nombre }}</td>
            <td>{{ tiquete.categoria }}</td>
            <td>{{ tiquete.estado }}</td>
            <td>{{ tiquete.asunto }}</td>
            <td>
              <button type='button' class='btn btn-outline-success btn-sm'>
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
  </main>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: function () {
    return {
      'tiquetes': [
        {
          'id': '840195',
          'nombre': 'Juan',
          'categoria': 'Solicitud de equipo',
          'estado': 'Pendiente',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': 'c562d4',
          'nombre': 'Marta',
          'categoria': 'Problema técnico',
          'estado': 'En progreso',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': 'e2e1d7',
          'nombre': 'Marcos',
          'categoria': 'Solicitud de equipo',
          'estado': 'Completado',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': '8116c4',
          'nombre': 'María',
          'categoria': 'Acceso',
          'estado': 'Cerrado',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': '6e3761',
          'nombre': 'María',
          'categoria': 'Problema técnico',
          'estado': 'Pendiente',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': 'a8621f',
          'nombre': 'Leo',
          'categoria': 'Problema técnico',
          'estado': 'Completado',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': '58d1d2',
          'nombre': 'Marcos',
          'categoria': 'Solicitud de equipo',
          'estado': 'Completado',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': '7c33da',
          'nombre': 'Leo',
          'categoria': 'Acceso',
          'estado': 'En progreso',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': 'eaf5ae',
          'nombre': 'María',
          'categoria': 'Problema técnico',
          'estado': 'Pendiente',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': '2c6e8a',
          'nombre': 'Leo',
          'categoria': 'Acceso',
          'estado': 'En progreso',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': 'a98ef1',
          'nombre': 'Carlos',
          'categoria': 'Acceso',
          'estado': 'Cerrado',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': '5a7366',
          'nombre': 'Marta',
          'categoria': 'Solicitud de equipo',
          'estado': 'Completado',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': '767bba',
          'nombre': 'Jorge',
          'categoria': 'Consulta',
          'estado': 'En progreso',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': '84635a',
          'nombre': 'Marcos',
          'categoria': 'Consulta',
          'estado': 'Completado',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': '2d27ad',
          'nombre': 'Juan',
          'categoria': 'Solicitud de equipo',
          'estado': 'Pendiente',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': '95244f',
          'nombre': 'Juan',
          'categoria': 'Consulta',
          'estado': 'Pendiente',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': 'ab4a07',
          'nombre': 'Ana',
          'categoria': 'Acceso',
          'estado': 'En progreso',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': '171d3d',
          'nombre': 'Jorge',
          'categoria': 'Acceso',
          'estado': 'Completado',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': '7e6fc8',
          'nombre': 'Carlos',
          'categoria': 'Solicitud de equipo',
          'estado': 'Cerrado',
          'asunto': 'No puedo acceder a mi cuenta'
        },
        {
          'id': '605508',
          'nombre': 'Juan',
          'categoria': 'Consulta',
          'estado': 'Pendiente',
          'asunto': 'No puedo acceder a mi cuenta'
        }
      ]
    };
  },
  computed: {
    completados: function () {
      return this.tiquetes.filter(tiquete => tiquete.estado === 'Completado')
    },
    pendientes: function () {
      return this.tiquetes.filter(tiquete => tiquete.estado === 'Pendiente' || tiquete.estado === 'En progreso')
    }
  }
}
</script>

<style>
.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
  z-index: 1500;
}

.bd-mode-toggle .dropdown-menu .active .bi {
  display: block !important;
}</style>
