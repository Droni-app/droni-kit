<template>
  <div :class="wrapperClasses">
    <div :class="containerClasses">
      <div :class="contentClasses">
        <p v-if="props.modelValue ?? localFileName" :class="fileNameClasses">
          <a
            href="#"
            @click.prevent="emit('open-file', props.modelValue ?? localFileName)"
            class="dk:ml-2 dk:text-pink-600 dk:underline dk:transition-colors dk:hover:text-pink-700 dk:dark:text-pink-400 dk:dark:hover:text-pink-300">
            {{ displayedFileName }}
          </a>
        </p>
      </div>

      <div :class="actionsClasses">
        <DuiButton
          v-if="props.browserBtn"
          color="primary"
          variant="outline"
          size="sm"
          :block="false"
          title="Abrir navegador de archivos"
          @click="emitOpenBrowser">
          <i class="mdi mdi-folder-search-outline" aria-hidden="true"></i>
        </DuiButton>

        <DuiButton
          v-if="props.uploadBtn"
          color="primary"
          variant="solid"
          size="sm"
          :block="false"
          title="Subir nuevo archivo"
          @click="openNativeFilePicker">
          <i class="mdi mdi-upload" aria-hidden="true"></i>
        </DuiButton>
      </div>
    </div>

    <input
      ref="fileInputRef"
      type="file"
      class="dk:hidden"
      :accept="props.accept"
      @change="onFileSelected" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import DuiButton from './DuiButton.vue'
import { cn } from '../../utils/cn'
import { roundedCornerClasses } from '../../theme/tokens'
import type { DuiSize } from '../../theme/tokens'
import type { DuiRounded } from '../../types'

defineOptions({ inheritAttrs: false })

export interface DuiFileProps {
  modelValue?: string | null
  accept?: string
  size?: DuiSize
  block?: boolean
  rounded?: DuiRounded
  uploadBtn?: boolean
  browserBtn?: boolean
}

const props = withDefaults(defineProps<DuiFileProps>(), {
  modelValue: null,
  accept: '*',
  size: 'md',
  block: true,
  rounded: 'all',
  uploadBtn: true,
  browserBtn: true,
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
  (event: 'open-browser'): void
  (event: 'upload-file', file: File): void
  (event: 'open-file', value: string): void
}>()

const fileInputRef = ref<HTMLInputElement | null>(null)
const localFileName = ref('')

const sizeClasses: Record<DuiSize, string> = {
  sm: 'dk:gap-1 dk:px-2 dk:py-1',
  md: 'dk:gap-2 dk:px-3 dk:py-2',
  lg: 'dk:gap-3 dk:px-4 dk:py-3',
}

const wrapperClasses = computed(() => {
  return props.block ? 'dk:w-full' : 'dk:inline-flex dk:max-w-full'
})

const containerClasses = computed(() => {
  const sizeClass = sizeClasses[props.size] || sizeClasses.md
  const roundedClass = roundedCornerClasses[props.rounded] ?? roundedCornerClasses.all
  return cn(
    'dk:flex dk:w-full dk:flex-col dk:items-stretch dk:justify-between dk:border dk:border-zinc-300 dk:bg-white dk:text-zinc-800 dk:shadow-sm dk:transition-colors',
    'dk:dark:border-zinc-600 dk:dark:bg-zinc-900 dk:dark:text-zinc-100',
    'dk:sm:flex-row dk:sm:items-center',
    sizeClass,
    roundedClass,
  )
})

const contentClasses = computed(() => 'dk:min-w-0 dk:flex-1')

const actionsClasses = computed(() => {
  return cn(
    'dk:flex dk:flex-col dk:gap-2 dk:w-full',
    'dk:sm:w-auto dk:sm:flex-row dk:sm:items-center dk:sm:justify-end',
  )
})

const fileNameClasses = computed(() => {
  return cn(
    'dk:mt-1 dk:max-w-full dk:overflow-hidden dk:text-ellipsis dk:whitespace-nowrap dk:text-sm',
    props.modelValue || localFileName.value ? 'dk:text-zinc-900 dk:dark:text-zinc-100' : 'dk:text-zinc-500 dk:dark:text-zinc-400',
  )
})

const displayedFileName = computed(() => {
  if (localFileName.value) return localFileName.value
  if (props.modelValue) return getFileNameFromUrl(props.modelValue)
  return 'No hay archivo seleccionado'
})

watch(
  () => props.modelValue,
  (nextValue) => {
    if (nextValue) localFileName.value = ''
  },
)

function getFileNameFromUrl(url: string) {
  const parts = url.split('/')
  return parts[parts.length - 1]
}

function emitOpenBrowser() {
  emit('open-browser')
}

function openNativeFilePicker() {
  fileInputRef.value?.click()
}

function onFileSelected(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file) return
  localFileName.value = file.name
  emit('upload-file', file)
  resetInputValue(target)
}

function resetInputValue(input: HTMLInputElement) {
  input.value = ''
}
</script>

