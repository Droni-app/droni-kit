import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed, ref, watch } from 'vue';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import DuiDrawer from './DuiDrawer.vue';
import DuiButton from '../Forms/DuiButton.vue';
import '../../style.css';

const meta = {
  title: 'Elements/Drawer',
  component: DuiDrawer,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    name: {
      control: { type: 'text' },
      defaultValue: 'Detalle del pedido',
    },
    position: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
      defaultValue: 'right',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost'],
      defaultValue: 'solid',
    },
    color: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger'],
      defaultValue: 'neutral',
    },
    showClose: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    closeOnBackdrop: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    closeOnEsc: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    persistent: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    blurBackdrop: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    zIndex: {
      control: { type: 'number' },
      defaultValue: 50,
    },
  },
} satisfies Meta<typeof DuiDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const drawerRender = (args: any) => ({
  components: { DuiDrawer, DuiButton },
  setup() {
    const isOpen = ref(Boolean(args.modelValue));

    const drawerProps = computed(() => {
      const { modelValue, ...rest } = args;
      return rest;
    });

    watch(
      () => args.modelValue,
      (next) => {
        isOpen.value = Boolean(next);
      },
    );

    return { args, isOpen, drawerProps };
  },
  template: `
    <div class="dk:min-h-[16rem] dk:flex dk:items-center dk:justify-center">
      <DuiButton color="primary" @click="isOpen = true">Abrir panel</DuiButton>

      <DuiDrawer
        v-model="isOpen"
        v-bind="drawerProps">
        <p class="dk:leading-relaxed">
          Este panel lateral es ideal para detalles, filtros o formularios cortos
          que no requieren abandonar el contexto de la pantalla actual.
        </p>

        <template #actions>
          <DuiButton variant="ghost" color="neutral" @click="isOpen = false">Cancelar</DuiButton>
          <DuiButton color="primary" @click="isOpen = false">Guardar</DuiButton>
        </template>
      </DuiDrawer>
    </div>
  `,
});

export const Default: Story = {
  args: {
    modelValue: false,
    name: 'Detalle del pedido',
    position: 'right',
    size: 'md',
    variant: 'solid',
    color: 'neutral',
    showClose: true,
    closeOnBackdrop: true,
    closeOnEsc: true,
    persistent: false,
    blurBackdrop: true,
    zIndex: 50,
  },
  render: drawerRender,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);

    await userEvent.click(canvas.getByRole('button', { name: 'Abrir panel' }));
    await expect(body.getByRole('dialog')).toBeInTheDocument();

    await userEvent.click(body.getByRole('button', { name: 'Cancelar' }));
    await waitFor(() => {
      expect(body.queryByRole('dialog')).not.toBeInTheDocument();
    });
  },
};

export const Positions: Story = {
  args: {
    ...Default.args,
  },
  render: () => ({
    components: { DuiDrawer, DuiButton },
    setup() {
      const leftOpen = ref(false);
      const rightOpen = ref(false);
      const topOpen = ref(false);
      const bottomOpen = ref(false);
      return { leftOpen, rightOpen, topOpen, bottomOpen };
    },
    template: `
      <div class="dk:flex dk:flex-wrap dk:gap-3">
        <DuiButton @click="leftOpen = true">Izquierda</DuiButton>
        <DuiButton @click="rightOpen = true">Derecha</DuiButton>
        <DuiButton @click="topOpen = true">Arriba</DuiButton>
        <DuiButton @click="bottomOpen = true">Abajo</DuiButton>

        <DuiDrawer v-model="leftOpen" position="left" name="Panel izquierdo">
          <p>Contenido del panel que entra desde la izquierda.</p>
        </DuiDrawer>

        <DuiDrawer v-model="rightOpen" position="right" name="Panel derecho">
          <p>Contenido del panel que entra desde la derecha.</p>
        </DuiDrawer>

        <DuiDrawer v-model="topOpen" position="top" name="Panel superior">
          <p>Contenido del panel que entra desde arriba.</p>
        </DuiDrawer>

        <DuiDrawer v-model="bottomOpen" position="bottom" name="Panel inferior">
          <p>Contenido del panel que entra desde abajo.</p>
        </DuiDrawer>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  args: {
    ...Default.args,
  },
  render: () => ({
    components: { DuiDrawer, DuiButton },
    setup() {
      const smOpen = ref(false);
      const mdOpen = ref(false);
      const lgOpen = ref(false);
      const xlOpen = ref(false);
      return { smOpen, mdOpen, lgOpen, xlOpen };
    },
    template: `
      <div class="dk:flex dk:flex-wrap dk:gap-3">
        <DuiButton @click="smOpen = true">sm (iconos)</DuiButton>
        <DuiButton @click="mdOpen = true">md (tercio)</DuiButton>
        <DuiButton @click="lgOpen = true">lg (mitad)</DuiButton>
        <DuiButton @click="xlOpen = true">xl (mayor parte)</DuiButton>

        <DuiDrawer v-model="smOpen" size="sm" :show-close="false">
          <p>🏠</p>
          <p>⚙️</p>
        </DuiDrawer>

        <DuiDrawer v-model="mdOpen" size="md" name="Tamaño md">
          <p>Cubre un tercio de la pantalla en escritorio.</p>
        </DuiDrawer>

        <DuiDrawer v-model="lgOpen" size="lg" name="Tamaño lg">
          <p>Cubre la mitad de la pantalla en escritorio.</p>
        </DuiDrawer>

        <DuiDrawer v-model="xlOpen" size="xl" name="Tamaño xl">
          <p>Cubre la mayor parte de la pantalla en escritorio.</p>
        </DuiDrawer>
      </div>
    `,
  }),
};

export const Persistent: Story = {
  args: {
    ...Default.args,
    name: 'Proceso en curso',
    persistent: true,
  },
  render: drawerRender,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);

    await userEvent.click(canvas.getByRole('button', { name: 'Abrir panel' }));
    const dialog = body.getByRole('dialog');
    await expect(dialog).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');
    await expect(body.getByRole('dialog')).toBeInTheDocument();

    await userEvent.click(body.getByRole('button', { name: 'Guardar' }));
    await waitFor(() => {
      expect(body.queryByRole('dialog')).not.toBeInTheDocument();
    });
  },
};

export const EscapeClose: Story = {
  args: {
    ...Default.args,
    persistent: false,
    closeOnEsc: true,
  },
  render: drawerRender,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);

    await userEvent.click(canvas.getByRole('button', { name: 'Abrir panel' }));
    await expect(body.getByRole('dialog')).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(body.queryByRole('dialog')).not.toBeInTheDocument();
    });
  },
};
