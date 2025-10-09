import type { Meta, StoryObj } from '@storybook/vue3-vite';

import DuiLabel from './DuiLabel.vue';
import DuiInput from './DuiInput.vue';
import DuiSelect from './DuiSelect.vue';
import DuiTextarea from './DuiTextarea.vue';
import '../../style.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Forms/Label',
  component: DuiLabel,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    icon: {
      control: { type: 'text' },
    },
    helpText: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
    },
    required: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof DuiLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Nombre de usuario',
    icon: 'mdi mdi-account',
    helpText: 'Introduce tu nombre de usuario único',
    size: 'm',
    required: true,
  },
  render: (args) => ({
    components: { DuiLabel, DuiInput },
    setup() {
      return { args };
    },
    template: `
      <div class="p-4 max-w-md">
        <DuiLabel v-bind="args">
          <DuiInput 
            placeholder="Ej. juan_perez"
            name="username"
            id="username"
          />
        </DuiLabel>
      </div>
    `,
  }),
};

export const WithError: Story = {
  render: () => ({
    components: { DuiLabel, DuiInput },
    template: `
      <div class="p-4 max-w-md">
        <DuiLabel 
          title="Email"
          icon="mdi mdi-email"
          error="El formato del email no es válido"
          required
        >
          <DuiInput 
            type="email"
            placeholder="ejemplo@correo.com"
            name="email"
            id="email"
            class="border-red-500"
          />
        </DuiLabel>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { DuiLabel, DuiInput },
    template: `
      <div class="p-4 space-y-6 max-w-md">
        <DuiLabel 
          title="Campo pequeño"
          size="s"
          icon="mdi mdi-text"
          help-text="Este es un campo pequeño"
        >
          <DuiInput 
            size="sm"
            placeholder="Texto pequeño"
          />
        </DuiLabel>

        <DuiLabel 
          title="Campo mediano"
          size="m"
          icon="mdi mdi-text"
          help-text="Este es un campo mediano (por defecto)"
        >
          <DuiInput 
            size="md"
            placeholder="Texto mediano"
          />
        </DuiLabel>

        <DuiLabel 
          title="Campo grande"
          size="l"
          icon="mdi mdi-text"
          help-text="Este es un campo grande"
        >
          <DuiInput 
            size="lg"
            placeholder="Texto grande"
          />
        </DuiLabel>
      </div>
    `,
  }),
};

export const WithSelect: Story = {
  render: () => ({
    components: { DuiLabel, DuiSelect },
    setup() {
      const countries = [
        { id: 1, name: 'Colombia' },
        { id: 2, name: 'México' },
        { id: 3, name: 'España' },
        { id: 4, name: 'Argentina' },
      ];
      return { countries };
    },
    template: `
      <div class="p-4 max-w-md">
        <DuiLabel 
          title="País de residencia"
          icon="mdi mdi-earth"
          help-text="Selecciona el país donde resides actualmente"
          required
        >
          <DuiSelect 
            :options="countries"
            placeholder="Selecciona un país"
            item-label="name"
            item-value="id"
            name="country"
            id="country"
          />
        </DuiLabel>
      </div>
    `,
  }),
};

export const WithTextarea: Story = {
  render: () => ({
    components: { DuiLabel, DuiTextarea },
    template: `
      <div class="p-4 max-w-md">
        <DuiLabel 
          title="Descripción"
          icon="mdi mdi-text-box"
          help-text="Proporciona una descripción detallada (máximo 500 caracteres)"
        >
          <DuiTextarea 
            placeholder="Escribe tu descripción aquí..."
            rows="4"
            name="description"
            id="description"
          />
        </DuiLabel>
      </div>
    `,
  }),
};

export const WithoutIcon: Story = {
  render: () => ({
    components: { DuiLabel, DuiInput },
    template: `
      <div class="p-4 max-w-md">
        <DuiLabel 
          title="Nombre completo"
          help-text="Introduce tu nombre y apellidos"
          required
        >
          <DuiInput 
            placeholder="Juan Pérez García"
            name="fullname"
            id="fullname"
          />
        </DuiLabel>
      </div>
    `,
  }),
};

export const MinimalLabel: Story = {
  render: () => ({
    components: { DuiLabel, DuiInput },
    template: `
      <div class="p-4 max-w-md">
        <DuiLabel title="Teléfono">
          <DuiInput 
            type="tel"
            placeholder="+57 300 123 4567"
            name="phone"
            id="phone"
          />
        </DuiLabel>
      </div>
    `,
  }),
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => ({
    components: { DuiLabel, DuiInput, DuiSelect },
    setup() {
      const roles = [
        { id: 'admin', name: 'Administrador' },
        { id: 'user', name: 'Usuario' },
        { id: 'guest', name: 'Invitado' },
      ];
      return { roles };
    },
    template: `
      <div class="dark p-4 space-y-6 max-w-md bg-zinc-900 min-h-screen">
        <DuiLabel 
          title="Usuario"
          icon="mdi mdi-account"
          help-text="Nombre de usuario único en el sistema"
          required
        >
          <DuiInput 
            placeholder="usuario123"
            name="username"
          />
        </DuiLabel>

        <DuiLabel 
          title="Contraseña"
          icon="mdi mdi-lock"
          error="La contraseña debe tener al menos 8 caracteres"
          required
        >
          <DuiInput 
            type="password"
            placeholder="••••••••"
            name="password"
          />
        </DuiLabel>

        <DuiLabel 
          title="Rol"
          icon="mdi mdi-shield-account"
          help-text="Selecciona el rol del usuario"
        >
          <DuiSelect 
            :options="roles"
            placeholder="Selecciona un rol"
            item-label="name"
            item-value="id"
            name="role"
          />
        </DuiLabel>
      </div>
    `,
  }),
};