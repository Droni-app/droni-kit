<template>
  <div>
    <label
      :for="props.id"
      :class="computedLabelClasses"
      class="dk:text-start dk:block dk:text-zinc-700 dk:dark:text-zinc-200 dk:px-0"
      v-if="props.label"
      >
      {{ props.label }}
      <span v-if="props.required" class="dk:text-rose-500">*</span>
    </label>
    <input
      :type="props.type"
      :class="computedClasses"
      :value="modelValue"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :required="props.required"
      :name="props.name"
      :id="props.id"
      :pattern="props.pattern"
      :readonly="props.readonly"
      :aria-label="props.placeholder"
      :aria-disabled="props.disabled"
      :aria-required="props.required"
      @input="onInput"
    />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String as () => 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'date' | 'datetime-local' | 'month' | 'week' | 'time',
    default: 'text',
  },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md',
  },
  block: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    default: undefined,
  },
  id: {
    type: String,
    default: undefined,
  },
  required: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: undefined,
  },
  pattern: {
    type: String,
    default: undefined,
  },
  readonly: {
    type: Boolean,
    default: false,
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

const sizeLabelClasses = {
  sm: 'dk:text-sm dk:pb-0.5',
  md: 'dk:text-base dk:pb-1',
  lg: 'dk:text-lg dk:pb-2',
}


const computedClasses = computed(() => {
  const sizeStyle = sizeClasses[props.size] || ''
  const blockStyle = props.block ? 'dk:w-full' : ''
  const roundedStyle = roundedClasses[props.rounded] || ''
  return [baseClass, sizeStyle, blockStyle, roundedStyle].join(' ')
})

const computedLabelClasses = computed(() => {
  const sizeStyle = sizeLabelClasses[props.size] || ''
  const blockStyle = props.block ? 'dk:w-full' : ''
  return [sizeStyle, blockStyle].join(' ')
})
</script>