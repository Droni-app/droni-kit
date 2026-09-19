
<template>
  <div>
    <DuiCheckbox v-model="owners" :value="obj1">Primero</DuiCheckbox>
    <DuiCheckbox v-model="owners" :value="obj2">Segundo</DuiCheckbox>
    <DuiCheckbox v-model="simple">Simple</DuiCheckbox>
    <pre>
      {{ owners }}
    {{ simple }}
    </pre>
  </div>
</template>
<script setup lang="ts">
import DuiCheckbox from '../stories/Forms/DuiCheckbox.vue';
import { ref } from 'vue'

const obj1 = { name: 'primero '}
const obj2 = { name: 'segundo '}
const owners = ref([obj1])

const simple = ref(true)
</script>
