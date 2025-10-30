<template>
  <nav :class="navbarClasses">
    <!-- Brand/Logo -->
    <div v-if="$slots.brand" class="dk:flex dk:items-center dk:gap-4 dk:flex-shrink-0">
      <slot name="brand"></slot>
    </div>

    <!-- Desktop menu wrapper -->
    <div class="dk:hidden dk:md:flex dk:items-center dk:flex-1">
      <div :class="desktopMenuClasses">
        <template v-for="item in items" :key="item.label">
          <div
            v-if="item.children && item.children.length > 0"
            class="dk:relative dk:group">
            <!-- Item with dropdown -->
            <component
              :is="getComponentType(item)"
              v-bind="getComponentProps(item)"
              :class="itemClasses(item, true)">
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
            <div class="dk:absolute dk:left-0 dk:top-full dk:min-w-48 dk:py-2 dk:mt-1 dk:bg-gradient-to-b dk:from-white/95 dk:to-gray-50/95 dk:dark:from-gray-700/90 dk:dark:to-gray-800/90 dk:backdrop-blur-md dk:rounded-lg dk:shadow-lg dk:border dk:border-white/40 dk:dark:border-white/10 dk:opacity-0 dk:invisible dk:group-hover:opacity-100 dk:group-hover:visible dk:transition-all dk:duration-200 dk:z-50">
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
            :class="itemClasses(item, false)">
            <i v-if="item.icon" :class="item.icon" class="dk:mr-2"></i>
            {{ item.label }}
          </component>
        </template>
      </div>
    </div>

    <!-- Actions slot -->
    <div v-if="$slots.actions" class="dk:hidden dk:md:flex dk:items-center dk:gap-2 dk:flex-shrink-0">
      <slot name="actions"></slot>
    </div>

    <!-- Mobile hamburger menu button -->
    <button
      type="button"
      @click="toggleMobileMenu"
      class="dk:md:hidden dk:ml-auto dk:flex-shrink-0 dk:p-2 dk:rounded-md dk:hover:bg-gray-100 dk:dark:hover:bg-gray-700 dk:transition-colors">
      <svg
        class="dk:w-6 dk:h-6 dk:stroke-gray-900 dk:dark:stroke-white"
        fill="none"
        viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
      </svg>
    </button>

    <!-- Mobile menu -->
    <div
      v-show="mobileMenuOpen"
      class="dk:md:hidden dk:absolute dk:top-full dk:left-0 dk:w-full dk:bg-gradient-to-b dk:from-white/95 dk:to-gray-50/95 dk:dark:from-gray-700/90 dk:dark:to-gray-800/90 dk:backdrop-blur-md dk:border-t dk:border-white/40 dk:dark:border-white/10 dk:shadow-lg dk:dark:shadow-black/30 dk:z-40">
      <div class="dk:px-4 dk:py-3 dk:space-y-2">
        <template v-for="item in items" :key="item.label">
          <!-- Item with children -->
          <div v-if="item.children && item.children.length > 0">
            <button
              type="button"
              @click="toggleMobileSubmenu(item.label)"
              :class="[mobileItemClasses, 'dk:justify-between']">
              <div class="dk:flex dk:items-center">
                <i v-if="item.icon" :class="item.icon" class="dk:mr-2"></i>
                {{ item.label }}
              </div>
              <svg
                :class="['dk:w-4 dk:h-4 dk:transform dk:transition-transform dk:flex-shrink-0', mobileSubmenus[item.label] ? 'dk:rotate-180' : '']"
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
        <div v-if="$slots.actions" class="dk:pt-3 dk:border-t dk:border-white/20 dk:dark:border-white/10">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { getRouterComponentType, getRouterComponentProps } from '../../utils/router-detection'

export interface NavbarItem {
  label: string
  to?: string | object
  icon?: string
  children?: NavbarItem[]
}

