<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counter.title }}:</h3>

    <div>
      <button class="btn">--</button>
      <button class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn">+</button>
      <button class="btn">++</button>
    </div>

    <p>This counter is odd/even</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counter.title" v-autofocus type="text" />
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/

import { vAutofocus } from '@/directives/vAutofocus';
import { useCounterStore } from '@/stores/counter';
import { onMounted, ref } from 'vue';

/*
  app title
*/

const appTitle = 'My Ok Counter App';

const appTitleRef = ref(null);

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`);
});

/*
  counter
*/

const counter = useCounterStore();
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>
