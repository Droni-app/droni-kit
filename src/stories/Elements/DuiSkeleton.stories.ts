import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { expect, within } from 'storybook/test';

import DuiSkeleton from './DuiSkeleton.vue';
import '../../style.css';

const meta = {
  title: 'Elements/Skeleton',
  component: DuiSkeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'circular', 'rectangular', 'rounded'],
      description: 'Forma del skeleton',
    },
    width: {
      control: { type: 'text' },
      description: 'Ancho (px, %, rem…)',
    },
    height: {
      control: { type: 'text' },
      description: 'Alto (px, %, rem…)',
    },
    animation: {
      control: { type: 'select' },
      options: ['pulse', 'wave', 'none'],
      description: 'Tipo de animacion',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Skeleton loader para estados de carga. Soporta multiples formas y animaciones.',
      },
    },
  },
} satisfies Meta<typeof DuiSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'text',
    animation: 'pulse',
  },
  render: (args) => ({
    components: { DuiSkeleton },
    setup() { return { args }; },
    template: `<div class="dk:p-4 dk:w-64"><DuiSkeleton v-bind="args" /></div>`,
  }),
  play: async ({ canvasElement }) => {
    const skeleton = canvasElement.querySelector('[aria-hidden="true"]');
    await expect(skeleton).not.toBeNull();
    await expect(skeleton).toHaveClass('dk:animate-pulse');
  },
};

export const Variants: Story = {
  render: () => ({
    components: { DuiSkeleton },
    template: `
      <div class="dk:p-4 dk:space-y-4 dk:max-w-sm">
        <div>
          <p class="dk:text-xs dk:text-zinc-400 dk:mb-1">Text</p>
          <DuiSkeleton variant="text" />
        </div>
        <div>
          <p class="dk:text-xs dk:text-zinc-400 dk:mb-1">Circular</p>
          <DuiSkeleton variant="circular" width="48" height="48" />
        </div>
        <div>
          <p class="dk:text-xs dk:text-zinc-400 dk:mb-1">Rectangular</p>
          <DuiSkeleton variant="rectangular" height="80" />
        </div>
        <div>
          <p class="dk:text-xs dk:text-zinc-400 dk:mb-1">Rounded</p>
          <DuiSkeleton variant="rounded" height="80" />
        </div>
      </div>
    `,
  }),
};

export const CardSkeleton: Story = {
  render: () => ({
    components: { DuiSkeleton },
    template: `
      <div class="dk:p-4 dk:max-w-sm">
        <div class="dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl dk:p-4 dk:space-y-4">
          <DuiSkeleton variant="rounded" height="160" />
          <div class="dk:flex dk:items-center dk:gap-3">
            <DuiSkeleton variant="circular" width="40" height="40" />
            <div class="dk:flex-1 dk:space-y-2">
              <DuiSkeleton variant="text" width="60%" />
              <DuiSkeleton variant="text" width="40%" />
            </div>
          </div>
          <div class="dk:space-y-2">
            <DuiSkeleton variant="text" />
            <DuiSkeleton variant="text" />
            <DuiSkeleton variant="text" width="75%" />
          </div>
        </div>
      </div>
    `,
  }),
};

export const ListSkeleton: Story = {
  render: () => ({
    components: { DuiSkeleton },
    template: `
      <div class="dk:p-4 dk:max-w-sm dk:space-y-3">
        <div v-for="i in 4" :key="i" class="dk:flex dk:items-center dk:gap-3">
          <DuiSkeleton variant="circular" width="40" height="40" />
          <div class="dk:flex-1 dk:space-y-2">
            <DuiSkeleton variant="text" :width="i % 2 === 0 ? '70%' : '55%'" />
            <DuiSkeleton variant="text" width="40%" />
          </div>
        </div>
      </div>
    `,
  }),
};

export const TableSkeleton: Story = {
  render: () => ({
    components: { DuiSkeleton },
    template: `
      <div class="dk:p-4 dk:max-w-2xl">
        <div class="dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl dk:overflow-hidden">
          <div class="dk:grid dk:grid-cols-4 dk:gap-4 dk:p-3 dk:border-b dk:border-zinc-200 dk:dark:border-zinc-700">
            <DuiSkeleton v-for="i in 4" :key="i" variant="text" height="12" />
          </div>
          <div v-for="row in 5" :key="row" class="dk:grid dk:grid-cols-4 dk:gap-4 dk:p-3 dk:border-b dk:border-zinc-100 dk:dark:border-zinc-800 last:border-0">
            <DuiSkeleton v-for="col in 4" :key="col" variant="text" :width="col === 1 ? '80%' : '60%'" />
          </div>
        </div>
      </div>
    `,
  }),
};

export const LoadingToggle: Story = {
  render: () => ({
    components: { DuiSkeleton },
    setup() {
      const loading = ref(true);
      return { loading };
    },
    template: `
      <div class="dk:p-4 dk:max-w-sm dk:space-y-4">
        <button
          class="dk:px-3 dk:py-1.5 dk:text-sm dk:rounded-lg dk:bg-slate-600 dk:text-white dk:hover:bg-slate-700 dk:transition-colors"
          @click="loading = !loading">
          {{ loading ? 'Mostrar contenido' : 'Mostrar skeleton' }}
        </button>

        <div v-if="loading" class="dk:space-y-2">
          <DuiSkeleton variant="rounded" height="120" />
          <DuiSkeleton variant="text" />
          <DuiSkeleton variant="text" width="70%" />
        </div>
        <div v-else class="dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl dk:p-4 dk:space-y-2">
          <div class="dk:bg-slate-100 dk:dark:bg-slate-800 dk:rounded-lg dk:h-[120px] dk:flex dk:items-center dk:justify-center dk:text-zinc-400">
            Imagen del producto
          </div>
          <p class="dk:text-sm dk:font-semibold dk:text-zinc-900 dk:dark:text-zinc-100">Producto Premium</p>
          <p class="dk:text-xs dk:text-zinc-500">Descripcion breve del producto seleccionado.</p>
        </div>
      </div>
    `,
  }),
};
