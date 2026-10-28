<template>
  <div :class="rootClasses">
    <!-- Tab list -->
    <div :class="listClasses" role="tablist" :aria-label="ariaLabel">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        type="button"
        :id="`tab-${idSuffix}-${tab.value}`"
        :aria-controls="`panel-${idSuffix}-${tab.value}`"
        :aria-selected="modelValue === tab.value"
        :disabled="tab.disabled"
        role="tab"
        :class="tabClasses(tab.value, tab.disabled)"
        @click="selectTab(tab.value, tab.disabled)"
        @keydown="onKeydown($event, tab.value)">
        <i v-if="isIconClass(tab.icon)" :class="tab.icon" aria-hidden="true" class="dk:flex-shrink-0" />
        <span v-else-if="tab.icon" aria-hidden="true" class="dk:flex-shrink-0">{{ tab.icon }}</span>
        {{ tab.label }}
        <span v-if="tab.badge !== undefined" :class="badgeClasses">{{ tab.badge }}</span>
      </button>
    </div>

    <!-- Tab panels -->
    <div
      v-for="tab in tabs"
      :key="tab.value"
      :id="`panel-${idSuffix}-${tab.value}`"
      :aria-labelledby="`tab-${idSuffix}-${tab.value}`"
      role="tabpanel"
      :tabindex="modelValue === tab.value ? 0 : -1"
      :hidden="modelValue !== tab.value"
      :class="panelClasses">
      <slot :name="tab.value" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { isIconClass } from '../../utils/icon'

export interface DuiTab {
  label: string
  value: string
  icon?: string
  badge?: number | string
  disabled?: boolean
}

export interface DuiTabsProps {
  modelValue: string
  tabs: DuiTab[]
  variant?: 'underline' | 'pills' | 'boxed'
  color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  ariaLabel?: string
}

const props = withDefaults(defineProps<DuiTabsProps>(), {
  variant: 'underline',
  color: 'primary',
  size: 'md',
  fullWidth: false,
  ariaLabel: 'Tabs',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()

const idSuffix = Math.random().toString(36).slice(2, 8)

function selectTab(value: string, disabled?: boolean) {
  if (disabled) return
  emit('update:modelValue', value)
  emit('change', value)
}

function onKeydown(event: KeyboardEvent, current: string) {
  const values = props.tabs.filter(t => !t.disabled).map(t => t.value)
  const idx = values.indexOf(current)
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    event.preventDefault()
    const next = values[(idx + 1) % values.length]
    selectTab(next)
  }
  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    event.preventDefault()
    const prev = values[(idx - 1 + values.length) % values.length]
    selectTab(prev)
  }
  if (event.key === 'Home') {
    event.preventDefault()
    selectTab(values[0])
  }
  if (event.key === 'End') {
    event.preventDefault()
    selectTab(values[values.length - 1])
  }
}

const sizeClasses = {
  sm: 'dk:text-xs dk:px-3 dk:py-1.5',
  md: 'dk:text-sm dk:px-4 dk:py-2',
  lg: 'dk:text-base dk:px-5 dk:py-2.5',
}

const activeColorClasses = {
  neutral: { underline: 'dk:border-neutral-900 dk:text-neutral-900 dk:dark:border-white dk:dark:text-white', pills: 'dk:bg-neutral-900 dk:text-white dk:dark:bg-neutral-100 dk:dark:text-neutral-950', boxed: 'dk:bg-white dk:text-neutral-700 dk:dark:bg-white/10 dk:dark:text-neutral-200 dk:shadow-sm' },
  primary: { underline: 'dk:border-primary-600 dk:text-primary-700 dk:dark:border-primary-400 dk:dark:text-primary-200', pills: 'dk:bg-primary-600 dk:text-white dk:dark:bg-primary-500 dk:dark:shadow-glow-primary', boxed: 'dk:bg-white dk:text-primary-700 dk:dark:bg-white/10 dk:dark:text-primary-200 dk:shadow-sm' },
  secondary: { underline: 'dk:border-secondary-600 dk:text-secondary-700 dk:dark:border-secondary-400 dk:dark:text-secondary-200', pills: 'dk:bg-secondary-600 dk:text-white dk:dark:bg-secondary-500 dk:dark:shadow-glow-secondary', boxed: 'dk:bg-white dk:text-secondary-700 dk:dark:bg-white/10 dk:dark:text-secondary-200 dk:shadow-sm' },
  success: { underline: 'dk:border-success-600 dk:text-success-700 dk:dark:border-success-400 dk:dark:text-success-200', pills: 'dk:bg-success-600 dk:text-white dk:dark:bg-success-500 dk:dark:shadow-glow-success', boxed: 'dk:bg-white dk:text-success-700 dk:dark:bg-white/10 dk:dark:text-success-200 dk:shadow-sm' },
  warning: { underline: 'dk:border-warning-500 dk:text-warning-700 dk:dark:border-warning-400 dk:dark:text-warning-200', pills: 'dk:bg-warning-400 dk:text-neutral-950 dk:dark:shadow-glow-warning', boxed: 'dk:bg-white dk:text-warning-700 dk:dark:bg-white/10 dk:dark:text-warning-200 dk:shadow-sm' },
  danger: { underline: 'dk:border-danger-600 dk:text-danger-700 dk:dark:border-danger-400 dk:dark:text-danger-200', pills: 'dk:bg-danger-600 dk:text-white dk:dark:bg-danger-500 dk:dark:shadow-glow-danger', boxed: 'dk:bg-white dk:text-danger-700 dk:dark:bg-white/10 dk:dark:text-danger-200 dk:shadow-sm' },
}

