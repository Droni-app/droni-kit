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
  pulse: 'dui-skeleton-pulse',
  wave:  'dui-skeleton-wave',
  none:  '',
}

const variantClasses = {
  text:        'dk:block dk:h-4 dk:w-full dk:rounded',
  circular:    'dk:block dk:w-10 dk:h-10 dk:rounded-full',
  rectangular: 'dk:block dk:w-full dk:h-20 dk:rounded-none',
  rounded:     'dk:block dk:w-full dk:h-20 dk:rounded-xl',
}

const skeletonClasses = computed(() => {
  return [
    'dk:bg-zinc-200 dk:dark:bg-zinc-700',
    variantClasses[props.variant],
    animationClass[props.animation],
  ].join(' ')
})
</script>

<style scoped>
.dui-skeleton-pulse {
  animation: dui-pulse 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.dui-skeleton-wave {
  position: relative;
  overflow: hidden;
}

.dui-skeleton-wave::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.35) 50%,
    transparent 100%
  );
  animation: dui-shimmer 1.6s linear infinite;
}

@media (prefers-color-scheme: dark) {
  .dui-skeleton-wave::after {
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.08) 50%,
      transparent 100%
    );
  }
}

@keyframes dui-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.45; }
}

@keyframes dui-shimmer {
  from { transform: translateX(-100%); }
  to   { transform: translateX(100%); }
}
</style>
