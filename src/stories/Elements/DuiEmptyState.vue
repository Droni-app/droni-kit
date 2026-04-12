<template>
  <div :class="rootClasses">
    <div v-if="$slots.illustration || illustration" :class="illustrationClasses" aria-hidden="true">
      <slot name="illustration">
        <span :class="illustrationTextClasses">{{ illustration }}</span>
      </slot>
    </div>

    <div :class="bodyClasses">
      <h3 v-if="title" :class="titleClasses">{{ title }}</h3>
      <p v-if="description || $slots.description" :class="descriptionClasses">
        <slot name="description">{{ description }}</slot>
      </p>
    </div>

    <div v-if="$slots.actions" :class="actionsClasses">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface DuiEmptyStateProps {
  title?: string
  description?: string
  illustration?: string
  variant?: 'default' | 'bordered' | 'dashed'
  size?: 'sm' | 'md' | 'lg'
  align?: 'center' | 'left'
}

const props = withDefaults(defineProps<DuiEmptyStateProps>(), {
  title: undefined,
  description: undefined,
  illustration: undefined,
  variant: 'default',
  size: 'md',
  align: 'center',
})

const sizeClasses = {
  sm: { root: 'dk:py-8 dk:px-4', illustration: 'dk:text-4xl', title: 'dk:text-sm dk:font-semibold', description: 'dk:text-xs', actions: 'dk:mt-4 dk:gap-2' },
  md: { root: 'dk:py-12 dk:px-6', illustration: 'dk:text-5xl', title: 'dk:text-base dk:font-semibold', description: 'dk:text-sm', actions: 'dk:mt-5 dk:gap-3' },
  lg: { root: 'dk:py-16 dk:px-8', illustration: 'dk:text-6xl', title: 'dk:text-lg dk:font-semibold', description: 'dk:text-base', actions: 'dk:mt-6 dk:gap-3' },
}

const variantClasses = {
  default: '',
  bordered: 'dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl',
  dashed: 'dk:border-2 dk:border-dashed dk:border-zinc-300 dk:dark:border-zinc-600 dk:rounded-xl',
}

const rootClasses = computed(() => {
  const s = sizeClasses[props.size]
  const align = props.align === 'center' ? 'dk:flex dk:flex-col dk:items-center dk:text-center' : 'dk:flex dk:flex-col dk:items-start dk:text-left'
  return [s.root, variantClasses[props.variant], align].join(' ')
})

const illustrationClasses = computed(() => {
  return 'dk:mb-4 dk:flex dk:items-center dk:justify-center'
})

const illustrationTextClasses = computed(() => sizeClasses[props.size].illustration)

const bodyClasses = computed(() => 'dk:space-y-1.5')

const titleClasses = computed(() => {
  return [sizeClasses[props.size].title, 'dk:text-zinc-900 dk:dark:text-zinc-100'].join(' ')
})

const descriptionClasses = computed(() => {
  return [sizeClasses[props.size].description, 'dk:text-zinc-500 dk:dark:text-zinc-400 dk:max-w-sm'].join(' ')
})

const actionsClasses = computed(() => {
  const s = sizeClasses[props.size]
  const align = props.align === 'center' ? 'dk:flex dk:flex-wrap dk:justify-center' : 'dk:flex dk:flex-wrap'
  return [s.actions, align].join(' ')
})
</script>
