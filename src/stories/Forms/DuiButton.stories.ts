import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './DuiButton.vue';
import '../../style.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Forms/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    variant: {
      control: { type: 'select' },
      options: ['ghost', 'solid'],
      defaultValue: 'solid',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'primary',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    size: 'md',
    default: () => 'boton base'
  },
};

export const Secondary: Story = {
  args: {
    variant: 'ghost',
    default: () => 'Boton ghost',
  },
};