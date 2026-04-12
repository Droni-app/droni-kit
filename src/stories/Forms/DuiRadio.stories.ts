import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { expect, userEvent, within } from 'storybook/test';

import DuiRadio from './DuiRadio.vue';
import '../../style.css';

const planOptions = [
  { value: 'free', label: 'Gratis', description: 'Hasta 3 proyectos, sin colaboradores.' },
  { value: 'pro', label: 'Pro', description: 'Proyectos ilimitados, hasta 5 colaboradores.' },
  { value: 'enterprise', label: 'Enterprise', description: 'Todo incluido + soporte dedicado.' },
];

const meta = {
  title: 'Forms/Radio',
  component: DuiRadio,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Color del radio activo',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamano del radio y etiquetas',
    },
    orientation: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
      description: 'Orientacion del grupo',
    },
    block: {
      control: { type: 'boolean' },
      description: 'Ancho completo con label a la derecha',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita todo el grupo',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Grupo de radio buttons accesible con soporte de descripciones, orientacion y colores.',
      },
    },
  },
} satisfies Meta<typeof DuiRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: 'pro',
    options: planOptions,
    color: 'primary',
    size: 'md',
    orientation: 'vertical',
    disabled: false,
  },
  render: (args) => ({
    components: { DuiRadio },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: `
      <div class="dk:p-4">
        <DuiRadio v-bind="args" v-model="selected" />
        <p class="dk:mt-3 dk:text-sm dk:text-zinc-500">Seleccionado: <strong>{{ selected }}</strong></p>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');
    await expect(radios.length).toBe(3);
    await expect(canvas.getByRole('radio', { name: /Pro/i })).toBeChecked();

    await userEvent.click(canvas.getByRole('radio', { name: /Gratis/i }));
    await expect(canvas.getByRole('radio', { name: /Gratis/i })).toBeChecked();
    await expect(canvas.getByRole('radio', { name: /Pro/i })).not.toBeChecked();
  },
};

export const Horizontal: Story = {
  render: () => ({
    components: { DuiRadio },
    setup() {
      const size = ref('md');
      const sizeOptions = [
        { value: 'xs', label: 'XS' },
        { value: 'sm', label: 'SM' },
        { value: 'md', label: 'MD' },
        { value: 'lg', label: 'LG' },
        { value: 'xl', label: 'XL' },
      ];
      return { size, sizeOptions };
    },
    template: `
      <div class="dk:p-4">
        <DuiRadio v-model="size" :options="sizeOptions" orientation="horizontal" color="secondary" />
        <p class="dk:mt-3 dk:text-sm dk:text-zinc-500">Talla: <strong>{{ size }}</strong></p>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { DuiRadio },
    setup() {
      const opts = [{ value: 'a', label: 'Opcion A' }, { value: 'b', label: 'Opcion B' }];
      const vals = ref({ neutral: 'a', primary: 'a', secondary: 'a', success: 'a', warning: 'a', danger: 'a' });
      return { opts, vals };
    },
    template: `
      <div class="dk:p-4 dk:grid dk:grid-cols-2 dk:gap-6 dk:max-w-md">
        <div v-for="color in ['neutral','primary','secondary','success','warning','danger']" :key="color">
          <p class="dk:text-xs dk:text-zinc-400 dk:capitalize dk:mb-2">{{ color }}</p>
          <DuiRadio v-model="vals[color]" :options="opts" :color="color" orientation="horizontal" size="sm" />
        </div>
      </div>
    `,
  }),
};

export const WithDescriptions: Story = {
  render: () => ({
    components: { DuiRadio },
    setup() {
      const plan = ref('pro');
      return { plan, planOptions };
    },
    template: `
      <div class="dk:p-4 dk:max-w-sm">
        <DuiRadio
          v-model="plan"
          :options="planOptions"
          group-label="Elige tu plan"
          color="primary"
          size="md"
        />
        <p class="dk:mt-4 dk:text-xs dk:text-zinc-500">Plan elegido: <strong class="dk:capitalize">{{ plan }}</strong></p>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { DuiRadio },
    setup() {
      const opts = [
        { value: 'a', label: 'Activo' },
        { value: 'b', label: 'Deshabilitado', disabled: true },
        { value: 'c', label: 'Activo 2' },
      ];
      const val = ref('a');
      return { opts, val };
    },
    template: `
      <div class="dk:p-4">
        <DuiRadio v-model="val" :options="opts" color="primary" />
      </div>
    `,
  }),
};
