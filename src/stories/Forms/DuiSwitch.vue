<template>
  <label :class="wrapperClasses">
    <span v-if="hasLabel && labelPosition === 'left'" :class="labelClasses">
      <slot>{{ label }}</slot>
      <span v-if="description" :class="descriptionClasses">{{ description }}</span>
    </span>

    <span class="dk:relative dk:inline-flex dk:items-center dk:flex-shrink-0">
      <input
        type="checkbox"
        class="dk:sr-only dk:peer"
        role="switch"
        :aria-checked="modelValue"
        :checked="modelValue"
        :disabled="disabled"
        v-bind="$attrs"
        @change="onChange"
      />
      <!-- Track -->
      <span :class="trackClasses" />
      <!-- Thumb -->
      <span :class="thumbClasses">
        <span v-if="showIcons" aria-hidden="true" :class="iconClasses">
          <svg v-if="modelValue" viewBox="0 0 12 12" fill="currentColor" class="dk:w-2.5 dk:h-2.5">
            <path d="M3.5 6.5l2 2 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          <svg v-else viewBox="0 0 12 12" fill="none" class="dk:w-2.5 dk:h-2.5">
            <line x1="3" y1="3" x2="9" y2="9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="9" y1="3" x2="3" y2="9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </span>
      </span>
    </span>

    <span v-if="hasLabel && labelPosition === 'right'" :class="labelClasses">
      <slot>{{ label }}</slot>
      <span v-if="description" :class="descriptionClasses">{{ description }}</span>
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
  description: {
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
  disabled: {
    type: Boolean,
    default: false,
  },
  showIcons: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}>()

const slots = useSlots()

const sizeClasses = {
  sm: {
    track: 'dk:w-8 dk:h-4',
    thumb: 'dk:w-3 dk:h-3',
    translate: 'dk:peer-checked:translate-x-[16px]',
    offset: 'dk:top-0.5 dk:left-0.5',
  },
  md: {
    track: 'dk:w-10 dk:h-5',
    thumb: 'dk:w-4 dk:h-4',
    translate: 'dk:peer-checked:translate-x-5',
    offset: 'dk:top-0.5 dk:left-0.5',
  },
  lg: {
    track: 'dk:w-12 dk:h-6',
    thumb: 'dk:w-5 dk:h-5',
    translate: 'dk:peer-checked:translate-x-6',
    offset: 'dk:top-0.5 dk:left-0.5',
  },
}

const checkedColorClasses = {
  neutral: 'dk:peer-checked:bg-zinc-600 dk:dark:peer-checked:bg-zinc-500',
  primary: 'dk:peer-checked:bg-slate-600 dk:dark:peer-checked:bg-slate-500',
  secondary: 'dk:peer-checked:bg-pink-600 dk:dark:peer-checked:bg-pink-500',
  success: 'dk:peer-checked:bg-emerald-600 dk:dark:peer-checked:bg-emerald-500',
  warning: 'dk:peer-checked:bg-amber-500 dk:dark:peer-checked:bg-amber-400',
  danger: 'dk:peer-checked:bg-rose-600 dk:dark:peer-checked:bg-rose-500',
}

const hasLabel = computed(() => Boolean(props.label || slots.default))

const wrapperClasses = computed(() => {
  const blockStyle = props.block ? 'dk:w-full dk:justify-between' : ''
  const displayStyle = props.block ? 'dk:flex' : 'dk:inline-flex'
  const disabledStyle = props.disabled ? 'dk:opacity-60 dk:cursor-not-allowed' : 'dk:cursor-pointer'
  return [displayStyle, 'dk:items-center dk:gap-3 dk:select-none', blockStyle, disabledStyle].join(' ')
})

const labelClasses = computed(() => {
  return [
    'dk:flex dk:flex-col',
    'dk:text-sm dk:leading-snug dk:text-zinc-700 dk:dark:text-zinc-200',
    props.disabled ? 'dk:cursor-not-allowed' : 'dk:cursor-pointer',
  ].join(' ')
})

const descriptionClasses = computed(() => {
  return 'dk:text-xs dk:text-zinc-500 dk:dark:text-zinc-400 dk:mt-0.5'
})

const trackClasses = computed(() => {
  const sizeStyle = sizeClasses[props.size]
  const checkedStyle = checkedColorClasses[props.color]
  return [
    'dk:relative dk:inline-flex dk:items-center dk:transition-colors dk:duration-200 dk:rounded-full',
    'dk:bg-zinc-300 dk:dark:bg-zinc-600',
    'dk:peer-focus-visible:outline-none dk:peer-focus-visible:ring-2 dk:peer-focus-visible:ring-offset-2 dk:peer-focus-visible:ring-slate-400 dk:dark:peer-focus-visible:ring-slate-500',
    'dk:peer-disabled:opacity-70',
    sizeStyle.track,
    checkedStyle,
  ].join(' ')
})

const thumbClasses = computed(() => {
  const sizeStyle = sizeClasses[props.size]
  return [
    'dk:absolute',
    sizeStyle.offset,
    'dk:bg-white dk:dark:bg-zinc-100',
    'dk:rounded-full dk:shadow-sm dk:transition-all dk:duration-200',
    'dk:pointer-events-none dk:flex dk:items-center dk:justify-center',
    sizeStyle.thumb,
    sizeStyle.translate,
  ].join(' ')
})

const iconActiveColorMap = {
  neutral:   'dk:text-zinc-600 dk:dark:text-zinc-400',
  primary:   'dk:text-slate-600 dk:dark:text-slate-400',
  secondary: 'dk:text-pink-600 dk:dark:text-pink-400',
  success:   'dk:text-emerald-600 dk:dark:text-emerald-400',
  warning:   'dk:text-amber-600 dk:dark:text-amber-400',
  danger:    'dk:text-rose-600 dk:dark:text-rose-400',
}

const iconClasses = computed(() => {
  return props.modelValue
    ? iconActiveColorMap[props.color]
    : 'dk:text-zinc-400 dk:dark:text-zinc-500'
})

function onChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
  emit('change', target.checked)
}
</script>
