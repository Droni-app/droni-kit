<template>
  <component
    :is="href ? 'a' : 'button'"
    v-bind="linkProps"
    :class="itemClasses"
    role="menuitem"
    :aria-disabled="disabled"
    @click="onClick">
    <span v-if="$slots.icon || icon" :class="iconClasses" aria-hidden="true">
      <slot name="icon">{{ icon }}</slot>
    </span>
    <span class="dk:flex-1 dk:truncate">
      <slot>{{ label }}</slot>
    </span>
    <span v-if="$slots.trailing" class="dk:ml-auto dk:opacity-60 dk:text-xs">
      <slot name="trailing" />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface DuiDropdownItemProps {
  label?: string
  icon?: string
  href?: string
  target?: string
  disabled?: boolean
  danger?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<DuiDropdownItemProps>(), {
  label: undefined,
  icon: undefined,
  href: undefined,
  target: undefined,
  disabled: false,
  danger: false,
  size: 'md',
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const linkProps = computed(() => {
  if (props.href) {
    return { href: props.href, target: props.target }
  }
  return { type: 'button', disabled: props.disabled }
})

const sizeClasses = {
  sm: 'dk:px-3 dk:py-1 dk:text-xs',
  md: 'dk:px-3 dk:py-2 dk:text-sm',
  lg: 'dk:px-4 dk:py-2.5 dk:text-base',
}

const itemClasses = computed(() => {
  const base = 'dk:flex dk:w-full dk:items-center dk:gap-2 dk:transition-colors dk:duration-100 dk:outline-none dk:text-left dk:select-none'
  const size = sizeClasses[props.size]
  const danger = props.danger
    ? 'dk:text-rose-600 dk:dark:text-rose-400 dk:hover:bg-rose-50 dk:dark:hover:bg-rose-900/40 dk:focus-visible:bg-rose-50 dk:dark:focus-visible:bg-rose-900/40'
    : 'dk:hover:bg-black/5 dk:dark:hover:bg-white/10 dk:focus-visible:bg-black/5 dk:dark:focus-visible:bg-white/10'
  const disabled = props.disabled ? 'dk:opacity-50 dk:cursor-not-allowed dk:pointer-events-none' : 'dk:cursor-pointer'
  return [base, size, danger, disabled].join(' ')
})

const iconClasses = computed(() => {
  return 'dk:flex-shrink-0 dk:w-4 dk:h-4 dk:flex dk:items-center dk:justify-center dk:opacity-70'
})

function onClick(event: MouseEvent) {
  if (props.disabled) return
  emit('click', event)
}
</script>
