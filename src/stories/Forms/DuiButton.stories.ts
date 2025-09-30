import type { Meta, StoryObj } from '@storybook/vue3-vite';

import DuiButton from './DuiButton.vue';
import '../../style.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Forms/Button',
  component: DuiButton,
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
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    block: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      defaultValue: 'button',
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
} satisfies Meta<typeof DuiButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    default: 'Botón simple',
    disabled: false,
    block: false,
    size: 'md',
    variant: 'solid',
    color: 'neutral',
    loading: false,
    type: 'button',
  },
};

export const WithRouting: Story = {
  args: {
    default: 'Ir a página',
    to: '/some-route',
    variant: 'solid',
    color: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón que actúa como enlace de navegación. Detecta automáticamente si vue-router o Nuxt están disponibles y renderiza el componente apropiado.',
      },
    },
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
    variant: 'outline',
    color: 'secondary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón con objeto de ruta complejo que incluye nombre, parámetros y query string.',
      },
    },
  },
};

export const ExternalLink: Story = {
  args: {
    default: 'Enlace externo',
    to: 'https://example.com',
    variant: 'ghost',
    color: 'neutral',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Cuando no hay router disponible y se proporciona una URL, el componente renderiza un enlace HTML regular.',
      },
    },
  },
};

export const LoadingWithRoute: Story = {
  args: {
    default: 'Navegando...',
    to: '/loading-destination',
    loading: true,
    variant: 'solid',
    color: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón de navegación en estado de carga.',
      },
    },
  },
};

export const DisabledWithRoute: Story = {
  args: {
    default: 'No disponible',
    to: '/disabled-route',
    disabled: true,
    variant: 'outline',
    color: 'neutral',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón de navegación deshabilitado.',
      },
    },
  },
};