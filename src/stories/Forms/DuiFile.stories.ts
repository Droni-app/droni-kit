import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DuiFile from './DuiFile.vue'
import '../../style.css'

const meta = {
  title: 'Forms/File',
  component: DuiFile,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'text' },
    },
    accept: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    block: {
      control: { type: 'boolean' },
    },
    rounded: {
      control: { type: 'select' },
      options: ['all', 'top', 'bottom', 'left', 'right', 'none'],
    },
    uploadBtn: {
      control: { type: 'boolean' },
    },
    browserBtn: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof DuiFile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: 'https://cdn.droni.co/files/Manual-de-identidad.pdf',
    accept: '.pdf,.png,.jpg,.jpeg',
    size: 'md',
    block: true,
    rounded: 'all',
  },
  render: (args) => ({
    components: { DuiFile },
    setup() {
      const currentFileUrl = ref(args.modelValue)
      const activity = ref('Haz clic en un botón para ver los eventos emitidos.')

      function handleOpenBrowser() {
        activity.value = 'Evento open-browser emitido'
      }

      function handleUploadFile(file: File) {
        activity.value = `Evento upload-file emitido con ${file.name}`
        currentFileUrl.value = `https://cdn.droni.co/files/${file.name}`
      }

      return {
        args,
        currentFileUrl,
        activity,
        handleOpenBrowser,
        handleUploadFile,
      }
    },
    template: `
      <div class="p-4 space-y-3">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Adjuntar archivo
        </label>
        <DuiFile
          v-bind="args"
          v-model="currentFileUrl"
          @open-browser="handleOpenBrowser"
          @upload-file="handleUploadFile"
        />
        <p class="text-xs text-gray-500 dark:text-gray-400">
          {{ activity }}
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Valor actual del modelo: {{ currentFileUrl || 'Sin archivo' }}
        </p>
      </div>
    `,
  }),
}

export const Compact: Story = {
  args: {
    modelValue: '',
    accept: 'image/*',
    size: 'sm',
    block: true,
    rounded: 'all',
  },
  render: (args) => ({
    components: { DuiFile },
    setup() {
      const currentFileUrl = ref('')
      const activity = ref('Esperando interacción.')

      function handleOpenBrowser() {
        activity.value = 'open-browser emitido'
      }

      function handleUploadFile(file: File) {
        activity.value = `upload-file emitido con ${file.name}`
        currentFileUrl.value = `https://cdn.droni.co/files/${file.name}`
      }

      return {
        args,
        currentFileUrl,
        activity,
        handleOpenBrowser,
        handleUploadFile,
      }
    },
    template: `
      <div class="max-w-xl p-4 space-y-3">
        <DuiFile
          v-bind="args"
          v-model="currentFileUrl"
          @open-browser="handleOpenBrowser"
          @upload-file="handleUploadFile"
        />
        <p class="text-xs text-gray-500 dark:text-gray-400">
          {{ activity }}
        </p>
      </div>
    `,
  }),
}
