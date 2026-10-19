<template>
  <nav :aria-label="ariaLabel" :class="rootClasses">
    <!-- Prev button -->
    <button
      type="button"
      :disabled="modelValue <= 1"
      :aria-label="prevLabel"
      :class="[navBtnClasses, modelValue <= 1 ? 'dk:opacity-40 dk:cursor-not-allowed' : '']"
      @click="go(modelValue - 1)">
      <svg class="dk:w-4 dk:h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="10 4 6 8 10 12" />
      </svg>
      <span v-if="showLabels" class="dk:hidden dk:sm:inline">{{ prevLabel }}</span>
    </button>

    <!-- Pages -->
    <template v-for="page in visiblePages" :key="page">
      <span v-if="page === '...'" :class="ellipsisClasses" aria-hidden="true">…</span>
      <button
        v-else
        type="button"
        :aria-label="`Pagina ${page}`"
        :aria-current="modelValue === page ? 'page' : undefined"
        :class="pageClasses(page as number)"
        @click="go(page as number)">
        {{ page }}
      </button>
    </template>

    <!-- Next button -->
    <button
      type="button"
      :disabled="modelValue >= totalPages"
      :aria-label="nextLabel"
      :class="[navBtnClasses, modelValue >= totalPages ? 'dk:opacity-40 dk:cursor-not-allowed' : '']"
      @click="go(modelValue + 1)">
      <span v-if="showLabels" class="dk:hidden dk:sm:inline">{{ nextLabel }}</span>
      <svg class="dk:w-4 dk:h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="6 4 10 8 6 12" />
      </svg>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface DuiPaginationProps {
  modelValue: number
  total: number
  perPage?: number
  siblingCount?: number
  showBoundary?: boolean
  color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  variant?: 'solid' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'full' | 'md' | 'none'
  showLabels?: boolean
  prevLabel?: string
  nextLabel?: string
  ariaLabel?: string
}

const props = withDefaults(defineProps<DuiPaginationProps>(), {
  perPage: 10,
  siblingCount: 1,
  showBoundary: true,
  color: 'primary',
  variant: 'solid',
  size: 'md',
  rounded: 'md',
  showLabels: false,
  prevLabel: 'Anterior',
  nextLabel: 'Siguiente',
  ariaLabel: 'Paginacion',
})

const emit = defineEmits<{
  (e: 'update:modelValue', page: number): void
  (e: 'change', page: number): void
}>()

const totalPages = computed(() => Math.max(1, Math.ceil(props.total / props.perPage)))

function go(page: number) {
  if (page < 1 || page > totalPages.value || page === props.modelValue) return
  emit('update:modelValue', page)
  emit('change', page)
}

const visiblePages = computed<(number | '...')[]>(() => {
  const total = totalPages.value
  const current = props.modelValue
  const sibling = props.siblingCount
  const boundary = props.showBoundary ? 1 : 0

  if (total <= 2 * sibling + 2 * boundary + 3) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages: (number | '...')[] = []

  // Left boundary
  for (let i = 1; i <= boundary; i++) pages.push(i)

  const leftSibling = Math.max(boundary + 1, current - sibling)
  const rightSibling = Math.min(total - boundary, current + sibling)

  if (leftSibling > boundary + 1) pages.push('...')
  for (let i = leftSibling; i <= rightSibling; i++) pages.push(i)
  if (rightSibling < total - boundary) pages.push('...')

  // Right boundary
  for (let i = total - boundary + 1; i <= total; i++) pages.push(i)

  return pages
})

const sizeClasses = {
  sm: 'dk:w-7 dk:h-7 dk:text-xs',
  md: 'dk:w-9 dk:h-9 dk:text-sm',
  lg: 'dk:w-11 dk:h-11 dk:text-base',
}

const roundedMap = {
  full: 'dk:rounded-full',
  md: 'dk:rounded-lg',
  none: 'dk:rounded-none',
}

