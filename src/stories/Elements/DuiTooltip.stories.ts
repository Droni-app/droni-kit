import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { computed, ref, watch } from 'vue'
import { expect, userEvent, waitFor, within } from 'storybook/test'

import DuiTooltip from './DuiTooltip.vue'
import DuiButton from '../Forms/DuiButton.vue'
import '../../style.css'

const meta = {
  title: 'Elements/Tooltip',
  component: DuiTooltip,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
      defaultValue: 'Tooltip de ayuda contextual',
    },
    trigger: {
      control: { type: 'select' },
      options: ['hover', 'click', 'focus', 'manual'],
      defaultValue: 'hover',
    },
    placement: {
      control: { type: 'select' },
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
      ],
      defaultValue: 'top',
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline'],
      defaultValue: 'solid',
    },
    color: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger'],
      defaultValue: 'neutral',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    rounded: {
      control: { type: 'select' },
      options: ['all', 'top', 'bottom', 'left', 'right', 'none'],
      defaultValue: 'all',
    },
    showDelay: {
      control: { type: 'number' },
      defaultValue: 120,
    },
    hideDelay: {
      control: { type: 'number' },
      defaultValue: 90,
    },
    offset: {
      control: { type: 'number' },
      defaultValue: 10,
    },
    maxWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'md',
    },
    interactive: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    arrow: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    flip: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    zIndex: {
      control: { type: 'number' },
      defaultValue: 60,
    },
  },
} satisfies Meta<typeof DuiTooltip>

export default meta
type Story = StoryObj<typeof meta>

const tooltipRender = (args: any) => ({
  components: { DuiTooltip, DuiButton },
  setup() {
    const open = ref(Boolean(args.modelValue))

    watch(
      () => args.modelValue,
      (next) => {
        open.value = Boolean(next)
      },
    )

    const tooltipProps = computed(() => {
      const { modelValue, ...rest } = args
      return rest
    })

    return { args, open, tooltipProps }
  },
  template: `
    <div class="dk:flex dk:min-h-[14rem] dk:items-center dk:justify-center dk:p-6">
      <DuiTooltip v-model="open" v-bind="tooltipProps">
        <DuiButton color="primary" variant="outline">Pasa el mouse</DuiButton>
      </DuiTooltip>
    </div>
  `,
})

export const Default: Story = {
  args: {
    modelValue: false,
    text: 'Tooltip de ayuda contextual',
    trigger: 'hover',
    placement: 'top',
    variant: 'solid',
    color: 'neutral',
    size: 'md',
    rounded: 'all',
    showDelay: 120,
    hideDelay: 90,
    offset: 10,
    maxWidth: 'md',
    interactive: true,
    arrow: true,
    disabled: false,
    flip: true,
    zIndex: 60,
  },
  render: tooltipRender,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(document.body)
    const trigger = canvas.getByRole('button', { name: 'Pasa el mouse' })

    await expect(body.queryByRole('tooltip')).not.toBeInTheDocument()

    await userEvent.hover(trigger)

    await waitFor(() => {
      expect(body.getByRole('tooltip')).toBeInTheDocument()
    })
    await expect(body.getByText('Tooltip de ayuda contextual')).toBeInTheDocument()

    await userEvent.unhover(trigger)

    await waitFor(() => {
      expect(body.queryByRole('tooltip')).not.toBeInTheDocument()
    })
  },
}

