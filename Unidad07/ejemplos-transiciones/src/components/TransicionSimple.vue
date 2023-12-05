<template>
    <div>
        <h3>Transición simple</h3>
        <button @click="toggle">Mostrar / Ocultar</button>
        <transition name="fade">
            <p v-if="mostrar">¡Hola! Soy un mensaje con transición.</p>
        </transition>
        <transition name="fade2">
            <p v-if="mostrar">¡Hola! Soy otro mensaje con transición.</p>
        </transition>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            mostrar: false
        };
    },
    methods: {
        toggle() {
            this.mostrar = !this.mostrar;
        }
    }
};
</script>
  
<style>
/* Estilos para la transición
La lista completa de nombre de clases se puede encontrar en este enlace:
https://vuejs.org/guide/built-ins/transition#css-based-transitions */

.fade-enter-active {
    transition: all 0.3s ease-out;
}

.fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.fade2-enter-active {
    transition: all 0.3s ease-out;
}

.fade2-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade2-enter-from,
.fade2-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

</style>
  