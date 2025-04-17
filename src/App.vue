

<template>
  <div class="container mx-auto my-5">

    <h1>Color Palete:</h1>
    <div class="grid grid-cols-6 gap-4">
      <div class="bg-zinc-700 text-white p-4 rounded">Neutral: zinc</div>
      <div class="bg-slate-700 text-white p-4 rounded">Primary: slate</div>
      <div class="bg-pink-700 text-white p-4 rounded">Secondary: pink</div>
      <div class="bg-rose-700 text-white p-4 rounded">Danger</div>
      <div class="bg-amber-700 text-white p-4 rounded">Warning</div>
      <div class="bg-emerald-700 text-white p-4 rounded">Success</div>
    </div>
    <div class="grid grid-cols-6 gap-4">
      <div class="bg-zinc-200 text-zinc-800 p-4 rounded">Neutral: zinc</div>
      <div class="bg-slate-200 text-zinc-800 p-4 rounded">Primary: slate</div>
      <div class="bg-pink-200 text-zinc-800 p-4 rounded">Secondary: pink</div>
      <div class="bg-rose-200 text-zinc-800 p-4 rounded">Danger</div>
      <div class="bg-amber-200 text-zinc-800 p-4 rounded">Warning</div>
      <div class="bg-emerald-200 text-zinc-800 p-4 rounded">Success</div>
    </div>
    <h1>Botones</h1>
    <div class="text-center">
      <DuiButton
        variant="solid"
        size="lg"
        type="button"
        :disabled="false"
        :loading="false"
        @click="counter++"
      >
        Botón {{ counter }}
      </DuiButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import DuiButton from './stories/Forms/DuiButton.vue'

const counter = ref(0)

</script>