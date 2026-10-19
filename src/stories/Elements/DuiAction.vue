<template>
  <component
    :is="componentType"
    v-bind="componentProps"
    :class="computedClasses"
    :title="props.title">
    <span v-if="props.loading" class="dk:inline-flex dk:items-center dk:gap-2" aria-hidden="true">
      <span class="dk:h-4 dk:w-4 dk:animate-spin dk:rounded-full dk:border-2 dk:border-current dk:border-t-transparent" />
      <slot name="loading"><slot /></slot>
    </span>
    <slot v-else />
  </component>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { getRouterComponentType, getRouterComponentProps } from '../../utils/router-detection'
import { cn } from '../../utils/cn'
import { variantColorClasses, controlSizeClasses, roundedCornerClasses, focusRingClasses } from '../../theme/tokens'
import type { DuiColor, DuiVariant, DuiSize } from '../../theme/tokens'
import type { RouteTo, DuiRounded } from '../../types'

export interface DuiActionProps {
  variant?: DuiVariant
  color?: DuiColor
  size?: DuiSize
  loading?: boolean
  block?: boolean
  title?: string
  rounded?: DuiRounded
  to?: RouteTo
}

const props = withDefaults(defineProps<DuiActionProps>(), {
  variant: 'solid',
  color: 'neutral',
  size: 'md',
  loading: false,
  block: false,
  title: undefined,
  rounded: 'all',
  to: undefined,
})

const componentType = computed(() => {
  if (!props.to) return 'span'
  return getRouterComponentType(props.to)
})

const componentProps = computed(() => {
  return getRouterComponentProps(props.to, componentType.value)
})

const baseClass = [
  'dk:inline-flex dk:items-center dk:justify-center dk:font-medium',
  'dk:transition-all dk:duration-150',
  'dk:cursor-pointer dk:select-none',
  'dk:whitespace-nowrap dk:overflow-hidden dk:text-ellipsis',
  focusRingClasses,
  'dk:active:scale-[0.98]',
  'dk:max-w-full',
].join(' ')

const computedClasses = computed(() => {
  const variant = variantColorClasses[props.variant]?.[props.color] || ''
  const size = controlSizeClasses[props.size] || controlSizeClasses.md
  const block = props.block ? 'dk:flex dk:w-full' : ''
  const rounded = roundedCornerClasses[props.rounded] ?? roundedCornerClasses.all
  return cn(baseClass, variant, size, block, rounded)
})
</script>

