<template>
  <component
    :is="href ? 'a' : 'span'"
    :href="href"
    :class="badgeClasses"
    v-bind="$attrs">
    <span v-if="$slots.icon || dot" aria-hidden="true" :class="leadingClasses">
      <span v-if="dot" :class="dotClasses" />
      <slot v-else name="icon" />
    </span>
    <slot>{{ label }}</slot>
    <button
      v-if="dismissible"
      type="button"
      :class="dismissClasses"
      :aria-label="label ? `Quitar ${label}` : 'Quitar'"
      @click.prevent="emit('dismiss')">
      ×
    </button>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../utils/cn'
import { dotColorClasses, focusRingClasses } from '../../theme/tokens'

defineOptions({ inheritAttrs: false })

export interface DuiBadgeProps {
  label?: string
  color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  variant?: 'solid' | 'soft' | 'outline'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  rounded?: 'full' | 'md' | 'none'
  dot?: boolean
  dismissible?: boolean
  href?: string
}

const props = withDefaults(defineProps<DuiBadgeProps>(), {
  label: undefined,
  color: 'neutral',
  variant: 'soft',
  size: 'sm',
  rounded: 'full',
  dot: false,
  dismissible: false,
  href: undefined,
})

const emit = defineEmits<{
  (e: 'dismiss'): void
}>()

const sizeClasses = {
  xs: 'dk:text-[10px] dk:leading-none dk:px-1.5 dk:py-0.5 dk:gap-1',
  sm: 'dk:text-xs dk:leading-none dk:px-2 dk:py-1 dk:gap-1',
  md: 'dk:text-sm dk:px-2.5 dk:py-1 dk:gap-1.5',
  lg: 'dk:text-base dk:px-3 dk:py-1.5 dk:gap-2',
}

const roundedMap = {
  full: 'dk:rounded-full',
  md: 'dk:rounded-md',
  none: 'dk:rounded-none',
}

const colorMap = {
  soft: {
    neutral: 'dk:bg-neutral-100 dk:text-neutral-700 dk:ring-1 dk:ring-inset dk:ring-neutral-200 dk:dark:bg-white/5 dk:dark:text-neutral-300 dk:dark:ring-white/10',
    primary: 'dk:bg-primary-50 dk:text-primary-700 dk:ring-1 dk:ring-inset dk:ring-primary-200 dk:dark:bg-primary-500/15 dk:dark:text-primary-300 dk:dark:ring-primary-400/30',
    secondary: 'dk:bg-secondary-50 dk:text-secondary-700 dk:ring-1 dk:ring-inset dk:ring-secondary-200 dk:dark:bg-secondary-500/15 dk:dark:text-secondary-300 dk:dark:ring-secondary-400/30',
    success: 'dk:bg-success-50 dk:text-success-700 dk:ring-1 dk:ring-inset dk:ring-success-200 dk:dark:bg-success-500/15 dk:dark:text-success-300 dk:dark:ring-success-400/30',
    warning: 'dk:bg-warning-50 dk:text-warning-800 dk:ring-1 dk:ring-inset dk:ring-warning-200 dk:dark:bg-warning-500/15 dk:dark:text-warning-300 dk:dark:ring-warning-400/30',
    danger: 'dk:bg-danger-50 dk:text-danger-700 dk:ring-1 dk:ring-inset dk:ring-danger-200 dk:dark:bg-danger-500/15 dk:dark:text-danger-300 dk:dark:ring-danger-400/30',
  },
  solid: {
    neutral: 'dk:bg-neutral-900 dk:text-white dk:dark:bg-neutral-100 dk:dark:text-neutral-950',
    primary: 'dk:bg-primary-600 dk:text-white dk:dark:bg-primary-500 dk:dark:shadow-[0_0_12px_-2px_var(--dk-color-primary-500)]',
    secondary: 'dk:bg-secondary-600 dk:text-white dk:dark:bg-secondary-500 dk:dark:shadow-[0_0_12px_-2px_var(--dk-color-secondary-500)]',
    success: 'dk:bg-success-600 dk:text-white dk:dark:bg-success-500 dk:dark:text-neutral-950 dk:dark:shadow-[0_0_12px_-2px_var(--dk-color-success-500)]',
    warning: 'dk:bg-warning-400 dk:text-neutral-950 dk:dark:shadow-[0_0_12px_-2px_var(--dk-color-warning-400)]',
    danger: 'dk:bg-danger-600 dk:text-white dk:dark:bg-danger-500 dk:dark:shadow-[0_0_12px_-2px_var(--dk-color-danger-500)]',
  },
  outline: {
    neutral: 'dk:border dk:border-neutral-300 dk:text-neutral-700 dk:dark:border-white/20 dk:dark:text-neutral-300',
    primary: 'dk:border dk:border-primary-400 dk:text-primary-700 dk:dark:border-primary-400/70 dk:dark:text-primary-300',
    secondary: 'dk:border dk:border-secondary-400 dk:text-secondary-700 dk:dark:border-secondary-400/70 dk:dark:text-secondary-300',
    success: 'dk:border dk:border-success-400 dk:text-success-700 dk:dark:border-success-400/70 dk:dark:text-success-300',
    warning: 'dk:border dk:border-warning-400 dk:text-warning-700 dk:dark:border-warning-400/70 dk:dark:text-warning-300',
    danger: 'dk:border dk:border-danger-400 dk:text-danger-700 dk:dark:border-danger-400/70 dk:dark:text-danger-300',
  },
}

const badgeClasses = computed(() => {
  const base = 'dk:inline-flex dk:items-center dk:font-medium dk:tracking-wide dk:whitespace-nowrap dk:select-none'
  const size = sizeClasses[props.size]
  const rounded = roundedMap[props.rounded]
  const color = colorMap[props.variant][props.color]
  const interactive = props.href ? cn('dk:cursor-pointer dk:hover:opacity-80 dk:transition-opacity', focusRingClasses) : ''
  return cn(base, size, rounded, color, interactive)
})

const dotClasses = computed(() => {
  const sizeDot = { xs: 'dk:w-1.5 dk:h-1.5', sm: 'dk:w-2 dk:h-2', md: 'dk:w-2 dk:h-2', lg: 'dk:w-2.5 dk:h-2.5' }[props.size]
  return cn('dk:rounded-full dk:flex-shrink-0', sizeDot, dotColorClasses[props.color])
})

const leadingClasses = computed(() => 'dk:flex-shrink-0 dk:flex dk:items-center')

const dismissClasses = computed(() => {
  return [
    'dk:-mr-0.5 dk:flex-shrink-0 dk:inline-flex dk:items-center dk:justify-center',
    'dk:rounded-full dk:w-3.5 dk:h-3.5 dk:text-sm dk:leading-none',
    'dk:opacity-60 dk:hover:opacity-100 dk:transition-opacity dk:outline-none',
    'dk:hover:bg-black/10 dk:dark:hover:bg-white/10',
  ].join(' ')
})
</script>