export interface DuiNavbarProps {
  items?: NavbarItem[]
  size?: 's' | 'm' | 'l'
  nuxt?: boolean
  itemsAlignment?: 'left' | 'center' | 'right'
  underlineColor?: 'neutral' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
}

const props = withDefaults(defineProps<DuiNavbarProps>(), {
  items: () => [],
  size: 'm',
  nuxt: false,
  itemsAlignment: 'left',
  underlineColor: 'primary'
})

const mobileMenuOpen = ref(false)
const mobileSubmenus = reactive<Record<string, boolean>>({})

const getComponentType = (item: NavbarItem) => {
  return getRouterComponentType(item.to, props.nuxt)
}

const getComponentProps = (item: NavbarItem) => {
  const componentType = getComponentType(item)
  return getRouterComponentProps(item.to, componentType)
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

const isItemActive = (item: NavbarItem): boolean => {
  if (!item.to) return false
  
  // Convert item.to to string for comparison
  const itemPath = typeof item.to === 'string' ? item.to : (item.to as any).path || ''
  
  // Try to get current route path from Vue Router or Nuxt Router
  try {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      return currentPath === itemPath || currentPath.startsWith(itemPath + '/')
    }
  } catch (e) {
    // Fallback if window is not available
  }
  
  return false
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
  
  return [
    // Glassmorphism navbar styles (Windows Vista inspired)
    'dk:relative dk:bg-gradient-to-b dk:from-white/80 dk:via-white/70 dk:to-gray-50/80',
    'dk:dark:from-gray-700/60 dk:dark:via-gray-800/60 dk:dark:to-gray-900/60',
    'dk:backdrop-blur-md dk:backdrop-brightness-110',
    'dk:border-b dk:border-white/40 dk:dark:border-white/10',
    'dk:shadow-lg dk:shadow-black/10 dk:dark:shadow-black/30',
    // Borde superior iluminado (highlight Vista)
    'dk:before:absolute dk:before:top-0 dk:before:left-0 dk:before:right-0 dk:before:h-0.5',
    'dk:before:bg-gradient-to-r dk:before:from-white/60 dk:before:via-white/40 dk:before:to-transparent',
    'dk:dark:before:from-white/20 dk:dark:before:via-white/10 dk:dark:before:to-transparent',
    'dk:flex dk:items-center dk:w-full dk:gap-4',
    config.height,
    config.padding,
    config.text
  ].join(' ')
})

const desktopMenuClasses = computed(() => {
  const alignmentClasses = {
    left: 'dk:justify-start',
    center: 'dk:justify-center',
    right: 'dk:justify-end'
  }
  
  return [
    'dk:flex dk:items-center dk:space-x-1 dk:flex-1',
    alignmentClasses[props.itemsAlignment]
  ].join(' ')
})

const getUnderlineColorClasses = () => {
  const colorMap = {
    neutral: 'dk:before:from-zinc-500 dk:before:to-zinc-600 dk:dark:before:from-zinc-400 dk:dark:before:to-zinc-500',
    primary: 'dk:before:from-slate-600 dk:before:to-slate-700 dk:dark:before:from-slate-400 dk:dark:before:to-slate-500',
    secondary: 'dk:before:from-pink-500 dk:before:to-pink-600 dk:dark:before:from-pink-400 dk:dark:before:to-pink-500',
    success: 'dk:before:from-emerald-500 dk:before:to-emerald-600 dk:dark:before:from-emerald-400 dk:dark:before:to-emerald-500',
    danger: 'dk:before:from-rose-500 dk:before:to-rose-600 dk:dark:before:from-rose-400 dk:dark:before:to-rose-500',
    warning: 'dk:before:from-amber-500 dk:before:to-amber-600 dk:dark:before:from-amber-400 dk:dark:before:to-amber-500'
  }
  return colorMap[props.underlineColor] || colorMap.primary
}

