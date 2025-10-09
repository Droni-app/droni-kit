<template>
  <nav :class="navbarClasses">
    <!-- Brand/Logo -->
    <div v-if="$slots.brand" class="dk:flex dk:items-center dk:gap-4">
      <slot name="brand"></slot>
      
      <!-- Mobile menu button -->
      <button
        type="button"
        class="dk:md:hidden dk:p-2 dk:rounded-lg dk:text-gray-500 dk:hover:bg-gray-100 dk:focus:outline-none dk:focus:ring-2 dk:focus:ring-gray-200 dk:dark:text-gray-400 dk:dark:hover:bg-gray-700 dk:dark:focus:ring-gray-600"
        @click="toggleMobileMenu">
        <span class="dk:sr-only">Open main menu</span>
        <svg
          class="dk:w-5 dk:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu button only (when no brand) -->
    <button
      v-if="!$slots.brand"
      type="button"
      class="dk:md:hidden dk:p-2 dk:rounded-lg dk:text-gray-500 dk:hover:bg-gray-100 dk:focus:outline-none dk:focus:ring-2 dk:focus:ring-gray-200 dk:dark:text-gray-400 dk:dark:hover:bg-gray-700 dk:dark:focus:ring-gray-600"
      @click="toggleMobileMenu">
      <span class="dk:sr-only">Open main menu</span>
      <svg
        class="dk:w-5 dk:h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Desktop menu -->
    <div class="dk:hidden dk:md:flex dk:items-center dk:space-x-1">
      <template v-for="item in items" :key="item.label">
        <div
          v-if="item.children && item.children.length > 0"
          class="dk:relative dk:group">
          <!-- Item with dropdown -->
          <component
            :is="getComponentType(item)"
            v-bind="getComponentProps(item)"
            :class="itemClasses">
            <i v-if="item.icon" :class="item.icon" class="dk:mr-2"></i>
            {{ item.label }}
            <svg
              class="dk:w-4 dk:h-4 dk:ml-1 dk:transform dk:group-hover:rotate-180 dk:transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7" />
            </svg>
          </component>
          
          <!-- Dropdown menu -->
          <div class="dk:absolute dk:left-0 dk:top-full dk:min-w-48 dk:py-2 dk:mt-1 dk:bg-white dk:rounded-lg dk:shadow-lg dk:border dk:border-gray-200 dk:opacity-0 dk:invisible dk:group-hover:opacity-100 dk:group-hover:visible dk:transition-all dk:duration-200 dk:z-50 dk:dark:bg-gray-800 dk:dark:border-gray-700">
            <component
              v-for="child in item.children"
              :key="child.label"
              :is="getComponentType(child)"
              v-bind="getComponentProps(child)"
              :class="dropdownItemClasses">
              <i v-if="child.icon" :class="child.icon" class="dk:mr-2"></i>
              {{ child.label }}
            </component>
          </div>
        </div>
        
        <!-- Regular item -->
        <component
          v-else
          :is="getComponentType(item)"
          v-bind="getComponentProps(item)"
          :class="itemClasses">
          <i v-if="item.icon" :class="item.icon" class="dk:mr-2"></i>
          {{ item.label }}
        </component>
      </template>
    </div>

    <!-- Actions slot -->
    <div v-if="$slots.actions" class="dk:hidden dk:md:flex dk:items-center dk:gap-2">
      <slot name="actions"></slot>
    </div>

    <!-- Mobile menu -->
    <div
      v-show="mobileMenuOpen"
      class="dk:md:hidden dk:absolute dk:top-full dk:left-0 dk:w-full dk:bg-white dk:border-t dk:border-gray-200 dk:shadow-lg dk:dark:bg-gray-800 dk:dark:border-gray-700 dk:z-40">
      <div class="dk:px-4 dk:py-3 dk:space-y-2">
        <template v-for="item in items" :key="item.label">
          <!-- Item with children -->
          <div v-if="item.children && item.children.length > 0">
            <button
              type="button"
              @click="toggleMobileSubmenu(item.label)"
              :class="mobileItemClasses">
              <div class="dk:flex dk:items-center dk:flex-1">
                <i v-if="item.icon" :class="item.icon" class="dk:mr-2"></i>
                {{ item.label }}
              </div>
              <svg
                :class="['dk:w-4 dk:h-4 dk:transform dk:transition-transform', mobileSubmenus[item.label] ? 'dk:rotate-180' : '']"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <!-- Mobile submenu -->
            <div
              v-show="mobileSubmenus[item.label]"
              class="dk:ml-4 dk:mt-2 dk:space-y-1">
              <component
                v-for="child in item.children"
                :key="child.label"
                :is="getComponentType(child)"
                v-bind="getComponentProps(child)"
                :class="mobileSubItemClasses"
                @click="closeMobileMenu">
                <i v-if="child.icon" :class="child.icon" class="dk:mr-2"></i>
                {{ child.label }}
              </component>
            </div>
          </div>
          
          <!-- Regular mobile item -->
          <component
            v-else
            :is="getComponentType(item)"
            v-bind="getComponentProps(item)"
            :class="mobileItemClasses"
            @click="closeMobileMenu">
            <i v-if="item.icon" :class="item.icon" class="dk:mr-2"></i>
            {{ item.label }}
          </component>
        </template>
        
        <!-- Mobile actions -->
        <div v-if="$slots.actions" class="dk:pt-3 dk:border-t dk:border-gray-200 dk:dark:border-gray-700">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, reactive, ref } from 'vue'

