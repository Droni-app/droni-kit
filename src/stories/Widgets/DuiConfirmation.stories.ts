import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';

import DuiConfirmation from './DuiConfirmation.vue';
import '../../style.css';

const meta = {
  title: 'Widgets/Confirmation',
  component: DuiConfirmation,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Texto del boton inicial que activa el modo de confirmacion.',
    },
    checkLabel: {
      control: { type: 'text' },
      description: 'Texto mostrado en el switch de validacion previa.',
    },
    confirmLabel: {
      control: { type: 'text' },
      description: 'Texto del boton final que emite la confirmacion.',
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost'],
      description: 'Variante visual aplicada al boton principal y al boton de confirmar.',
    },
    color: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Color principal del flujo de confirmacion.',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamano de los botones del flujo.',
    },
    onConfirmed: {
      action: 'confirmed',
      description: 'Evento emitido cuando el usuario confirma la accion.',
      table: {
        category: 'events',
      },
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Flujo de confirmacion en dos pasos para acciones sensibles. Primero muestra un boton disparador y, al activarse, solicita confirmacion explicita mediante un switch antes de permitir la accion final.',
      },
    },
  },
} satisfies Meta<typeof DuiConfirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

const confirmationRender = (args: any) => ({
  components: { DuiConfirmation },
  setup() {
    const confirmedCount = ref(0);

    const handleConfirmed = () => {
      confirmedCount.value += 1;
      args.onConfirmed?.();
    };

    return { args, confirmedCount, handleConfirmed };
  },
  template: `
    <div class="dk:p-4 dk:space-y-3">
      <DuiConfirmation v-bind="args" @confirmed="handleConfirmed" />
      <p class="dk:text-sm dk:text-zinc-500">Confirmaciones emitidas: {{ confirmedCount }}</p>
      <p class="dk:text-xs dk:text-zinc-400">Nota: el estado de confirmacion se reinicia automaticamente tras 10 segundos.</p>
    </div>
  `,
});

export const Default: Story = {
  args: {
    label: 'Eliminar registro',
    checkLabel: 'Estoy seguro de eliminar este registro',
    confirmLabel: 'Si, eliminar',
    variant: 'outline',
    color: 'danger',
    size: 'md',
  },
  render: confirmationRender,
};

export const PrimaryAction: Story = {
  args: {
    label: 'Publicar cambios',
    checkLabel: 'Revise y confirmo la publicacion',
    confirmLabel: 'Confirmar publicacion',
    variant: 'solid',
    color: 'primary',
    size: 'md',
  },
  render: confirmationRender,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo para operaciones de negocio donde se requiere doble validacion antes de continuar.',
      },
    },
  },
};

export const Compact: Story = {
  args: {
    label: 'Cerrar sesion',
    checkLabel: 'Confirmar cierre',
    confirmLabel: 'Confirmar salida',
    variant: 'ghost',
    color: 'warning',
    size: 'sm',
  },
  render: confirmationRender,
  parameters: {
    docs: {
      description: {
        story: 'Variante compacta para espacios reducidos como barras de herramientas o menus contextuales.',
      },
    },
  },
};