const rootClasses = computed(() => 'dk:w-full')

const listClasses = computed(() => {
  const base = 'dk:flex dk:items-center dk:gap-0.5 dk:max-w-full dk:overflow-x-auto dk:[scrollbar-width:none] dk:[&::-webkit-scrollbar]:hidden'
  const width = props.fullWidth ? 'dk:w-full' : ''
  const variant = {
    underline: 'dk:border-b dk:border-neutral-200 dk:dark:border-white/10',
    pills: 'dk:gap-1',
    boxed: 'dk:bg-neutral-100 dk:dark:bg-white/5 dk:dark:ring-1 dk:dark:ring-inset dk:dark:ring-white/10 dk:p-1 dk:rounded-xl dk:gap-1',
  }[props.variant]
  return [base, width, variant].join(' ')
})

function tabClasses(value: string, disabled?: boolean) {
  const base = 'dk:inline-flex dk:items-center dk:gap-1.5 dk:font-medium dk:transition-all dk:duration-150 dk:outline-none dk:select-none dk:whitespace-nowrap dk:shrink-0 dk:rounded-t'
  const size = sizeClasses[props.size]
  const isActive = props.modelValue === value
  const disabledStyle = disabled ? 'dk:opacity-40 dk:cursor-not-allowed' : 'dk:cursor-pointer'
  const focusStyle = 'dk:focus-visible:ring-2 dk:focus-visible:ring-offset-1 dk:focus-visible:ring-accent-500/70 dk:dark:focus-visible:ring-accent-400/80 dk:dark:focus-visible:ring-offset-neutral-950'

  if (props.variant === 'underline') {
    const active = isActive
      ? `dk:border-b-2 ${activeColorClasses[props.color].underline}`
      : 'dk:border-b-2 dk:border-transparent dk:text-neutral-500 dk:dark:text-neutral-400 dk:hover:text-neutral-700 dk:dark:hover:text-neutral-200 dk:hover:border-neutral-300 dk:dark:hover:border-white/20'
    return [base, size, active, disabledStyle, focusStyle].join(' ')
  }

  if (props.variant === 'pills') {
    const active = isActive
      ? `dk:rounded-lg ${activeColorClasses[props.color].pills}`
      : 'dk:rounded-lg dk:text-neutral-500 dk:dark:text-neutral-400 dk:hover:bg-neutral-100 dk:dark:hover:bg-white/5 dk:hover:text-neutral-700 dk:dark:hover:text-neutral-200'
    return [base, size, active, disabledStyle, focusStyle].join(' ')
  }

  // boxed
  const active = isActive
    ? `dk:rounded-lg ${activeColorClasses[props.color].boxed}`
    : 'dk:rounded-lg dk:text-neutral-500 dk:dark:text-neutral-400 dk:hover:bg-black/5 dk:dark:hover:bg-white/5 dk:hover:text-neutral-700 dk:dark:hover:text-neutral-200'

  const fullWidth = props.fullWidth ? 'dk:flex-1 dk:text-center dk:justify-center' : ''
  return [base, size, active, disabledStyle, focusStyle, fullWidth].join(' ')
}

const badgeClasses = computed(() => {
  return 'dk:ml-1 dk:inline-flex dk:items-center dk:justify-center dk:rounded-full dk:bg-current/15 dk:text-current dk:text-[10px] dk:font-semibold dk:px-1.5 dk:py-px dk:leading-none'
})

const panelClasses = computed(() => {
  const pt = { sm: 'dk:pt-3', md: 'dk:pt-4', lg: 'dk:pt-5' }[props.size]
  return [pt, 'dk:outline-none'].join(' ')
})
</script>
