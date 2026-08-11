import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DuiFile from './DuiFile.vue'
import '../../style.css'

const explorerDocument = `
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Explorador</title>
    <style>
      :root {
        color-scheme: light dark;
        font-family: ui-sans-serif, system-ui, sans-serif;
      }

      body {
        margin: 0;
        padding: 24px;
        background: #f4f4f5;
        color: #18181b;
      }

      .grid {
        display: grid;
        gap: 12px;
      }

      button {
        border: 1px solid #d4d4d8;
        border-radius: 12px;
        padding: 14px 16px;
        text-align: left;
        cursor: pointer;
        background: white;
        color: inherit;
      }

      button:hover {
        border-color: #94a3b8;
      }

      strong {
        display: block;
        margin-bottom: 4px;
      }

      small {
        color: #52525b;
      }

      @media (prefers-color-scheme: dark) {
        body {
          background: #09090b;
          color: #f4f4f5;
        }

        button {
          background: #18181b;
          border-color: #3f3f46;
        }

        button:hover {
          border-color: #a1a1aa;
        }

        small {
          color: #d4d4d8;
        }
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <button type="button" onclick="parent.postMessage({ type: 'dui:file-selected', url: 'https://cdn.droni.co/files/Manual-de-uso.pdf' }, '*')">
        <strong>Manual-de-uso.pdf</strong>
        <small>Seleccionar archivo PDF existente</small>
      </button>

      <button type="button" onclick="parent.postMessage({ type: 'dui:file-selected', url: 'https://cdn.droni.co/files/Banner-principal.png' }, '*')">
        <strong>Banner-principal.png</strong>
        <small>Seleccionar imagen existente</small>
      </button>
    </div>
  </body>
</html>
`

const explorerUrl = `data:text/html;charset=utf-8,${encodeURIComponent(explorerDocument)}`

const meta = {
  title: 'Forms/File',
  component: DuiFile,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'text' },
    },
    explorerUrl: {
      control: { type: 'text' },
    },
    uploadUrl: {
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
  },
} satisfies Meta<typeof DuiFile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: 'https://cdn.droni.co/files/Manual-de-identidad.pdf',
    explorerUrl,
    uploadUrl: '',
    accept: '.pdf,.png,.jpg,.jpeg',
    size: 'md',
    block: true,
    rounded: 'all',
  },
  render: (args) => ({
    components: { DuiFile },
    setup() {
      const currentFileUrl = ref(args.modelValue)

      return {
        args,
        currentFileUrl,
      }
    },
    template: `
      <div class="p-4">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
          Adjuntar archivo
        </label>
        <DuiFile
          v-bind="args"
          v-model="currentFileUrl"
        />
        <p class="mt-3 text-xs text-gray-500 dark:text-gray-400">
          Valor actual del modelo: {{ currentFileUrl || 'Sin archivo' }}
        </p>
      </div>
    `,
  }),
}

export const Compact: Story = {
  args: {
    modelValue: '',
    explorerUrl,
    uploadUrl: '',
    accept: 'image/*',
    size: 'sm',
    block: true,
    rounded: 'all',
  },
  render: (args) => ({
    components: { DuiFile },
    setup() {
      const currentFileUrl = ref('')

      return {
        args,
        currentFileUrl,
      }
    },
    template: `
      <div class="max-w-xl p-4">
        <DuiFile
          v-bind="args"
          v-model="currentFileUrl"
        />
      </div>
    `,
  }),
}