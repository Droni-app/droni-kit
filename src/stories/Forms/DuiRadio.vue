<template>
  <div :class="groupClasses" role="radiogroup" :aria-labelledby="groupLabel ? `rg-label-${idSuffix}` : undefined">
    <span v-if="groupLabel" :id="`rg-label-${idSuffix}`" :class="groupLabelClasses">{{ groupLabel }}</span>

    <label
      v-for="option in options"
      :key="option.value"
      :class="itemClasses(option.value, option.disabled)">
      <span class="dk:relative dk:inline-flex dk:flex-shrink-0">
        <input
          type="radio"
          class="dk:sr-only dk:peer"
          :name="name"
          :value="option.value"
          :checked="modelValue === option.value"
          :disabled="option.disabled || disabled"
          v-bind="$attrs"
          @change="onChange(option.value)" />

        <!-- Outer ring -->
        <span :class="radioTrackClasses(option.value)" />
        <!-- Inner dot -->
        <span :class="radioDotClasses" />
      </span>

      <span :class="labelContainerClasses">
        <span :class="labelClasses">{{ option.label }}</span>
        <span v-if="option.description" :class="descriptionClasses">{{ option.description }}</span>
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

export interface DuiRadioOption {
  label: string
  value: string
  description?: string
  disabled?: boolean
}

export interface DuiRadioProps {
  modelValue?: string
  options: DuiRadioOption[]
  name?: string
  groupLabel?: string
  color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  orientation?: 'vertical' | 'horizontal'
  block?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<DuiRadioProps>(), {
  modelValue: undefined,
  name: () => `radio-${Math.random().toString(36).slice(2, 8)}`,
  groupLabel: undefined,
  color: 'primary',
  size: 'md',
  orientation: 'vertical',
  block: false,
  disabled: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()

const idSuffix = Math.random().toString(36).slice(2, 8)

function onChange(value: string) {
  emit('update:modelValue', value)
  emit('change', value)
}

const sizeMap = {
  sm: { radio: 'dk:w-3.5 dk:h-3.5', dot: 'dk:w-1.5 dk:h-1.5', label: 'dk:text-xs', description: 'dk:text-xs' },
  md: { radio: 'dk:w-4 dk:h-4', dot: 'dk:w-2 dk:h-2', label: 'dk:text-sm', description: 'dk:text-xs' },
  lg: { radio: 'dk:w-5 dk:h-5', dot: 'dk:w-2.5 dk:h-2.5', label: 'dk:text-base', description: 'dk:text-sm' },
}

const activeRingColorMap = {
  neutral: 'dk:peer-checked:border-zinc-600 dk:dark:peer-checked:border-zinc-400',
  primary: 'dk:peer-checked:border-slate-600 dk:dark:peer-checked:border-slate-400',
  secondary: 'dk:peer-checked:border-pink-600 dk:dark:peer-checked:border-pink-400',
  success: 'dk:peer-checked:border-emerald-600 dk:dark:peer-checked:border-emerald-400',
  warning: 'dk:peer-checked:border-amber-500 dk:dark:peer-checked:border-amber-400',
  danger: 'dk:peer-checked:border-rose-600 dk:dark:peer-checked:border-rose-400',
}

const activeDotColorMap = {
  neutral: 'dk:peer-checked:bg-zinc-600 dk:dark:peer-checked:bg-zinc-400',
  primary: 'dk:peer-checked:bg-slate-600 dk:dark:peer-checked:bg-slate-400',
  secondary: 'dk:peer-checked:bg-pink-600 dk:dark:peer-checked:bg-pink-400',
  success: 'dk:peer-checked:bg-emerald-600 dk:dark:peer-checked:bg-emerald-400',
  warning: 'dk:peer-checked:bg-amber-500 dk:dark:peer-checked:bg-amber-400',
  danger: 'dk:peer-checked:bg-rose-600 dk:dark:peer-checked:bg-rose-400',
}

const focusRingColorMap = {
  neutral: 'dk:peer-focus-visible:ring-zinc-400',
  primary: 'dk:peer-focus-visible:ring-slate-400',
  secondary: 'dk:peer-focus-visible:ring-pink-400',
  success: 'dk:peer-focus-visible:ring-emerald-400',
  warning: 'dk:peer-focus-visible:ring-amber-400',
  danger: 'dk:peer-focus-visible:ring-rose-400',
}

const groupClasses = computed(() => {
  const orient = props.orientation === 'horizontal' ? 'dk:flex dk:flex-row dk:flex-wrap dk:gap-x-5 dk:gap-y-3' : 'dk:flex dk:flex-col dk:gap-3'
  return [orient].join(' ')
})

const groupLabelClasses = computed(() => {
  return 'dk:block dk:text-xs dk:font-semibold dk:uppercase dk:tracking-wide dk:text-zinc-500 dk:dark:text-zinc-400 dk:mb-1'
})

function itemClasses(value: string, optDisabled?: boolean) {
  const isDisabled = optDisabled || props.disabled
  const dis = isDisabled ? 'dk:opacity-50 dk:cursor-not-allowed' : 'dk:cursor-pointer'
  const blockStyle = props.block ? 'dk:w-full dk:justify-between' : ''
  return ['dk:inline-flex dk:items-start dk:gap-3 dk:select-none', dis, blockStyle].join(' ')
}

function radioTrackClasses(value: string) {
  const s = sizeMap[props.size]
  const ringColor = activeRingColorMap[props.color]
  const focusColor = focusRingColorMap[props.color]
  return [
    'dk:rounded-full dk:border-2 dk:transition-colors dk:duration-150',
    'dk:border-zinc-300 dk:dark:border-zinc-600',
    'dk:peer-focus-visible:outline-none dk:peer-focus-visible:ring-2 dk:peer-focus-visible:ring-offset-2',
    'dk:bg-white dk:dark:bg-zinc-900',
    s.radio,
    ringColor,
    focusColor,
  ].join(' ')
}

const radioDotClasses = computed(() => {
  const s = sizeMap[props.size]
  const dotColor = activeDotColorMap[props.color]
  return [
    'dk:absolute dk:inset-0 dk:m-auto dk:rounded-full dk:scale-0 dk:peer-checked:scale-100 dk:transition-transform dk:duration-150 dk:pointer-events-none',
    s.dot,
    dotColor,
  ].join(' ')
})

const labelContainerClasses = computed(() => 'dk:flex dk:flex-col')

const labelClasses = computed(() => {
  return [sizeMap[props.size].label, 'dk:leading-snug dk:text-zinc-800 dk:dark:text-zinc-200'].join(' ')
})

const descriptionClasses = computed(() => {
  return [sizeMap[props.size].description, 'dk:leading-snug dk:text-zinc-500 dk:dark:text-zinc-400 dk:mt-0.5'].join(' ')
})
</script>
