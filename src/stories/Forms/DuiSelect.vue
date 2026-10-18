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
      :value="getOptionValue(option, itemValue) ?? ''"
      :selected="getOptionValue(option, itemValue) == modelValue"
    >
      {{ getOptionValue(option, itemLabel) ?? '' }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../utils/cn'
import { fieldBaseClasses, controlSizeClasses, roundedCornerClasses } from '../../theme/tokens'
import type { DuiSize } from '../../theme/tokens'
import type { DuiRounded } from '../../types'

defineOptions({ inheritAttrs: false })

export interface DuiSelectProps {
  modelValue?: string | number
  options?: Array<Record<string, any>>
  size?: DuiSize
  block?: boolean
  rounded?: DuiRounded
  itemLabel?: string
  itemValue?: string
  placeholder?: string
}

const props = withDefaults(defineProps<DuiSelectProps>(), {
  modelValue: '',
  options: () => [],
  size: 'md',
  block: true,
  rounded: 'all',
  itemLabel: 'label',
  itemValue: 'value',
  placeholder: undefined,
})

function getOptionValue(
  option: Record<string, any>,
  path: string,
): string | number | undefined {
  const value = path.split('.').reduce((currentValue, key) => {
    if (currentValue === null || typeof currentValue !== 'object') {
      return undefined
    }
    return currentValue[key]
  }, option as any)

  return typeof value === 'string' || typeof value === 'number' ? value : undefined
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

function onChange(event: Event) {
  const target = event.target as HTMLSelectElement
  const value = target.value
  const numValue = Number(value)

  if (!isNaN(numValue) && value !== '') {
    emit('update:modelValue', numValue)
  } else {
    emit('update:modelValue', value)
  }
}

const computedClasses = computed(() => {
  const size = controlSizeClasses[props.size] || controlSizeClasses.md
  const block = props.block ? 'dk:w-full' : ''
  const rounded = roundedCornerClasses[props.rounded] ?? roundedCornerClasses.all
  return cn(fieldBaseClasses, size, block, rounded, 'dk:cursor-pointer')
})
</script>