export const RichContent: Story = {
  args: {
    ...Default.args,
    trigger: 'click',
    placement: 'right',
      variant: 'outline',
    color: 'primary',
    maxWidth: 'lg',
    interactive: true,
  },
  render: (args: any) => ({
    components: { DuiTooltip, DuiButton },
    setup() {
      const open = ref(false)
      const tooltipProps = computed(() => {
        const { modelValue, ...rest } = args
        return rest
      })
      return { open, tooltipProps }
    },
    template: `
      <div class="dk:flex dk:min-h-[16rem] dk:items-center dk:justify-center dk:p-6">
        <DuiTooltip v-model="open" v-bind="tooltipProps">
          <template #trigger>
            <DuiButton color="secondary">Tooltip con contenido</DuiButton>
          </template>

          <template #content>
            <div class="dk:space-y-2">
              <p class="dk:font-semibold">Atajo disponible</p>
              <p>Presiona <kbd class="dk:rounded dk:bg-black/15 dk:px-1.5 dk:py-0.5">Ctrl</kbd> + <kbd class="dk:rounded dk:bg-black/15 dk:px-1.5 dk:py-0.5">K</kbd> para abrir la busqueda.</p>
            </div>
          </template>
        </DuiTooltip>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(document.body)
    const trigger = canvas.getByRole('button', { name: 'Tooltip con contenido' })

    await userEvent.click(trigger)

    await waitFor(() => {
      expect(body.getByRole('tooltip')).toBeInTheDocument()
    })
    await expect(body.getByText('Atajo disponible')).toBeInTheDocument()

    await userEvent.click(document.body)

    await waitFor(() => {
      expect(body.queryByRole('tooltip')).not.toBeInTheDocument()
    })
  },
}

export const Placements: Story = {
  args: {
    ...Default.args,
    trigger: 'hover',
    text: 'Ejemplo de posicion',
  },
  render: (args: any) => ({
    components: { DuiTooltip, DuiButton },
    setup() {
      const placements = [
        'top', 'top-start', 'top-end',
        'right', 'right-start', 'right-end',
        'bottom', 'bottom-start', 'bottom-end',
        'left', 'left-start', 'left-end',
      ]
      const tooltipProps = computed(() => {
        const { placement, modelValue, ...rest } = args
        return rest
      })
      return { placements, args, tooltipProps }
    },
    template: `
      <div class="dk:grid dk:grid-cols-1 dk:gap-4 dk:p-6 dk:sm:grid-cols-2 dk:lg:grid-cols-3">
        <DuiTooltip
          v-for="placement in placements"
          :key="placement"
          v-bind="tooltipProps"
          :placement="placement"
          :text="'Placement: ' + placement">
          <DuiButton variant="outline" color="neutral" class="dk:w-full">{{ placement }}</DuiButton>
        </DuiTooltip>
      </div>
    `,
  }),
}

export const ManualControl: Story = {
  args: {
    ...Default.args,
    trigger: 'manual',
    placement: 'bottom',
    text: 'Controlado externamente con v-model',
    interactive: true,
  },
  render: (args: any) => ({
    components: { DuiTooltip, DuiButton },
    setup() {
      const open = ref(false)
      const tooltipProps = computed(() => {
        const { modelValue, ...rest } = args
        return rest
      })
      return { open, tooltipProps }
    },
    template: `
      <div class="dk:flex dk:min-h-[16rem] dk:flex-col dk:items-center dk:justify-center dk:gap-4 dk:p-6">
        <div class="dk:flex dk:gap-2">
          <DuiButton size="sm" color="success" @click="open = true">Abrir</DuiButton>
          <DuiButton size="sm" color="danger" variant="outline" @click="open = false">Cerrar</DuiButton>
        </div>

        <DuiTooltip v-model="open" v-bind="tooltipProps">
          <DuiButton color="primary" variant="ghost">Trigger manual</DuiButton>
        </DuiTooltip>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await expect(body.queryByRole('tooltip')).not.toBeInTheDocument()

    await userEvent.click(canvas.getByRole('button', { name: 'Abrir' }))

    await waitFor(() => {
      expect(body.getByRole('tooltip')).toBeInTheDocument()
    })
    await expect(body.getByText('Controlado externamente con v-model')).toBeInTheDocument()

    await userEvent.click(canvas.getByRole('button', { name: 'Cerrar' }))

    await waitFor(() => {
      expect(body.queryByRole('tooltip')).not.toBeInTheDocument()
    })
  },
}
