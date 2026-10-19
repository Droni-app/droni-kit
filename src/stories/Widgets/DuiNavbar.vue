<template>
  <nav :class="navbarClasses">
    <div v-if="$slots.brand" class="dk:flex dk:items-center dk:gap-4 dk:flex-shrink-0">
      <slot name="brand"></slot>
    </div>

    <div class="dk:hidden dk:md:flex dk:items-center dk:flex-1">
      <div :class="desktopMenuClasses">
        <template v-for="item in items" :key="item.label">
          <div
            v-if="item.children && item.children.length > 0"
            class="dk:relative dk:group">
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </component>

            <div class="dk:absolute dk:left-0 dk:top-full dk:min-w-56 dk:p-1 dk:mt-1 dk:bg-white dk:dark:bg-neutral-900 dk:shadow-elevated dk:dark:shadow-elevated-dark dk:border dk:border-neutral-200 dk:dark:border-white/10 dk:opacity-0 dk:invisible dk:group-hover:opacity-100 dk:group-hover:visible dk:transition-all dk:duration-200 dk:z-50 dk:rounded-xl">
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

    <div v-if="$slots.actions" class="dk:hidden dk:md:flex dk:items-center dk:gap-2 dk:flex-shrink-0">
      <slot name="actions"></slot>
    </div>

    <button
      type="button"
      @click="toggleMobileMenu"
      class="dk:md:hidden dk:ml-auto dk:flex-shrink-0 dk:p-2 dk:rounded-lg dk:hover:bg-neutral-100 dk:focus-visible:outline-none dk:focus-visible:ring-2 dk:focus-visible:ring-accent-500/70 dk:dark:focus-visible:ring-accent-400/80 dk:dark:hover:bg-white/5 dk:transition-colors">
      <svg
        class="dk:w-6 dk:h-6 dk:stroke-neutral-900 dk:dark:stroke-white"
        fill="none"
        viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
      </svg>
    </button>

    <div
      v-show="mobileMenuOpen"
      class="dk:md:hidden dk:absolute dk:top-full dk:left-0 dk:w-full dk:bg-white dk:dark:bg-neutral-950/95 dk:backdrop-blur-xl dk:border-t dk:border-neutral-200 dk:dark:border-white/10 dk:shadow-elevated dk:dark:shadow-elevated-dark dk:z-40">
      <div class="dk:px-4 dk:py-3 dk:space-y-2">
        <template v-for="item in items" :key="item.label">
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div v-show="mobileSubmenus[item.label]" class="dk:ml-4 dk:mt-2 dk:space-y-1">
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

        <div v-if="$slots.actions" class="dk:pt-3 dk:border-t dk:border-neutral-200 dk:dark:border-white/10">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { getRouterComponentType, getRouterComponentProps } from '../../utils/router-detection'
import { cn } from '../../utils/cn'
import { normalizeSize } from '../../theme/tokens'
import type { DuiSize } from '../../theme/tokens'
import type { DuiColor } from '../../theme/tokens'

export interface NavbarItem {
  label: string
  to?: string | object
  icon?: string
  active?: boolean
  children?: NavbarItem[]
}

export interface DuiNavbarProps {
  items?: NavbarItem[]
  /** Acepta sm|md|lg y los alias legacy s|m|l */
  size?: DuiSize | 's' | 'm' | 'l'
  itemsAlignment?: 'left' | 'center' | 'right'
  underlineColor?: DuiColor
}

const props = withDefaults(defineProps<DuiNavbarProps>(), {
  items: () => [],
  size: 'md',
  itemsAlignment: 'left',
  underlineColor: 'primary',
})

const mobileMenuOpen = ref(false)
const mobileSubmenus = reactive<Record<string, boolean>>({})

const normalizedSize = computed(() => normalizeSize(props.size))

const getComponentType = (item: NavbarItem) => getRouterComponentType(item.to)
const getComponentProps = (item: NavbarItem) => {
  const componentType = getComponentType(item)
  return getRouterComponentProps(item.to, componentType)
}

const toggleMobileMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value }
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  Object.keys(mobileSubmenus).forEach(key => { mobileSubmenus[key] = false })
}
const toggleMobileSubmenu = (itemLabel: string) => { mobileSubmenus[itemLabel] = !mobileSubmenus[itemLabel] }

const sizeConfig: Record<DuiSize, { height: string; padding: string; text: string; itemPadding: string }> = {
  sm: { height: 'dk:h-12', padding: 'dk:px-3', text: 'dk:text-sm', itemPadding: 'dk:px-2 dk:py-1.5' },
  md: { height: 'dk:h-16', padding: 'dk:px-4', text: 'dk:text-base', itemPadding: 'dk:px-3 dk:py-2' },
  lg: { height: 'dk:h-20', padding: 'dk:px-6', text: 'dk:text-lg', itemPadding: 'dk:px-4 dk:py-3' },
}

