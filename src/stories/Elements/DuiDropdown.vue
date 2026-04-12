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
  emit(next ? 'open' : 'close')
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

const variantClasses = {
  solid: {
    neutral: 'dk:bg-white dk:dark:bg-zinc-900 dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:text-zinc-800 dk:dark:text-zinc-200',
    primary: 'dk:bg-slate-50 dk:dark:bg-slate-900 dk:border dk:border-slate-200 dk:dark:border-slate-700 dk:text-slate-800 dk:dark:text-slate-200',
    secondary: 'dk:bg-pink-50 dk:dark:bg-pink-900 dk:border dk:border-pink-200 dk:dark:border-pink-700 dk:text-pink-800 dk:dark:text-pink-200',
    success: 'dk:bg-emerald-50 dk:dark:bg-emerald-900 dk:border dk:border-emerald-200 dk:dark:border-emerald-700 dk:text-emerald-800 dk:dark:text-emerald-200',
    warning: 'dk:bg-amber-50 dk:dark:bg-amber-900 dk:border dk:border-amber-200 dk:dark:border-amber-700 dk:text-amber-800 dk:dark:text-amber-200',
    danger: 'dk:bg-rose-50 dk:dark:bg-rose-900 dk:border dk:border-rose-200 dk:dark:border-rose-700 dk:text-rose-800 dk:dark:text-rose-200',
  },
  outline: {
    neutral: 'dk:bg-white/95 dk:dark:bg-zinc-900/95 dk:border-2 dk:border-zinc-300 dk:dark:border-zinc-600 dk:text-zinc-800 dk:dark:text-zinc-200',
    primary: 'dk:bg-white/95 dk:dark:bg-zinc-900/95 dk:border-2 dk:border-slate-400 dk:dark:border-slate-500 dk:text-slate-800 dk:dark:text-slate-200',
    secondary: 'dk:bg-white/95 dk:dark:bg-zinc-900/95 dk:border-2 dk:border-pink-400 dk:dark:border-pink-500 dk:text-pink-800 dk:dark:text-pink-200',
    success: 'dk:bg-white/95 dk:dark:bg-zinc-900/95 dk:border-2 dk:border-emerald-400 dk:dark:border-emerald-500 dk:text-emerald-800 dk:dark:text-emerald-200',
    warning: 'dk:bg-white/95 dk:dark:bg-zinc-900/95 dk:border-2 dk:border-amber-400 dk:dark:border-amber-500 dk:text-amber-800 dk:dark:text-amber-200',
    danger: 'dk:bg-white/95 dk:dark:bg-zinc-900/95 dk:border-2 dk:border-rose-400 dk:dark:border-rose-500 dk:text-rose-800 dk:dark:text-rose-200',
  },
  ghost: {
    neutral: 'dk:bg-white/85 dk:dark:bg-zinc-900/75 dk:backdrop-blur-md dk:border dk:border-zinc-300/70 dk:dark:border-zinc-600/60 dk:text-zinc-800 dk:dark:text-zinc-200',
    primary: 'dk:bg-slate-100/85 dk:dark:bg-slate-900/70 dk:backdrop-blur-md dk:border dk:border-slate-300/70 dk:dark:border-slate-600/60 dk:text-slate-800 dk:dark:text-slate-200',
    secondary: 'dk:bg-pink-100/85 dk:dark:bg-pink-900/70 dk:backdrop-blur-md dk:border dk:border-pink-300/70 dk:dark:border-pink-600/60 dk:text-pink-800 dk:dark:text-pink-200',
    success: 'dk:bg-emerald-100/85 dk:dark:bg-emerald-900/70 dk:backdrop-blur-md dk:border dk:border-emerald-300/70 dk:dark:border-emerald-600/60 dk:text-emerald-800 dk:dark:text-emerald-200',
    warning: 'dk:bg-amber-100/85 dk:dark:bg-amber-900/70 dk:backdrop-blur-md dk:border dk:border-amber-300/70 dk:dark:border-amber-600/60 dk:text-amber-800 dk:dark:text-amber-200',
    danger: 'dk:bg-rose-100/85 dk:dark:bg-rose-900/70 dk:backdrop-blur-md dk:border dk:border-rose-300/70 dk:dark:border-rose-600/60 dk:text-rose-800 dk:dark:text-rose-200',
  },
}

const menuStyle = computed(() => ({ minWidth: props.minWidth }))

const menuClasses = computed(() => {
  return [
    'dk:absolute dk:z-50 dk:shadow-lg dk:py-1',
    placementClasses[props.placement],
    roundedClasses[props.rounded],
    variantClasses[props.variant][props.color],
  ].join(' ')
})
</script>
