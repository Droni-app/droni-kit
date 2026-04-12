import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { expect, userEvent, within } from 'storybook/test';

import DuiAccordion from './DuiAccordion.vue';
import '../../style.css';

const faqItems = [
  {
    value: 'q1',
    title: '¿Como creo una cuenta nueva?',
    content: 'Haz clic en "Registrarse" en la esquina superior derecha, completa el formulario con tu nombre, correo y contrasena, y confirma tu correo electronico.',
  },
  {
    value: 'q2',
    title: '¿Cuales son los metodos de pago aceptados?',
    content: 'Aceptamos tarjetas de credito Visa, Mastercard y American Express, ademas de PayPal y transferencia bancaria para planes anuales.',
  },
  {
    value: 'q3',
    title: '¿Puedo cancelar mi suscripcion en cualquier momento?',
    content: 'Si, puedes cancelar tu suscripcion en cualquier momento desde la seccion de Configuracion > Facturacion. El acceso se mantiene hasta el fin del periodo pagado.',
  },
  {
    value: 'q4',
    title: '¿Hay soporte tecnico disponible?',
    content: 'Ofrecemos soporte via chat en vivo (lunes a viernes 9-18h) y por correo electronico con tiempo de respuesta de menos de 24 horas.',
    disabled: true,
  },
];

const meta = {
  title: 'Elements/Accordion',
  component: DuiAccordion,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['bordered', 'separated', 'ghost'],
      description: 'Estilo visual del acordeon',
    },
    color: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Color activo',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamano del acordeon',
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Permite abrir multiples items a la vez',
    },
    flush: {
      control: { type: 'boolean' },
      description: 'Elimina bordes externos (solo variante bordered)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Acordeon accesible con soporte de apertura multiple, variantes y navegacion por teclado.',
      },
    },
  },
} satisfies Meta<typeof DuiAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: faqItems,
    variant: 'bordered',
    color: 'neutral',
    size: 'md',
    multiple: false,
    flush: false,
  },
  render: (args) => ({
    components: { DuiAccordion },
    setup() {
      const open = ref('');
      return { args, open };
    },
    template: `
      <div class="dk:p-4 dk:max-w-xl">
        <DuiAccordion v-bind="args" v-model="open" />
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const triggers = canvas.getAllByRole('button');
    await expect(triggers.length).toBeGreaterThan(0);

    await userEvent.click(triggers[0]);
    await expect(triggers[0]).toHaveAttribute('aria-expanded', 'true');

    await userEvent.click(triggers[1]);
    await expect(triggers[0]).toHaveAttribute('aria-expanded', 'false');
    await expect(triggers[1]).toHaveAttribute('aria-expanded', 'true');
  },
};

export const Multiple: Story = {
  render: () => ({
    components: { DuiAccordion },
    setup() {
      const open = ref<string[]>(['q1']);
      return { open };
    },
    template: `
      <div class="dk:p-4 dk:max-w-xl">
        <p class="dk:text-xs dk:text-zinc-500 dk:mb-3">multiple: true — se pueden abrir varios a la vez</p>
        <DuiAccordion
          v-model="open"
          :items="${JSON.stringify(faqItems.slice(0, 3))}"
          multiple
          color="primary"
        />
      </div>
    `,
  }),
});

export const Variants: Story = {
  render: () => ({
    components: { DuiAccordion },
    setup() {
      const items = [
        { value: 'a', title: 'Seccion uno', content: 'Contenido de la primera seccion.' },
        { value: 'b', title: 'Seccion dos', content: 'Contenido de la segunda seccion.' },
      ];
      const o1 = ref('a'), o2 = ref(''), o3 = ref('');
      return { items, o1, o2, o3 };
    },
    template: `
      <div class="dk:p-4 dk:space-y-6 dk:max-w-lg">
        <div>
          <p class="dk:text-xs dk:font-semibold dk:text-zinc-500 dk:mb-2">Bordered</p>
          <DuiAccordion v-model="o1" :items="items" variant="bordered" />
        </div>
        <div>
          <p class="dk:text-xs dk:font-semibold dk:text-zinc-500 dk:mb-2">Separated</p>
          <DuiAccordion v-model="o2" :items="items" variant="separated" color="primary" />
        </div>
        <div>
          <p class="dk:text-xs dk:font-semibold dk:text-zinc-500 dk:mb-2">Ghost</p>
          <DuiAccordion v-model="o3" :items="items" variant="ghost" />
        </div>
      </div>
    `,
  }),
};

export const WithIcons: Story = {
  render: () => ({
    components: { DuiAccordion },
    setup() {
      const open = ref('shipping');
      const items = [
        { value: 'shipping', title: 'Politica de envios', icon: '🚚', content: 'Envios gratis en pedidos mayores a $50. Tiempo de entrega: 3-5 dias habiles.' },
        { value: 'returns', title: 'Devoluciones y reembolsos', icon: '↩️', content: 'Tienes 30 dias para devolver cualquier producto en perfectas condiciones.' },
        { value: 'privacy', title: 'Privacidad de datos', icon: '🔒', content: 'Tus datos personales nunca seran compartidos con terceros sin tu consentimiento.' },
      ];
      return { open, items };
    },
    template: `
      <div class="dk:p-4 dk:max-w-lg">
        <DuiAccordion v-model="open" :items="items" variant="separated" color="primary" size="lg" />
      </div>
    `,
  }),
};

const faqItemsStr = JSON.stringify(faqItems.slice(0, 3));
Multiple.args = { items: faqItems, multiple: true };
