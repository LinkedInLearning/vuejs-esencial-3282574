<template>
    <div>
        <h3>Transición con hooks</h3>
        <transition :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
            <p v-if="mostrar">¡Hola! Soy un mensaje con transición.</p>
        </transition>
        <button @click="toggle">Mostrar / Ocultar</button>
    </div>
</template>
  
<script setup>

import { ref } from 'vue';
import gsap from 'gsap';

const mostrar = ref(false);

function onBeforeEnter(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1
  })
}
  
function onEnter(el, done) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: 'elastic.inOut(2.5, 1)',
    onComplete: done
  })
}

function onLeave(el, done) {
	gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 300,
    ease: 'elastic.inOut(2.5, 1)'
  })
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done
  })
}

const toggle = () => {
    mostrar.value = !mostrar.value;
}
</script>
  
<style></style>
  