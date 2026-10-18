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
  wave: 'dk:relative dk:overflow-hidden after:dk:absolute after:dk:inset-0 after:dk:translate-x-[-100%] after:dk:animate-[dui-shimmer_1.6s_linear_infinite] after:dk:bg-gradient-to-r after:dk:from-transparent after:dk:via-white/35 after:dk:to-transparent after:dk:dark:via-white/10',
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
    'dk:bg-zinc-200 dk:dark:bg-zinc-700',
    variantClasses[props.variant],
    animationClass[props.animation],
  )
})
</script>

