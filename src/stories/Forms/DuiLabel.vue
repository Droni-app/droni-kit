<template>
  <label :class="computedWrapperClasses">
    <div
      v-if="title"
      class="dk:relative"
      @mouseenter="showTooltip = helpText ? true : false"
      @mouseleave="showTooltip = false">
      <div :class="computedLabelClasses">
        <i v-if="icon" :class="icon" class="dk:mr-2"></i>
        {{ title }}
        <span v-if="required" class="dk:text-danger-500 dk:ml-1">*</span>
      </div>

      <div
        v-show="showTooltip && helpText"
        class="dk:absolute dk:bottom-full dk:left-0 dk:mb-2 dk:z-50 dk:min-w-[250px] dk:max-w-xs dk:rounded-lg dk:bg-neutral-900 dk:px-3 dk:py-2 dk:text-xs dk:text-white dk:shadow-lg dk:pointer-events-none dk:dark:bg-neutral-800 dk:dark:text-neutral-100 dk:dark:ring-1 dk:dark:ring-white/10">
        {{ helpText }}
        <span class="dk:absolute dk:left-4 dk:top-full dk:border-4 dk:border-transparent dk:border-t-neutral-900 dk:dark:border-t-neutral-800"></span>
      </div>
    </div>

    <div :class="computedFieldWrapperClasses">
      <slot></slot>
    </div>

    <div v-if="error" :class="computedErrorClasses">
      <span class="dk:inline-flex dk:items-center dk:justify-center dk:w-4 dk:h-4 dk:text-xs dk:bg-danger-500 dk:text-white dk:rounded-full dk:mr-2 dk:flex-shrink-0">
        !
      </span>
      {{ error }}
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { cn } from '../../utils/cn'
import { normalizeSize } from '../../theme/tokens'
import type { DuiSize } from '../../theme/tokens'

const showTooltip = ref(false)

export interface DuiLabelProps {
  title?: string
  icon?: string
  helpText?: string
  error?: string
  /** Acepta sm|md|lg y los alias legacy s|m|l */
  size?: DuiSize | 's' | 'm' | 'l'
  required?: boolean
}

const props = withDefaults(defineProps<DuiLabelProps>(), {
  title: undefined,
  icon: undefined,
  helpText: undefined,
  error: undefined,
  size: 'md',
  required: false,
})

const normalizedSize = computed(() => normalizeSize(props.size))

const labelSizeClasses: Record<DuiSize, string> = {
  sm: 'dk:text-sm',
  md: 'dk:text-base',
  lg: 'dk:text-lg',
}

const fieldWrapperSizeClasses: Record<DuiSize, string> = {
  sm: 'dk:mt-1',
  md: 'dk:mt-1.5',
  lg: 'dk:mt-2',
}

const errorSizeClasses: Record<DuiSize, string> = {
  sm: 'dk:text-xs',
  md: 'dk:text-sm',
  lg: 'dk:text-base',
}

const computedWrapperClasses = computed(() => cn('dk:space-y-1'))

const computedLabelClasses = computed(() => {
  const sizeClass = labelSizeClasses[normalizedSize.value] || labelSizeClasses.md
  const baseClass = 'dk:block dk:font-medium dk:text-neutral-800 dk:dark:text-neutral-200 dk:flex dk:items-center'
  const cursorClass = props.helpText ? 'dk:cursor-help' : ''
  return cn(baseClass, sizeClass, cursorClass)
})

const computedFieldWrapperClasses = computed(() => {
  const spacingClass = fieldWrapperSizeClasses[normalizedSize.value] || fieldWrapperSizeClasses.md
  return cn(spacingClass)
})

const computedErrorClasses = computed(() => {
  const sizeClass = errorSizeClasses[normalizedSize.value] || errorSizeClasses.md
  const baseClass = 'dk:text-danger-600 dk:dark:text-danger-400 dk:flex dk:items-center dk:mt-1'
  return cn(baseClass, sizeClass)
})
</script>

