import type { Meta, StoryObj } from '@storybook/vue3';

import DuiTextarea from './DuiTextarea.vue';
import '../../style.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Forms/Textarea',
  component: DuiTextarea,
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
    autoheight: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    resize: {
      control: { type: 'select' },
      options: ['none', 'both', 'horizontal', 'vertical'],
      defaultValue: 'none',
    },
    readonly: {
      control: { type: 'boolean' },
      defaultValue: false,
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
      required: true,
      disabled: false,
      block: false,
      size: 'md',
      label: 'Ingresa tu correo',
      id: 'correo',
      placeholder: 'ej. kalvin@droni.co',
      name: 'correo',
      rounded: 'all',
      modelValue: '',
      autoheight: true,
      resize: 'none',
    },
  };