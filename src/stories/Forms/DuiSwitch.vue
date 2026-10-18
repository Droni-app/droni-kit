<template>
  <label :class="wrapperClasses">
    <span v-if="hasLabel && labelPosition === 'left'" :class="labelClasses">
      <slot>{{ label }}</slot>
      <span v-if="description" :class="descriptionClasses">{{ description }}</span>
    </span>

    <span class="dk:relative dk:inline-flex dk:items-center dk:flex-shrink-0">
      <input
        type="checkbox"
        class="dk:sr-only dk:peer"
        role="switch"
        :aria-checked="modelValue"
        :checked="modelValue"
        :disabled="disabled"
        v-bind="$attrs"
        @change="onChange"
      />
      <span :class="trackClasses" />
      <span :class="thumbClasses">
        <span v-if="showIcons" aria-hidden="true" :class="iconClasses">
          <svg v-if="modelValue" viewBox="0 0 12 12" fill="none" class="dk:w-2.5 dk:h-2.5">
            <path d="M3.5 6.5l2 2 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else viewBox="0 0 12 12" fill="none" class="dk:w-2.5 dk:h-2.5">
            <line x1="3" y1="3" x2="9" y2="9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="9" y1="3" x2="3" y2="9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </span>
      </span>
    </span>

    <span v-if="hasLabel && labelPosition === 'right'" :class="labelClasses">
      <slot>{{ label }}</slot>
      <span v-if="description" :class="descriptionClasses">{{ description }}</span>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { cn } from '../../utils/cn'
import { peerCheckedAccent, textColorClasses } from '../../theme/tokens'
import type { DuiColor, DuiSize } from '../../theme/tokens'

defineOptions({ inheritAttrs: false })

export interface DuiSwitchProps {
  modelValue?: boolean
  label?: string
  description?: string
  labelPosition?: 'left' | 'right'
  color?: DuiColor
  size?: DuiSize
  block?: boolean
  disabled?: boolean
  showIcons?: boolean
}

const props = withDefaults(defineProps<DuiSwitchProps>(), {
  modelValue: false,
  label: '',
  description: '',
  labelPosition: 'right',
  color: 'primary',
  size: 'md',
  block: false,
  disabled: false,
  showIcons: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}>()

const slots = useSlots()

const sizeClasses: Record<DuiSize, { track: string; thumb: string; translate: string }> = {
  sm: { track: 'dk:w-8 dk:h-4', thumb: 'dk:w-3 dk:h-3', translate: 'dk:peer-checked:translate-x-[16px]' },
  md: { track: 'dk:w-10 dk:h-5', thumb: 'dk:w-4 dk:h-4', translate: 'dk:peer-checked:translate-x-5' },
  lg: { track: 'dk:w-12 dk:h-6', thumb: 'dk:w-5 dk:h-5', translate: 'dk:peer-checked:translate-x-6' },
}

const hasLabel = computed(() => Boolean(props.label || slots.default))

const wrapperClasses = computed(() => {
  const blockStyle = props.block ? 'dk:w-full dk:justify-between' : ''
  const displayStyle = props.block ? 'dk:flex' : 'dk:inline-flex'
  const disabledStyle = props.disabled ? 'dk:opacity-60 dk:cursor-not-allowed' : 'dk:cursor-pointer'
  return cn(displayStyle, 'dk:items-center dk:gap-3 dk:select-none', blockStyle, disabledStyle)
})

const labelClasses = computed(() => {
  return cn(
    'dk:flex dk:flex-col dk:text-sm dk:leading-snug dk:text-zinc-700 dk:dark:text-zinc-200',
    props.disabled ? 'dk:cursor-not-allowed' : 'dk:cursor-pointer',
  )
})

const descriptionClasses = computed(() => 'dk:text-xs dk:text-zinc-500 dk:dark:text-zinc-400 dk:mt-0.5')

const trackClasses = computed(() => {
  const size = sizeClasses[props.size]
  const accent = peerCheckedAccent[props.color] || peerCheckedAccent.primary
  return cn(
    'dk:inline-flex dk:items-center dk:transition-colors dk:duration-200 dk:rounded-full',
    'dk:bg-zinc-300 dk:dark:bg-zinc-600',
    'dk:peer-focus-visible:outline-none dk:peer-focus-visible:ring-2 dk:peer-focus-visible:ring-offset-2 dk:peer-focus-visible:ring-indigo-500/50 dk:dark:peer-focus-visible:ring-offset-zinc-900',
    'dk:peer-disabled:opacity-70',
    size.track,
    accent,
  )
})

const thumbClasses = computed(() => {
  const size = sizeClasses[props.size]
  return cn(
    'dk:absolute dk:left-0.5 dk:top-1/2 dk:-translate-y-1/2',
    'dk:bg-white dk:dark:bg-zinc-100',
    'dk:rounded-full dk:shadow-sm dk:transition-all dk:duration-200',
    'dk:pointer-events-none dk:flex dk:items-center dk:justify-center',
    size.thumb,
    size.translate,
  )
})

const iconClasses = computed(() => {
  return props.modelValue ? textColorClasses[props.color] : 'dk:text-zinc-400 dk:dark:text-zinc-500'
})

function onChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
  emit('change', target.checked)
}
</script>

