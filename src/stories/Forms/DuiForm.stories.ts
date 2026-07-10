import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';

import DuiForm from './DuiForm.vue';
import DuiInput from './DuiInput.vue';
import DuiLabel from './DuiLabel.vue';
import DuiSelect from './DuiSelect.vue';
import DuiTextarea from './DuiTextarea.vue';
import DuiButton from './DuiButton.vue';
import DuiCheckbox from './DuiCheckbox.vue';
import DuiSwitch from './DuiSwitch.vue';
import DuiRadio from './DuiRadio.vue';
import '../../style.css';

const meta = {
  title: 'Forms/Form',
  component: DuiForm,
  tags: ['autodocs'],
  argTypes: {
    novalidate: {
      control: { type: 'boolean' },
      description: 'Desactiva la validación nativa del navegador',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Muestra overlay de carga y deshabilita los campos',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita visualmente todos los campos del formulario',
    },
    method: {
      control: { type: 'select' },
      options: ['get', 'post'],
      description: 'Método HTTP del formulario',
    },
    action: {
      control: { type: 'text' },
      description: 'URL de acción del formulario',
    },
    gap: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Espaciado entre campos del formulario',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Componente contenedor de formulario compatible con Vue 3 y Nuxt. Gestiona el envío, el estado de carga/deshabilitado y expone slots para cabecera, contenido principal y pie de acciones.',
      },
    },
  },
} satisfies Meta<typeof DuiForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    novalidate: false,
    loading: false,
    disabled: false,
    gap: 'md',
  },
  render: (args) => ({
    components: { DuiForm, DuiLabel, DuiInput, DuiButton },
    setup() {
      const form = ref({ name: '', email: '' });
      const lastSubmit = ref<Record<string, string> | null>(null);
      function onSubmit({ formData }: { formData: FormData }) {
        lastSubmit.value = Object.fromEntries(formData.entries()) as Record<string, string>;
      }
      return { args, form, lastSubmit, onSubmit };
    },
    template: `
      <div class="dk:p-6 dk:max-w-md">
        <DuiForm v-bind="args" @submit="onSubmit">
          <template #header>
            <h2 class="dk:text-lg dk:font-semibold dk:text-zinc-800 dk:dark:text-zinc-100">Formulario básico</h2>
            <p class="dk:text-sm dk:text-zinc-500 dk:dark:text-zinc-400 dk:mt-1">Completa los campos para continuar.</p>
          </template>

          <DuiLabel title="Nombre completo" required>
            <DuiInput v-model="form.name" name="name" placeholder="Juan Pérez" required />
          </DuiLabel>

          <DuiLabel title="Correo electrónico" required>
            <DuiInput v-model="form.email" name="email" type="email" placeholder="juan@ejemplo.com" required />
          </DuiLabel>

          <template #footer>
            <DuiButton type="submit" color="primary">Enviar</DuiButton>
            <DuiButton type="reset" variant="outline" color="neutral">Limpiar</DuiButton>
          </template>
        </DuiForm>

        <div v-if="lastSubmit" class="dk:mt-4 dk:p-3 dk:bg-zinc-100 dk:dark:bg-zinc-800 dk:rounded dk:text-xs dk:text-zinc-600 dk:dark:text-zinc-400">
          <strong class="dk:block dk:mb-1">Último envío:</strong>
          <pre>{{ JSON.stringify(lastSubmit, null, 2) }}</pre>
        </div>
      </div>
    `,
  }),
};