const navbarClasses = computed(() => {
  const config = sizeConfig[normalizedSize.value]
  return cn(
    'dk:relative dk:flex dk:items-center dk:w-full dk:gap-4',
    'dk:bg-white/80 dk:dark:bg-neutral-950/70 dk:backdrop-blur-xl dk:backdrop-saturate-150',
    'dk:border-b dk:border-neutral-200 dk:dark:border-white/10',
    config.height,
    config.padding,
    config.text,
  )
})

const desktopMenuClasses = computed(() => {
  const alignmentClasses = { left: 'dk:justify-start', center: 'dk:justify-center', right: 'dk:justify-end' }
  return cn('dk:flex dk:items-center dk:space-x-1 dk:flex-1', alignmentClasses[props.itemsAlignment])
})

const underlineColors: Record<DuiColor, string> = {
  neutral: 'dk:before:from-neutral-700 dk:before:to-neutral-900 dk:dark:before:from-neutral-300 dk:dark:before:to-white',
  primary: 'dk:before:from-primary-600 dk:before:to-secondary-500 dk:dark:before:from-primary-400 dk:dark:before:to-secondary-400 dk:dark:before:shadow-[0_0_10px_var(--dk-color-primary-400)]',
  secondary: 'dk:before:from-secondary-500 dk:before:to-secondary-600 dk:dark:before:from-secondary-400 dk:dark:before:to-secondary-500 dk:dark:before:shadow-[0_0_10px_var(--dk-color-secondary-400)]',
  success: 'dk:before:from-success-500 dk:before:to-success-600 dk:dark:before:from-success-400 dk:dark:before:to-success-500',
  danger: 'dk:before:from-danger-500 dk:before:to-danger-600 dk:dark:before:from-danger-400 dk:dark:before:to-danger-500',
  warning: 'dk:before:from-warning-500 dk:before:to-warning-600 dk:dark:before:from-warning-400 dk:dark:before:to-warning-500',
}

function itemClasses(item: NavbarItem, hasDropdown: boolean = true) {
  const config = sizeConfig[normalizedSize.value]
  const underlineColorsStr = underlineColors[props.underlineColor] || underlineColors.primary
  const isActive = item.active ?? false
  const padding = hasDropdown ? 'dk:pl-3 dk:pr-3' : 'dk:pl-2 dk:pr-2'
  return cn(
    'dk:flex dk:items-center dk:relative dk:transition-all dk:duration-200',
    'dk:text-neutral-600 dk:hover:text-neutral-900 dk:dark:text-neutral-300 dk:dark:hover:text-neutral-100',
    'dk:focus-visible:outline-none dk:focus-visible:ring-2 dk:focus-visible:ring-accent-500/70 dk:dark:focus-visible:ring-accent-400/80',
    'dk:no-underline',
    'dk:before:absolute dk:before:bottom-0 dk:before:left-0 dk:before:h-0.5 dk:before:rounded-full dk:before:bg-linear-to-r',
    underlineColorsStr,
    'dk:before:transition-all dk:before:duration-200',
    isActive ? 'dk:before:w-full dk:text-neutral-900 dk:dark:text-neutral-100' : 'dk:before:w-0 dk:hover:before:w-full',
    config.itemPadding,
    padding,
  )
}

const dropdownItemClasses = computed(() => {
  return cn(
    'dk:block dk:w-full dk:text-left dk:px-3 dk:py-2 dk:rounded-lg dk:text-sm dk:whitespace-nowrap',
    'dk:text-neutral-700 dk:hover:text-neutral-900 dk:hover:bg-neutral-100 dk:dark:text-neutral-300 dk:dark:hover:text-neutral-100 dk:dark:hover:bg-white/5',
    'dk:transition-all dk:duration-150 dk:no-underline',
  )
})

const mobileItemClasses = computed(() => {
  return cn(
    'dk:flex dk:items-center dk:justify-start dk:w-full dk:text-left dk:px-3 dk:py-2 dk:rounded-lg',
    'dk:text-neutral-700 dk:hover:text-neutral-900 dk:hover:bg-neutral-100 dk:dark:text-neutral-300 dk:dark:hover:text-neutral-100 dk:dark:hover:bg-white/5',
    'dk:transition-all dk:duration-150 dk:no-underline',
  )
})

const mobileSubItemClasses = computed(() => {
  return cn(
    'dk:block dk:w-full dk:text-left dk:px-3 dk:py-2 dk:text-sm dk:rounded-lg',
    'dk:text-neutral-600 dk:hover:text-neutral-800 dk:hover:bg-neutral-100 dk:dark:text-neutral-400 dk:dark:hover:text-neutral-200 dk:dark:hover:bg-white/5',
    'dk:transition-all dk:duration-150 dk:no-underline',
  )
})
</script>

