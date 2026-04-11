import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed, ref, watch } from 'vue';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import DuiModal from './DuiModal.vue';
import DuiButton from '../Forms/DuiButton.vue';
import '../../style.css';

const meta = {
  title: 'Elements/Modal',
  component: DuiModal,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    title: {
      control: { type: 'text' },
      defaultValue: 'Confirmar accion',
    },
    description: {
      control: { type: 'text' },
      defaultValue: 'Esta accion no se puede deshacer.',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
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
    rounded: {
      control: { type: 'select' },
      options: ['all', 'top', 'bottom', 'left', 'right', 'none'],
      defaultValue: 'all',
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
    centered: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    scrollable: {
      control: { type: 'boolean' },
      defaultValue: true,
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
} satisfies Meta<typeof DuiModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const modalRender = (args: any) => ({
  components: { DuiModal, DuiButton },
  setup() {
    const isOpen = ref(Boolean(args.modelValue));

    const modalProps = computed(() => {
      const { modelValue, ...rest } = args;
      return rest;
    });

    watch(
      () => args.modelValue,
      (next) => {
        isOpen.value = Boolean(next);
      },
    );

    return { args, isOpen, modalProps };
  },
  template: `
    <div class="dk:min-h-[16rem] dk:flex dk:items-center dk:justify-center">
      <DuiButton color="primary" @click="isOpen = true">Abrir modal</DuiButton>

      <DuiModal
        v-model="isOpen"
        v-bind="modalProps">
        <p class="dk:leading-relaxed">
          Este modal esta pensado para reutilizarse en confirmaciones, formularios cortos,
          vistas de detalle y cualquier flujo que necesite foco temporal.
        </p>

        <template #footer>
          <DuiButton variant="ghost" color="neutral" @click="isOpen = false">Cancelar</DuiButton>
          <DuiButton color="primary" @click="isOpen = false">Confirmar</DuiButton>
        </template>
      </DuiModal>
    </div>
  `,
});

export const Default: Story = {
  args: {
    modelValue: false,
    title: 'Confirmar accion',
    description: 'Esta accion no se puede deshacer.',
    size: 'md',
    variant: 'solid',
    color: 'neutral',
    rounded: 'all',
    showClose: true,
    closeOnBackdrop: true,
    closeOnEsc: true,
    persistent: false,
    centered: true,
    scrollable: true,
    blurBackdrop: true,
    zIndex: 50,
  },
  render: modalRender,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);

    await userEvent.click(canvas.getByRole('button', { name: 'Abrir modal' }));
    await expect(body.getByRole('dialog')).toBeInTheDocument();

    await userEvent.click(body.getByRole('button', { name: 'Cancelar' }));
    await waitFor(() => {
      expect(body.queryByRole('dialog')).not.toBeInTheDocument();
    });
  },
};

export const Persistent: Story = {
  args: {
    ...Default.args,
    title: 'Proceso en curso',
    description: 'Este modal no se puede cerrar con backdrop ni con ESC.',
    persistent: true,
  },
  render: modalRender,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);

    await userEvent.click(canvas.getByRole('button', { name: 'Abrir modal' }));
    const dialog = body.getByRole('dialog');
    await expect(dialog).toBeInTheDocument();

    const overlay = dialog.parentElement?.parentElement;
    if (!overlay) {
      throw new Error('Overlay not found for modal');
    }

    await userEvent.click(overlay);
    await expect(body.getByRole('dialog')).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');
    await expect(body.getByRole('dialog')).toBeInTheDocument();

    await userEvent.click(body.getByRole('button', { name: 'Confirmar' }));
    await waitFor(() => {
      expect(body.queryByRole('dialog')).not.toBeInTheDocument();
    });
  },
};

export const LargeScrollable: Story = {
  args: {
    ...Default.args,
    title: 'Terminos y condiciones',
    description: 'Ejemplo de contenido extenso.',
    size: 'lg',
    scrollable: true,
  },
  render: (args: any) => ({
    components: { DuiModal, DuiButton },
    setup() {
      const isOpen = ref(false);
      const modalProps = computed(() => {
        const { modelValue, ...rest } = args;
        return rest;
      });
      return { isOpen, modalProps };
    },
    template: `
      <div class="dk:min-h-[16rem] dk:flex dk:items-center dk:justify-center">
        <DuiButton color="secondary" @click="isOpen = true">Ver contenido largo</DuiButton>

        <DuiModal v-model="isOpen" v-bind="modalProps">
          <div class="dk:space-y-4">
            <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>2. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
            <p>3. Aenean lacinia bibendum nulla sed consectetur.</p>
            <p>4. Cras mattis consectetur purus sit amet fermentum.</p>
            <p>5. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>6. Maecenas faucibus mollis interdum.</p>
            <p>7. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>8. Sed posuere consectetur est at lobortis.</p>
            <p>9. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            <p>10. Nulla vitae elit libero, a pharetra augue.</p>
            <p>11. Vestibulum id ligula porta felis euismod semper.</p>
            <p>12. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          </div>

          <template #footer>
            <DuiButton color="primary" @click="isOpen = false">Aceptar</DuiButton>
          </template>
        </DuiModal>
      </div>
    `,
  }),
};

export const Variants: Story = {
  args: {
    ...Default.args,
  },
  render: () => ({
    components: { DuiModal, DuiButton },
    setup() {
      const solidOpen = ref(false);
      const outlineOpen = ref(false);
      const ghostOpen = ref(false);
      return { solidOpen, outlineOpen, ghostOpen };
    },
    template: `
      <div class="dk:flex dk:flex-wrap dk:gap-3">
        <DuiButton @click="solidOpen = true">Solid</DuiButton>
        <DuiButton variant="outline" @click="outlineOpen = true">Outline</DuiButton>
        <DuiButton variant="ghost" @click="ghostOpen = true">Ghost</DuiButton>

        <DuiModal v-model="solidOpen" title="Solid" description="Variante solida" variant="solid" color="primary">
          <p>Modal con fondo solido y contraste alto.</p>
        </DuiModal>

        <DuiModal v-model="outlineOpen" title="Outline" description="Variante con borde" variant="outline" color="success">
          <p>Modal con presencia visual basada en borde.</p>
        </DuiModal>

        <DuiModal v-model="ghostOpen" title="Ghost" description="Variante translúcida" variant="ghost" color="secondary" blur-backdrop>
          <p>Modal con look translúcido para contextos modernos.</p>
        </DuiModal>
      </div>
    `,
  }),
};

export const EscapeClose: Story = {
  args: {
    ...Default.args,
    persistent: false,
    closeOnEsc: true,
  },
  render: modalRender,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);

    await userEvent.click(canvas.getByRole('button', { name: 'Abrir modal' }));
    await expect(body.getByRole('dialog')).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(body.queryByRole('dialog')).not.toBeInTheDocument();
    });
  },
};