// Loading state
export const Loading: Story = {
  args: {
    loading: true,
    gap: 'md',
  },
  render: (args) => ({
    components: { DuiForm, DuiLabel, DuiInput, DuiButton },
    setup() {
      const form = ref({ name: 'Ana García', email: 'ana@ejemplo.com' });
      return { args, form };
    },
    template: `
      <div class="dk:p-6 dk:max-w-md">
        <DuiForm v-bind="args">
          <template #header>
            <h2 class="dk:text-lg dk:font-semibold dk:text-zinc-800 dk:dark:text-zinc-100">Estado de carga</h2>
          </template>

          <DuiLabel title="Nombre completo">
            <DuiInput v-model="form.name" name="name" />
          </DuiLabel>

          <DuiLabel title="Correo electrónico">
            <DuiInput v-model="form.email" name="email" type="email" />
          </DuiLabel>

          <template #footer>
            <DuiButton type="submit" color="primary" :loading="true">Guardando...</DuiButton>
          </template>
        </DuiForm>
      </div>
    `,
  }),
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    gap: 'md',
  },
  render: (args) => ({
    components: { DuiForm, DuiLabel, DuiInput, DuiButton },
    setup() {
      const form = ref({ name: 'Carlos López', email: 'carlos@ejemplo.com' });
      return { args, form };
    },
    template: `
      <div class="dk:p-6 dk:max-w-md">
        <DuiForm v-bind="args">
          <template #header>
            <h2 class="dk:text-lg dk:font-semibold dk:text-zinc-800 dk:dark:text-zinc-100">Formulario deshabilitado</h2>
          </template>

          <DuiLabel title="Nombre completo">
            <DuiInput v-model="form.name" name="name" />
          </DuiLabel>

          <DuiLabel title="Correo electrónico">
            <DuiInput v-model="form.email" name="email" type="email" />
          </DuiLabel>

          <template #footer>
            <DuiButton type="submit" color="primary" :disabled="true">Enviar</DuiButton>
          </template>
        </DuiForm>
      </div>
    `,
  }),
};

// Gap variants
export const GapVariants: Story = {
  render: () => ({
    components: { DuiForm, DuiLabel, DuiInput, DuiButton },
    setup() {
      const form = ref({ name: '', email: '' });
      return { form };
    },
    template: `
      <div class="dk:p-6 dk:space-y-10 dk:max-w-md">
        <div>
          <p class="dk:text-sm dk:font-medium dk:text-zinc-500 dk:mb-3">gap="sm"</p>
          <DuiForm gap="sm">
            <DuiLabel title="Nombre"><DuiInput v-model="form.name" placeholder="Juan Pérez" /></DuiLabel>
            <DuiLabel title="Email"><DuiInput v-model="form.email" type="email" placeholder="juan@ejemplo.com" /></DuiLabel>
          </DuiForm>
        </div>

        <div>
          <p class="dk:text-sm dk:font-medium dk:text-zinc-500 dk:mb-3">gap="md" (por defecto)</p>
          <DuiForm gap="md">
            <DuiLabel title="Nombre"><DuiInput v-model="form.name" placeholder="Juan Pérez" /></DuiLabel>
            <DuiLabel title="Email"><DuiInput v-model="form.email" type="email" placeholder="juan@ejemplo.com" /></DuiLabel>
          </DuiForm>
        </div>

        <div>
          <p class="dk:text-sm dk:font-medium dk:text-zinc-500 dk:mb-3">gap="lg"</p>
          <DuiForm gap="lg">
            <DuiLabel title="Nombre"><DuiInput v-model="form.name" placeholder="Juan Pérez" /></DuiLabel>
            <DuiLabel title="Email"><DuiInput v-model="form.email" type="email" placeholder="juan@ejemplo.com" /></DuiLabel>
          </DuiForm>
        </div>
      </div>
    `,
  }),
};