export interface NavbarItem {
  label: string
  to?: string | object
  icon?: string
  children?: NavbarItem[]
}

export interface DuiNavbarProps {
  items?: NavbarItem[]
  size?: 's' | 'm' | 'l'
}

const props = withDefaults(defineProps<DuiNavbarProps>(), {
  items: () => [],
  size: 'm'
})

const instance = getCurrentInstance()
const app = instance?.appContext.app

const mobileMenuOpen = ref(false)
const mobileSubmenus = reactive<Record<string, boolean>>({})

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

const getComponentType = (item: NavbarItem) => {
  if (!item.to) return 'button'
  
  if (hasNuxtRouter.value) return 'NuxtLink'
  if (hasVueRouter.value) return 'RouterLink' 
  
  return 'a'
}

const getComponentProps = (item: NavbarItem) => {
  const baseProps: Record<string, any> = {}
  const componentType = getComponentType(item)
  
  if (componentType === 'a') {
    baseProps.href = typeof item.to === 'string' ? item.to : '#'
  } else if (componentType !== 'button') {
    baseProps.to = item.to
  }
  
  return baseProps
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  // Reset submenus
  Object.keys(mobileSubmenus).forEach(key => {
    mobileSubmenus[key] = false
  })
}

const toggleMobileSubmenu = (itemLabel: string) => {
  mobileSubmenus[itemLabel] = !mobileSubmenus[itemLabel]
}

// Size configurations
const sizeConfig = {
  s: {
    height: 'dk:h-12',
    padding: 'dk:px-3',
    text: 'dk:text-sm',
    itemPadding: 'dk:px-2 dk:py-1.5'
  },
  m: {
    height: 'dk:h-16',
    padding: 'dk:px-4',
    text: 'dk:text-base',
    itemPadding: 'dk:px-3 dk:py-2'
  },
  l: {
    height: 'dk:h-20',
    padding: 'dk:px-6',
    text: 'dk:text-lg',
    itemPadding: 'dk:px-4 dk:py-3'
  }
}

const navbarClasses = computed(() => {
  const config = sizeConfig[props.size]
  const hasSlots = !!(instance?.slots.brand || instance?.slots.actions)
  
  return [
    // Base classes
    'dk:relative dk:bg-white dk:border-b dk:border-gray-200 dk:shadow-sm',
    'dk:dark:bg-gray-800 dk:dark:border-gray-700',
    'dk:flex dk:items-center dk:w-full',
    // Conditional justify based on slots
    hasSlots ? 'dk:justify-between' : 'dk:justify-center dk:md:justify-start',
    config.height,
    config.padding,
    config.text
  ].join(' ')
})

const itemClasses = computed(() => {
  const config = sizeConfig[props.size]
  return [
    // Base styles
    'dk:flex dk:items-center dk:rounded-lg dk:transition-all dk:duration-200',
    'dk:text-gray-700 dk:hover:text-gray-900 dk:hover:bg-gray-100',
    'dk:dark:text-gray-300 dk:dark:hover:text-gray-100 dk:dark:hover:bg-gray-700',
    'dk:focus:outline-none dk:focus:ring-2 dk:focus:ring-gray-200 dk:dark:focus:ring-gray-600',
    'dk:no-underline',
    config.itemPadding
  ].join(' ')
})

const dropdownItemClasses = computed(() => {
  return [
    'dk:block dk:w-full dk:text-left dk:px-4 dk:py-2 dk:text-sm',
    'dk:text-gray-700 dk:hover:bg-gray-100 dk:hover:text-gray-900',
    'dk:dark:text-gray-300 dk:dark:hover:bg-gray-700 dk:dark:hover:text-gray-100',
    'dk:transition-colors dk:duration-200 dk:no-underline'
  ].join(' ')
})

const mobileItemClasses = computed(() => {
  return [
    'dk:flex dk:items-center dk:justify-between dk:w-full dk:text-left dk:px-3 dk:py-2',
    'dk:text-gray-700 dk:hover:bg-gray-100 dk:hover:text-gray-900 dk:rounded-lg',
    'dk:dark:text-gray-300 dk:dark:hover:bg-gray-700 dk:dark:hover:text-gray-100',
    'dk:transition-colors dk:duration-200 dk:no-underline'
  ].join(' ')
})

const mobileSubItemClasses = computed(() => {
  return [
    'dk:block dk:w-full dk:text-left dk:px-3 dk:py-2 dk:text-sm dk:rounded-lg',
    'dk:text-gray-600 dk:hover:bg-gray-100 dk:hover:text-gray-800',
    'dk:dark:text-gray-400 dk:dark:hover:bg-gray-700 dk:dark:hover:text-gray-200',
    'dk:transition-colors dk:duration-200 dk:no-underline'
  ].join(' ')
})
</script>