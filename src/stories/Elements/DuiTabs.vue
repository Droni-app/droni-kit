<template>
  <div :class="rootClasses">
    <!-- Tab list -->
    <div :class="listClasses" role="tablist" :aria-label="ariaLabel">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        :id="`tab-${idSuffix}-${tab.value}`"
        :aria-controls="`panel-${idSuffix}-${tab.value}`"
        :aria-selected="modelValue === tab.value"
        :disabled="tab.disabled"
        role="tab"
        :class="tabClasses(tab.value, tab.disabled)"
        @click="selectTab(tab.value, tab.disabled)"
        @keydown="onKeydown($event, tab.value)">
        <span v-if="tab.icon" aria-hidden="true" class="dk:flex-shrink-0">{{ tab.icon }}</span>
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
      :hidden="modelValue !== tab.value"
      :class="panelClasses">
      <slot :name="tab.value" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

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
  neutral: { underline: 'dk:border-zinc-600 dk:text-zinc-700 dk:dark:border-zinc-400 dk:dark:text-zinc-200', pills: 'dk:bg-zinc-600 dk:text-white dk:dark:bg-zinc-500', boxed: 'dk:bg-white dk:text-zinc-700 dk:dark:bg-zinc-800 dk:dark:text-zinc-200 dk:shadow-sm' },
  primary: { underline: 'dk:border-slate-600 dk:text-slate-700 dk:dark:border-slate-400 dk:dark:text-slate-200', pills: 'dk:bg-slate-600 dk:text-white dk:dark:bg-slate-500', boxed: 'dk:bg-white dk:text-slate-700 dk:dark:bg-zinc-800 dk:dark:text-slate-200 dk:shadow-sm' },
  secondary: { underline: 'dk:border-pink-600 dk:text-pink-700 dk:dark:border-pink-400 dk:dark:text-pink-200', pills: 'dk:bg-pink-600 dk:text-white dk:dark:bg-pink-500', boxed: 'dk:bg-white dk:text-pink-700 dk:dark:bg-zinc-800 dk:dark:text-pink-200 dk:shadow-sm' },
  success: { underline: 'dk:border-emerald-600 dk:text-emerald-700 dk:dark:border-emerald-400 dk:dark:text-emerald-200', pills: 'dk:bg-emerald-600 dk:text-white dk:dark:bg-emerald-500', boxed: 'dk:bg-white dk:text-emerald-700 dk:dark:bg-zinc-800 dk:dark:text-emerald-200 dk:shadow-sm' },
  warning: { underline: 'dk:border-amber-500 dk:text-amber-700 dk:dark:border-amber-400 dk:dark:text-amber-200', pills: 'dk:bg-amber-500 dk:text-white dk:dark:bg-amber-400', boxed: 'dk:bg-white dk:text-amber-700 dk:dark:bg-zinc-800 dk:dark:text-amber-200 dk:shadow-sm' },
  danger: { underline: 'dk:border-rose-600 dk:text-rose-700 dk:dark:border-rose-400 dk:dark:text-rose-200', pills: 'dk:bg-rose-600 dk:text-white dk:dark:bg-rose-500', boxed: 'dk:bg-white dk:text-rose-700 dk:dark:bg-zinc-800 dk:dark:text-rose-200 dk:shadow-sm' },
}

const rootClasses = computed(() => 'dk:w-full')

const listClasses = computed(() => {
  const base = 'dk:flex dk:items-center dk:gap-0.5'
  const width = props.fullWidth ? 'dk:w-full' : ''
  const variant = {
    underline: 'dk:border-b dk:border-zinc-200 dk:dark:border-zinc-700',
    pills: 'dk:gap-1',
    boxed: 'dk:bg-zinc-100 dk:dark:bg-zinc-800 dk:p-1 dk:rounded-xl dk:gap-1',
  }[props.variant]
  return [base, width, variant].join(' ')
})

function tabClasses(value: string, disabled?: boolean) {
  const base = 'dk:inline-flex dk:items-center dk:gap-1.5 dk:font-medium dk:transition-all dk:duration-150 dk:outline-none dk:select-none dk:rounded-t'
  const size = sizeClasses[props.size]
  const isActive = props.modelValue === value
  const disabledStyle = disabled ? 'dk:opacity-40 dk:cursor-not-allowed' : 'dk:cursor-pointer'
  const focusStyle = 'dk:focus-visible:ring-2 dk:focus-visible:ring-offset-1 dk:focus-visible:ring-slate-400 dk:dark:focus-visible:ring-slate-500'

  if (props.variant === 'underline') {
    const active = isActive
      ? `dk:border-b-2 ${activeColorClasses[props.color].underline}`
      : 'dk:border-b-2 dk:border-transparent dk:text-zinc-500 dk:dark:text-zinc-400 dk:hover:text-zinc-700 dk:dark:hover:text-zinc-200 dk:hover:border-zinc-300 dk:dark:hover:border-zinc-600'
    return [base, size, active, disabledStyle, focusStyle].join(' ')
  }

  if (props.variant === 'pills') {
    const active = isActive
      ? `dk:rounded-lg ${activeColorClasses[props.color].pills}`
      : 'dk:rounded-lg dk:text-zinc-500 dk:dark:text-zinc-400 dk:hover:bg-zinc-100 dk:dark:hover:bg-zinc-700 dk:hover:text-zinc-700 dk:dark:hover:text-zinc-200'
    return [base, size, active, disabledStyle, focusStyle].join(' ')
  }

  // boxed
  const active = isActive
    ? `dk:rounded-lg ${activeColorClasses[props.color].boxed}`
    : 'dk:rounded-lg dk:text-zinc-500 dk:dark:text-zinc-400 dk:hover:text-zinc-700 dk:dark:hover:text-zinc-200'

  const fullWidth = props.fullWidth ? 'dk:flex-1 dk:justify-center' : ''
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
