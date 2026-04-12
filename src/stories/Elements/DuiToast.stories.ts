import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, userEvent, within } from 'storybook/test';

import DuiToast from './DuiToast.vue';
import DuiButton from '../Forms/DuiButton.vue';
import { useToast } from './useToast';
import '../../style.css';

const meta = {
  title: 'Elements/Toast',
  component: DuiToast,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'],
      description: 'Posicion del stack de toasts en pantalla',
    },
    maxToasts: {
      control: { type: 'number' },
      description: 'Numero maximo de toasts visibles al mismo tiempo',
    },
    zIndex: {
      control: { type: 'number' },
      description: 'z-index del contenedor',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Sistema de notificaciones toast programatico via useToast(). Incluye colores, titulos, iconos y auto-dismiss.',
      },
    },
  },
} satisfies Meta<typeof DuiToast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: 'top-right',
    maxToasts: 5,
  },
  render: (args) => ({
    components: { DuiToast, DuiButton },
    setup() {
      const toast = useToast();
      return { args, toast };
    },
    template: `
      <div class="dk:p-6 dk:flex dk:flex-wrap dk:gap-2">
        <DuiToast v-bind="args" />
        <DuiButton size="sm" color="neutral" @click="toast.add({ message: 'Mensaje neutral de prueba', color: 'neutral' })">Neutral</DuiButton>
        <DuiButton size="sm" color="primary" @click="toast.info('Operacion iniciada correctamente')">Info</DuiButton>
        <DuiButton size="sm" color="success" @click="toast.success('Cambios guardados exitosamente')">Success</DuiButton>
        <DuiButton size="sm" color="warning" @click="toast.warning('Revisa tu conexion a internet')">Warning</DuiButton>
        <DuiButton size="sm" color="danger" @click="toast.error('Error al procesar la solicitud')">Error</DuiButton>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole('button', { name: 'Success' });
    await userEvent.click(btn);
    await expect(document.querySelector('[role="alert"]')).not.toBeNull();
  },
};

export const WithTitles: Story = {
  args: {
    position: 'top-right',
  },
  render: (args) => ({
    components: { DuiToast, DuiButton },
    setup() {
      const toast = useToast();
      function showAll() {
        toast.add({ title: 'Archivo guardado', message: 'documento_final.pdf fue guardado en tu disco.', color: 'success', icon: '✅' });
        toast.add({ title: 'Nueva asignacion', message: 'Se te asigno la tarea "Revision Q2".', color: 'primary', icon: '📋' });
        toast.add({ title: 'Sesion por vencer', message: 'Tu sesion expira en 5 minutos.', color: 'warning', icon: '⚠️' });
      }
      return { args, showAll };
    },
    template: `
      <div class="dk:p-6">
        <DuiToast v-bind="args" />
        <DuiButton @click="showAll">Mostrar notificaciones</DuiButton>
      </div>
    `,
  }),
};

export const Persistent: Story = {
  args: {
    position: 'bottom-right',
  },
  render: (args) => ({
    components: { DuiToast, DuiButton },
    setup() {
      const toast = useToast();
      function showPersistent() {
        toast.add({
          title: 'Actualizacion disponible',
          message: 'Hay una nueva version de la aplicacion. Recarga para aplicarla.',
          color: 'primary',
          duration: 0,
          icon: '🔄',
        });
      }
      return { args, showPersistent };
    },
    template: `
      <div class="dk:p-6">
        <DuiToast v-bind="args" />
        <DuiButton @click="showPersistent">Mostrar toast persistente</DuiButton>
        <p class="dk:mt-2 dk:text-xs dk:text-zinc-500">duration: 0 = no se cierra automaticamente</p>
      </div>
    `,
  }),
};

export const AllColors: Story = {
  args: {
    position: 'top-center',
  },
  render: (args) => ({
    components: { DuiToast, DuiButton },
    setup() {
      const toast = useToast();
      function showAll() {
        toast.clear();
        toast.add({ message: 'Neutral toast', color: 'neutral' });
        toast.add({ message: 'Primary toast', color: 'primary' });
        toast.add({ message: 'Secondary toast', color: 'secondary' });
        toast.add({ message: 'Success toast', color: 'success' });
        toast.add({ message: 'Warning toast', color: 'warning' });
        toast.add({ message: 'Danger toast', color: 'danger' });
      }
      return { args, showAll };
    },
    template: `
      <div class="dk:p-6">
        <DuiToast v-bind="args" :max-toasts="6" />
        <DuiButton @click="showAll">Mostrar todos los colores</DuiButton>
      </div>
    `,
  }),
};
