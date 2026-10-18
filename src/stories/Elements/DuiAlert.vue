<template>
  <div :class="computedClasses" role="alert">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String as () => 'solid' | 'outline' | 'ghost',
    default: 'solid',
  },
  color: {
    type: String as () => 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
    default: 'neutral',
  },
  rounded: {
    type: String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none',
    default: 'all',
  },
})

const baseClass = `
  dk:px-4
  dk:py-3
  dk:text-sm
  dk:leading-relaxed
  dk:max-w-full
`

const roundedClasses = {
  all: 'dk:rounded',
  top: 'dk:rounded-t',
  bottom: 'dk:rounded-b',
  left: 'dk:rounded-l',
  right: 'dk:rounded-r',
  none: 'dk:rounded-none',
}

const variantClasses = {
  solid: {
    base: '',
    neutral: 'dk:bg-zinc-200 dk:text-zinc-800 dk:dark:bg-zinc-700 dk:dark:text-zinc-100',
    primary: 'dk:bg-teal-200 dk:text-teal-800 dk:dark:bg-teal-700 dk:dark:text-teal-100',
    secondary: 'dk:bg-slate-200 dk:text-slate-800 dk:dark:bg-slate-700 dk:dark:text-slate-100',
    success: 'dk:bg-emerald-200 dk:text-emerald-800 dk:dark:bg-emerald-700 dk:dark:text-emerald-100',
    warning: 'dk:bg-amber-200 dk:text-amber-800 dk:dark:bg-amber-700 dk:dark:text-amber-100',
    danger: 'dk:bg-rose-200 dk:text-rose-800 dk:dark:bg-rose-700 dk:dark:text-rose-100',
  },
  outline: {
    base: 'dk:border',
    neutral: 'dk:border-zinc-400 dk:text-zinc-700 dk:dark:border-zinc-500 dk:dark:text-zinc-200',
    primary: 'dk:border-teal-400 dk:text-teal-700 dk:dark:border-teal-500 dk:dark:text-teal-200',
    secondary: 'dk:border-slate-400 dk:text-slate-700 dk:dark:border-slate-500 dk:dark:text-slate-200',
    success: 'dk:border-emerald-400 dk:text-emerald-700 dk:dark:border-emerald-500 dk:dark:text-emerald-200',
    warning: 'dk:border-amber-400 dk:text-amber-700 dk:dark:border-amber-500 dk:dark:text-amber-200',
    danger: 'dk:border-rose-400 dk:text-rose-700 dk:dark:border-rose-500 dk:dark:text-rose-200',
  },
  ghost: {
    base: '',
    neutral: 'dk:text-zinc-700 dk:dark:text-zinc-200 dk:bg-zinc-50 dk:dark:bg-zinc-800',
    primary: 'dk:text-teal-700 dk:dark:text-teal-200 dk:bg-teal-50 dk:dark:bg-teal-800',
    secondary: 'dk:text-slate-700 dk:dark:text-slate-200 dk:bg-slate-50 dk:dark:bg-slate-800',
    success: 'dk:text-emerald-700 dk:dark:text-emerald-200 dk:bg-emerald-50 dk:dark:bg-emerald-800',
    warning: 'dk:text-amber-700 dk:dark:text-amber-200 dk:bg-amber-50 dk:dark:bg-amber-800',
    danger: 'dk:text-rose-700 dk:dark:text-rose-200 dk:bg-rose-50 dk:dark:bg-rose-800',
  },
}

const computedClasses = computed(() => {
  const colorClass = variantClasses[props.variant]?.[props.color] || ''
  const baseVariant = variantClasses[props.variant].base || ''
  const roundedStyle = roundedClasses[props.rounded] || ''
  return [baseClass, baseVariant, colorClass, roundedStyle].join(' ')
})
</script>