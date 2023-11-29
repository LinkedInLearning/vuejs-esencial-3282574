<template>
    <div>
        <img :src="imagenActual">
        <button @click="cambiarImagen">Cambiar Imagen</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            imagenes: [
                './imagenes/robot1.png',
                './imagenes/robot2.png',
                './imagenes/robot3.png'
            ],
            imagenActualIndex: 0
        };
    },
    computed: {
        imagenActual() {
            return this.imagenes[this.imagenActualIndex];
        }
    },
    methods: {
        cambiarImagen() {
            this.imagenActualIndex = (this.imagenActualIndex + 1) % this.imagenes.length;
        }
    },
    beforeCreate (){
        console.log('1. beforeCreate');
    },
    created (){
        console.log('2. created');
    },
    mounted (){
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
    }
};
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 5px;
}

img {
    max-width: 300px;
    max-height: 300px;
    margin-bottom: 10px;
    align-self: center;
}

button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    align-self: center;
}
</style>
  