<template>
  <div class="container">
    <input v-model="message" type="text" class="input-field">
    <p>El mensaje es: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '' // Propiedad que se enlaza con el input
    };
  }
};
</script>

<style>
.container {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.input-field {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
</style>
