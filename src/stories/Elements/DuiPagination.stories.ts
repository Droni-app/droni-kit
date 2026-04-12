import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { expect, userEvent, within } from 'storybook/test';

import DuiPagination from './DuiPagination.vue';
import '../../style.css';

const meta = {
  title: 'Elements/Pagination',
  component: DuiPagination,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'number' },
      description: 'Pagina actual (v-model)',
    },
    total: {
      control: { type: 'number' },
      description: 'Total de registros',
    },
    perPage: {
      control: { type: 'number' },
      description: 'Registros por pagina',
    },
    siblingCount: {
      control: { type: 'number' },
      description: 'Paginas hermanas visibles a cada lado',
    },
    color: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Color de la pagina activa',
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost'],
      description: 'Estilo visual del boton activo',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamano de los botones',
    },
    rounded: {
      control: { type: 'select' },
      options: ['full', 'md', 'none'],
      description: 'Bordes de los botones',
    },
    showLabels: {
      control: { type: 'boolean' },
      description: 'Muestra "Anterior" y "Siguiente" junto a los iconos',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Paginacion accesible con truncado inteligente, colores, variantes y navegacion por teclado.',
      },
    },
  },
} satisfies Meta<typeof DuiPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: 1,
    total: 100,
    perPage: 10,
    color: 'primary',
    variant: 'solid',
    size: 'md',
    rounded: 'md',
    siblingCount: 1,
    showLabels: false,
  },
  render: (args) => ({
    components: { DuiPagination },
    setup() {
      const page = ref(args.modelValue);
      return { args, page };
    },
    template: `
      <div class="dk:p-4 dk:space-y-2">
        <DuiPagination v-bind="args" v-model="page" />
        <p class="dk:text-xs dk:text-zinc-500">Pagina {{ page }} de {{ Math.ceil(args.total / args.perPage) }}</p>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    await expect(buttons.length).toBeGreaterThan(2);

    const nextBtn = buttons[buttons.length - 1];
    await userEvent.click(nextBtn);

    const currentPage = canvasElement.querySelector('[aria-current="page"]');
    await expect(currentPage?.textContent?.trim()).toBe('2');
  },
};

export const Variants: Story = {
  args: { modelValue: 3, total: 100 },
  render: () => ({
    components: { DuiPagination },
    setup() {
      const p1 = ref(3), p2 = ref(3), p3 = ref(3);
      return { p1, p2, p3 };
    },
    template: `
      <div class="dk:p-4 dk:space-y-5">
        <div class="dk:space-y-1">
          <p class="dk:text-xs dk:text-zinc-400">Solid</p>
          <DuiPagination v-model="p1" :total="100" variant="solid" color="primary" />
        </div>
        <div class="dk:space-y-1">
          <p class="dk:text-xs dk:text-zinc-400">Outline</p>
          <DuiPagination v-model="p2" :total="100" variant="outline" color="primary" />
        </div>
        <div class="dk:space-y-1">
          <p class="dk:text-xs dk:text-zinc-400">Ghost</p>
          <DuiPagination v-model="p3" :total="100" variant="ghost" color="primary" />
        </div>
      </div>
    `,
  }),
};

export const Colors: Story = {
  args: { modelValue: 2, total: 50 },
  render: () => ({
    components: { DuiPagination },
    setup() {
      const pages = ref({ neutral: 2, primary: 2, secondary: 2, success: 2, warning: 2, danger: 2 });
      return { pages };
    },
    template: `
      <div class="dk:p-4 dk:space-y-3">
        <DuiPagination v-model="pages.neutral" :total="50" color="neutral" size="sm" />
        <DuiPagination v-model="pages.primary" :total="50" color="primary" size="sm" />
        <DuiPagination v-model="pages.secondary" :total="50" color="secondary" size="sm" />
        <DuiPagination v-model="pages.success" :total="50" color="success" size="sm" />
        <DuiPagination v-model="pages.warning" :total="50" color="warning" size="sm" />
        <DuiPagination v-model="pages.danger" :total="50" color="danger" size="sm" />
      </div>
    `,
  }),
};

export const LargePagination: Story = {
  args: { modelValue: 15, total: 500 },
  render: () => ({
    components: { DuiPagination },
    setup() {
      const page = ref(15);
      return { page };
    },
    template: `
      <div class="dk:p-4 dk:space-y-2">
        <DuiPagination v-model="page" :total="500" :per-page="10" :sibling-count="2" color="primary" show-labels />
        <p class="dk:text-xs dk:text-zinc-500">Pagina {{ page }} de 50</p>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  args: { modelValue: 3, total: 50 },
  render: () => ({
    components: { DuiPagination },
    setup() {
      const p = ref(3);
      return { p };
    },
    template: `
      <div class="dk:p-4 dk:space-y-4">
        <DuiPagination v-model="p" :total="50" size="sm" color="primary" />
        <DuiPagination v-model="p" :total="50" size="md" color="primary" />
        <DuiPagination v-model="p" :total="50" size="lg" color="primary" />
      </div>
    `,
  }),
};
