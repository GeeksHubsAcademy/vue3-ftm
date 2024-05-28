<script setup>
import Todos from './components/Todos/Todos.vue';
import Footer from './components/Footer/Footer.vue';

import { provide, onMounted, onUnmounted, ref } from 'vue';

let timer = null;
const today = ref(new Date().toLocaleTimeString())
provide('today', today);


onMounted(() => {
  timer = setInterval(() => {
    console.log('timer');
    today.value = new Date().toLocaleTimeString();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});

const bg = ref('tomato');


provide('changeBg', (color) => {
  bg.value = color;
});

</script>

<template>
  <section :style="{backgroundColor: bg}">
    <Todos />
  </section>
  <Footer ></Footer>

</template>

<style>
body {

  height: 100vh;

}
</style>