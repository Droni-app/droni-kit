<template>
  <div ref="monacoEl" class="editor-container" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import '../../lib/userWorker'

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

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const monacoEl = ref<HTMLElement | null>(null)
let editor: monaco.editor.IStandaloneCodeEditor | null = null

onMounted(() => {
  if (monacoEl.value) {
    editor = monaco.editor.create(monacoEl.value, {
      value: props.modelValue,
      language: props.language,
      automaticLayout: true,
      theme: props.theme,
      minimap: {
        enabled: props.minimap,
      },
      wordWrap: props.wordWrap,
      tabSize: props.tabSize,
      autoIndent: props.autoIndent,
      renderValidationDecorations: props.renderValidationDecorations,
      formatOnPaste: props.formatOnPaste,
      formatOnType: props.formatOnType,
      autoClosingBrackets: props.autoClosingBrackets,
      scrollBeyondLastLine: props.scrollBeyondLastLine,
      lineNumbers: props.lineNumbers,
    })

    editor.onDidChangeModelContent(() => {
      const value = editor?.getValue() || ''
      emit('update:modelValue', value)
    })
  }
})

// Actualiza el lenguaje si cambia
watch(() => props.language, (newLang) => {
  if (editor) {
    const model = editor.getModel()
    if (model) {
      monaco.editor.setModelLanguage(model, newLang)
    }
  }
})

// Sincroniza modelo externo si cambia el modelValue
watch(() => props.modelValue, (newVal) => {
  if (editor && editor.getValue() !== newVal) {
    editor.setValue(newVal)
  }
})

onBeforeUnmount(() => {
  editor?.dispose()
})
</script>

<style scoped>
.editor-container {
  width: 100%;
  min-height: 400px;
}
</style>