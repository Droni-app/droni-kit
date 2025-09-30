import type { Meta, StoryObj } from '@storybook/vue3-vite';

import DuiAction from './DuiAction.vue';
import '../../style.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Elements/Action',
  component: DuiAction,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: { type: 'text' },
      defaultValue: 'Botón simple',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
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
    loading: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    block: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    title: {
      control: { type: 'text' },
      defaultValue: undefined,
    },
    rounded: {
      control: { type: 'select' },
      options: ['all', 'top', 'bottom', 'left', 'right', 'none'],
      defaultValue: 'all',
    },
    to: {
      control: { type: 'text' },
      defaultValue: undefined,
      description: 'Router destination. Can be a string path or route object. Works with vue-router and Nuxt router.',
    },
  },
} satisfies Meta<typeof DuiAction>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    default: 'Acción simple',
    block: false,
    size: 'md',
    variant: 'solid',
    color: 'neutral',
    loading: false,
    title: 'Ir a Droni.co',
  },
};

export const WithRouting: Story = {
  args: {
    default: 'Ir a página',
    to: '/some-route',
    variant: 'outline',
    color: 'primary',
    size: 'md',
  },
};

export const WithComplexRoute: Story = {
  args: {
    default: 'Navegar con parámetros',
    to: {
      name: 'user-profile',
      params: { id: '123' },
      query: { tab: 'settings' }
    },
    variant: 'ghost',
    color: 'secondary',
    size: 'md',
  },
};

export const ExternalLink: Story = {
  args: {
    default: 'Enlace externo',
    to: 'https://droni.co',
    variant: 'solid',
    color: 'success',
    size: 'sm',
  },
};

export const LoadingWithRoute: Story = {
  args: {
    default: 'Navegando...',
    to: '/loading-destination',
    loading: true,
    variant: 'outline',
    color: 'warning',
    size: 'md',
  },
};