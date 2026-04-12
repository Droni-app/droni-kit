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
      :aria-label="`Quitar ${label}`"
      @click.prevent="emit('dismiss')">
      ×
    </button>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

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
    neutral: 'dk:bg-zinc-100 dk:text-zinc-700 dk:dark:bg-zinc-800 dk:dark:text-zinc-300',
    primary: 'dk:bg-slate-100 dk:text-slate-700 dk:dark:bg-slate-800 dk:dark:text-slate-300',
    secondary: 'dk:bg-pink-100 dk:text-pink-700 dk:dark:bg-pink-900/50 dk:dark:text-pink-300',
    success: 'dk:bg-emerald-100 dk:text-emerald-700 dk:dark:bg-emerald-900/50 dk:dark:text-emerald-300',
    warning: 'dk:bg-amber-100 dk:text-amber-700 dk:dark:bg-amber-900/50 dk:dark:text-amber-300',
    danger: 'dk:bg-rose-100 dk:text-rose-700 dk:dark:bg-rose-900/50 dk:dark:text-rose-300',
  },
  solid: {
    neutral: 'dk:bg-zinc-600 dk:text-white dk:dark:bg-zinc-500',
    primary: 'dk:bg-slate-600 dk:text-white dk:dark:bg-slate-500',
    secondary: 'dk:bg-pink-600 dk:text-white dk:dark:bg-pink-500',
    success: 'dk:bg-emerald-600 dk:text-white dk:dark:bg-emerald-500',
    warning: 'dk:bg-amber-500 dk:text-white dk:dark:bg-amber-400',
    danger: 'dk:bg-rose-600 dk:text-white dk:dark:bg-rose-500',
  },
  outline: {
    neutral: 'dk:border dk:border-zinc-400 dk:text-zinc-700 dk:dark:border-zinc-500 dk:dark:text-zinc-300',
    primary: 'dk:border dk:border-slate-400 dk:text-slate-700 dk:dark:border-slate-500 dk:dark:text-slate-300',
    secondary: 'dk:border dk:border-pink-400 dk:text-pink-700 dk:dark:border-pink-500 dk:dark:text-pink-300',
    success: 'dk:border dk:border-emerald-400 dk:text-emerald-700 dk:dark:border-emerald-500 dk:dark:text-emerald-300',
    warning: 'dk:border dk:border-amber-400 dk:text-amber-700 dk:dark:border-amber-500 dk:dark:text-amber-300',
    danger: 'dk:border dk:border-rose-400 dk:text-rose-700 dk:dark:border-rose-500 dk:dark:text-rose-300',
  },
}

const dotColorMap = {
  neutral: 'dk:bg-zinc-500 dk:dark:bg-zinc-400',
  primary: 'dk:bg-slate-500 dk:dark:bg-slate-400',
  secondary: 'dk:bg-pink-500 dk:dark:bg-pink-400',
  success: 'dk:bg-emerald-500 dk:dark:bg-emerald-400',
  warning: 'dk:bg-amber-500 dk:dark:bg-amber-400',
  danger: 'dk:bg-rose-500 dk:dark:bg-rose-400',
}

const badgeClasses = computed(() => {
  const base = 'dk:inline-flex dk:items-center dk:font-medium dk:whitespace-nowrap dk:select-none'
  const size = sizeClasses[props.size]
  const rounded = roundedMap[props.rounded]
  const color = colorMap[props.variant][props.color]
  const interactive = props.href ? 'dk:cursor-pointer dk:hover:opacity-80 dk:transition-opacity' : ''
  return [base, size, rounded, color, interactive].join(' ')
})

const dotClasses = computed(() => {
  const sizeDot = { xs: 'dk:w-1.5 dk:h-1.5', sm: 'dk:w-2 dk:h-2', md: 'dk:w-2 dk:h-2', lg: 'dk:w-2.5 dk:h-2.5' }[props.size]
  return ['dk:rounded-full dk:flex-shrink-0', sizeDot, dotColorMap[props.color]].join(' ')
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
