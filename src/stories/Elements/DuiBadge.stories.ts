import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { expect, within } from 'storybook/test';

import DuiBadge from './DuiBadge.vue';
import '../../style.css';

const meta = {
  title: 'Elements/Badge',
  component: DuiBadge,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Texto del badge',
    },
    color: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Color del badge',
    },
    variant: {
      control: { type: 'select' },
      options: ['soft', 'solid', 'outline'],
      description: 'Estilo visual',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Tamano del badge',
    },
    rounded: {
      control: { type: 'select' },
      options: ['full', 'md', 'none'],
      description: 'Estilo de bordes',
    },
    dot: {
      control: { type: 'boolean' },
      description: 'Muestra un punto de color antes del texto',
    },
    dismissible: {
      control: { type: 'boolean' },
      description: 'Agrega un boton para quitar el badge',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Badge/Tag versatil con variantes solid, soft y outline, soporte de dot indicator y dismiss.',
      },
    },
  },
} satisfies Meta<typeof DuiBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Nuevo',
    color: 'primary',
    variant: 'soft',
    size: 'sm',
    rounded: 'full',
    dot: false,
    dismissible: false,
  },
  render: (args) => ({
    components: { DuiBadge },
    setup() { return { args }; },
    template: `<div class="dk:p-4"><DuiBadge v-bind="args" /></div>`,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText('Nuevo');
    await expect(badge).toBeInTheDocument();
  },
};

export const Colors: Story = {
  render: () => ({
    components: { DuiBadge },
    template: `
      <div class="dk:p-4 dk:flex dk:flex-wrap dk:gap-2">
        <DuiBadge label="Neutral" color="neutral" />
        <DuiBadge label="Primary" color="primary" />
        <DuiBadge label="Secondary" color="secondary" />
        <DuiBadge label="Success" color="success" />
        <DuiBadge label="Warning" color="warning" />
        <DuiBadge label="Danger" color="danger" />
      </div>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { DuiBadge },
    template: `
      <div class="dk:p-4 dk:space-y-3">
        <div class="dk:flex dk:flex-wrap dk:gap-2">
          <DuiBadge label="Soft Neutral" color="neutral" variant="soft" />
          <DuiBadge label="Soft Primary" color="primary" variant="soft" />
          <DuiBadge label="Soft Success" color="success" variant="soft" />
          <DuiBadge label="Soft Danger" color="danger" variant="soft" />
        </div>
        <div class="dk:flex dk:flex-wrap dk:gap-2">
          <DuiBadge label="Solid Neutral" color="neutral" variant="solid" />
          <DuiBadge label="Solid Primary" color="primary" variant="solid" />
          <DuiBadge label="Solid Success" color="success" variant="solid" />
          <DuiBadge label="Solid Danger" color="danger" variant="solid" />
        </div>
        <div class="dk:flex dk:flex-wrap dk:gap-2">
          <DuiBadge label="Outline Neutral" color="neutral" variant="outline" />
          <DuiBadge label="Outline Primary" color="primary" variant="outline" />
          <DuiBadge label="Outline Success" color="success" variant="outline" />
          <DuiBadge label="Outline Danger" color="danger" variant="outline" />
        </div>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { DuiBadge },
    template: `
      <div class="dk:p-4 dk:flex dk:items-center dk:gap-3">
        <DuiBadge label="XS" color="primary" size="xs" />
        <DuiBadge label="SM" color="primary" size="sm" />
        <DuiBadge label="MD" color="primary" size="md" />
        <DuiBadge label="LG" color="primary" size="lg" />
      </div>
    `,
  }),
};

export const WithDot: Story = {
  render: () => ({
    components: { DuiBadge },
    template: `
      <div class="dk:p-4 dk:flex dk:flex-wrap dk:gap-2">
        <DuiBadge label="Activo" color="success" dot />
        <DuiBadge label="En revision" color="warning" dot />
        <DuiBadge label="Rechazado" color="danger" dot />
        <DuiBadge label="Pendiente" color="neutral" dot />
      </div>
    `,
  }),
};

export const Dismissible: Story = {
  render: () => ({
    components: { DuiBadge },
    setup() {
      const tags = ref(['Vue 3', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Vite']);
      return { tags };
    },
    template: `
      <div class="dk:p-4">
        <div class="dk:flex dk:flex-wrap dk:gap-2">
          <DuiBadge
            v-for="tag in tags"
            :key="tag"
            :label="tag"
            color="primary"
            dismissible
            @dismiss="tags = tags.filter(t => t !== tag)"
          />
        </div>
        <p v-if="tags.length === 0" class="dk:mt-2 dk:text-sm dk:text-zinc-400">Sin etiquetas</p>
      </div>
    `,
  }),
};

export const WithIcon: Story = {
  render: () => ({
    components: { DuiBadge },
    template: `
      <div class="dk:p-4 dk:flex dk:flex-wrap dk:gap-2">
        <DuiBadge label="Verificado" color="success">
          <template #icon>✓</template>
        </DuiBadge>
        <DuiBadge label="Admin" color="primary" variant="solid">
          <template #icon>⭐</template>
        </DuiBadge>
        <DuiBadge label="Beta" color="secondary" variant="outline">
          <template #icon>β</template>
        </DuiBadge>
      </div>
    `,
  }),
};
