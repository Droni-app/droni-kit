<template>
  <textarea
    v-bind="$attrs"
    :class="computedClasses"
    :value="modelValue"
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

export interface DuiTextareaProps {
  modelValue?: string
  size?: DuiSize
  block?: boolean
  rounded?: DuiRounded
  autoheight?: boolean
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<DuiTextareaProps>(), {
  modelValue: '',
  size: 'md',
  block: true,
  rounded: 'all',
  autoheight: true,
  resize: 'vertical',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event) {
  const target = event.target as HTMLTextAreaElement
  if (props.autoheight) autoResize(target)
  emit('update:modelValue', target.value)
}

const resizeClasses: Record<string, string> = {
  none: 'dk:resize-none',
  both: 'dk:resize',
  horizontal: 'dk:resize-x',
  vertical: 'dk:resize-y',
}

const computedClasses = computed(() => {
  const size = controlSizeClasses[props.size] || controlSizeClasses.md
  const block = props.block ? 'dk:w-full' : ''
  const rounded = roundedCornerClasses[props.rounded] ?? roundedCornerClasses.all
  const resize = resizeClasses[props.resize] || ''
  return cn(fieldBaseClasses, size, block, rounded, resize)
})

const autoResize = (textarea: HTMLTextAreaElement) => {
  textarea.style.height = 'auto'
  textarea.style.height = `${textarea.scrollHeight + 5}px`
}
</script>

