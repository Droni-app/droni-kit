<template>
  <input
    :class="computedClasses"
    :value="modelValue"
    v-bind="$attrs"
    @input="onInput"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md',
  },
  block: {
    type: Boolean,
    default: true,
  },
  rounded: {
    type: String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none',
    default: 'all',
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
const baseClass = `
  dk:border-b
  dk:border-zinc-300
  dk:bg-zinc-50
  dk:text-zinc-800
  dk:focus:outline-none
  dk:focus:bg-zinc-100
  dk:dark:bg-zinc-700
  dk:dark:border-zinc-600
  dk:dark:bg-zinc-800
  dk:dark:text-zinc-100
  dk:dark:focus:bg-zinc-700
  dk:dark:[color-scheme:dark]`

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

const computedClasses = computed(() => {
  const sizeStyle = sizeClasses[props.size] || ''
  const blockStyle = props.block ? 'dk:w-full' : ''
  const roundedStyle = roundedClasses[props.rounded] || ''
  return [baseClass, sizeStyle, blockStyle, roundedStyle].join(' ')
})
</script>