// Full form example with all field types
export const FullFormExample: Story = {
  render: () => ({
    components: {
      DuiForm,
      DuiLabel,
      DuiInput,
      DuiSelect,
      DuiTextarea,
      DuiButton,
      DuiCheckbox,
      DuiSwitch,
      DuiRadio,
    },
    setup() {
      const loading = ref(false);
      const lastSubmit = ref<Record<string, string> | null>(null);

      const form = ref({
        name: '',
        email: '',
        country: '',
        about: '',
        plan: 'free',
        notifications: false,
        terms: false,
      });

      const countries = [
        { id: 'co', name: 'Colombia' },
        { id: 'mx', name: 'México' },
        { id: 'es', name: 'España' },
        { id: 'pe', name: 'Perú' },
      ];

      const planOptions = [
        { label: 'Gratuito', value: 'free', description: 'Funcionalidades básicas' },
        { label: 'Pro', value: 'pro', description: 'Todas las funcionalidades' },
        { label: 'Enterprise', value: 'enterprise', description: 'Para equipos grandes' },
      ];

      async function onSubmit({ formData }: { formData: FormData }) {
        loading.value = true;
        await new Promise((r) => setTimeout(r, 1500));
        lastSubmit.value = Object.fromEntries(formData.entries()) as Record<string, string>;
        loading.value = false;
      }

      function onReset() {
        form.value = { name: '', email: '', country: '', about: '', plan: 'free', notifications: false, terms: false };
        lastSubmit.value = null;
      }

      return { loading, lastSubmit, form, countries, planOptions, onSubmit, onReset };
    },
    template: `
      <div class="dk:p-6 dk:max-w-lg">
        <DuiForm :loading="loading" @submit="onSubmit" @reset="onReset">
          <template #header>
            <h2 class="dk:text-xl dk:font-bold dk:text-zinc-900 dk:dark:text-zinc-100">Registro de cuenta</h2>
            <p class="dk:text-sm dk:text-zinc-500 dk:dark:text-zinc-400 dk:mt-1">
              Completa todos los campos requeridos para crear tu cuenta.
            </p>
          </template>

          <DuiLabel title="Nombre completo" icon="mdi mdi-account" required>
            <DuiInput v-model="form.name" name="name" placeholder="Juan Pérez" required />
          </DuiLabel>

          <DuiLabel title="Correo electrónico" icon="mdi mdi-email" required>
            <DuiInput v-model="form.email" name="email" type="email" placeholder="juan@ejemplo.com" required />
          </DuiLabel>

          <DuiLabel title="País" icon="mdi mdi-earth">
            <DuiSelect
              v-model="form.country"
              name="country"
              :options="countries"
              item-label="name"
              item-value="id"
              placeholder="Selecciona un país"
            />
          </DuiLabel>

          <DuiLabel title="Descripción" icon="mdi mdi-text-box" help-text="Máximo 500 caracteres">
            <DuiTextarea v-model="form.about" name="about" placeholder="Cuéntanos sobre ti..." />
          </DuiLabel>

          <DuiLabel title="Plan">
            <DuiRadio v-model="form.plan" name="plan" :options="planOptions" />
          </DuiLabel>

          <DuiSwitch v-model="form.notifications" name="notifications" label="Recibir notificaciones" color="primary" />
          <DuiCheckbox v-model="form.terms" name="terms" label="Acepto los términos y condiciones" />

          <template #footer>
            <DuiButton type="submit" color="primary" :loading="loading">
              {{ loading ? 'Guardando...' : 'Crear cuenta' }}
            </DuiButton>
            <DuiButton type="reset" variant="outline" color="neutral">Limpiar</DuiButton>
          </template>
        </DuiForm>

        <div v-if="lastSubmit" class="dk:mt-6 dk:p-4 dk:bg-zinc-100 dk:dark:bg-zinc-800 dk:rounded dk:text-xs dk:text-zinc-600 dk:dark:text-zinc-400">
          <strong class="dk:block dk:mb-2 dk:text-sm">✅ Formulario enviado:</strong>
          <pre>{{ JSON.stringify(lastSubmit, null, 2) }}</pre>
        </div>
      </div>
    `,
  }),
};

// Without slots (minimal usage)
export const Minimal: Story = {
  render: () => ({
    components: { DuiForm, DuiLabel, DuiInput, DuiButton },
    setup() {
      const name = ref('');
      return { name };
    },
    template: `
      <div class="dk:p-6 dk:max-w-sm">
        <DuiForm>
          <DuiLabel title="Nombre">
            <DuiInput v-model="name" placeholder="Tu nombre" />
          </DuiLabel>
          <DuiButton type="submit" color="primary" class="dk:mt-4 dk:w-full">Enviar</DuiButton>
        </DuiForm>
      </div>
    `,
  }),
};
