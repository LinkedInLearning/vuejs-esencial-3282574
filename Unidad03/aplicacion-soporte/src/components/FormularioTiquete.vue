<template>
    <div class="container p-5">
        <h3>Tiquete #{{ tiquete.id }}</h3>
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input ref="inputNombre" v-model="tiqueteMutable.nombre" type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre completo">
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
            <input type="text" v-model="tiqueteMutable.asunto" class="form-control" id="asunto" name="asunto" placeholder="Asunto">
        </div>
        <div class="mb-3 row">
            <div class="col-2">
                <button type="button" @click="guardarCambios" class="btn btn-primary col">Guardar cambios</button>
            </div>
            <div class="col">
                <button type="button" @click="cerrarFormulario" class="btn btn-outline-secondary col">Cerrar formulario X</button>
            </div>
        </div>
    </div>
</template>
<script>
import { cloneDeep, uniqueId } from 'lodash';
export default {
    name: 'FormularioTiquete',
    data(){
        return {
            tiqueteMutable: undefined
        }
    },
    watch:{
        tiquete: {
            handler(){
                // Se utiliza `cloneDeep` para hacer una copia del objeto.
                // De esta manera se crea una nueva referencia en memoria
                this.tiqueteMutable = cloneDeep(this.tiquete);
            },
            deep: true,
            immediate: true,
        }
    },
    methods: {
        cerrarFormulario(){
            this.$emit('clickCerrar');
        },
        guardarCambios() {
            if(!this.tiqueteMutable.id){
                this.tiqueteMutable.id = uniqueId();
            }
            this.$emit('clickGuardar', this.tiqueteMutable);
        }
    },
    beforeCreate (){
        console.log('1. beforeCreate');
    },
    created (){
        console.log('2. created');
    },
    mounted (){
        // Se coloca el puntero en el primer input en el formulario:
        this.$refs.inputNombre.focus();
        console.log('3. mounted');
    },
    beforeUpdate (){
        console.log('4. beforeUpdate');
    },
    updated (){
        console.log('5. updated');
    },
    beforeUnmount (){
        console.log('6. beforeUnmount');
    },
    unmounted (){
        console.log('7. unmounted');
    },
    props: ['tiquete']
}
</script>