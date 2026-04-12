<template>
  <div :class="rootClasses">
    <div
      v-for="(item, index) in items"
      :key="item.value ?? index"
      :class="itemClasses">
      <!-- Trigger -->
      <button
        type="button"
        :id="`acc-trigger-${idSuffix}-${index}`"
        :aria-controls="`acc-panel-${idSuffix}-${index}`"
        :aria-expanded="isOpen(item.value ?? String(index))"
        :disabled="item.disabled"
        :class="triggerClasses(item.value ?? String(index), item.disabled)"
        @click="toggle(item.value ?? String(index), item.disabled)">
        <span v-if="item.icon" aria-hidden="true" class="dk:flex-shrink-0 dk:text-lg">{{ item.icon }}</span>
        <span class="dk:flex-1 dk:text-left">{{ item.title }}</span>
        <span :class="chevronClasses(item.value ?? String(index))" aria-hidden="true">
          <svg class="dk:w-4 dk:h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 6 8 10 12 6" />
          </svg>
        </span>
      </button>

      <!-- Panel -->
      <div
        :id="`acc-panel-${idSuffix}-${index}`"
        :aria-labelledby="`acc-trigger-${idSuffix}-${index}`"
        role="region"
        :class="panelWrapperClasses(item.value ?? String(index))">
        <div :class="panelContentClasses">
          <slot :name="item.value ?? String(index)">{{ item.content }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

export interface DuiAccordionItem {
  title: string
  value?: string
  content?: string
  icon?: string
  disabled?: boolean
}

export interface DuiAccordionProps {
  items: DuiAccordionItem[]
  modelValue?: string | string[]
  multiple?: boolean
  variant?: 'bordered' | 'separated' | 'ghost'
  color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  flush?: boolean
}

const props = withDefaults(defineProps<DuiAccordionProps>(), {
  modelValue: undefined,
  multiple: false,
  variant: 'bordered',
  color: 'neutral',
  size: 'md',
  flush: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | string[]): void
  (e: 'change', value: string): void
}>()

const idSuffix = Math.random().toString(36).slice(2, 8)
const internalOpen = ref<string[]>([])

function getActive(): string[] {
  if (props.modelValue === undefined) return internalOpen.value
  return Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue]
}

function isOpen(value: string): boolean {
  return getActive().includes(value)
}

function toggle(value: string, disabled?: boolean) {
  if (disabled) return
  const current = getActive()
  let next: string[]

  if (props.multiple) {
    next = current.includes(value) ? current.filter(v => v !== value) : [...current, value]
  } else {
    next = current.includes(value) ? [] : [value]
  }

  internalOpen.value = next
  emit('update:modelValue', props.multiple ? next : (next[0] ?? ''))
  emit('change', value)
}

const sizeClasses = {
  sm: { trigger: 'dk:px-3 dk:py-2 dk:text-sm', content: 'dk:px-3 dk:pb-3 dk:text-sm' },
  md: { trigger: 'dk:px-4 dk:py-3 dk:text-sm', content: 'dk:px-4 dk:pb-4 dk:text-sm' },
  lg: { trigger: 'dk:px-5 dk:py-4 dk:text-base', content: 'dk:px-5 dk:pb-5 dk:text-base' },
}

const variantColorMap = {
  bordered: {
    neutral: 'dk:border dk:border-zinc-200 dk:dark:border-zinc-700',
    primary: 'dk:border dk:border-slate-200 dk:dark:border-slate-700',
    secondary: 'dk:border dk:border-pink-200 dk:dark:border-pink-700',
    success: 'dk:border dk:border-emerald-200 dk:dark:border-emerald-700',
    warning: 'dk:border dk:border-amber-200 dk:dark:border-amber-700',
    danger: 'dk:border dk:border-rose-200 dk:dark:border-rose-700',
  },
  separated: {
    neutral: 'dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl',
    primary: 'dk:border dk:border-slate-200 dk:dark:border-slate-700 dk:rounded-xl',
    secondary: 'dk:border dk:border-pink-200 dk:dark:border-pink-700 dk:rounded-xl',
    success: 'dk:border dk:border-emerald-200 dk:dark:border-emerald-700 dk:rounded-xl',
    warning: 'dk:border dk:border-amber-200 dk:dark:border-amber-700 dk:rounded-xl',
    danger: 'dk:border dk:border-rose-200 dk:dark:border-rose-700 dk:rounded-xl',
  },
  ghost: {
    neutral: '',
    primary: '',
    secondary: '',
    success: '',
    warning: '',
    danger: '',
  },
}

const activeTriggerColorMap = {
  neutral: 'dk:text-zinc-900 dk:dark:text-zinc-100',
  primary: 'dk:text-slate-700 dk:dark:text-slate-200',
  secondary: 'dk:text-pink-700 dk:dark:text-pink-200',
  success: 'dk:text-emerald-700 dk:dark:text-emerald-200',
  warning: 'dk:text-amber-700 dk:dark:text-amber-200',
  danger: 'dk:text-rose-700 dk:dark:text-rose-200',
}

const rootClasses = computed(() => {
  if (props.variant === 'separated') return 'dk:space-y-2'
  if (props.variant === 'bordered') {
    return props.flush
      ? 'dk:divide-y dk:divide-zinc-200 dk:dark:divide-zinc-700'
      : 'dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl dk:divide-y dk:divide-zinc-200 dk:dark:divide-zinc-700 dk:overflow-hidden'
  }
  return 'dk:divide-y dk:divide-zinc-100 dk:dark:divide-zinc-800'
})

const itemClasses = computed(() => {
  if (props.variant === 'separated') return variantColorMap.separated[props.color]
  return ''
})

function triggerClasses(value: string, disabled?: boolean) {
  const base = 'dk:w-full dk:flex dk:items-center dk:gap-2 dk:font-medium dk:transition-colors dk:duration-150 dk:outline-none'
  const size = sizeClasses[props.size].trigger
  const active = isOpen(value) ? activeTriggerColorMap[props.color] : 'dk:text-zinc-700 dk:dark:text-zinc-300'
  const hover = 'dk:hover:text-zinc-900 dk:dark:hover:text-zinc-100'
  const focus = 'dk:focus-visible:ring-2 dk:focus-visible:ring-inset dk:focus-visible:ring-slate-400 dk:dark:focus-visible:ring-slate-500'
  const dis = disabled ? 'dk:opacity-40 dk:cursor-not-allowed' : 'dk:cursor-pointer'
  return [base, size, active, hover, focus, dis].join(' ')
}

function chevronClasses(value: string) {
  return [
    'dk:flex-shrink-0 dk:transition-transform dk:duration-200',
    isOpen(value) ? 'dk:rotate-180' : '',
  ].join(' ')
}

function panelWrapperClasses(value: string) {
  return isOpen(value) ? 'dk:block' : 'dk:hidden'
}

const panelContentClasses = computed(() => {
  return [sizeClasses[props.size].content, 'dk:text-zinc-600 dk:dark:text-zinc-400'].join(' ')
})
</script>
