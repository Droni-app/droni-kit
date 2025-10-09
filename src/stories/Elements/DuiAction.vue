<template>
  <component
    :is="componentType"
    v-bind="componentProps"
    :class="computedClasses"
    :title="props.title">
    <slot v-if="!props.loading" />
    <span v-else>Cargando...</span>
  </component>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { getRouterComponentType, getRouterComponentProps } from '../../utils/router-detection'
import type { RouteTo } from '../Forms/DuiButton.vue'

export interface DuiActionProps {
  variant?: 'solid' | 'outline' | 'ghost'
  color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  block?: boolean
  title?: string
  rounded?: 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'
  to?: RouteTo
}

const props = withDefaults(defineProps<DuiActionProps>(), {
  variant: 'solid',
  color: 'neutral',
  size: 'md',
  loading: false,
  block: false,
  title: undefined,
  rounded: 'all',
  to: undefined,
})

const componentType = computed(() => {
  if (!props.to) return 'span'
  return getRouterComponentType(props.to)
})

const componentProps = computed(() => {
  return getRouterComponentProps(props.to, componentType.value)
})

const baseClass =  `
  dk:transition
  dk:text-center
  dk:disabled:opacity-50
  dk:disabled:cursor-not-allowed
  dk:cursor-pointer
  dk:hover:shadow-md
  dk:overflow-hidden
  dk:text-ellipsis
  dk:whitespace-nowrap
  dk:active:scale-95
  dk:max-w-full`

