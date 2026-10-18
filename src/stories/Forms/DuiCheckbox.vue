<template>
  <label :class="wrapperClasses">
    <span v-if="hasLabel && labelPosition === 'left'" :class="labelClasses">
      <slot>{{ label }}</slot>
    </span>

    <span class="dk:relative dk:inline-flex dk:items-center dk:flex-shrink-0">
      <input
        type="checkbox"
        class="dk:sr-only dk:peer"
        :checked="isChecked"
        :disabled="disabled"
        v-bind="$attrs"
        @change="onChange"
      />
      <span :class="boxClasses">
        <svg
          v-if="isChecked"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          class="dk:h-full dk:w-full dk:text-white dk:pointer-events-none">
          <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </span>

    <span v-if="hasLabel && labelPosition === 'right'" :class="labelClasses">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { cn } from '../../utils/cn'
import { peerCheckedAccent } from '../../theme/tokens'
import type { DuiColor, DuiSize } from '../../theme/tokens'

defineOptions({ inheritAttrs: false })

export interface DuiCheckboxProps {
  modelValue?: boolean | unknown[]
  value?: unknown
  label?: string
  labelPosition?: 'left' | 'right'
  color?: DuiColor
  size?: DuiSize
  block?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<DuiCheckboxProps>(), {
  modelValue: false,
  value: undefined,
  label: '',
  labelPosition: 'right',
  color: 'primary',
  size: 'md',
  block: false,
  disabled: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | unknown[]): void
}>()

const slots = useSlots()

const isChecked = computed(() => {
  return Array.isArray(props.modelValue) ? props.modelValue.includes(props.value) : props.modelValue
})

const sizeClasses: Record<DuiSize, { box: string; label: string }> = {
  sm: { box: 'dk:w-4 dk:h-4', label: 'dk:text-sm' },
  md: { box: 'dk:w-5 dk:h-5', label: 'dk:text-sm' },
  lg: { box: 'dk:w-6 dk:h-6', label: 'dk:text-base' },
}

const hasLabel = computed(() => Boolean(props.label || slots.default))

const wrapperClasses = computed(() => {
  const blockStyle = props.block ? 'dk:w-full dk:justify-between' : ''
  const disabledStyle = props.disabled ? 'dk:opacity-60 dk:cursor-not-allowed' : 'dk:cursor-pointer'
  return cn('dk:inline-flex dk:items-center dk:gap-2.5 dk:select-none', blockStyle, disabledStyle)
})

const labelClasses = computed(() => {
  return cn(
    'dk:leading-none dk:text-zinc-700 dk:dark:text-zinc-200',
    sizeClasses[props.size].label,
    props.disabled ? 'dk:cursor-not-allowed' : 'dk:cursor-pointer',
  )
})

const boxClasses = computed(() => {
  const size = sizeClasses[props.size].box
  const accent = peerCheckedAccent[props.color] || peerCheckedAccent.primary
  return cn(
    'dk:inline-flex dk:items-center dk:justify-center dk:rounded dk:border',
    'dk:border-zinc-300 dk:bg-white dk:dark:border-zinc-600 dk:dark:bg-zinc-900',
    'dk:transition-colors dk:duration-150',
    'dk:peer-focus-visible:outline-none dk:peer-focus-visible:ring-2 dk:peer-focus-visible:ring-offset-2 dk:peer-focus-visible:ring-teal-500/50 dk:dark:peer-focus-visible:ring-offset-zinc-900',
    'dk:peer-disabled:opacity-70',
    size,
    accent,
  )
})

function onChange(event: Event) {
  const target = event.target as HTMLInputElement
  if (Array.isArray(props.modelValue)) {
    const values: unknown[] = props.modelValue.filter((item) => item !== props.value)
    if (target.checked) values.push(props.value as unknown)
    emit('update:modelValue', values)
    return
  }
  emit('update:modelValue', target.checked)
}
</script>

