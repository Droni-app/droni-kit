<template>
  <div :class="computedClasses" role="alert">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../utils/cn'
import { roundedCornerClasses } from '../../theme/tokens'
import type { DuiColor } from '../../theme/tokens'
import type { DuiRounded } from '../../types'

export interface DuiAlertProps {
  /** 'soft' es alias de 'solid' (relleno tenue) */
  variant?: 'solid' | 'soft' | 'outline' | 'ghost'
  color?: DuiColor
  rounded?: DuiRounded
}

const props = withDefaults(defineProps<DuiAlertProps>(), {
  variant: 'solid',
  color: 'neutral',
  rounded: 'all',
})

const baseClass = 'dk:relative dk:px-4 dk:py-3 dk:text-sm dk:leading-relaxed dk:max-w-full'

const variantClasses: Record<'solid' | 'outline' | 'ghost', Record<DuiColor, string>> = {
  solid: {
    neutral: 'dk:border dk:bg-neutral-50 dk:border-neutral-200 dk:text-neutral-800 dk:dark:bg-white/5 dk:dark:border-white/10 dk:dark:text-neutral-100',
    primary: 'dk:border dk:bg-primary-50 dk:border-primary-200 dk:text-primary-900 dk:dark:bg-primary-500/10 dk:dark:border-primary-400/30 dk:dark:text-primary-100',
    secondary: 'dk:border dk:bg-secondary-50 dk:border-secondary-200 dk:text-secondary-900 dk:dark:bg-secondary-500/10 dk:dark:border-secondary-400/30 dk:dark:text-secondary-100',
    success: 'dk:border dk:bg-success-50 dk:border-success-200 dk:text-success-900 dk:dark:bg-success-500/10 dk:dark:border-success-400/30 dk:dark:text-success-100',
    warning: 'dk:border dk:bg-warning-50 dk:border-warning-200 dk:text-warning-900 dk:dark:bg-warning-500/10 dk:dark:border-warning-400/30 dk:dark:text-warning-100',
    danger: 'dk:border dk:bg-danger-50 dk:border-danger-200 dk:text-danger-900 dk:dark:bg-danger-500/10 dk:dark:border-danger-400/30 dk:dark:text-danger-100',
  },
  outline: {
    neutral: 'dk:border dk:border-neutral-300 dk:text-neutral-700 dk:dark:border-white/15 dk:dark:text-neutral-200',
    primary: 'dk:border dk:border-primary-400 dk:text-primary-800 dk:dark:border-primary-400/60 dk:dark:text-primary-200 dk:dark:shadow-[inset_0_0_24px_-12px_var(--dk-color-primary-400)]',
    secondary: 'dk:border dk:border-secondary-400 dk:text-secondary-800 dk:dark:border-secondary-400/60 dk:dark:text-secondary-200 dk:dark:shadow-[inset_0_0_24px_-12px_var(--dk-color-secondary-400)]',
    success: 'dk:border dk:border-success-400 dk:text-success-800 dk:dark:border-success-400/60 dk:dark:text-success-200 dk:dark:shadow-[inset_0_0_24px_-12px_var(--dk-color-success-400)]',
    warning: 'dk:border dk:border-warning-400 dk:text-warning-800 dk:dark:border-warning-400/60 dk:dark:text-warning-200 dk:dark:shadow-[inset_0_0_24px_-12px_var(--dk-color-warning-400)]',
    danger: 'dk:border dk:border-danger-400 dk:text-danger-800 dk:dark:border-danger-400/60 dk:dark:text-danger-200 dk:dark:shadow-[inset_0_0_24px_-12px_var(--dk-color-danger-400)]',
  },
  ghost: {
    neutral: 'dk:text-neutral-700 dk:bg-neutral-100/60 dk:dark:text-neutral-200 dk:dark:bg-white/[0.03]',
    primary: 'dk:text-primary-800 dk:bg-primary-50/60 dk:dark:text-primary-200 dk:dark:bg-primary-500/[0.06]',
    secondary: 'dk:text-secondary-800 dk:bg-secondary-50/60 dk:dark:text-secondary-200 dk:dark:bg-secondary-500/[0.06]',
    success: 'dk:text-success-800 dk:bg-success-50/60 dk:dark:text-success-200 dk:dark:bg-success-500/[0.06]',
    warning: 'dk:text-warning-800 dk:bg-warning-50/60 dk:dark:text-warning-200 dk:dark:bg-warning-500/[0.06]',
    danger: 'dk:text-danger-800 dk:bg-danger-50/60 dk:dark:text-danger-200 dk:dark:bg-danger-500/[0.06]',
  },
}

const computedClasses = computed(() => {
  const variant = props.variant === 'soft' ? 'solid' : props.variant
  const colorClass = variantClasses[variant]?.[props.color] || variantClasses.solid.neutral
  const roundedStyle = roundedCornerClasses[props.rounded] ?? roundedCornerClasses.all
  return cn(baseClass, colorClass, roundedStyle)
})
</script>
