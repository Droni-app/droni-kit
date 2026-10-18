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

            <div class="dk:absolute dk:left-0 dk:top-full dk:min-w-56 dk:py-2 dk:mt-1 dk:bg-white dk:dark:bg-zinc-900 dk:shadow-lg dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:opacity-0 dk:invisible dk:group-hover:opacity-100 dk:group-hover:visible dk:transition-all dk:duration-200 dk:z-50 dk:rounded-lg">
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
      class="dk:md:hidden dk:ml-auto dk:flex-shrink-0 dk:p-2 dk:rounded-md dk:hover:bg-zinc-100 dk:dark:hover:bg-zinc-800 dk:transition-colors">
      <svg
        class="dk:w-6 dk:h-6 dk:stroke-zinc-900 dk:dark:stroke-white"
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
      class="dk:md:hidden dk:absolute dk:top-full dk:left-0 dk:w-full dk:bg-white dk:dark:bg-zinc-900 dk:border-t dk:border-zinc-200 dk:dark:border-zinc-800 dk:shadow-lg dk:z-40">
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

        <div v-if="$slots.actions" class="dk:pt-3 dk:border-t dk:border-zinc-200 dk:dark:border-zinc-800">
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
    'dk:bg-white/80 dk:dark:bg-zinc-900/80 dk:backdrop-blur-md',
    'dk:border-b dk:border-zinc-200 dk:dark:border-zinc-800',
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
  neutral: 'dk:before:from-zinc-500 dk:before:to-zinc-600 dk:dark:before:from-zinc-400 dk:dark:before:to-zinc-500',
  primary: 'dk:before:from-indigo-600 dk:before:to-indigo-700 dk:dark:before:from-indigo-400 dk:dark:before:to-indigo-500',
  secondary: 'dk:before:from-pink-500 dk:before:to-pink-600 dk:dark:before:from-pink-400 dk:dark:before:to-pink-500',
  success: 'dk:before:from-emerald-500 dk:before:to-emerald-600 dk:dark:before:from-emerald-400 dk:dark:before:to-emerald-500',
  danger: 'dk:before:from-rose-500 dk:before:to-rose-600 dk:dark:before:from-rose-400 dk:dark:before:to-rose-500',
  warning: 'dk:before:from-amber-500 dk:before:to-amber-600 dk:dark:before:from-amber-400 dk:dark:before:to-amber-500',
}

function itemClasses(item: NavbarItem, hasDropdown: boolean = true) {
  const config = sizeConfig[normalizedSize.value]
  const underlineColorsStr = underlineColors[props.underlineColor] || underlineColors.primary
  const isActive = item.active ?? false
  const padding = hasDropdown ? 'dk:pl-3 dk:pr-3' : 'dk:pl-2 dk:pr-2'
  return cn(
    'dk:flex dk:items-center dk:relative dk:transition-all dk:duration-200',
    'dk:text-zinc-600 dk:hover:text-zinc-900 dk:dark:text-zinc-300 dk:dark:hover:text-zinc-100',
    'dk:focus-visible:outline-none dk:focus-visible:ring-2 dk:focus-visible:ring-indigo-500/50',
    'dk:no-underline',
    'dk:before:absolute dk:before:bottom-0 dk:before:left-0 dk:before:h-0.5 dk:before:bg-gradient-to-r',
    underlineColorsStr,
    'dk:before:transition-all dk:before:duration-200',
    isActive ? 'dk:before:w-full dk:text-zinc-900 dk:dark:text-zinc-100' : 'dk:before:w-0 dk:hover:before:w-full',
    config.itemPadding,
    padding,
  )
}

const dropdownItemClasses = computed(() => {
  return cn(
    'dk:block dk:w-full dk:text-left dk:px-4 dk:py-2 dk:text-sm dk:whitespace-nowrap',
    'dk:text-zinc-700 dk:hover:text-zinc-900 dk:hover:bg-zinc-100 dk:dark:text-zinc-300 dk:dark:hover:text-zinc-100 dk:dark:hover:bg-zinc-800',
    'dk:transition-all dk:duration-150 dk:no-underline',
  )
})

const mobileItemClasses = computed(() => {
  return cn(
    'dk:flex dk:items-center dk:justify-start dk:w-full dk:text-left dk:px-3 dk:py-2 dk:rounded-lg',
    'dk:text-zinc-700 dk:hover:text-zinc-900 dk:hover:bg-zinc-100 dk:dark:text-zinc-300 dk:dark:hover:text-zinc-100 dk:dark:hover:bg-zinc-800',
    'dk:transition-all dk:duration-150 dk:no-underline',
  )
})

const mobileSubItemClasses = computed(() => {
  return cn(
    'dk:block dk:w-full dk:text-left dk:px-3 dk:py-2 dk:text-sm dk:rounded-lg',
    'dk:text-zinc-600 dk:hover:text-zinc-800 dk:hover:bg-zinc-100 dk:dark:text-zinc-400 dk:dark:hover:text-zinc-200 dk:dark:hover:bg-zinc-800',
    'dk:transition-all dk:duration-150 dk:no-underline',
  )
})
</script>

