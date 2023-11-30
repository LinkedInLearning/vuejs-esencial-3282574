<template>
    <div class="container p-5">
        <h3>Tiquete #{{ tiquete.id }}</h3>
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input ref="inputNombre" v-model="tiqueteMutable.nombre" type="text" class="form-control" id="nombre"
                name="nombre" placeholder="Nombre completo">
        </div>
        <div class="mb-3">
            <label for="categoria" class="form-label">Categoría</label>
            <select v-model="tiqueteMutable.categoria" class="form-select" id="categoria" nombre="categoria">
                <option>Solicitud de equipo</option>
                <option>Problema técnico</option>
                <option>Acceso</option>
                <option>Consulta</option>
                <option>Otro</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="estado" class="form-label">Estado</label>
            <select v-model="tiqueteMutable.estado" class="form-select" id="estado" nombre="estado">
                <option>Pendiente</option>
                <option>En progreso</option>
                <option>Completado</option>
                <option>Cerrado</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="asunto" class="form-label">Asunto</label>
            <input type="text" v-model="tiqueteMutable.asunto" class="form-control" id="asunto" name="asunto"
                placeholder="Asunto">
        </div>
        <div class="mb-3 row">
            <div class="col-2">
                <button type="button" @click="guardarCambios" class="btn btn-primary col">Guardar cambios</button>
            </div>
            <div class="col">
                <button type="button" @click="$emit('clickCerrar')" class="btn btn-outline-secondary col">Cerrar formulario
                    X</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, defineProps, onMounted, defineEmits } from 'vue';
import { cloneDeep, uniqueId } from 'lodash';

// Definición de props:
const props = defineProps(['tiquete']);

// Definición de emits:
const emit = defineEmits(['clickCerrar', 'clickGuardar']);

// Declaración de valor reactivo:
const tiqueteMutable = ref(undefined);
const inputNombre = ref(undefined);

// Declaración de watch:
watch(
    props.tiquete,
    (newValue) => {
        tiqueteMutable.value = cloneDeep(newValue)
    },
    { immediate: true }
);

// Declaración de método:
const guardarCambios = () => {
    if (!tiqueteMutable.value.id) {
        tiqueteMutable.value.id = uniqueId();
    }
    emit('clickGuardar', tiqueteMutable.value);
};

// Declaración de hook:
onMounted(() => {
    inputNombre.value.focus();
});
</script>