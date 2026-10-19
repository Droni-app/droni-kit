<template>
  <span
    :class="skeletonClasses"
    :style="inlineStyles"
    aria-hidden="true"
    role="presentation"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../utils/cn'

export interface DuiSkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
}

const props = withDefaults(defineProps<DuiSkeletonProps>(), {
  variant: 'text',
  width: undefined,
  height: undefined,
  animation: 'pulse',
})

function toPx(val?: string | number): string | undefined {
  if (val === undefined) return undefined
  return typeof val === 'number' ? `${val}px` : val
}

const inlineStyles = computed(() => ({
  width: toPx(props.width),
  height: toPx(props.height),
}))

const animationClass = {
  pulse: 'dk:animate-pulse',
  wave: "dk:relative dk:overflow-hidden dk:after:absolute dk:after:inset-0 dk:after:content-[''] dk:after:-translate-x-full dk:after:animate-dui-shimmer dk:after:bg-linear-to-r dk:after:from-transparent dk:after:via-white/50 dk:after:to-transparent dk:dark:after:via-white/10",
  none: '',
}

const variantClasses = {
  text: 'dk:block dk:h-4 dk:w-full dk:rounded',
  circular: 'dk:block dk:w-10 dk:h-10 dk:rounded-full',
  rectangular: 'dk:block dk:w-full dk:h-20 dk:rounded-none',
  rounded: 'dk:block dk:w-full dk:h-20 dk:rounded-xl',
}

const skeletonClasses = computed(() => {
  return cn(
    'dk:bg-neutral-200/80 dk:dark:bg-white/[0.07]',
    variantClasses[props.variant],
    animationClass[props.animation],
  )
})
</script>

