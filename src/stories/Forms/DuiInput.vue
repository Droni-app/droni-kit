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
import { cn } from '../../utils/cn'
import { fieldBaseClasses, controlSizeClasses, roundedCornerClasses } from '../../theme/tokens'
import type { DuiSize } from '../../theme/tokens'
import type { DuiRounded } from '../../types'

defineOptions({ inheritAttrs: false })

export interface DuiInputProps {
  modelValue?: string | number
  size?: DuiSize
  block?: boolean
  rounded?: DuiRounded
}

const props = withDefaults(defineProps<DuiInputProps>(), {
  modelValue: '',
  size: 'md',
  block: true,
  rounded: 'all',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const computedClasses = computed(() => {
  const size = controlSizeClasses[props.size] || controlSizeClasses.md
  const block = props.block ? 'dk:w-full' : ''
  const rounded = roundedCornerClasses[props.rounded] ?? roundedCornerClasses.all
  return cn(fieldBaseClasses, size, block, rounded)
})
</script>

