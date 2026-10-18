<template>
  <div :class="cardClasses">
    <div v-if="image" class="dk:relative dk:overflow-hidden">
      <component
        :is="getImageComponentType()"
        v-bind="getComponentProps()"
        :class="imageLinkClasses">
        <img
          :src="image"
          :alt="title || 'Card image'"
          :class="imageClasses"
        />
      </component>
    </div>

    <div :class="contentWrapperClasses">
      <div v-if="title || subtitle" :class="headerClasses">
        <component
          v-if="title"
          :is="getTitleComponentType()"
          v-bind="getComponentProps()"
          :class="titleClasses">
          {{ title }}
        </component>
        <p v-if="subtitle" :class="subtitleClasses">
          {{ subtitle }}
        </p>
      </div>

      <div v-if="$slots.default" :class="contentClasses">
        <slot />
      </div>

      <div v-if="$slots.footer" :class="footerClasses">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getRouterComponentType, getRouterComponentProps } from '../../utils/router-detection'
import { cn } from '../../utils/cn'
import { normalizeSize } from '../../theme/tokens'
import type { DuiSize } from '../../theme/tokens'

export interface DuiCardProps {
  /** Acepta sm|md|lg y los alias legacy s|m|l */
  size?: DuiSize | 's' | 'm' | 'l'
  image?: string
  title?: string
  subtitle?: string
  to?: string | object
}

const props = withDefaults(defineProps<DuiCardProps>(), {
  size: 'md',
  image: undefined,
  title: undefined,
  subtitle: undefined,
  to: undefined,
})

const normalizedSize = computed(() => normalizeSize(props.size))

const getImageComponentType = () => {
  if (!props.to) return 'div'
  return getRouterComponentType(props.to)
}

const getTitleComponentType = () => {
  if (!props.to) return 'h3'
  return getRouterComponentType(props.to)
}

const getComponentProps = () => {
  const componentType = getImageComponentType()
  return getRouterComponentProps(props.to, componentType)
}

const sizeConfig: Record<DuiSize, { padding: string; spacing: string; titleSize: string; subtitleSize: string; contentSize: string }> = {
  sm: {
    padding: 'dk:p-3',
    spacing: 'dk:space-y-2',
    titleSize: 'dk:text-base',
    subtitleSize: 'dk:text-sm',
    contentSize: 'dk:text-sm',
  },
  md: {
    padding: 'dk:p-4',
    spacing: 'dk:space-y-3',
    titleSize: 'dk:text-lg',
    subtitleSize: 'dk:text-base',
    contentSize: 'dk:text-base',
  },
  lg: {
    padding: 'dk:p-6',
    spacing: 'dk:space-y-4',
    titleSize: 'dk:text-xl',
    subtitleSize: 'dk:text-lg',
    contentSize: 'dk:text-lg',
  },
}

const cardClasses = computed(() => {
  return cn(
    'dk:relative dk:rounded-xl dk:border dk:border-zinc-200 dk:dark:border-zinc-700',
    'dk:bg-white dk:dark:bg-zinc-900',
    'dk:shadow-sm dk:transition-all dk:duration-200',
    'dk:hover:shadow-md dk:hover:border-zinc-300 dk:dark:hover:border-zinc-600',
    'dk:overflow-hidden',
  )
})

const imageClasses = computed(() => {
  return cn('dk:w-full dk:h-48 dk:object-cover')
})

const contentWrapperClasses = computed(() => {
  const config = sizeConfig[normalizedSize.value]
  return cn(config.padding, config.spacing)
})

const headerClasses = computed(() => {
  const config = sizeConfig[normalizedSize.value]
  return cn(config.spacing)
})

const titleClasses = computed(() => {
  const config = sizeConfig[normalizedSize.value]
  const baseClasses = [
    config.titleSize,
    'dk:font-semibold dk:text-zinc-900 dk:dark:text-zinc-100',
    'dk:line-clamp-2',
  ]
  if (props.to) {
    baseClasses.push(
      'dk:no-underline dk:hover:underline dk:transition-colors',
      'dk:hover:text-teal-600 dk:dark:hover:text-teal-400',
    )
  }
  return cn(...baseClasses)
})

const imageLinkClasses = computed(() => {
  const baseClasses = ['dk:block', 'dk:transition-transform dk:duration-300', 'dk:hover:scale-105']
  if (props.to) baseClasses.push('dk:no-underline')
  return cn(...baseClasses)
})

const subtitleClasses = computed(() => {
  const config = sizeConfig[normalizedSize.value]
  return cn(config.subtitleSize, 'dk:text-zinc-600 dk:dark:text-zinc-400', 'dk:line-clamp-3')
})

const contentClasses = computed(() => {
  const config = sizeConfig[normalizedSize.value]
  return cn(config.contentSize, 'dk:text-zinc-700 dk:dark:text-zinc-300')
})

const footerClasses = computed(() => {
  return cn('dk:border-t dk:border-zinc-200 dk:dark:border-zinc-700', 'dk:pt-3 dk:mt-3')
})
</script>

