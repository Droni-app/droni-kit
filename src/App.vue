

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
    <div class="text-center bg-slate-100 p-5 ">
      <DuiButton
        variant="solid"
        type="button"
        color="secondary"
        :disabled="false"
        :loading="false"
        @click="counter++"
      >
        Botón {{ counter }}
      </DuiButton>
      <DuiInput
        class="inline-block"
        type="text"
        placeholder="hola mundo"
        />
        <form class="flex items-between my-4">
          <DuiInput
            class="inline-block"
            rounded="left"
            type="text"
            size="lg"
            placeholder="hola mundddddo"
            required
            pattern="[a-z]{1,15}"
            />
          <DuiInput
            rounded="none"
            class="inline-block"
            size="lg"
            type="text"
            placeholder="hola mundo"
            />
            <DuiButton
              type="submit"
              color="secondary"
              size="lg"
              class="rounded-l-none">
              <span class="mdi mdi-home"></span>
              Submit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore reprehenderit dicta blanditiis nihil, impedit magnam voluptatibus sit quidem corporis fugiat in nam alias velit rem corrupti quam. Ad, suscipit quisquam.
            </DuiButton>
        </form>
      <DuiInput
        id="prueba"
      label="Nombre"
        class="inline-block"
        type="month"
        placeholder="hola mundo"
        v-model="mymonth"
        required
        />
        {{ typeof name }}

      <input
        type="color"
        placeholder="hola mundo"
        />
    </div>
    <!-- Comment box-->
     <div class="dark p-5 bg-slate-900 dark:text-rose-800">
      <DuiTextarea
        block
        placeholder="hola mundo"
        />
      <DuiButton  variant="outline">
        <span class="mdi mdi-home"></span>
        hola mundo
      </DuiButton>
      <DuiAction  variant="outline" block>
        <span class="mdi mdi-home"></span>
        hola mundo
      </DuiAction>
     </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import DuiButton from './stories/Forms/DuiButton.vue'
import DuiInput from './stories/Forms/DuiInput.vue'
import DuiTextarea from './stories/Forms/DuiTextarea.vue'
import DuiAction from './stories/Elements/DuiAction.vue';

const counter = ref(0)
const name = ref('hola')
const mymonth = ref('2023-10')

</script>