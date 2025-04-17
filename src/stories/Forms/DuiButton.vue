<template>
  <button
    :type="type"
    :class="computedClasses"
    :disabled="props.disabled || props.loading">
    <slot v-if="!loading" />
    <span v-else>Cargando...</span>
  </button>
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
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md',
  },
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
})

const baseClass = 'transition rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:shadow-md'

const sizeClasses = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-3',
}

const variantClasses = {
  solid: {
    neutral: 'bg-zinc-200 text-zinc-800 hover:bg-zinc-300 hover:text-zinc-900 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 dark:hover:text-zinc-50',
    primary: 'bg-slate-200 text-slate-800 hover:bg-slate-300 hover:text-slate-900 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 dark:hover:text-slate-100',
    secondary: 'bg-pink-200 text-pink-800 hover:bg-pink-300 hover:text-pink-900 dark:bg-pink-700 dark:text-pink-200 dark:hover:bg-pink-600 dark:hover:text-pink-100',
    success: 'bg-emerald-200 text-emerald-800 hover:bg-emerald-300 hover:text-emerald-900 dark:bg-emerald-700 dark:text-emerald-200 dark:hover:bg-emerald-600 dark:hover:text-emerald-100',
    danger: 'bg-rose-200 text-rose-800 hover:bg-rose-300 hover:text-rose-900 dark:bg-rose-700 dark:text-rose-200 dark:hover:bg-rose-600 dark:hover:text-rose-100',
    warning: 'bg-amber-200 text-amber-800 hover:bg-amber-300 hover:text-amber-900 dark:bg-amber-700 dark:text-amber-200 dark:hover:bg-amber-600 dark:hover:text-amber-100',
  },
  outline: {
    neutral: 'border border-zinc-600 text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-300 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-zinc-50',
    primary: 'border border-sky-600 text-sky-800 hover:bg-sky-100 hover:text-sky-900 dark:border-sky-300 dark:text-sky-200 dark:hover:bg-sky-800 dark:hover:text-sky-50',
    secondary: 'border border-pink-600 text-pink-800 hover:bg-pink-100 hover:text-pink-900 dark:border-pink-300 dark:text-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-50',
    success: 'border border-green-600 text-green-800 hover:bg-green-100 hover:text-green-900 dark:border-green-300 dark:text-green-200 dark:hover:bg-green-800 dark:hover:text-green-50',
    danger: 'border border-red-600 text-red-800 hover:bg-red-100 hover:text-red-900 dark:border-red-300 dark:text-red-200 dark:hover:bg-red-800 dark:hover:text-red-50',
    warning: 'border border-yellow-600 text-yellow-800 hover:bg-yellow-100 hover:text-yellow-900 dark:border-yellow-300 dark:text-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-50',
  },
  ghost: {
    neutral: 'text-zinc-600 hover:bg-zinc-50 dark:text-zinc-100 dark:hover:bg-zinc-800',
    primary: 'text-slate-600 hover:bg-slate-50 dark:text-slate-100 dark:hover:bg-slate-800',
    secondary: 'text-pink-600 hover:bg-pink-50 dark:text-pink-100 dark:hover:bg-pink-800',
    success: 'text-emerald-600 hover:bg-emerald-50 dark:text-emerald-100 dark:hover:bg-emerald-800',
    danger: 'text-rose-600 hover:bg-rose-50 dark:text-rose-100 dark:hover:bg-rose-800',
    warning: 'text-amber-600 hover:bg-amber-50 dark:text-amber-100 dark:hover:bg-amber-800',
  }
}

const computedClasses = computed(() => {
  const variantStyle = variantClasses[props.variant]?.[props.color] || ''
  const sizeStyle = sizeClasses[props.size] || ''
  const blockStyle = props.block ? 'w-full' : ''
  return [baseClass, variantStyle, sizeStyle, blockStyle].join(' ')
})

</script>
