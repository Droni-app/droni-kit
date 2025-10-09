import type { Meta, StoryObj } from '@storybook/vue3-vite';

import DuiTextarea from './DuiTextarea.vue';
import '../../style.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Forms/Textarea',
  component: DuiTextarea,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
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
    autoheight: {
      control: { type: 'boolean' },
    },
    resize: {
      control: { type: 'select' },
      options: ['none', 'both', 'horizontal', 'vertical'],
    },
  },
  } satisfies Meta<typeof DuiTextarea>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  /*
   *👇 Render functions are a framework specific feature to allow you control on how the component renders.
   * See https://storybook.js.org/docs/api/csf
   * to learn how to use render functions.
   */
  export const Default: Story = {
    args: {
      size: 'md',
      block: true,
      rounded: 'all',
      modelValue: '',
      autoheight: true,
      resize: 'vertical',
    },
    render: (args) => ({
      components: { DuiTextarea },
      setup() {
        return { args };
      },
      template: `
        <div class="p-4 max-w-md">
          <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Descripción <span class="text-red-500">*</span>
          </label>
          <DuiTextarea 
            v-bind="args"
            id="description"
            name="description"
            placeholder="Escribe tu descripción aquí..."
            required
            rows="4"
          />
        </div>
      `,
    }),
  };

  export const Sizes: Story = {
    render: () => ({
      components: { DuiTextarea },
      template: `
        <div class="p-4 space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Small
            </label>
            <DuiTextarea 
              size="sm"
              placeholder="Textarea pequeño..."
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Medium (default)
            </label>
            <DuiTextarea 
              size="md"
              placeholder="Textarea mediano..."
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Large
            </label>
            <DuiTextarea 
              size="lg"
              placeholder="Textarea grande..."
              rows="3"
            />
          </div>
        </div>
      `,
    }),
  };

  export const ResizeOptions: Story = {
    render: () => ({
      components: { DuiTextarea },
      template: `
        <div class="p-4 space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Sin redimensionar
            </label>
            <DuiTextarea 
              resize="none"
              placeholder="No se puede redimensionar"
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Redimensionar vertical
            </label>
            <DuiTextarea 
              resize="vertical"
              placeholder="Solo se puede redimensionar verticalmente"
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Redimensionar horizontal
            </label>
            <DuiTextarea 
              resize="horizontal"
              placeholder="Solo se puede redimensionar horizontalmente"
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Redimensionar ambos
            </label>
            <DuiTextarea 
              resize="both"
              placeholder="Se puede redimensionar en ambas direcciones"
              rows="3"
            />
          </div>
        </div>
      `,
    }),
  };

  export const AutoHeight: Story = {
    render: () => ({
      components: { DuiTextarea },
      template: `
        <div class="p-4 space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Con auto-height (escribe varias líneas)
            </label>
            <DuiTextarea 
              :autoheight="true"
              placeholder="Este textarea crecerá automáticamente cuando escribas más contenido..."
              rows="2"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Sin auto-height (altura fija)
            </label>
            <DuiTextarea 
              :autoheight="false"
              placeholder="Este textarea mantiene altura fija"
              rows="4"
            />
          </div>
        </div>
      `,
    }),
  };

  export const WithNativeAttributes: Story = {
    render: () => ({
      components: { DuiTextarea },
      template: `
        <div class="p-4 space-y-4 max-w-md">
          <div>
            <label for="disabled-textarea" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Deshabilitado
            </label>
            <DuiTextarea 
              id="disabled-textarea"
              placeholder="Campo deshabilitado"
              disabled
              rows="3"
            />
          </div>
          <div>
            <label for="readonly-textarea" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Solo lectura
            </label>
            <DuiTextarea 
              id="readonly-textarea"
              model-value="Este contenido es de solo lectura"
              readonly
              rows="3"
            />
          </div>
          <div>
            <label for="required-textarea" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Requerido <span class="text-red-500">*</span>
            </label>
            <DuiTextarea 
              id="required-textarea"
              placeholder="Este campo es obligatorio"
              required
              name="message"
              rows="4"
            />
          </div>
        </div>
      `,
    }),
  };