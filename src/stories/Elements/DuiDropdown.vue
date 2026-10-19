<template>
  <div ref="wrapperRef" class="dk:relative dk:inline-block">
    <div @click="toggleMenu" @keydown.enter.prevent="toggleMenu" @keydown.space.prevent="toggleMenu">
      <slot name="trigger" />
    </div>

    <Transition
      enter-active-class="dk:transition-all dk:duration-150 dk:ease-out"
      leave-active-class="dk:transition-all dk:duration-100 dk:ease-in"
      enter-from-class="dk:opacity-0 dk:scale-95"
      leave-to-class="dk:opacity-0 dk:scale-95">
      <div
        v-if="isOpen"
        :class="menuClasses"
        :style="menuStyle"
        role="menu"
        :aria-label="ariaLabel">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { cn } from '../../utils/cn'
import { panelVariantClasses } from '../../theme/tokens'

export interface DuiDropdownProps {
  modelValue?: boolean
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'bottom' | 'top'
  variant?: 'solid' | 'outline' | 'ghost'
  color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'all' | 'none' | 'sm'
  minWidth?: string
  ariaLabel?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<DuiDropdownProps>(), {
  modelValue: undefined,
  placement: 'bottom-start',
  variant: 'solid',
  color: 'neutral',
  size: 'md',
  rounded: 'all',
  minWidth: '10rem',
  ariaLabel: 'Menu',
  disabled: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'open'): void
  (e: 'close'): void
}>()

const wrapperRef = ref<HTMLElement | null>(null)
const internalOpen = ref(false)

const isOpen = computed(() => props.modelValue !== undefined ? props.modelValue : internalOpen.value)

function toggleMenu() {
  if (props.disabled) return
  const next = !isOpen.value
  internalOpen.value = next
  emit('update:modelValue', next)
  if (next) emit('open')
  else emit('close')
}

function closeMenu() {
  internalOpen.value = false
  emit('update:modelValue', false)
  emit('close')
}

function onClickOutside(e: MouseEvent) {
  if (wrapperRef.value && !wrapperRef.value.contains(e.target as Node)) {
    closeMenu()
  }
}

onMounted(() => document.addEventListener('mousedown', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('mousedown', onClickOutside))

const placementClasses = {
  'bottom-start': 'dk:top-full dk:left-0 dk:mt-1 dk:origin-top-left',
  'bottom-end':   'dk:top-full dk:right-0 dk:mt-1 dk:origin-top-right',
  'bottom':       'dk:top-full dk:left-1/2 dk:-translate-x-1/2 dk:mt-1 dk:origin-top',
  'top-start':    'dk:bottom-full dk:left-0 dk:mb-1 dk:origin-bottom-left',
  'top-end':      'dk:bottom-full dk:right-0 dk:mb-1 dk:origin-bottom-right',
  'top':          'dk:bottom-full dk:left-1/2 dk:-translate-x-1/2 dk:mb-1 dk:origin-bottom',
}

const roundedClasses = {
  all: 'dk:rounded-xl',
  sm: 'dk:rounded-lg',
  none: 'dk:rounded-none',
}


const menuStyle = computed(() => ({ minWidth: props.minWidth }))

const menuClasses = computed(() => {
  const variant = panelVariantClasses[props.variant]
  return cn(
    'dk:absolute dk:z-50 dk:p-1',
    placementClasses[props.placement],
    roundedClasses[props.rounded],
    variant.base,
    variant[props.color],
  )
})
</script>
