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
    neutral: 'dk:bg-zinc-700 dk:text-white dk:dark:bg-zinc-500',
    primary: 'dk:bg-slate-600 dk:text-white dk:dark:bg-slate-500',
    secondary: 'dk:bg-pink-600 dk:text-white dk:dark:bg-pink-500',
    success: 'dk:bg-emerald-600 dk:text-white dk:dark:bg-emerald-500',
    warning: 'dk:bg-amber-500 dk:text-white dk:dark:bg-amber-400',
    danger: 'dk:bg-rose-600 dk:text-white dk:dark:bg-rose-500',
  },
  outline: {
    neutral: 'dk:border-2 dk:border-zinc-600 dk:text-zinc-700 dk:dark:border-zinc-400 dk:dark:text-zinc-200',
    primary: 'dk:border-2 dk:border-slate-600 dk:text-slate-700 dk:dark:border-slate-400 dk:dark:text-slate-200',
    secondary: 'dk:border-2 dk:border-pink-600 dk:text-pink-700 dk:dark:border-pink-400 dk:dark:text-pink-200',
    success: 'dk:border-2 dk:border-emerald-600 dk:text-emerald-700 dk:dark:border-emerald-400 dk:dark:text-emerald-200',
    warning: 'dk:border-2 dk:border-amber-500 dk:text-amber-700 dk:dark:border-amber-400 dk:dark:text-amber-200',
    danger: 'dk:border-2 dk:border-rose-600 dk:text-rose-700 dk:dark:border-rose-400 dk:dark:text-rose-200',
  },
  ghost: {
    neutral: 'dk:bg-zinc-100 dk:text-zinc-800 dk:dark:bg-zinc-700 dk:dark:text-zinc-100',
    primary: 'dk:bg-slate-100 dk:text-slate-800 dk:dark:bg-slate-700 dk:dark:text-slate-100',
    secondary: 'dk:bg-pink-100 dk:text-pink-800 dk:dark:bg-pink-800 dk:dark:text-pink-100',
    success: 'dk:bg-emerald-100 dk:text-emerald-800 dk:dark:bg-emerald-800 dk:dark:text-emerald-100',
    warning: 'dk:bg-amber-100 dk:text-amber-800 dk:dark:bg-amber-700 dk:dark:text-amber-100',
    danger: 'dk:bg-rose-100 dk:text-rose-800 dk:dark:bg-rose-800 dk:dark:text-rose-100',
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
    'dk:focus-visible:ring-2 dk:focus-visible:ring-offset-1 dk:focus-visible:ring-slate-400',
  ].join(' ')
})

const navBtnClasses = computed(() => {
  return [
    baseBtn.value,
    'dk:text-zinc-600 dk:dark:text-zinc-400',
    'dk:hover:bg-zinc-100 dk:dark:hover:bg-zinc-700',
    'dk:hover:text-zinc-900 dk:dark:hover:text-zinc-100',
  ].join(' ')
})

function pageClasses(page: number) {
  const isActive = page === props.modelValue
  if (isActive) {
    return [baseBtn.value, activeColorMap[props.variant][props.color]].join(' ')
  }
  return [
    baseBtn.value,
    'dk:text-zinc-600 dk:dark:text-zinc-400 dk:hover:bg-zinc-100 dk:dark:hover:bg-zinc-700 dk:hover:text-zinc-900 dk:dark:hover:text-zinc-100',
  ].join(' ')
}

const ellipsisClasses = computed(() => {
  const size = sizeClasses[props.size]
  return ['dk:inline-flex dk:items-center dk:justify-center dk:text-zinc-400 dk:select-none', size].join(' ')
})
</script>
