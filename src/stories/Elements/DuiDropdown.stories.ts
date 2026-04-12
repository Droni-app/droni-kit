import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { expect, userEvent, within } from 'storybook/test';

import DuiDropdown from './DuiDropdown.vue';
import DuiDropdownItem from './DuiDropdownItem.vue';
import DuiDropdownSeparator from './DuiDropdownSeparator.vue';
import DuiButton from '../Forms/DuiButton.vue';
import '../../style.css';

const meta = {
  title: 'Elements/Dropdown',
  component: DuiDropdown,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['bottom-start', 'bottom-end', 'bottom', 'top-start', 'top-end', 'top'],
      description: 'Posicion del menu relativa al trigger',
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost'],
      description: 'Estilo visual del menu',
    },
    color: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Color del menu',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamano de los items',
    },
    rounded: {
      control: { type: 'select' },
      options: ['all', 'sm', 'none'],
      description: 'Bordes del menu',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita el dropdown',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Dropdown/Menu con soporte de posicionamiento, variantes, colores y teclado.',
      },
    },
  },
} satisfies Meta<typeof DuiDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placement: 'bottom-start',
    variant: 'solid',
    color: 'neutral',
    size: 'md',
    rounded: 'all',
    disabled: false,
  },
  render: (args) => ({
    components: { DuiDropdown, DuiDropdownItem, DuiDropdownSeparator, DuiButton },
    setup() {
      const open = ref(false);
      return { args, open };
    },
    template: `
      <div class="dk:p-8 dk:flex dk:justify-center">
        <DuiDropdown v-bind="args" v-model="open">
          <template #trigger>
            <DuiButton>Opciones ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Ver perfil" />
          <DuiDropdownItem label="Configuracion" />
          <DuiDropdownItem label="Notificaciones" />
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Cerrar sesion" danger />
        </DuiDropdown>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', { name: /Opciones/i });

    await expect(trigger).toBeInTheDocument();
    await userEvent.click(trigger);

    const menu = canvasElement.querySelector('[role="menu"]');
    await expect(menu).not.toBeNull();

    const items = canvasElement.querySelectorAll('[role="menuitem"]');
    await expect(items.length).toBeGreaterThan(0);

    await userEvent.click(trigger);
    await expect(canvasElement.querySelector('[role="menu"]')).toBeNull();
  },
};

export const Placements: Story = {
  render: () => ({
    components: { DuiDropdown, DuiDropdownItem, DuiButton },
    setup() {
      const states = ref({
        bottomStart: false,
        bottomEnd: false,
        bottom: false,
      });
      return { states };
    },
    template: `
      <div class="dk:p-16 dk:flex dk:gap-4 dk:justify-center">
        <DuiDropdown v-model="states.bottomStart" placement="bottom-start">
          <template #trigger>
            <DuiButton size="sm">Bottom Start ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Item 1" />
          <DuiDropdownItem label="Item 2" />
        </DuiDropdown>

        <DuiDropdown v-model="states.bottom" placement="bottom">
          <template #trigger>
            <DuiButton size="sm">Bottom Center ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Item 1" />
          <DuiDropdownItem label="Item 2" />
        </DuiDropdown>

        <DuiDropdown v-model="states.bottomEnd" placement="bottom-end">
          <template #trigger>
            <DuiButton size="sm">Bottom End ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Item 1" />
          <DuiDropdownItem label="Item 2" />
        </DuiDropdown>
      </div>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { DuiDropdown, DuiDropdownItem, DuiDropdownSeparator, DuiButton },
    setup() {
      const states = ref({ solid: false, outline: false, ghost: false });
      return { states };
    },
    template: `
      <div class="dk:p-12 dk:flex dk:gap-6">
        <DuiDropdown v-model="states.solid" variant="solid">
          <template #trigger><DuiButton>Solid ▾</DuiButton></template>
          <DuiDropdownItem label="Editar" />
          <DuiDropdownItem label="Duplicar" />
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Eliminar" danger />
        </DuiDropdown>

        <DuiDropdown v-model="states.outline" variant="outline">
          <template #trigger><DuiButton variant="outline">Outline ▾</DuiButton></template>
          <DuiDropdownItem label="Editar" />
          <DuiDropdownItem label="Duplicar" />
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Eliminar" danger />
        </DuiDropdown>

        <DuiDropdown v-model="states.ghost" variant="ghost">
          <template #trigger><DuiButton variant="ghost">Ghost ▾</DuiButton></template>
          <DuiDropdownItem label="Editar" />
          <DuiDropdownItem label="Duplicar" />
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Eliminar" danger />
        </DuiDropdown>
      </div>
    `,
  }),
};

export const WithIcons: Story = {
  render: () => ({
    components: { DuiDropdown, DuiDropdownItem, DuiDropdownSeparator, DuiButton },
    setup() {
      const open = ref(false);
      return { open };
    },
    template: `
      <div class="dk:p-12 dk:flex dk:justify-center">
        <DuiDropdown v-model="open">
          <template #trigger>
            <DuiButton>Acciones ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Ver detalle">
            <template #icon>👁</template>
          </DuiDropdownItem>
          <DuiDropdownItem label="Editar">
            <template #icon>✏️</template>
          </DuiDropdownItem>
          <DuiDropdownItem label="Compartir">
            <template #icon>🔗</template>
          </DuiDropdownItem>
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Archivar" disabled>
            <template #icon>📦</template>
          </DuiDropdownItem>
          <DuiDropdownItem label="Eliminar" danger>
            <template #icon>🗑️</template>
          </DuiDropdownItem>
        </DuiDropdown>
      </div>
    `,
  }),
};
