<template>
  <div :class="rootClasses">
    <details
      v-for="(item, index) in items"
      :key="item.value ?? index"
      :open="isOpen(item.value ?? String(index))"
      :class="detailsClasses"
      @toggle.prevent>
      <summary
        role="button"
        :aria-expanded="isOpen(item.value ?? String(index))"
        :aria-disabled="item.disabled || undefined"
        :class="summaryClasses(item.value ?? String(index), item.disabled)"
        @click.prevent="toggle(item.value ?? String(index), item.disabled)">
        <span v-if="item.icon" aria-hidden="true" :class="iconClasses">{{ item.icon }}</span>
        <span class="dui-acc-title">{{ item.title }}</span>
        <svg
          :class="chevronClasses(item.value ?? String(index))"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true">
          <polyline points="4 6 8 10 12 6" />
        </svg>
      </summary>

      <div class="dui-acc-panel">
        <div :class="contentClasses">
          <slot :name="item.value ?? String(index)">
            <p>{{ item.content }}</p>
          </slot>
        </div>
      </div>
    </details>
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

const internalOpen = ref<string[]>([])

function getActive(): string[] {
  if (props.modelValue === undefined) return internalOpen.value
  return Array.isArray(props.modelValue) ? props.modelValue : props.modelValue ? [props.modelValue] : []
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

// ── Sizes ────────────────────────────────────────────────────────────────────

const sizeMap = {
  sm: {
    summary: 'dk:px-3 dk:py-2.5 dk:text-sm dk:gap-2',
    content:  'dk:px-3 dk:pt-0 dk:pb-3 dk:text-sm',
    icon:     'dk:text-base',
    chevron:  'dk:w-3.5 dk:h-3.5',
  },
  md: {
    summary: 'dk:px-4 dk:py-3.5 dk:text-sm dk:gap-2.5',
    content:  'dk:px-4 dk:pt-0 dk:pb-4 dk:text-sm',
    icon:     'dk:text-lg',
    chevron:  'dk:w-4 dk:h-4',
  },
  lg: {
    summary: 'dk:px-5 dk:py-4 dk:text-base dk:gap-3',
    content:  'dk:px-5 dk:pt-0 dk:pb-5 dk:text-base',
    icon:     'dk:text-xl',
    chevron:  'dk:w-5 dk:h-5',
  },
}

// ── Colors ───────────────────────────────────────────────────────────────────

const openBgMap = {
  neutral:   'dk:bg-neutral-50 dk:dark:bg-white/5',
  primary:   'dk:bg-primary-50/70 dk:dark:bg-primary-500/10',
  secondary: 'dk:bg-secondary-50/70 dk:dark:bg-secondary-500/10',
  success:   'dk:bg-success-50/70 dk:dark:bg-success-500/10',
  warning:   'dk:bg-warning-50/70 dk:dark:bg-warning-500/10',
  danger:    'dk:bg-danger-50/70 dk:dark:bg-danger-500/10',
}

const openTextMap = {
  neutral:   'dk:text-neutral-900 dk:dark:text-white',
  primary:   'dk:text-primary-800 dk:dark:text-primary-100',
  secondary: 'dk:text-secondary-800 dk:dark:text-secondary-100',
  success:   'dk:text-success-800 dk:dark:text-success-100',
  warning:   'dk:text-warning-800 dk:dark:text-warning-100',
  danger:    'dk:text-danger-800 dk:dark:text-danger-100',
}

const openIconMap = {
  neutral:   'dk:text-neutral-500 dk:dark:text-neutral-400',
  primary:   'dk:text-primary-500 dk:dark:text-primary-400',
  secondary: 'dk:text-secondary-500 dk:dark:text-secondary-400',
  success:   'dk:text-success-500 dk:dark:text-success-400',
  warning:   'dk:text-warning-500 dk:dark:text-warning-400',
  danger:    'dk:text-danger-500 dk:dark:text-danger-400',
}

// ── Root ─────────────────────────────────────────────────────────────────────

const rootClasses = computed(() => {
  if (props.variant === 'separated') return 'dk:flex dk:flex-col dk:gap-2'
  if (props.variant === 'ghost') return 'dk:divide-y dk:divide-neutral-200 dk:dark:divide-white/10'
  // bordered
  return props.flush
    ? 'dk:divide-y dk:divide-neutral-200 dk:dark:divide-white/10'
    : 'dk:border dk:border-neutral-200 dk:dark:border-white/10 dk:rounded-xl dk:divide-y dk:divide-neutral-200 dk:dark:divide-white/10 dk:overflow-hidden dk:shadow-xs'
})

// ── Details ──────────────────────────────────────────────────────────────────

const detailsClasses = computed(() => {
  if (props.variant === 'separated') {
    return 'dk:rounded-xl dk:border dk:border-neutral-200 dk:dark:border-white/10 dk:overflow-hidden dk:shadow-xs dk:bg-white dk:dark:bg-neutral-900'
  }
  if (props.variant === 'ghost') return ''
  return 'dk:bg-white dk:dark:bg-neutral-900'
})

// ── Summary ──────────────────────────────────────────────────────────────────

function summaryClasses(value: string, disabled?: boolean) {
  const s = sizeMap[props.size]
  const open = isOpen(value)

  const base = [
    'dk:flex dk:w-full dk:items-center dk:font-medium dk:select-none dk:outline-none',
    'dk:transition-colors dk:duration-150',
    s.summary,
  ]

  const color = open
    ? [openBgMap[props.color], openTextMap[props.color]]
    : ['dk:text-neutral-700 dk:dark:text-neutral-300', 'dk:hover:bg-neutral-50 dk:dark:hover:bg-white/[0.03] dk:hover:text-neutral-900 dk:dark:hover:text-white']

  const focus = 'dk:focus-visible:ring-2 dk:focus-visible:ring-inset dk:focus-visible:ring-accent-500/70 dk:dark:focus-visible:ring-accent-400/80 dk:dark:focus-visible:ring-offset-neutral-950'
  const dis   = disabled ? 'dk:opacity-40 dk:cursor-not-allowed dk:pointer-events-none' : 'dk:cursor-pointer'

  return [...base, ...color, focus, dis].join(' ')
}

// ── Chevron ──────────────────────────────────────────────────────────────────

function chevronClasses(value: string) {
  const s = sizeMap[props.size]
  return [
    'dk:flex-shrink-0 dk:transition-transform dk:duration-250 dk:ease-in-out dk:ml-auto',
    isOpen(value) ? 'dk:rotate-180 ' + openIconMap[props.color] : 'dk:text-neutral-400 dk:dark:text-neutral-500',
    s.chevron,
  ].join(' ')
}

// ── Icon ─────────────────────────────────────────────────────────────────────

const iconClasses = computed(() => {
  return ['dk:flex-shrink-0 dk:leading-none', sizeMap[props.size].icon].join(' ')
})

// ── Content ──────────────────────────────────────────────────────────────────

const contentClasses = computed(() => {
  return [
    sizeMap[props.size].content,
    'dk:text-neutral-600 dk:dark:text-neutral-400 dk:leading-relaxed',
  ].join(' ')
})
</script>

<style scoped>
/* Remove native marker */
summary {
  list-style: none;
}
summary::-webkit-details-marker {
  display: none;
}

/* Animated panel using CSS grid trick */
.dui-acc-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

details[open] > .dui-acc-panel {
  grid-template-rows: 1fr;
}

.dui-acc-panel > div {
  overflow: hidden;
}

/* Title takes remaining space */
.dui-acc-title {
  flex: 1;
  text-align: left;
  font-weight: 500;
}
</style>
