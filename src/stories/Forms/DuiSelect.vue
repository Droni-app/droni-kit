<template>
  <select
    v-bind="$attrs"
    :class="computedClasses"
    @change="onChange"
  >
    <option v-if="placeholder" disabled selected hidden>
      {{ placeholder }}
    </option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option[itemValue] ?? ''"
      :selected="option[itemValue] == modelValue"
    >
      {{ option[itemLabel] ?? '' }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  options: {
    type: Array as () => Array<Record<string, any>>,
    default: () => [],
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
  itemLabel: {
    type: String,
    default: 'label',
  },
  itemValue: {
    type: String,
    default: 'value',
  },
  placeholder: {
    type: String,
    default: undefined,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

function onChange(event: Event) {
  const target = event.target as HTMLSelectElement
  const value = target.value
  
  // Intentamos convertir el valor a número si parece numérico
  const numValue = Number(value)
  
  // Si el valor se puede convertir a número sin resultados NaN y no es una cadena vacía,
  // emitimos el valor como número, de lo contrario como cadena
  if (!isNaN(numValue) && value !== '') {
    emit('update:modelValue', numValue)
  } else {
    emit('update:modelValue', value)
  }
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
  dk:dark:[color-scheme:dark]
`

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