const activeColorMap = {
  solid: {
    neutral: 'dk:bg-neutral-900 dk:text-white dk:dark:bg-neutral-100 dk:dark:text-neutral-950',
    primary: 'dk:bg-primary-600 dk:text-white dk:dark:bg-primary-500 dk:dark:shadow-glow-primary',
    secondary: 'dk:bg-secondary-600 dk:text-white dk:dark:bg-secondary-500 dk:dark:shadow-glow-secondary',
    success: 'dk:bg-success-600 dk:text-white dk:dark:bg-success-500 dk:dark:shadow-glow-success',
    warning: 'dk:bg-warning-400 dk:text-neutral-950 dk:dark:shadow-glow-warning',
    danger: 'dk:bg-danger-600 dk:text-white dk:dark:bg-danger-500 dk:dark:shadow-glow-danger',
  },
  outline: {
    neutral: 'dk:border dk:border-neutral-400 dk:text-neutral-900 dk:dark:border-white/30 dk:dark:text-white',
    primary: 'dk:border dk:border-primary-500 dk:text-primary-700 dk:bg-primary-50 dk:dark:border-primary-400/70 dk:dark:bg-primary-500/10 dk:dark:text-primary-200',
    secondary: 'dk:border dk:border-secondary-500 dk:text-secondary-700 dk:bg-secondary-50 dk:dark:border-secondary-400/70 dk:dark:bg-secondary-500/10 dk:dark:text-secondary-200',
    success: 'dk:border dk:border-success-500 dk:text-success-700 dk:bg-success-50 dk:dark:border-success-400/70 dk:dark:bg-success-500/10 dk:dark:text-success-200',
    warning: 'dk:border dk:border-warning-500 dk:text-warning-800 dk:bg-warning-50 dk:dark:border-warning-400/70 dk:dark:bg-warning-500/10 dk:dark:text-warning-200',
    danger: 'dk:border dk:border-danger-500 dk:text-danger-700 dk:bg-danger-50 dk:dark:border-danger-400/70 dk:dark:bg-danger-500/10 dk:dark:text-danger-200',
  },
  ghost: {
    neutral: 'dk:bg-neutral-100 dk:text-neutral-900 dk:dark:bg-white/10 dk:dark:text-white',
    primary: 'dk:bg-primary-50 dk:text-primary-700 dk:ring-1 dk:ring-inset dk:ring-primary-200 dk:dark:bg-primary-500/15 dk:dark:text-primary-200 dk:dark:ring-primary-400/30',
    secondary: 'dk:bg-secondary-50 dk:text-secondary-700 dk:ring-1 dk:ring-inset dk:ring-secondary-200 dk:dark:bg-secondary-500/15 dk:dark:text-secondary-200 dk:dark:ring-secondary-400/30',
    success: 'dk:bg-success-50 dk:text-success-700 dk:ring-1 dk:ring-inset dk:ring-success-200 dk:dark:bg-success-500/15 dk:dark:text-success-200 dk:dark:ring-success-400/30',
    warning: 'dk:bg-warning-50 dk:text-warning-800 dk:ring-1 dk:ring-inset dk:ring-warning-200 dk:dark:bg-warning-500/15 dk:dark:text-warning-200 dk:dark:ring-warning-400/30',
    danger: 'dk:bg-danger-50 dk:text-danger-700 dk:ring-1 dk:ring-inset dk:ring-danger-200 dk:dark:bg-danger-500/15 dk:dark:text-danger-200 dk:dark:ring-danger-400/30',
  },
}

const rootClasses = computed(() => 'dk:flex dk:items-center dk:gap-1 dk:flex-wrap')

const baseBtn = computed(() => {
  const size = sizeClasses[props.size]
  const rounded = roundedMap[props.rounded]
  return [
    'dk:inline-flex dk:items-center dk:justify-center dk:font-medium dk:transition-colors dk:duration-150 dk:outline-none dk:select-none dk:cursor-pointer dk:disabled:cursor-not-allowed dk:disabled:pointer-events-none',
    size,
    rounded,
    'dk:focus-visible:ring-2 dk:focus-visible:ring-offset-1 dk:focus-visible:ring-accent-500/70 dk:dark:focus-visible:ring-accent-400/80 dk:dark:focus-visible:ring-offset-neutral-950',
  ].join(' ')
})

const navBtnClasses = computed(() => {
  return [
    baseBtn.value,
    'dk:text-neutral-600 dk:dark:text-neutral-400',
    'dk:hover:bg-neutral-100 dk:dark:hover:bg-white/5',
    'dk:hover:text-neutral-900 dk:dark:hover:text-neutral-100',
  ].join(' ')
})

function pageClasses(page: number) {
  const isActive = page === props.modelValue
  if (isActive) {
    return [baseBtn.value, activeColorMap[props.variant][props.color]].join(' ')
  }
  return [
    baseBtn.value,
    'dk:text-neutral-600 dk:dark:text-neutral-400 dk:hover:bg-neutral-100 dk:dark:hover:bg-white/5 dk:hover:text-neutral-900 dk:dark:hover:text-neutral-100',
  ].join(' ')
}

const ellipsisClasses = computed(() => {
  const size = sizeClasses[props.size]
  return ['dk:inline-flex dk:items-center dk:justify-center dk:text-neutral-400 dk:dark:text-neutral-500 dk:select-none', size].join(' ')
})
</script>
