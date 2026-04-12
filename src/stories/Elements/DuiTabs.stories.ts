import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { expect, within } from 'storybook/test';

import DuiTabs from './DuiTabs.vue';
import '../../style.css';

const sampleTabs = [
  { value: 'overview', label: 'Resumen' },
  { value: 'activity', label: 'Actividad' },
  { value: 'settings', label: 'Configuracion' },
  { value: 'disabled', label: 'Deshabilitado', disabled: true },
];

const meta = {
  title: 'Elements/Tabs',
  component: DuiTabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['underline', 'pills', 'boxed'],
      description: 'Estilo visual de las tabs',
    },
    color: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Color del tab activo',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamano de los tabs',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Distribuye los tabs en todo el ancho',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente de tabs accesible con tres variantes (underline, pills, boxed), colores, tamanos y soporte de teclado.',
      },
    },
  },
} satisfies Meta<typeof DuiTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: 'overview',
    tabs: sampleTabs,
    variant: 'underline',
    color: 'primary',
    size: 'md',
    fullWidth: false,
  },
  render: (args) => ({
    components: { DuiTabs },
    setup() {
      const active = ref(args.modelValue);
      return { args, active };
    },
    template: `
      <div class="dk:p-4 dk:max-w-xl">
        <DuiTabs v-bind="args" v-model="active">
          <template #overview>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
              Contenido del panel <strong>Resumen</strong>. Aqui va informacion general del recurso.
            </p>
          </template>
          <template #activity>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
              Historial de <strong>Actividad</strong> reciente del usuario o proyecto.
            </p>
          </template>
          <template #settings>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
              Panel de <strong>Configuracion</strong> con opciones avanzadas.
            </p>
          </template>
        </DuiTabs>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole('tab');

    await expect(tabs.length).toBe(4);
    await expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    await expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    await expect(tabs[3]).toBeDisabled();
  },
};

export const Pills: Story = {
  args: { modelValue: 'overview', tabs: sampleTabs },
  render: () => ({
    components: { DuiTabs },
    setup() {
      const active = ref('overview');
      const tabs = [
        { value: 'overview', label: 'Resumen', icon: '📊' },
        { value: 'team', label: 'Equipo', icon: '👥', badge: 4 },
        { value: 'docs', label: 'Documentos', icon: '📄' },
      ];
      return { active, tabs };
    },
    template: `
      <div class="dk:p-4 dk:max-w-xl">
        <DuiTabs v-model="active" :tabs="tabs" variant="pills" color="secondary">
          <template #overview>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Vista de resumen con graficos y metricas.</p>
          </template>
          <template #team>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Lista de miembros del equipo.</p>
          </template>
          <template #docs>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Documentos y archivos adjuntos.</p>
          </template>
        </DuiTabs>
      </div>
    `,
  }),
};

export const Boxed: Story = {
  args: { modelValue: 'month', tabs: sampleTabs },
  render: () => ({
    components: { DuiTabs },
    setup() {
      const active = ref('month');
      const tabs = [
        { value: 'week', label: 'Semana' },
        { value: 'month', label: 'Mes' },
        { value: 'year', label: 'Ano' },
      ];
      return { active, tabs };
    },
    template: `
      <div class="dk:p-4 dk:max-w-sm">
        <DuiTabs v-model="active" :tabs="tabs" variant="boxed" color="neutral" :full-width="true">
          <template #week>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Datos de la semana actual.</p>
          </template>
          <template #month>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Datos del mes actual.</p>
          </template>
          <template #year>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Datos del ano completo.</p>
          </template>
        </DuiTabs>
      </div>
    `,
  }),
};

export const Colors: Story = {
  args: { modelValue: 'a', tabs: sampleTabs },
  render: () => ({
    components: { DuiTabs },
    setup() {
      const tabs = [{ value: 'a', label: 'Tab A' }, { value: 'b', label: 'Tab B' }, { value: 'c', label: 'Tab C' }];
      const actives = ref({ neutral: 'a', primary: 'a', secondary: 'a', success: 'a', warning: 'a', danger: 'a' });
      return { tabs, actives };
    },
    template: `
      <div class="dk:p-4 dk:space-y-6 dk:max-w-lg">
        <DuiTabs v-model="actives.neutral" :tabs="tabs" color="neutral" variant="underline">
          <template #a><p class="dk:text-sm">Neutral</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
        <DuiTabs v-model="actives.primary" :tabs="tabs" color="primary" variant="underline">
          <template #a><p class="dk:text-sm">Primary</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
        <DuiTabs v-model="actives.secondary" :tabs="tabs" color="secondary" variant="underline">
          <template #a><p class="dk:text-sm">Secondary</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
        <DuiTabs v-model="actives.success" :tabs="tabs" color="success" variant="underline">
          <template #a><p class="dk:text-sm">Success</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
        <DuiTabs v-model="actives.danger" :tabs="tabs" color="danger" variant="underline">
          <template #a><p class="dk:text-sm">Danger</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
      </div>
    `,
  }),
};
