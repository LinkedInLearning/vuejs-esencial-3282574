<template>
    <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Notificaciones</h2>

        <div class="mt-10 space-y-10">
            <fieldset>
                <legend class="text-sm font-semibold leading-6 text-gray-900">Por correo electrónico</legend>
                <div class="mt-6 space-y-6">
                    <div class="relative flex gap-x-3">
                        <div class="flex h-6 items-center">
                            <input
                            :checked="comentarios"
                            @input="notificarCambios('comentarios', $event.target.checked)"
                            id="comments" name="comments" type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                        </div>
                        <div class="text-sm leading-6">
                            <label for="comments" class="font-medium text-gray-900">Comentarios</label>
                            <p class="text-gray-500">Recibe una notificación cuando alguien agrega un comentario o un post
                                nuevo.</p>
                        </div>
                    </div>
                    <div class="relative flex gap-x-3">
                        <div class="flex h-6 items-center">
                            <input
                            :checked="candidatos"
                            @input="notificarCambios('candidatos', $event.target.checked)"
                            id="candidates" name="candidates" type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                        </div>
                        <div class="text-sm leading-6">
                            <label for="candidates" class="font-medium text-gray-900">Candidatos</label>
                            <p class="text-gray-500">Recibe una notificación cuando un candidato aplica a un trabajo.</p>
                        </div>
                    </div>
                    <div class="relative flex gap-x-3">
                        <div class="flex h-6 items-center">
                            <input
                            :checked="ofertas"
                            @input="notificarCambios('ofertas', $event.target.checked)"
                            id="offers" name="offers" type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                        </div>
                        <div class="text-sm leading-6">
                            <label for="offers" class="font-medium text-gray-900">Ofertas</label>
                            <p class="text-gray-500">Recibe una notificación cuando un candidato acepta or rechaza una
                                oferta de trabajo.</p>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    comentarios: { type: Boolean, default: false },
    candidatos: { type: Boolean, default: false },
    ofertas: { type: Boolean, default: false },
});

  const emit = defineEmits(['update:comentarios', 'update:candidatos', 'update:ofertas']);

  const notificarCambios = (prop, value) => {
    emit(`update:${prop}`, value);
  }

</script>