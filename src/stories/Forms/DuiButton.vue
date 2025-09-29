<template>
  <component
    :is="componentType"
    v-bind="componentProps"
    :class="computedClasses"
    :title="props.title"
    :disabled="props.disabled || props.loading">
    <slot v-if="!props.loading" />
    <span v-else>Cargando...</span>
  </component>
</template>
<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'

// Type definitions for routing
export interface RouteLocationRaw {
  name?: string;
  path?: string;
  params?: Record<string, any>;
  query?: Record<string, any>;
  hash?: string;
  [key: string]: any;
}

export type RouteTo = string | RouteLocationRaw

export interface DuiButtonProps {
  variant?: 'solid' | 'outline' | 'ghost'
  color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  block?: boolean
  title?: string
  rounded?: 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'
  to?: RouteTo
}

const props = withDefaults(defineProps<DuiButtonProps>(), {
  variant: 'solid',
  color: 'neutral',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  block: false,
  title: undefined,
  rounded: 'all',
  to: undefined,
})

// Detect available routers with better checking
const instance = getCurrentInstance()
const app = instance?.appContext.app

const hasVueRouter = computed(() => {
  // Check for vue-router availability in multiple ways
  try {
    return !!(
      app?.config.globalProperties.$router || 
      app?.config.globalProperties.$route ||
      (globalThis as any).VueRouter ||
      // Check if RouterLink component is globally registered
      app?.component('RouterLink')
    )
  } catch {
    return false
  }
})

const hasNuxtRouter = computed(() => {
  // Check for Nuxt availability in multiple ways
  try {
    return !!(
      (globalThis as any).$nuxt || 
      (globalThis as any).useNuxtApp ||
      (globalThis as any).navigateTo ||
      (typeof window !== 'undefined' && (window as any).$nuxt) ||
      // Check if NuxtLink component is globally available
      app?.component('NuxtLink')
    )
  } catch {
    return false
  }
})

// Determine component type based on routing availability and 'to' prop
const componentType = computed(() => {
  if (!props.to) return 'button'
  
  if (hasNuxtRouter.value) return 'NuxtLink'
  if (hasVueRouter.value) return 'RouterLink' 
  
  // Fallback to regular link if no router is available but 'to' is provided
  return 'a'
})

// Determine component props based on component type
const componentProps = computed(() => {
  const baseProps: Record<string, any> = {}
  
  if (componentType.value === 'button') {
    baseProps.type = props.type
  } else if (componentType.value === 'a') {
    baseProps.href = typeof props.to === 'string' ? props.to : '#'
    baseProps.role = 'button'
  } else {
    // RouterLink or NuxtLink
    baseProps.to = props.to
  }
  
  return baseProps
})
const baseClass = `
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
      dk:border-zinc-500
      dk:dark:border-zinc-600
      dk:text-zinc-800
      dk:hover:bg-zinc-300
      dk:hover:text-zinc-900
      dk:dark:text-zinc-200
      dk:dark:hover:bg-zinc-600
      dk:dark:hover:text-zinc-100`,
    primary: `
      dk:border-slate-500
      dk:dark:border-slate-600
      dk:text-slate-800
      dk:hover:bg-slate-300
      dk:hover:text-slate-900
      dk:dark:text-slate-200
      dk:dark:hover:bg-slate-600
      dk:dark:hover:text-slate-100`,
    secondary: `
      dk:border-pink-500
      dk:dark:border-pink-600
      dk:text-pink-800
      dk:hover:bg-pink-300
      dk:hover:text-pink-900
      dk:dark:text-pink-200
      dk:dark:hover:bg-pink-600
      dk:dark:hover:text-pink-100`,
    success: `
      dk:border-emerald-500
      dk:dark:border-emerald-600
      dk:text-emerald-800
      dk:hover:bg-emerald-300
      dk:hover:text-emerald-900
      dk:dark:text-emerald-200
      dk:dark:hover:bg-emerald-600
      dk:dark:hover:text-emerald-100`,
    danger: `
      dk:border-rose-500
      dk:dark:border-rose-600
      dk:text-rose-800
      dk:hover:bg-rose-300
      dk:hover:text-rose-900
      dk:dark:text-rose-200
      dk:dark:hover:bg-rose-600
      dk:dark:hover:text-rose-100`,
    warning: `
      dk:border-amber-500
      dk:dark:border-amber-600
      dk:text-amber-800
      dk:hover:bg-amber-300
      dk:hover:text-amber-900
      dk:dark:text-amber-200
      dk:dark:hover:bg-amber-600
      dk:dark:hover:text-amber-100`,
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
  const blockStyle = props.block ? 'dk:w-full' : ''
  const roundedStyle = roundedClasses[props.rounded] || ''
  return [baseClass, variantStyle, sizeStyle, blockStyle, roundedStyle].join(' ')
})

</script>
