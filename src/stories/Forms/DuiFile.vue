<template>
  <div :class="wrapperClasses">
    <div :class="containerClasses">
      <div :class="contentClasses">
        <p class="dk:text-sm dk:font-medium dk:text-zinc-700 dk:dark:text-zinc-200">
          Archivo actual
        </p>
        <p :class="fileNameClasses">
          {{ displayedFileName }}
        </p>
      </div>

      <div :class="actionsClasses">
        <DuiButton
          v-if="hasExplorer"
          color="primary"
          variant="outline"
          size="sm"
          :block="false"
          @click="openExplorerModal">
          <i class="mdi mdi-folder-search-outline" aria-hidden="true"></i>
        </DuiButton>

        <DuiButton
          color="neutral"
          variant="solid"
          size="sm"
          :block="false"
          :loading="isUploading"
          :disabled="isUploading"
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

    <DuiModal
      v-model="isExplorerOpen"
      title="Explorador de archivos"
      description="Selecciona un archivo existente desde el explorador configurado."
      size="xl"
      color="neutral"
      variant="solid">
      <div class="dk:min-h-[60vh] dk:overflow-hidden dk:rounded-lg dk:border dk:border-zinc-200 dk:bg-white dk:dark:border-zinc-700 dk:dark:bg-zinc-950">
        <iframe
          v-if="props.explorerUrl"
          :src="props.explorerUrl"
          title="Explorador de archivos"
          class="dk:h-[60vh] dk:w-full dk:border-0 dk:bg-transparent" />

        <div
          v-else
          class="dk:flex dk:h-[60vh] dk:items-center dk:justify-center dk:px-6 dk:text-center dk:text-sm dk:text-zinc-500 dk:dark:text-zinc-400">
          No se configuró una URL para el explorador de archivos.
        </div>
      </div>
    </DuiModal>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import DuiButton from './DuiButton.vue'
import DuiModal from '../Elements/DuiModal.vue'

defineOptions({
  inheritAttrs: false,
})

type DuiFileMessage = string | {
  type?: string
  url?: string
  value?: string
  fileUrl?: string
  currentUrl?: string
}

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  explorerUrl: {
    type: String,
    default: '',
  },
  uploadUrl: {
    type: String,
    default: '',
  },
  accept: {
    type: String,
    default: '*',
  },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md',
  },
  block: {
    type: Boolean,
    default: true,
  },
  rounded: {
    type: String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none',
    default: 'all',
  },
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
  (event: 'select', file: File): void
  (event: 'upload-start', file: File): void
  (event: 'upload-success', payload: { file: File; response: unknown; url: string }): void
  (event: 'upload-error', error: Error): void
  (event: 'browse'): void
}>()

const fileInputRef = ref<HTMLInputElement | null>(null)
const isExplorerOpen = ref(false)
const isUploading = ref(false)
const localFileName = ref('')

const sizeClasses = {
  sm: 'dk:gap-3 dk:px-3 dk:py-3',
  md: 'dk:gap-4 dk:px-4 dk:py-4',
  lg: 'dk:gap-5 dk:px-5 dk:py-5',
}

const roundedClasses = {
  all: 'dk:rounded-xl',
  top: 'dk:rounded-t-xl',
  bottom: 'dk:rounded-b-xl',
  left: 'dk:rounded-l-xl',
  right: 'dk:rounded-r-xl',
  none: 'dk:rounded-none',
}

const hasExplorer = computed(() => Boolean(props.explorerUrl))

const wrapperClasses = computed(() => {
  return props.block ? 'dk:w-full' : 'dk:inline-flex dk:max-w-full'
})

const containerClasses = computed(() => {
  const sizeClass = sizeClasses[props.size] || sizeClasses.md
  const roundedClass = roundedClasses[props.rounded] || roundedClasses.all

  return [
    'dk:flex dk:w-full dk:flex-col dk:items-stretch dk:justify-between dk:border-b dk:border-zinc-300 dk:bg-zinc-50 dk:text-zinc-800 dk:shadow-sm dk:transition-colors',
    'dk:dark:border-zinc-600 dk:dark:bg-zinc-800 dk:dark:text-zinc-100',
    'dk:sm:flex-row dk:sm:items-center',
    sizeClass,
    roundedClass,
  ].join(' ')
})

const contentClasses = computed(() => {
  return 'dk:min-w-0 dk:flex-1'
})

