<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal v-if="showModal"></Modal>
  </div>
</template>

<script setup>
/*
  imports
*/

import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

/*
  modals
*/

const showModal = ref(false);
</script>
