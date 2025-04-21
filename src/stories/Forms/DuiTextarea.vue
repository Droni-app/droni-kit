<template>
  <div>
    <label
      :for="props.id"
      :class="computedLabelClasses"
      class="text-start block text-zinc-700 dark:text-zinc-200 px-0"
      v-if="props.label"
      >
      {{ props.label }}
      <span v-if="props.required" class="text-rose-500">*</span>
    </label>
    <textarea
      :class="computedClasses"
      :value="modelValue"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :required="props.required"
      :name="props.name"
      :id="props.id"
      :aria-label="props.placeholder"
      :aria-disabled="props.disabled"
      :aria-required="props.required"
      @input="onInput"
    />
  </div>
</template>
<script setup lang="ts">
import { computed, } from 'vue'


const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md',
  },
  block: {
    type: Boolean,
    default: false,
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
  rounded: {
    type: String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none',
    default: 'all',
  },
  autoheight: {
    type: Boolean,
    default: true,
  },
  resize: {
    type: String as () => 'none' | 'both' | 'horizontal' | 'vertical',
    default: 'none',
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event) {
  const target = event.target as HTMLTextAreaElement
  if(props.autoheight) autoResize(target);
  emit('update:modelValue', target.value)
}

const baseClass = 'border-b border-zinc-300 bg-zinc-50 text-zinc-800 focus:outline-none focus:bg-zinc-100 dark:bg-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:bg-zinc-700 dark:[color-scheme:dark]'

const sizeClasses = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-3 py-2',
  lg: 'text-lg px-5 py-3',
}

const roundedClasses = {
  all: 'rounded',
  top: 'rounded-t',
  bottom: 'rounded-b',
  left: 'rounded-l',
  right: 'rounded-r',
  none: 'rounded-none',
}

const sizeLabelClasses = {
  sm: 'text-sm pb-0.5',
  md: 'text-base pb-1',
  lg: 'text-lg pb-2',
}
const resizeClasses = {
  none: 'resize-none',
  both: 'resize',
  horizontal: 'resize-x',
  vertical: 'resize-y',
}

const computedClasses = computed(() => {
  const sizeStyle = sizeClasses[props.size] || ''
  const blockStyle = props.block ? 'w-full' : ''
  const roundedStyle = roundedClasses[props.rounded] || ''
  const resizeStyle = resizeClasses[props.resize] || ''
  return [baseClass, sizeStyle, blockStyle, roundedStyle, resizeStyle].join(' ')
})

const computedLabelClasses = computed(() => {
  const sizeStyle = sizeLabelClasses[props.size] || ''
  const blockStyle = props.block ? 'w-full' : ''
  return [sizeStyle, blockStyle].join(' ')
})

const autoResize = (textarea: HTMLTextAreaElement) => {
  textarea.style.height = 'auto'
  textarea.style.height = `${textarea.scrollHeight + 5}px`
}
</script>