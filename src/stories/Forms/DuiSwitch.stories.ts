import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { expect, userEvent, within } from 'storybook/test';

import DuiSwitch from './DuiSwitch.vue';
import '../../style.css';

const meta = {
  title: 'Forms/Switch',
  component: DuiSwitch,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'boolean' },
      description: 'Estado del switch (v-model)',
    },
    label: {
      control: { type: 'text' },
      description: 'Etiqueta principal',
    },
    description: {
      control: { type: 'text' },
      description: 'Texto secundario debajo de la etiqueta',
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Posicion de la etiqueta',
    },
    color: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Color activo',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamano del switch',
    },
    block: {
      control: { type: 'boolean' },
      description: 'Ancho completo',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita el switch',
    },
    showIcons: {
      control: { type: 'boolean' },
      description: 'Muestra icono de check/x dentro del thumb',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Switch/Toggle compacto con descripcion opcional, iconos internos y soporte completo de colores y tamanos. Complementa DuiCheckbox que usa estilo pill.',
      },
    },
  },
} satisfies Meta<typeof DuiSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: false,
    label: 'Modo oscuro',
    description: 'Cambia la apariencia de la interfaz',
    labelPosition: 'right',
    color: 'primary',
    size: 'md',
    block: false,
    disabled: false,
    showIcons: false,
  },
  render: (args) => ({
    components: { DuiSwitch },
    setup() {
      const enabled = ref(args.modelValue);
      return { args, enabled };
    },
    template: `
      <div class="dk:p-4">
        <DuiSwitch v-bind="args" v-model="enabled" />
        <p class="dk:mt-3 dk:text-sm dk:text-zinc-500">Estado: {{ enabled ? 'Activado' : 'Desactivado' }}</p>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sw = canvas.getByRole('switch');
    await expect(sw).not.toBeChecked();

    await userEvent.click(sw);
    await expect(sw).toBeChecked();
    await expect(canvas.getByText('Estado: Activado')).toBeInTheDocument();

    await userEvent.click(sw);
    await expect(sw).not.toBeChecked();
  },
};

export const Colors: Story = {
  render: () => ({
    components: { DuiSwitch },
    setup() {
      const vals = ref({ neutral: true, primary: true, secondary: true, success: true, warning: true, danger: true });
      return { vals };
    },
    template: `
      <div class="dk:p-4 dk:space-y-3">
        <DuiSwitch v-model="vals.neutral" color="neutral" label="Neutral" />
        <DuiSwitch v-model="vals.primary" color="primary" label="Primary" />
        <DuiSwitch v-model="vals.secondary" color="secondary" label="Secondary" />
        <DuiSwitch v-model="vals.success" color="success" label="Success" />
        <DuiSwitch v-model="vals.warning" color="warning" label="Warning" />
        <DuiSwitch v-model="vals.danger" color="danger" label="Danger" />
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { DuiSwitch },
    setup() {
      const sm = ref(true), md = ref(true), lg = ref(true);
      return { sm, md, lg };
    },
    template: `
      <div class="dk:p-4 dk:space-y-4">
        <DuiSwitch v-model="sm" size="sm" label="Small" />
        <DuiSwitch v-model="md" size="md" label="Medium" />
        <DuiSwitch v-model="lg" size="lg" label="Large" />
      </div>
    `,
  }),
};

export const WithIcons: Story = {
  render: () => ({
    components: { DuiSwitch },
    setup() {
      const v1 = ref(true), v2 = ref(false), v3 = ref(true);
      return { v1, v2, v3 };
    },
    template: `
      <div class="dk:p-4 dk:space-y-3">
        <DuiSwitch v-model="v1" label="Notificaciones push" show-icons />
        <DuiSwitch v-model="v2" label="Marketing emails" show-icons />
        <DuiSwitch v-model="v3" label="Autenticacion de dos factores" description="Recomendado para mayor seguridad" show-icons color="success" />
      </div>
    `,
  }),
};

export const SettingsList: Story = {
  render: () => ({
    components: { DuiSwitch },
    setup() {
      const settings = ref({
        darkMode: false,
        notifications: true,
        autoSave: true,
        analytics: false,
        betaFeatures: false,
      });
      return { settings };
    },
    template: `
      <div class="dk:p-4 dk:max-w-sm dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl dk:divide-y dk:divide-zinc-100 dk:dark:divide-zinc-800">
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.darkMode" label="Modo oscuro" description="Cambia el tema de la aplicacion" block label-position="left" />
        </div>
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.notifications" label="Notificaciones" description="Recibe alertas en tiempo real" block label-position="left" color="success" />
        </div>
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.autoSave" label="Autoguardado" description="Guarda cambios automaticamente" block label-position="left" color="primary" />
        </div>
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.analytics" label="Analisis de uso" description="Ayuda a mejorar la plataforma" block label-position="left" />
        </div>
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.betaFeatures" label="Funciones beta" description="Prueba las ultimas novedades" block label-position="left" color="secondary" />
        </div>
      </div>
    `,
  }),
};
