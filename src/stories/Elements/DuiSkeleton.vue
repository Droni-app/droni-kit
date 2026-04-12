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

export interface DuiSkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  width?: string | number
  height?: string | number
  lines?: number
  animation?: 'pulse' | 'wave' | 'none'
}

const props = withDefaults(defineProps<DuiSkeletonProps>(), {
  variant: 'text',
  width: undefined,
  height: undefined,
  lines: 1,
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
  wave: 'dk:animate-[shimmer_1.6s_linear_infinite]',
  none: '',
}

const variantClasses = {
  text: 'dk:block dk:h-4 dk:w-full dk:rounded',
  circular: 'dk:block dk:w-10 dk:h-10 dk:rounded-full',
  rectangular: 'dk:block dk:w-full dk:h-20 dk:rounded-none',
  rounded: 'dk:block dk:w-full dk:h-20 dk:rounded-xl',
}

const skeletonClasses = computed(() => {
  return [
    'dk:bg-zinc-200 dk:dark:bg-zinc-700',
    variantClasses[props.variant],
    animationClass[props.animation],
  ].join(' ')
})
</script>