const sizeClasses = {
  sm: 'dk:text-sm dk:px-3 dk:py-1.5',
  md: 'dk:text-base dk:px-4 dk:py-2',
  lg: 'dk:text-lg dk:px-5 dk:py-3',
}

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
    base: 'dk:border-b',
    neutral: `
      dk:border-zinc-500
      dk:dark:border-zinc-600
      dk:bg-zinc-200
      dk:text-zinc-800
      dk:hover:bg-zinc-300
      dk:hover:text-zinc-900
      dk:dark:bg-zinc-700
      dk:dark:text-zinc-200
      dk:dark:hover:bg-zinc-600
      dk:dark:hover:text-zinc-50`,
    primary: `
      dk:border-slate-500
      dk:dark:border-slate-600
      dk:bg-slate-200
      dk:text-slate-800
      dk:hover:bg-slate-300
      dk:hover:text-slate-900
      dk:dark:bg-slate-700
      dk:dark:text-slate-200
      dk:dark:hover:bg-slate-600
      dk:dark:hover:text-slate-100`,
    secondary: `
      dk:border-pink-500
      dk:dark:border-pink-600
      dk:bg-pink-200
      dk:text-pink-800
      dk:hover:bg-pink-300
      dk:hover:text-pink-900
      dk:dark:bg-pink-700
      dk:dark:text-pink-200
      dk:dark:hover:bg-pink-600
      dk:dark:hover:text-pink-100`,
    success: `
      dk:border-emerald-500
      dk:dark:border-emerald-600
      dk:bg-emerald-200
      dk:text-emerald-800
      dk:hover:bg-emerald-300
      dk:hover:text-emerald-900
      dk:dark:bg-emerald-700
      dk:dark:text-emerald-200
      dk:dark:hover:bg-emerald-600
      dk:dark:hover:text-emerald-100`,
    danger: `
      dk:border-rose-500
      dk:dark:border-rose-600
      dk:bg-rose-200
      dk:text-rose-800
      dk:hover:bg-rose-300
      dk:hover:text-rose-900
      dk:dark:bg-rose-700
      dk:dark:text-rose-200
      dk:dark:hover:bg-rose-600
      dk:dark:hover:text-rose-100`,
    warning: `
      dk:border-amber-500
      dk:dark:border-amber-600
      dk:bg-amber-200
      dk:text-amber-800
      dk:hover:bg-amber-300
      dk:hover:text-amber-900
      dk:dark:bg-amber-700
      dk:dark:text-amber-200
      dk:dark:hover:bg-amber-600
      dk:dark:hover:text-amber-100`,
  },
  outline: {
    base: 'dk:border',
    neutral: `
      dk:border-zinc-600
      dk:text-zinc-800
      dk:hover:bg-zinc-100
      dk:hover:text-zinc-900
      dk:dark:border-zinc-300
      dk:dark:text-zinc-200
      dk:dark:hover:bg-zinc-800
      dk:dark:hover:text-zinc-50`,
    primary: `
      dk:border-sky-600
      dk:text-sky-800
      dk:hover:bg-sky-100
      dk:hover:text-sky-900
      dk:dark:border-sky-300
      dk:dark:text-sky-200
      dk:dark:hover:bg-sky-800
      dk:dark:hover:text-sky-50`,
    secondary: `
      dk:border-pink-600
      dk:text-pink-800
      dk:hover:bg-pink-100
      dk:hover:text-pink-900
      dk:dark:border-pink-300
      dk:dark:text-pink-200
      dk:dark:hover:bg-pink-800
      dk:dark:hover:text-pink-50`,
    success: `
      dk:border-green-600
      dk:text-green-800
      dk:hover:bg-green-100
      dk:hover:text-green-900
      dk:dark:border-green-300
      dk:dark:text-green-200
      dk:dark:hover:bg-green-800
      dk:dark:hover:text-green-50`,
    danger: `
      dk:border-red-600
      dk:text-red-800
      dk:hover:bg-red-100
      dk:hover:text-red-900
      dk:dark:border-red-300
      dk:dark:text-red-200
      dk:dark:hover:bg-red-800
      dk:dark:hover:text-red-50`,
    warning: `
      dk:border-yellow-600
      dk:text-yellow-800
      dk:hover:bg-yellow-100
      dk:hover:text-yellow-900
      dk:dark:border-yellow-300
      dk:dark:text-yellow-200
      dk:dark:hover:bg-yellow-800
      dk:dark:hover:text-yellow-50`,
  },
  ghost: {
    base: 'dk:border-b dk:border-transparent',
    neutral: `
      dk:hover:border-zinc-500
      dk:hover:dark:border-zinc-600
      dk:text-zinc-600
      dk:hover:bg-zinc-50
      dk:dark:text-zinc-100
      dk:dark:hover:bg-zinc-800`,
    primary: `
      dk:hover:border-slate-500
      dk:hover:dark:border-slate-600
      dk:text-slate-600
      dk:hover:bg-slate-50
      dk:dark:text-slate-100
      dk:dark:hover:bg-slate-800`,
    secondary: `
      dk:hover:border-pink-500
      dk:hover:dark:border-pink-600
      dk:text-pink-600
      dk:hover:bg-pink-50
      dk:dark:text-pink-100
      dk:dark:hover:bg-pink-800`,
    success: `
      dk:hover:border-emerald-500
      dk:hover:dark:border-emerald-600
      dk:text-emerald-600
      dk:hover:bg-emerald-50
      dk:dark:text-emerald-100
      dk:dark:hover:bg-emerald-800`,
    danger: `
      dk:hover:border-rose-500
      dk:hover:dark:border-rose-600
      dk:text-rose-600
      dk:hover:bg-rose-50
      dk:dark:text-rose-100
      dk:dark:hover:bg-rose-800`,
    warning: `
      dk:hover:border-amber-500
      dk:hover:dark:border-amber-600
      dk:text-amber-600
      dk:hover:bg-amber-50
      dk:dark:text-amber-100
      dk:dark:hover:bg-amber-800`,
  },
}

const computedClasses = computed(() => {
  const variantStyle = (variantClasses[props.variant]?.[props.color] || '') + ' ' + variantClasses[props.variant].base
  const sizeStyle = sizeClasses[props.size] || ''
  const blockStyle = props.block ? 'dk:block' : 'dk:inline-block'
  const roundedStyle = roundedClasses[props.rounded] || ''
  return [baseClass, variantStyle, sizeStyle, blockStyle, roundedStyle].join(' ')
})

</script>
