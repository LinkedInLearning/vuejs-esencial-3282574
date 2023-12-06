<template>
  <div class="container px-10 my-5">
    <form>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Perfil</h2>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Usuario*</label>
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input v-model="formulario.username" type="text" name="username" id="username" autocomplete="username"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="natyc">
                </div>
              </div>

              <div class="bg-red-500 text-white rounded p-1 m-1" v-for="error of v$.username.$errors" :key="error.$uid">
                <div>{{ error.$message }}</div>
              </div>
            </div>

            <div class="col-span-full">
              <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Acerca</label>
              <div class="mt-2">
                <textarea v-model="formulario.acerca" id="about" name="about" rows="3"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600">Escribe algo sobre tí.</p>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Información personal</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Utilice una dirección permanente donde pueda recibir
            correo.</p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nombre*</label>
              <div class="mt-2">
                <input type="text" v-model="formulario.nombre" name="first-name" id="first-name" autocomplete="given-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
              <div class="bg-red-500 text-white rounded p-1 m-1" v-for="error of v$.nombre.$errors" :key="error.$uid">
                <div>{{ error.$message }}</div>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Apellido*</label>
              <div class="mt-2">
                <input type="text" v-model="formulario.apellido" name="last-name" id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
              <div class="bg-red-500 text-white rounded p-1 m-1" v-for="error of v$.apellido.$errors" :key="error.$uid">
                <div>{{ error.$message }}</div>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Correo
                electrónico*</label>
              <div class="mt-2">
                <input id="email" v-model="formulario.email" name="email" type="email" autocomplete="email"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
              <div class="bg-red-500 text-white rounded p-1 m-1" v-for="error of v$.email.$errors" :key="error.$uid">
                <div>{{ error.$message }}</div>
              </div>
            </div>

            <div class="col-span-full">
              <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Dirección*</label>
              <div class="mt-2">
                <input type="text" v-model="formulario.direccion" name="street-address" id="street-address"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
              <div class="bg-red-500 text-white rounded p-1 m-1" v-for="error of v$.direccion.$errors" :key="error.$uid">
                <div>{{ error.$message }}</div>
              </div>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Ciudad*</label>
              <div class="mt-2">
                <input type="text" v-model="formulario.ciudad" name="city" id="city" autocomplete="address-level2"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
              <div class="bg-red-500 text-white rounded p-1 m-1" v-for="error of v$.ciudad.$errors" :key="error.$uid">
                <div>{{ error.$message }}</div>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Estado /
                Provincia*</label>
              <div class="mt-2">
                <input type="text" v-model="formulario.provincia" name="region" id="region" autocomplete="address-level1"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
              <div class="bg-red-500 text-white rounded p-1 m-1" v-for="error of v$.provincia.$errors" :key="error.$uid">
                <div>{{ error.$message }}</div>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">Código
                postal*</label>
              <div class="mt-2">
                <input type="text" v-model="formulario.codigoPostal" name="postal-code" id="postal-code"
                  autocomplete="postal-code"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
              <div class="bg-red-500 text-white rounded p-1 m-1" v-for="error of v$.codigoPostal.$errors"
                :key="error.$uid">
                <div>{{ error.$message }}</div>
              </div>
            </div>

            <InputPais v-model="formulario.pais" />

          </div>
        </div>

        <InputNotificaciones v-model:candidatos="formulario.notificaciones.candidatos"
          v-model:comentarios="formulario.notificaciones.comentarios"
          v-model:ofertas="formulario.notificaciones.ofertas" />

      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancelar</button>
        <button type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
      </div>
    </form>
  </div>
</template>
  
<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

import InputNotificaciones from './InputNotificaciones.vue';
import InputPais from './InputPais.vue';

const requiredCastellano = helpers.withMessage('Este valor es requerido', required);
const emailCastellano = helpers.withMessage('El email no tiene el formato correcto', email);

const formulario = reactive({
  username: '',
  nombre: '',
  apellido: '',
  direccion: '',
  ciudad: '',
  provincia: '',
  codigoPostal: '',
  notificaciones: {},
  pais: 'Costa Rica',
  email: ''
});

const reglas = {
  username: { required: requiredCastellano, $autoDirty: true, },
  nombre: { required: requiredCastellano, $autoDirty: true },
  apellido: { required: requiredCastellano, $autoDirty: true },
  direccion: { required: requiredCastellano, $autoDirty: true },
  ciudad: { required: requiredCastellano, $autoDirty: true },
  provincia: { required: requiredCastellano, $autoDirty: true },
  codigoPostal: { required: requiredCastellano, $autoDirty: true },
  pais: { required: requiredCastellano, $autoDirty: true },
  email: { required: requiredCastellano, email: emailCastellano, $autoDirty: true }
}

const v$ = useVuelidate(reglas, formulario)

</script>
  