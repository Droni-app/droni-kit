<template>
  <div :class="cardClasses">
    <!-- Image -->
    <div v-if="image" class="dk:relative dk:overflow-hidden dk:rounded-t-lg">
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

    <!-- Content wrapper -->
    <div :class="contentWrapperClasses">
      <!-- Header (Title & Subtitle) -->
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

      <!-- Main content slot -->
      <div v-if="$slots.default" :class="contentClasses">
        <slot />
      </div>

      <!-- Footer slot -->
      <div v-if="$slots.footer" :class="footerClasses">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'

export interface DuiCardProps {
  size?: 's' | 'm' | 'l'
  image?: string
  title?: string
  subtitle?: string
  to?: string | object
}

const props = withDefaults(defineProps<DuiCardProps>(), {
  size: 'm',
  image: undefined,
  title: undefined,
  subtitle: undefined,
  to: undefined
})

const instance = getCurrentInstance()
const app = instance?.appContext.app

const hasVueRouter = computed(() => {
  try {
    return !!(
      app?.config.globalProperties.$router || 
      app?.config.globalProperties.$route ||
      (globalThis as any).VueRouter ||
      app?.component('RouterLink')
    )
  } catch {
    return false
  }
})

const hasNuxtRouter = computed(() => {
  try {
    return !!(
      (globalThis as any).$nuxt || 
      (globalThis as any).useNuxtApp ||
      (globalThis as any).navigateTo ||
      (typeof window !== 'undefined' && (window as any).$nuxt) ||
      app?.component('NuxtLink')
    )
  } catch {
    return false
  }
})

const getImageComponentType = () => {
  if (!props.to) return 'div'
  
  if (hasNuxtRouter.value) return 'NuxtLink'
  if (hasVueRouter.value) return 'RouterLink' 
  
  return 'a'
}

const getTitleComponentType = () => {
  if (!props.to) return 'h3'
  
  if (hasNuxtRouter.value) return 'NuxtLink'
  if (hasVueRouter.value) return 'RouterLink' 
  
  return 'a'
}

const getComponentProps = () => {
  const baseProps: Record<string, any> = {}
  
  if (!props.to) return baseProps
  
  const componentType = getImageComponentType()
  
  if (componentType === 'a') {
    baseProps.href = typeof props.to === 'string' ? props.to : '#'
  } else if (componentType === 'RouterLink' || componentType === 'NuxtLink') {
    baseProps.to = props.to
  }
  
  return baseProps
}

// Size configurations
const sizeConfig = {
  s: {
    padding: 'dk:p-3',
    spacing: 'dk:space-y-2',
    titleSize: 'dk:text-base',
    subtitleSize: 'dk:text-sm',
    contentSize: 'dk:text-sm'
  },
  m: {
    padding: 'dk:p-4',
    spacing: 'dk:space-y-3',
    titleSize: 'dk:text-lg',
    subtitleSize: 'dk:text-base',
    contentSize: 'dk:text-base'
  },
  l: {
    padding: 'dk:p-6',
    spacing: 'dk:space-y-4',
    titleSize: 'dk:text-xl',
    subtitleSize: 'dk:text-lg',
    contentSize: 'dk:text-lg'
  }
}

const cardClasses = computed(() => {
  return [
    // Base card styles
    'dk:bg-white dk:rounded-lg dk:shadow-md dk:border dk:border-gray-200',
    'dk:dark:bg-gray-800 dk:dark:border-gray-700 dk:dark:shadow-gray-900/20',
    'dk:transition-all dk:duration-200',
    'dk:hover:shadow-lg dk:dark:hover:shadow-gray-900/40',
    'dk:overflow-hidden'
  ].join(' ')
})

const imageClasses = computed(() => {
  return [
    'dk:w-full dk:h-48 dk:object-cover'
  ].join(' ')
})

const contentWrapperClasses = computed(() => {
  const config = sizeConfig[props.size]
  return [
    config.padding,
    config.spacing
  ].join(' ')
})

const headerClasses = computed(() => {
  const config = sizeConfig[props.size]
  return [
    config.spacing
  ].join(' ')
})

const titleClasses = computed(() => {
  const config = sizeConfig[props.size]
  const baseClasses = [
    config.titleSize,
    'dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100',
    'dk:line-clamp-2'
  ]
  
  // Add link styles if there's a 'to' prop
  if (props.to) {
    baseClasses.push(
      'dk:no-underline dk:hover:underline dk:transition-colors',
      'dk:hover:text-blue-600 dk:dark:hover:text-blue-400'
    )
  }
  
  return baseClasses.join(' ')
})

const imageLinkClasses = computed(() => {
  if (!props.to) {
    return 'dk:block'
  }
  
  return [
    'dk:block dk:no-underline',
    'dk:transition-transform dk:duration-200',
    'dk:hover:scale-105'
  ].join(' ')
})

const subtitleClasses = computed(() => {
  const config = sizeConfig[props.size]
  return [
    config.subtitleSize,
    'dk:text-gray-600 dk:dark:text-gray-400',
    'dk:line-clamp-3'
  ].join(' ')
})

const contentClasses = computed(() => {
  const config = sizeConfig[props.size]
  return [
    config.contentSize,
    'dk:text-gray-700 dk:dark:text-gray-300'
  ].join(' ')
})

const footerClasses = computed(() => {
  return [
    'dk:border-t dk:border-gray-200 dk:dark:border-gray-700',
    'dk:pt-3 dk:mt-3'
  ].join(' ')
})
</script>