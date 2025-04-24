import type { Meta, StoryObj } from '@storybook/vue3';

import DuiAlert from './DuiAlert.vue';
import '../../style.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Elements/Alert',
  component: DuiAlert,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: { type: 'text' },
      defaultValue: 'Alert simple',
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost'],
      defaultValue: 'solid',
    },
    color: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger'],
      defaultValue: 'neutral',
    },
    rounded: {
      control: { type: 'select' },
      options: ['all', 'top', 'bottom', 'left', 'right', 'none'],
      defaultValue: 'all',
    },
  },
} satisfies Meta<typeof DuiAlert>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    default: 'Alert simple',
    variant: 'solid',
    color: 'neutral',
    rounded: 'all',
  },
};