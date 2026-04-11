import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { expect, userEvent, within } from 'storybook/test';

import DuiCheckbox from './DuiCheckbox.vue';
import '../../style.css';

const meta = {
  title: 'Forms/Checkbox',
  component: DuiCheckbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'boolean' },
      description: 'Valor del switch (v-model)',
    },
    label: {
      control: { type: 'text' },
      description: 'Texto de etiqueta',
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Posicion de la etiqueta',
    },
    color: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Color del switch cuando esta activo',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamano del switch',
    },
    block: {
      control: { type: 'boolean' },
      description: 'Ancho completo con espacio entre label y switch',
    },
    rounded: {
      control: { type: 'select' },
      options: ['all', 'top', 'bottom', 'left', 'right', 'none'],
      description: 'Bordes del track',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita interaccion',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Checkbox tipo switch con soporte de modo oscuro, tamanos y variaciones de color.',
      },
    },
  },
} satisfies Meta<typeof DuiCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: false,
    label: 'Recibir notificaciones',
    labelPosition: 'right',
    color: 'primary',
    size: 'md',
    block: false,
    rounded: 'all',
    disabled: false,
  },
  render: (args) => ({
    components: { DuiCheckbox },
    setup() {
      const enabled = ref(args.modelValue);
      return { args, enabled };
    },
    template: `
      <div class="dk:p-4">
        <DuiCheckbox v-bind="args" v-model="enabled" />
        <p class="dk:mt-3 dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
          Estado: {{ enabled ? 'Activo' : 'Inactivo' }}
        </p>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', { name: 'Recibir notificaciones' });
    const label = canvas.getByText('Recibir notificaciones');

    await expect(checkbox).not.toBeChecked();
    await expect(canvas.getByText('Estado: Inactivo')).toBeInTheDocument();

    await userEvent.click(checkbox);

    await expect(checkbox).toBeChecked();
    await expect(canvas.getByText('Estado: Activo')).toBeInTheDocument();

    await userEvent.click(label);

    await expect(checkbox).not.toBeChecked();
    await expect(canvas.getByText('Estado: Inactivo')).toBeInTheDocument();
  },
};

export const Colors: Story = {
  render: () => ({
    components: { DuiCheckbox },
    setup() {
      const values = ref({
        neutral: true,
        primary: true,
        secondary: true,
        success: true,
        warning: true,
        danger: true,
      });

      return { values };
    },
    template: `
      <div class="dk:p-4 dk:space-y-4">
        <DuiCheckbox v-model="values.neutral" color="neutral" label="Neutral" />
        <DuiCheckbox v-model="values.primary" color="primary" label="Primary" />
        <DuiCheckbox v-model="values.secondary" color="secondary" label="Secondary" />
        <DuiCheckbox v-model="values.success" color="success" label="Success" />
        <DuiCheckbox v-model="values.warning" color="warning" label="Warning" />
        <DuiCheckbox v-model="values.danger" color="danger" label="Danger" />
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cases = [
      { label: 'Neutral', className: 'dk:peer-checked:bg-zinc-500' },
      { label: 'Primary', className: 'dk:peer-checked:bg-slate-600' },
      { label: 'Secondary', className: 'dk:peer-checked:bg-pink-600' },
      { label: 'Success', className: 'dk:peer-checked:bg-emerald-600' },
      { label: 'Warning', className: 'dk:peer-checked:bg-amber-500' },
      { label: 'Danger', className: 'dk:peer-checked:bg-rose-600' },
    ] as const;

    for (const item of cases) {
      const checkbox = canvas.getByRole('checkbox', { name: item.label });
      const track = checkbox.nextElementSibling as HTMLElement | null;

      await expect(checkbox).toBeChecked();
      await expect(track).not.toBeNull();
      await expect(track).toHaveClass(item.className);
    }
  },
};

export const SizesAndStates: Story = {
  render: () => ({
    components: { DuiCheckbox },
    setup() {
      const small = ref(false);
      const medium = ref(true);
      const large = ref(false);

      return { small, medium, large };
    },
    template: `
      <div class="dk:p-4 dk:space-y-5">
        <DuiCheckbox v-model="small" size="sm" label="Small" />
        <DuiCheckbox v-model="medium" size="md" label="Medium" />
        <DuiCheckbox v-model="large" size="lg" label="Large" />
        <DuiCheckbox :model-value="true" disabled label="Disabled activo" />
        <DuiCheckbox :model-value="false" disabled label="Disabled inactivo" />
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const activeDisabled = canvas.getByRole('checkbox', { name: 'Disabled activo' });
    const inactiveDisabled = canvas.getByRole('checkbox', { name: 'Disabled inactivo' });

    await expect(activeDisabled).toBeDisabled();
    await expect(activeDisabled).toBeChecked();

    await expect(inactiveDisabled).toBeDisabled();
    await expect(inactiveDisabled).not.toBeChecked();

    await userEvent.click(activeDisabled);
    await userEvent.click(inactiveDisabled);

    await expect(activeDisabled).toBeChecked();
    await expect(inactiveDisabled).not.toBeChecked();
  },
};

export const LabelPositions: Story = {
  render: () => ({
    components: { DuiCheckbox },
    setup() {
      const left = ref(true);
      const right = ref(true);
      return { left, right };
    },
    template: `
      <div class="dk:p-4 dk:space-y-4">
        <DuiCheckbox v-model="right" label="Etiqueta a la derecha" label-position="right" />
        <DuiCheckbox v-model="left" label="Etiqueta a la izquierda" label-position="left" />
      </div>
    `,
  }),
};