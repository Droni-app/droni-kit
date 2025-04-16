<template>
  <button
    :type="type"
    :class="computedClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="animate-spin mr-2 h-4 w-4 border-2 border-t-transparent rounded-full border-white"></span>
    <span v-if="iconLeft && !loading" :class="['mr-2', iconLeft]"></span>
    <slot />
    <span v-if="iconRight && !loading" :class="['ml-2', iconRight]"></span>
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'solid',
    validator: (value: string) => ['solid', 'outline', 'ghost', 'link'].includes(value),
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'danger', 'success', 'warning', 'info'].includes(value),
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
  iconLeft: {
    type: String, // Puedes usar un nombre de ícono o un componente en otro enfoque
    default: null,
  },
  iconRight: {
    type: String,
    default: null,
  },
  customClass: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['click'])

const baseClass = 'inline-flex items-center justify-center font-medium transition rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const sizeClasses = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-3',
}

const variantClasses = {
  solid: {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  },
  outline: {
    primary: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    secondary: 'border border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-gray-500',
    danger: 'border border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500',
  },
  ghost: {
    primary: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    secondary: 'text-gray-600 hover:bg-gray-50 focus:ring-gray-500',
    danger: 'text-red-600 hover:bg-red-50 focus:ring-red-500',
  },
  link: {
    primary: 'text-blue-600 underline hover:text-blue-800',
    secondary: 'text-gray-600 underline hover:text-gray-800',
    danger: 'text-red-600 underline hover:text-red-800',
  },
}

const computedClasses = computed(() => {
  const variantStyle = variantClasses[props.variant as keyof typeof variantClasses]?.[props.color as keyof typeof variantClasses['solid']] || ''
  const sizeStyle = sizeClasses[props.size] || ''
  const blockStyle = props.block ? 'w-full' : ''
  return [baseClass, variantStyle, sizeStyle, blockStyle, props.customClass].join(' ')
})

const handleClick = (e: any) => {
  if (!props.disabled && !props.loading) emit('click', e)
}
</script>