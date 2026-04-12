import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, within } from 'storybook/test';

import DuiEmptyState from './DuiEmptyState.vue';
import DuiButton from '../Forms/DuiButton.vue';
import '../../style.css';

const meta = {
  title: 'Elements/EmptyState',
  component: DuiEmptyState,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Titulo principal',
    },
    description: {
      control: { type: 'text' },
      description: 'Descripcion o mensaje de ayuda',
    },
    illustration: {
      control: { type: 'text' },
      description: 'Emoji o texto para la ilustracion',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'dashed'],
      description: 'Estilo del contenedor',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamano general',
    },
    align: {
      control: { type: 'select' },
      options: ['center', 'left'],
      description: 'Alineacion del contenido',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente Empty State para indicar ausencia de datos con ilustracion, titulo, descripcion y acciones.',
      },
    },
  },
} satisfies Meta<typeof DuiEmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Sin resultados',
    description: 'No encontramos elementos que coincidan con tu busqueda. Intenta con otros terminos.',
    illustration: '🔍',
    variant: 'default',
    size: 'md',
    align: 'center',
  },
  render: (args) => ({
    components: { DuiEmptyState, DuiButton },
    setup() { return { args }; },
    template: `
      <div class="dk:p-4 dk:max-w-md dk:mx-auto">
        <DuiEmptyState v-bind="args">
          <template #actions>
            <DuiButton size="sm">Limpiar filtros</DuiButton>
          </template>
        </DuiEmptyState>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Sin resultados')).toBeInTheDocument();
    await expect(canvas.getByRole('button', { name: 'Limpiar filtros' })).toBeInTheDocument();
  },
};

export const Variants: Story = {
  render: () => ({
    components: { DuiEmptyState, DuiButton },
    template: `
      <div class="dk:p-4 dk:space-y-6 dk:max-w-lg">
        <DuiEmptyState
          title="Sin archivos"
          description="Todavia no tienes archivos en esta carpeta."
          illustration="📁"
          variant="default"
        >
          <template #actions>
            <DuiButton size="sm">Subir archivo</DuiButton>
          </template>
        </DuiEmptyState>

        <DuiEmptyState
          title="Bandeja vacia"
          description="No tienes notificaciones pendientes."
          illustration="🔔"
          variant="bordered"
        />

        <DuiEmptyState
          title="Arrastra archivos aqui"
          description="Soporta PDF, PNG, JPG hasta 10 MB."
          illustration="📤"
          variant="dashed"
        >
          <template #actions>
            <DuiButton size="sm" variant="outline">Seleccionar archivo</DuiButton>
          </template>
        </DuiEmptyState>
      </div>
    `,
  }),
};

export const NoData: Story = {
  render: () => ({
    components: { DuiEmptyState, DuiButton },
    template: `
      <div class="dk:p-4 dk:max-w-sm dk:mx-auto">
        <DuiEmptyState
          title="Sin registros"
          description="Aun no se han creado proyectos. Comienza creando uno nuevo."
          illustration="🗂️"
          size="lg"
          variant="bordered"
        >
          <template #actions>
            <DuiButton>Crear proyecto</DuiButton>
            <DuiButton variant="ghost">Ver tutorial</DuiButton>
          </template>
        </DuiEmptyState>
      </div>
    `,
  }),
};

export const Error: Story = {
  render: () => ({
    components: { DuiEmptyState, DuiButton },
    template: `
      <div class="dk:p-4 dk:max-w-sm dk:mx-auto">
        <DuiEmptyState
          title="Algo salio mal"
          description="No pudimos cargar la informacion. Por favor intenta de nuevo."
          illustration="⚠️"
          size="md"
          variant="bordered"
        >
          <template #actions>
            <DuiButton color="danger" size="sm">Reintentar</DuiButton>
          </template>
        </DuiEmptyState>
      </div>
    `,
  }),
};
