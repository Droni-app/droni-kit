<template>
  <div class="dk:flex dk:h-screen dk:bg-rose-100 dk:dark:bg-slate-900">
    <div class="dk:w-1/2 dk:mx-auto dk:my-5">
      <h1>Color Palete:</h1>
      <div class="dk:grid dk:grid-cols-6 dk:gap-4">
        <div class="dk:bg-zinc-700 dk:text-white dk:p-4 dk:rounded">
          Neutral: zinc
        </div>
        <div class="dk:bg-slate-700 text-white p-4 rounded">Primary: slate</div>
        <div class="dk:bg-pink-700 dk:text-white dk:p-4 dk:rounded">
          Secondary: pink
        </div>
        <div class="dk:bg-rose-700 dk:text-white dk:p-4 dk:rounded">Danger</div>
        <div class="dk:bg-amber-700 dk:text-white dk:p-4 dk:rounded">
          Warning
        </div>
        <div class="dk:bg-emerald-700 dk:text-white dk:p-4 dk:rounded">
          Success
        </div>
      </div>
      <div class="dk:grid dk:grid-cols-6 dk:gap-4">
        <div class="dk:bg-zinc-200 dk:text-zinc-800 dk:p-4 dk:rounded">
          Neutral: zinc
        </div>
        <div class="dk:bg-slate-200 dk:text-zinc-800 dk:p-4 dk:rounded">
          Primary: slate
        </div>
        <div class="dk:bg-pink-200 dk:text-zinc-800 dk:p-4 dk:rounded">
          Secondary: pink
        </div>
        <div class="dk:bg-rose-200 dk:text-zinc-800 dk:p-4 dk:rounded">
          Danger
        </div>
        <div class="dk:bg-amber-200 dk:text-zinc-800 dk:p-4 dk:rounded">
          Warning
        </div>
        <div class="dk:bg-emerald-200 dk:text-zinc-800 dk:p-4 dk:rounded">
          Success
        </div>
      </div>
      <h1>Botones</h1>
      <div class="dk:text-center dk:bg-slate-100 dk:p-5">
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
          class="dk:inline-block"
          type="text"
          placeholder="hola mundo"
        />
        <form class="flex items-between my-4">
          <DuiInput
            class="dk:inline-block"
            rounded="left"
            type="text"
            size="lg"
            placeholder="hola mundddddo"
            required
            pattern="[a-z]{1,15}"
          />
          <DuiInput
            rounded="none"
            class="dk:inline-block"
            size="lg"
            type="text"
            placeholder="hola mundo"
          />
          <DuiButton
            type="submit"
            color="secondary"
            size="lg"
            class="rounded-l-none"
          >
            <span class="mdi mdi-home"></span>
            Submit Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dolore reprehenderit dicta blanditiis nihil, impedit magnam
            voluptatibus sit quidem corporis fugiat in nam alias velit rem
            corrupti quam. Ad, suscipit quisquam.
          </DuiButton>
        </form>
        <DuiInput
          id="prueba"
          label="Nombre"
          class="dk:inline-block"
          type="month"
          placeholder="hola mundo"
          v-model="mymonth"
          required
        />
        {{ typeof name }}

        <input type="color" placeholder="hola mundo" />
      </div>
      <!-- Comment box-->
      <div class="dark dk:p-5 dk:bg-slate-900 dk:dark:text-rose-800">
        <DuiTextarea block placeholder="hola mundo" />
        <DuiButton variant="outline">
          <span class="mdi mdi-home"></span>
          hola mundo
        </DuiButton>
        <DuiAction variant="outline" block>
          <span class="mdi mdi-home"></span>
          hola mundo
        </DuiAction>
        <DuiSelect
          class="dk:inline-block"
          v-model="name"
          :options="[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
          ]"
          placeholder="hola mundo"
          label="Nombre"
          id="prueba"
          name="prueba"
          required
        />
        {{ name }}

        <DuiSelect
          class="dk:inline-block"
          v-model="selectName"
          :options="[
            { id: 5, name: 'Colombia' },
            { id: 6, name: 'México' },
            { id: 7, name: 'España' },
            { id: 8, name: 'Perú' },
          ]"
          placeholder="Seleccione uno"
          item-label="name"
          item-value="id"
        />
        {{ selectName }}

        <DuiButton @click="selectName = '7'">
          <span class="mdi mdi-home"></span>
          Cambia pais
        </DuiButton>
      </div>
    </div>
    <DuiEditor
      autoClosingBrackets="languageDefined"
      autoIndent="brackets"
      :formatOnPaste="false"
      :formatOnType="false"
      language="javascript"
      lineNumbers="on"
      minimap
      renderValidationDecorations="on"
      scrollBeyondLastLine
      :tabSize="2"
      theme="vs-dark"
      wordWrap="on"
      v-model="name"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import DuiButton from "./stories/Forms/DuiButton.vue";
import DuiInput from "./stories/Forms/DuiInput.vue";
import DuiTextarea from "./stories/Forms/DuiTextarea.vue";
import DuiAction from "./stories/Elements/DuiAction.vue";
import DuiSelect from "./stories/Forms/DuiSelect.vue";
import DuiEditor from "./stories/Widgets/DuiEditor.vue";

const counter = ref(0);
const name = ref("hola");
const selectName = ref("15");
const mymonth = ref("2023-10");
</script>
