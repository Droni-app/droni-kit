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
    'dk:relative dk:rounded-xl dk:border dk:border-neutral-200 dk:dark:border-white/10',
    'dk:bg-white dk:dark:bg-neutral-900',
    'dk:shadow-xs dk:transition-[box-shadow,border-color] dk:duration-200',
    'dk:hover:shadow-md dk:hover:border-neutral-300',
    'dk:dark:hover:border-primary-400/30 dk:dark:hover:shadow-[0_0_40px_-16px_var(--dk-color-primary-500)]',
    'dk:overflow-hidden',
    // Hairline neón en el borde superior (solo dark)
    'dk:dark:before:pointer-events-none dk:dark:before:absolute dk:dark:before:inset-x-0 dk:dark:before:top-0 dk:dark:before:z-10 dk:dark:before:h-px',
    'dk:dark:before:bg-linear-to-r dk:dark:before:from-transparent dk:dark:before:via-primary-400/60 dk:dark:before:to-transparent',
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
    'dk:font-semibold dk:tracking-tight dk:text-neutral-900 dk:dark:text-white',
    'dk:line-clamp-2',
  ]
  if (props.to) {
    baseClasses.push(
      'dk:no-underline dk:hover:underline dk:transition-colors',
      'dk:hover:text-primary-600 dk:dark:hover:text-primary-400',
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
  return cn(config.subtitleSize, 'dk:text-neutral-600 dk:dark:text-neutral-400', 'dk:line-clamp-3')
})

const contentClasses = computed(() => {
  const config = sizeConfig[normalizedSize.value]
  return cn(config.contentSize, 'dk:text-neutral-700 dk:dark:text-neutral-300')
})

const footerClasses = computed(() => {
  return cn('dk:border-t dk:border-neutral-200 dk:dark:border-white/10', 'dk:pt-3 dk:mt-3')
})
</script>

