import type { Meta, StoryObj } from '@storybook/vue3-vite';

import DuiSelect from './DuiSelect.vue';
import '../../style.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Forms/Select',
  component: DuiSelect,
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
    itemLabel: {
      control: { type: 'text' },
    },
    itemValue: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    options: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof DuiSelect>;

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
    modelValue: 6,
    itemLabel: 'name',
    itemValue: 'id',
    placeholder: 'Selecciona un país',
    options: [
      { id: 5, name: 'Colombia' },
      { id: 6, name: 'México' },
      { id: 7, name: 'España' },
      { id: 8, name: 'Perú' },
    ],
  },
  render: (args) => ({
    components: { DuiSelect },
    setup() {
      return { args };
    },
    template: `
      <div class="p-4">
        <label for="pais" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Selecciona un país <span class="text-red-500">*</span>
        </label>
        <DuiSelect 
          v-bind="args"
          id="pais"
          name="pais"
          required
        />
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { DuiSelect },
    setup() {
      const countries = [
        { id: 1, name: 'Colombia' },
        { id: 2, name: 'México' },
        { id: 3, name: 'España' },
      ];
      return { countries };
    },
    template: `
      <div class="p-4 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Small
          </label>
          <DuiSelect 
            :options="countries"
            size="sm"
            placeholder="Selecciona..."
            item-label="name"
            item-value="id"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Medium (default)
          </label>
          <DuiSelect 
            :options="countries"
            size="md"
            placeholder="Selecciona..."
            item-label="name"
            item-value="id"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Large
          </label>
          <DuiSelect 
            :options="countries"
            size="lg"
            placeholder="Selecciona..."
            item-label="name"
            item-value="id"
          />
        </div>
      </div>
    `,
  }),
};

export const WithNativeAttributes: Story = {
  render: () => ({
    components: { DuiSelect },
    setup() {
      const priorities = [
        { label: 'Baja', value: 'low' },
        { label: 'Media', value: 'medium' },
        { label: 'Alta', value: 'high' },
        { label: 'Crítica', value: 'critical' },
      ];
      return { priorities };
    },
    template: `
      <div class="p-4 space-y-4">
        <div>
          <label for="priority-disabled" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Deshabilitado
          </label>
          <DuiSelect 
            id="priority-disabled"
            :options="priorities"
            placeholder="No disponible"
            disabled
          />
        </div>
        <div>
          <label for="priority-required" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Requerido <span class="text-red-500">*</span>
          </label>
          <DuiSelect 
            id="priority-required"
            :options="priorities"
            placeholder="Selecciona prioridad"
            required
            name="priority"
          />
        </div>
      </div>
    `,
  }),
};