const actionsClasses = computed(() => {
  return [
    'dk:flex dk:flex-col dk:gap-2 dk:w-full',
    'dk:sm:w-auto dk:sm:flex-row dk:sm:items-center dk:sm:justify-end',
  ].join(' ')
})

const fileNameClasses = computed(() => {
  return [
    'dk:mt-1 dk:max-w-full dk:overflow-hidden dk:text-ellipsis dk:whitespace-nowrap dk:text-sm',
    props.modelValue || localFileName.value ? 'dk:text-zinc-900 dk:dark:text-zinc-100' : 'dk:text-zinc-500 dk:dark:text-zinc-400',
  ].join(' ')
})

const displayedFileName = computed(() => {
  if (localFileName.value) {
    return localFileName.value
  }

  if (props.modelValue) {
    return getFileNameFromUrl(props.modelValue)
  }

  return 'No hay archivo seleccionado'
})

watch(
  () => props.modelValue,
  (nextValue) => {
    if (nextValue) {
      localFileName.value = ''
    }
  },
)

function getFileNameFromUrl(url: string) {
  try {
    const parsedUrl = new URL(url, typeof window !== 'undefined' ? window.location.origin : 'http://localhost')
    const cleanPath = parsedUrl.pathname.split('/').filter(Boolean)
    return decodeURIComponent(cleanPath[cleanPath.length - 1] || url)
  } catch {
    const cleanPath = url.split('?')[0].split('#')[0].split('/').filter(Boolean)
    return decodeURIComponent(cleanPath[cleanPath.length - 1] || url)
  }
}

function openExplorerModal() {
  if (!hasExplorer.value) return
  isExplorerOpen.value = true
  emit('browse')
}

function openNativeFilePicker() {
  fileInputRef.value?.click()
}

async function onFileSelected(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (!file) return

  localFileName.value = file.name
  emit('select', file)

  if (!props.uploadUrl) {
    resetInputValue(target)
    return
  }

  const formData = new FormData()
  formData.append('file', file)

  isUploading.value = true
  emit('upload-start', file)

  try {
    const response = await fetch(props.uploadUrl, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`Error al subir archivo: ${response.status}`)
    }

    const responseBody = await parseUploadResponse(response)
    const uploadedUrl = extractUploadedUrl(responseBody)

    if (!uploadedUrl) {
      throw new Error('La respuesta de carga no contiene una URL de archivo válida')
    }

    emit('update:modelValue', uploadedUrl)
    emit('upload-success', { file, response: responseBody, url: uploadedUrl })
  } catch (error) {
    const normalizedError = error instanceof Error ? error : new Error('No fue posible subir el archivo')
    emit('upload-error', normalizedError)
  } finally {
    isUploading.value = false
    resetInputValue(target)
  }
}

async function parseUploadResponse(response: Response) {
  const contentType = response.headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    return response.json()
  }

  return response.text()
}

function extractUploadedUrl(payload: unknown): string {
  if (typeof payload === 'string') {
    return payload
  }

  if (!payload || typeof payload !== 'object') {
    return ''
  }

  const payloadRecord = payload as Record<string, unknown>
  const candidateKeys = ['url', 'fileUrl', 'location', 'path', 'value'] as const

  for (const key of candidateKeys) {
    const candidate = payloadRecord[key]
    if (typeof candidate === 'string' && candidate) {
      return candidate
    }
  }

  return ''
}

function resetInputValue(input: HTMLInputElement) {
  input.value = ''
}

function extractUrlFromMessage(data: DuiFileMessage) {
  if (typeof data === 'string') {
    return data
  }

  if (!data || typeof data !== 'object') {
    return ''
  }

  if (data.type && data.type !== 'dui:file-selected') {
    return ''
  }

  return data.url || data.fileUrl || data.currentUrl || data.value || ''
}

function getAllowedOrigin() {
  if (!props.explorerUrl || typeof window === 'undefined') return ''

  try {
    return new URL(props.explorerUrl, window.location.origin).origin
  } catch {
    return ''
  }
}

function onWindowMessage(event: MessageEvent<DuiFileMessage>) {
  if (!isExplorerOpen.value || !props.explorerUrl) return

  const allowedOrigin = getAllowedOrigin()
  if (allowedOrigin && event.origin !== allowedOrigin) return

  const selectedUrl = extractUrlFromMessage(event.data)
  if (!selectedUrl) return

  localFileName.value = ''
  emit('update:modelValue', selectedUrl)
  isExplorerOpen.value = false
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('message', onWindowMessage)
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('message', onWindowMessage)
  }
})
</script>