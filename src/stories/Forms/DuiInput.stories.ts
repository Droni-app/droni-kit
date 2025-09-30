import type { Meta, StoryObj } from '@storybook/vue3-vite';

import DuiInput from './DuiInput.vue';
import '../../style.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Forms/Input',
  component: DuiInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'tel', 'url', 'search', 'date', 'datetime-local', 'month', 'week', 'time', 'number'],
      defaultValue: 'text',
    },
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
    pattern: {
      control: { type: 'text' },
      defaultValue: undefined,
    },
    rounded: {
      constrol: { type: 'select' },
      options: ['all', 'top', 'bottom', 'left', 'right', 'none'],
      defaultValue: 'all',
    },
    readonly: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    min: {
      control: { type: 'text' },
      defaultValue: undefined,
    },
    max: {
      control: { type: 'text' },
      defaultValue: undefined,
    },
    step: {
      control: { type: 'text' },
      defaultValue: undefined,
    },
  },
} satisfies Meta<typeof DuiInput>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    type: 'text',
    required: true,
    disabled: false,
    block: false,
    size: 'md',
    label: 'Ingresa tu correo',
    id: 'correo',
    placeholder: 'ej. kalvin@droni.co',
    name: 'correo',
    pattern: '[0-9a-zA-Z._%+-]+@[0-9a-zA-Z.-]+\\.[a-zA-Z]{2,}',
    rounded: 'all',
    modelValue: '',
  },
};