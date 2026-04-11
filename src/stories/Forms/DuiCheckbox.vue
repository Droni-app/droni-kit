<template>
  <label :class="wrapperClasses">
    <span v-if="hasLabel && labelPosition === 'left'" :class="labelClasses">
      <slot>{{ label }}</slot>
    </span>

    <span class="dk:relative dk:inline-flex dk:items-center dk:flex-shrink-0">
      <input
        type="checkbox"
        class="dk:sr-only dk:peer"
        :checked="modelValue"
        :disabled="disabled"
        v-bind="$attrs"
        @change="onChange"
      />

      <span :class="trackClasses" />
      <span :class="thumbClasses" />
    </span>

    <span v-if="hasLabel && labelPosition === 'right'" :class="labelClasses">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  labelPosition: {
    type: String as () => 'left' | 'right',
    default: 'right',
  },
  color: {
    type: String as () => 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
    default: 'primary',
  },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md',
  },
  block: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none',
    default: 'all',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const slots = useSlots()

const sizeClasses = {
  sm: {
    track: 'dk:w-9 dk:h-5',
    thumb: 'dk:w-3.5 dk:h-3.5',
    translate: 'dk:peer-checked:translate-x-[14px]',
  },
  md: {
    track: 'dk:w-11 dk:h-6',
    thumb: 'dk:w-4 dk:h-4',
    translate: 'dk:peer-checked:translate-x-5',
  },
  lg: {
    track: 'dk:w-14 dk:h-7',
    thumb: 'dk:w-5 dk:h-5',
    translate: 'dk:peer-checked:translate-x-7',
  },
}

const roundedClasses = {
  all: 'dk:rounded-full',
  top: 'dk:rounded-t-full',
  bottom: 'dk:rounded-b-full',
  left: 'dk:rounded-l-full',
  right: 'dk:rounded-r-full',
  none: 'dk:rounded-none',
}

const checkedColorClasses = {
  neutral: 'dk:peer-checked:bg-zinc-500 dk:peer-checked:dark:bg-zinc-500',
  primary: 'dk:peer-checked:bg-slate-600 dk:peer-checked:dark:bg-slate-500',
  secondary: 'dk:peer-checked:bg-pink-600 dk:peer-checked:dark:bg-pink-500',
  success: 'dk:peer-checked:bg-emerald-600 dk:peer-checked:dark:bg-emerald-500',
  warning: 'dk:peer-checked:bg-amber-500 dk:peer-checked:dark:bg-amber-400',
  danger: 'dk:peer-checked:bg-rose-600 dk:peer-checked:dark:bg-rose-500',
}

const hasLabel = computed(() => Boolean(props.label || slots.default))

const wrapperClasses = computed(() => {
  const blockStyle = props.block ? 'dk:w-full dk:justify-between' : ''
  const disabledStyle = props.disabled ? 'dk:opacity-60 dk:cursor-not-allowed' : 'dk:cursor-pointer'
  return ['dk:inline-flex dk:items-center dk:gap-3 dk:select-none', blockStyle, disabledStyle].join(' ')
})

const labelClasses = computed(() => {
  return [
    'dk:text-sm dk:leading-none dk:text-zinc-700 dk:dark:text-zinc-200',
    props.disabled ? 'dk:cursor-not-allowed' : 'dk:cursor-pointer',
  ].join(' ')
})

const trackClasses = computed(() => {
  const sizeStyle = sizeClasses[props.size] || sizeClasses.md
  const roundedStyle = roundedClasses[props.rounded] || roundedClasses.all
  const checkedStyle = checkedColorClasses[props.color] || checkedColorClasses.primary

  return [
    'dk:inline-flex dk:items-center dk:transition-colors dk:duration-200',
    'dk:bg-zinc-300 dk:dark:bg-zinc-700',
    'dk:peer-focus-visible:outline-none dk:peer-focus-visible:ring-2 dk:peer-focus-visible:ring-offset-2 dk:peer-focus-visible:ring-slate-400 dk:dark:peer-focus-visible:ring-slate-500',
    'dk:peer-disabled:opacity-70',
    sizeStyle.track,
    roundedStyle,
    checkedStyle,
  ].join(' ')
})

const thumbClasses = computed(() => {
  const sizeStyle = sizeClasses[props.size] || sizeClasses.md
  return [
    'dk:absolute dk:left-1 dk:top-1/2 dk:-translate-y-1/2',
    'dk:bg-white dk:dark:bg-zinc-100',
    'dk:rounded-full dk:shadow-sm dk:transition-transform dk:duration-200',
    'dk:pointer-events-none',
    sizeStyle.thumb,
    sizeStyle.translate,
  ].join(' ')
})

function onChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>