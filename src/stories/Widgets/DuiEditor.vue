<template>
  <div class="editor-container">
    {{ props }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: 'markdown',
  },
  minimap: {
    type: Boolean,
    default: false,
  },
  theme: {
    type: String as () => 'vs' | 'vs-dark' | 'hc-black' | 'hc-light',
    default: 'vs-dark',
  },
  wordWrap: {
    type: String as () => 'on' | 'off' | 'wordWrapColumn' | 'bounded',
    default: 'on',
  },
  tabSize: {
    type: Number,
    default: 2,
  },
  autoIndent: {
    type: String as () => 'none' | 'keep' | 'brackets' | 'advanced',
    default: 'brackets',
  },
  renderValidationDecorations: {
    type: String as () => 'on' | 'off' | 'editable',
    default: 'on',
  },
  formatOnPaste: {
    type: Boolean,
    default: true,
  },
  formatOnType: {
    type: Boolean,
    default: true,
  },
  autoClosingBrackets: {
    type: String as () => 'always' | 'languageDefined' | 'never',
    default: 'languageDefined',
  },
  scrollBeyondLastLine: {
    type: Boolean,
    default: true,
  },
  lineNumbers: {
    type: String as () => 'on' | 'off' | 'relative' | 'interval',
    default: 'on',
  },
})

</script>

<style scoped>
.editor-container {
  width: 100%;
  min-height: 400px;
}
</style>