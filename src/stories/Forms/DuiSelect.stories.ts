import type { Meta, StoryObj } from '@storybook/vue3';

import DuiSelect from './DuiSelect.vue';
import '../../style.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Forms/Select',
  component: DuiSelect,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    block: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: undefined,
    },
    name: {
      control: { type: 'text' },
      defaultValue: undefined,
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    label: {
      control: { type: 'text' },
      defaultValue: undefined,
    },
    rounded: {
      constrol: { type: 'select' },
      options: ['all', 'top', 'bottom', 'left', 'right', 'none'],
      defaultValue: 'all',
    },
    options: {
      control: { type: 'object' },
      defaultValue: [
        { label: 'Opción 1', value: 'opcion1' },
        { label: 'Opción 2', value: 'opcion2' },
        { label: 'Opción 3', value: 'opcion3' },
        { label: 'Opción 4', value: 'opcion4' },
      ],
    },
    readonly: {
      control: { type: 'boolean' },
      defaultValue: false,
    }
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
    required: true,
    disabled: false,
    block: false,
    size: 'md',
    label: 'Selecciona un país',
    id: 'pais',
    placeholder: 'ej. Colombia',
    name: 'pais',
    rounded: 'all',
    modelValue: 6,
    itemLabel: 'name',
    itemValue: 'id',
    options: [
      { id: 5, name: 'Colombia' },
      { id: 6, name: 'México' },
      { id: 7, name: 'España' },
      { id: 8, name: 'Perú' },
    ],
  },
};