const itemClasses = computed(() => {
  const config = sizeConfig[props.size]
  const underlineColors = getUnderlineColorClasses()
  return (item: NavbarItem, hasDropdown: boolean = true) => {
    const isActive = isItemActive(item)
    // Reduce left padding by 1 if no dropdown (no chevron)
    const leftPadding = hasDropdown ? 'dk:pl-3' : 'dk:pl-2'
    const rightPadding = 'dk:pr-3'
    const smallLeftPadding = hasDropdown ? 'dk:pl-2' : 'dk:pl-1'
    const smallRightPadding = 'dk:pr-2'
    const largeLeftPadding = hasDropdown ? 'dk:pl-4' : 'dk:pl-3'
    const largeRightPadding = 'dk:pr-4'
    
    let paddingClasses = ''
    if (config.itemPadding.includes('px-2')) {
      paddingClasses = `${smallLeftPadding} ${smallRightPadding} dk:py-1.5`
    } else if (config.itemPadding.includes('px-4')) {
      paddingClasses = `${largeLeftPadding} ${largeRightPadding} dk:py-3`
    } else {
      paddingClasses = `${leftPadding} ${rightPadding} dk:py-2`
    }
    
    return [
      // Block style with animated underline
      'dk:flex dk:items-center dk:relative dk:transition-all dk:duration-300',
      'dk:text-gray-700 dk:hover:text-gray-900 dk:dark:text-gray-300 dk:dark:hover:text-gray-100',
      'dk:focus:outline-none dk:focus:ring-2 dk:focus:ring-blue-400 dk:focus:ring-opacity-50 dk:dark:focus:ring-blue-300',
      'dk:no-underline',
      // Animated underline effect
      'dk:before:absolute dk:before:bottom-0 dk:before:left-0 dk:before:h-0.5',
      'dk:before:bg-gradient-to-r',
      underlineColors,
      'dk:before:transition-all dk:before:duration-300',
      isActive ? 'dk:before:w-full dk:text-gray-900 dk:dark:text-gray-100' : 'dk:before:w-0 dk:hover:before:w-full',
      paddingClasses
    ].join(' ')
  }
})

const dropdownItemClasses = computed(() => {
  return [
    'dk:block dk:w-full dk:text-left dk:px-4 dk:py-2 dk:text-sm',
    'dk:text-gray-700 dk:hover:text-gray-900 dk:hover:bg-white/50 dk:dark:hover:bg-white/10',
    'dk:dark:text-gray-300 dk:dark:hover:text-gray-100',
    'dk:transition-all dk:duration-200 dk:no-underline',
    'dk:border-l-2 dk:border-transparent dk:hover:border-blue-500'
  ].join(' ')
})

const mobileItemClasses = computed(() => {
  return [
    'dk:flex dk:items-center dk:justify-start dk:w-full dk:text-left dk:px-3 dk:py-2',
    'dk:text-gray-700 dk:hover:text-gray-900 dk:rounded-lg',
    'dk:bg-white/10 dk:hover:bg-white/25 dk:dark:bg-white/5 dk:dark:hover:bg-white/15',
    'dk:dark:text-gray-300 dk:dark:hover:text-gray-100',
    'dk:border dk:border-white/20 dk:dark:border-white/10 dk:hover:border-white/40 dk:dark:hover:border-white/20',
    'dk:transition-all dk:duration-200 dk:no-underline'
  ].join(' ')
})

const mobileSubItemClasses = computed(() => {
  return [
    'dk:block dk:w-full dk:text-left dk:px-3 dk:py-2 dk:text-sm dk:rounded-lg',
    'dk:text-gray-600 dk:hover:text-gray-800 dk:hover:bg-white/30 dk:dark:hover:bg-white/10',
    'dk:dark:text-gray-400 dk:dark:hover:text-gray-200',
    'dk:border-l-2 dk:border-transparent dk:hover:border-blue-500',
    'dk:transition-all dk:duration-200 dk:no-underline'
  ].join(' ')
})
</script>