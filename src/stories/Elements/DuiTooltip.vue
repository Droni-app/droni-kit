<template>
  <span
    ref="triggerRef"
    class="dk:relative dk:inline-flex dk:max-w-full"
    :aria-describedby="effectiveOpen ? tooltipId : undefined"
    @mouseenter="onTriggerMouseEnter"
    @mouseleave="onTriggerMouseLeave"
    @focusin="onTriggerFocusIn"
    @focusout="onTriggerFocusOut"
    @click="onTriggerClick">
    <slot name="trigger">
      <slot>
        <span class="dk:inline-flex dk:items-center">{{ props.fallbackTriggerText }}</span>
      </slot>
    </slot>
  </span>

  <Teleport :to="props.teleportTo">
    <transition
      enter-active-class="dk:transition-opacity dk:duration-150"
      leave-active-class="dk:transition-opacity dk:duration-100"
      enter-from-class="dk:opacity-0"
      leave-to-class="dk:opacity-0">
      <div
        v-if="effectiveOpen && !props.disabled"
        ref="tooltipRef"
        :id="tooltipId"
        role="tooltip"
        :class="tooltipClasses"
        :style="tooltipStyle"
        @mouseenter="onTooltipMouseEnter"
        @mouseleave="onTooltipMouseLeave">
        <slot name="content">
          {{ props.text }}
        </slot>

        <span
          v-if="props.arrow"
          aria-hidden="true"
          :class="arrowClasses" />
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

export type TooltipVariant = 'solid' | 'outline'
export type TooltipColor = 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
export type TooltipSize = 'sm' | 'md' | 'lg'
export type TooltipRounded = 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'
export type TooltipTrigger = 'hover' | 'click' | 'focus' | 'manual'
export type TooltipPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end'

export interface DuiTooltipProps {
  modelValue?: boolean
  text?: string
  fallbackTriggerText?: string
  trigger?: TooltipTrigger
  placement?: TooltipPlacement
  variant?: TooltipVariant
  color?: TooltipColor
  size?: TooltipSize
  rounded?: TooltipRounded
  disabled?: boolean
  interactive?: boolean
  arrow?: boolean
  showDelay?: number
  hideDelay?: number
  offset?: number
  zIndex?: number
  flip?: boolean
  viewportPadding?: number
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'full' | number | string
  teleportTo?: string
}

const props = withDefaults(defineProps<DuiTooltipProps>(), {
  modelValue: undefined,
  text: '',
  fallbackTriggerText: 'Tooltip',
  trigger: 'hover',
  placement: 'top',
  variant: 'solid',
  color: 'neutral',
  size: 'md',
  rounded: 'all',
  disabled: false,
  interactive: true,
  arrow: true,
  showDelay: 120,
  hideDelay: 90,
  offset: 10,
  zIndex: 60,
  flip: true,
  viewportPadding: 8,
  maxWidth: 'md',
  teleportTo: 'body',
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
  (event: 'open', source: 'hover' | 'focus' | 'click' | 'manual'): void
  (event: 'close', source: 'hover' | 'focus' | 'click' | 'manual' | 'outside'): void
}>()

const triggerRef = ref<HTMLElement | null>(null)
const tooltipRef = ref<HTMLElement | null>(null)

const internalOpen = ref(false)
const isControlled = computed(() => props.modelValue !== undefined)
const effectiveOpen = computed(() => {
  return isControlled.value ? Boolean(props.modelValue) : internalOpen.value
})

const resolvedPlacement = ref<TooltipPlacement>(props.placement)
const coordinates = ref({ top: 0, left: 0 })
const pointerInsideTooltip = ref(false)

let showTimer: ReturnType<typeof setTimeout> | null = null
let hideTimer: ReturnType<typeof setTimeout> | null = null

const tooltipId = `dui-tooltip-${Math.random().toString(36).slice(2, 10)}`

const roundedClasses = {
  all: 'dk:rounded-md',
  top: 'dk:rounded-t-md',
  bottom: 'dk:rounded-b-md',
  left: 'dk:rounded-l-md',
  right: 'dk:rounded-r-md',
  none: 'dk:rounded-none',
}

const sizeClasses = {
  sm: 'dk:px-2 dk:py-1 dk:text-xs',
  md: 'dk:px-2.5 dk:py-1.5 dk:text-sm',
  lg: 'dk:px-3 dk:py-2 dk:text-base',
}

const maxWidthClasses = {
  xs: 'dk:max-w-40',
  sm: 'dk:max-w-56',
  md: 'dk:max-w-72',
  lg: 'dk:max-w-96',
  full: 'dk:max-w-[min(92vw,42rem)]',
}

function isPresetMaxWidth(value: unknown): value is keyof typeof maxWidthClasses {
  return typeof value === 'string' && value in maxWidthClasses
}

const variantClasses = {
  solid: {
    base: 'dk:border dk:shadow-lg',
    neutral: 'dk:bg-zinc-900 dk:text-zinc-100 dk:border-zinc-700 dk:dark:bg-zinc-200 dk:dark:text-zinc-900 dk:dark:border-zinc-300',
    primary: 'dk:bg-slate-900 dk:text-slate-100 dk:border-slate-700 dk:dark:bg-slate-200 dk:dark:text-slate-900 dk:dark:border-slate-300',
    secondary: 'dk:bg-pink-900 dk:text-pink-100 dk:border-pink-700 dk:dark:bg-pink-200 dk:dark:text-pink-900 dk:dark:border-pink-300',
    success: 'dk:bg-emerald-900 dk:text-emerald-100 dk:border-emerald-700 dk:dark:bg-emerald-200 dk:dark:text-emerald-900 dk:dark:border-emerald-300',
    warning: 'dk:bg-amber-900 dk:text-amber-100 dk:border-amber-700 dk:dark:bg-amber-200 dk:dark:text-amber-900 dk:dark:border-amber-300',
    danger: 'dk:bg-rose-900 dk:text-rose-100 dk:border-rose-700 dk:dark:bg-rose-200 dk:dark:text-rose-900 dk:dark:border-rose-300',
  },
  outline: {
    base: 'dk:border dk:shadow-md dk:bg-white/95 dk:dark:bg-zinc-900/95',
    neutral: 'dk:text-zinc-900 dk:border-zinc-300 dk:dark:text-zinc-100 dk:dark:border-zinc-600',
    primary: 'dk:text-slate-900 dk:border-slate-400 dk:dark:text-slate-100 dk:dark:border-slate-500',
    secondary: 'dk:text-pink-900 dk:border-pink-400 dk:dark:text-pink-100 dk:dark:border-pink-500',
    success: 'dk:text-emerald-900 dk:border-emerald-400 dk:dark:text-emerald-100 dk:dark:border-emerald-500',
    warning: 'dk:text-amber-900 dk:border-amber-400 dk:dark:text-amber-100 dk:dark:border-amber-500',
    danger: 'dk:text-rose-900 dk:border-rose-400 dk:dark:text-rose-100 dk:dark:border-rose-500',
  },
}

const tooltipClasses = computed(() => {
  const rounded = roundedClasses[props.rounded]
  const size = sizeClasses[props.size]
  const variantBase = variantClasses[props.variant].base
  const variantColor = variantClasses[props.variant][props.color]
  const maxWidthClass = isPresetMaxWidth(props.maxWidth) ? maxWidthClasses[props.maxWidth] : ''

  return [
    'dk:fixed dk:pointer-events-auto dk:leading-tight dk:select-text dk:cursor-default',
    'dk:break-words dk:whitespace-normal',
    rounded,
    size,
    variantBase,
    variantColor,
    maxWidthClass,
  ].join(' ')
})

const tooltipStyle = computed(() => {
  const style: Record<string, string> = {
    top: `${coordinates.value.top}px`,
    left: `${coordinates.value.left}px`,
    zIndex: String(props.zIndex),
  }

  if (typeof props.maxWidth === 'number') {
    style.maxWidth = `${props.maxWidth}px`
  } else if (typeof props.maxWidth === 'string' && !isPresetMaxWidth(props.maxWidth)) {
    style.maxWidth = props.maxWidth
  }

  return style
})

const arrowClasses = computed(() => {
  const colorClass = variantClasses[props.variant][props.color]
  const placement = resolvedPlacement.value

  const positionMap: Record<string, string> = {
    top: 'dk:-bottom-1.5 dk:left-1/2 dk:-translate-x-1/2 dk:rotate-45',
    'top-start': 'dk:-bottom-1.5 dk:left-3 dk:rotate-45',
    'top-end': 'dk:-bottom-1.5 dk:right-3 dk:rotate-45',
    bottom: 'dk:-top-1.5 dk:left-1/2 dk:-translate-x-1/2 dk:rotate-45',
    'bottom-start': 'dk:-top-1.5 dk:left-3 dk:rotate-45',
    'bottom-end': 'dk:-top-1.5 dk:right-3 dk:rotate-45',
    left: 'dk:-right-1.5 dk:top-1/2 dk:-translate-y-1/2 dk:rotate-45',
    'left-start': 'dk:-right-1.5 dk:top-3 dk:rotate-45',
    'left-end': 'dk:-right-1.5 dk:bottom-3 dk:rotate-45',
    right: 'dk:-left-1.5 dk:top-1/2 dk:-translate-y-1/2 dk:rotate-45',
    'right-start': 'dk:-left-1.5 dk:top-3 dk:rotate-45',
    'right-end': 'dk:-left-1.5 dk:bottom-3 dk:rotate-45',
  }

  return [
    'dk:absolute dk:block dk:h-3 dk:w-3',
    colorClass,
    positionMap[placement] || positionMap.top,
  ].join(' ')
})

function clearTimers() {
  if (showTimer) {
    clearTimeout(showTimer)
    showTimer = null
  }

  if (hideTimer) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
}

function setOpen(next: boolean, source: 'hover' | 'focus' | 'click' | 'manual' | 'outside') {
  if (props.disabled) return

  if (isControlled.value) {
    emit('update:modelValue', next)
  } else {
    internalOpen.value = next
  }

  if (next) {
    emit('open', source as 'hover' | 'focus' | 'click' | 'manual')
    nextTick(() => {
      updatePosition()
    })
  } else {
    emit('close', source)
  }
}

function scheduleOpen(source: 'hover' | 'focus' | 'click' | 'manual') {
  clearTimers()
  showTimer = setTimeout(() => {
    setOpen(true, source)
  }, Math.max(0, props.showDelay))
}

function scheduleClose(source: 'hover' | 'focus' | 'click' | 'manual' | 'outside') {
  clearTimers()
  hideTimer = setTimeout(() => {
    if (source === 'hover' && props.interactive && pointerInsideTooltip.value) return
    setOpen(false, source)
  }, Math.max(0, props.hideDelay))
}

function getFlippedPlacement(placement: TooltipPlacement): TooltipPlacement {
  const map: Record<TooltipPlacement, TooltipPlacement> = {
    top: 'bottom',
    'top-start': 'bottom-start',
    'top-end': 'bottom-end',
    bottom: 'top',
    'bottom-start': 'top-start',
    'bottom-end': 'top-end',
    left: 'right',
    'left-start': 'right-start',
    'left-end': 'right-end',
    right: 'left',
    'right-start': 'left-start',
    'right-end': 'left-end',
  }

  return map[placement]
}

function computeCoordinates(
  placement: TooltipPlacement,
  triggerRect: DOMRect,
  bubbleRect: DOMRect,
): { top: number; left: number } {
  const [base, align] = placement.split('-') as ['top' | 'bottom' | 'left' | 'right', 'start' | 'end' | undefined]
  const offset = props.offset

  let top = 0
  let left = 0

  if (base === 'top') {
    top = triggerRect.top - bubbleRect.height - offset
    if (align === 'start') left = triggerRect.left
    else if (align === 'end') left = triggerRect.right - bubbleRect.width
    else left = triggerRect.left + triggerRect.width / 2 - bubbleRect.width / 2
  }

  if (base === 'bottom') {
    top = triggerRect.bottom + offset
    if (align === 'start') left = triggerRect.left
    else if (align === 'end') left = triggerRect.right - bubbleRect.width
    else left = triggerRect.left + triggerRect.width / 2 - bubbleRect.width / 2
  }

  if (base === 'left') {
    left = triggerRect.left - bubbleRect.width - offset
    if (align === 'start') top = triggerRect.top
    else if (align === 'end') top = triggerRect.bottom - bubbleRect.height
    else top = triggerRect.top + triggerRect.height / 2 - bubbleRect.height / 2
  }

  if (base === 'right') {
    left = triggerRect.right + offset
    if (align === 'start') top = triggerRect.top
    else if (align === 'end') top = triggerRect.bottom - bubbleRect.height
    else top = triggerRect.top + triggerRect.height / 2 - bubbleRect.height / 2
  }

  const pad = props.viewportPadding
  const vw = window.innerWidth
  const vh = window.innerHeight

  top = Math.min(Math.max(pad, top), vh - bubbleRect.height - pad)
  left = Math.min(Math.max(pad, left), vw - bubbleRect.width - pad)

  return { top, left }
}

function shouldFlip(placement: TooltipPlacement, triggerRect: DOMRect, bubbleRect: DOMRect): boolean {
  if (!props.flip) return false

  const [base] = placement.split('-') as ['top' | 'bottom' | 'left' | 'right']
  const offset = props.offset
  const pad = props.viewportPadding

  if (base === 'top') {
    return triggerRect.top - bubbleRect.height - offset < pad
  }

  if (base === 'bottom') {
    return triggerRect.bottom + bubbleRect.height + offset > window.innerHeight - pad
  }

  if (base === 'left') {
    return triggerRect.left - bubbleRect.width - offset < pad
  }

  return triggerRect.right + bubbleRect.width + offset > window.innerWidth - pad
}

function updatePosition() {
  if (!triggerRef.value || !tooltipRef.value) return

  const triggerRect = triggerRef.value.getBoundingClientRect()
  const bubbleRect = tooltipRef.value.getBoundingClientRect()
  let placement = props.placement

  if (shouldFlip(placement, triggerRect, bubbleRect)) {
    placement = getFlippedPlacement(placement)
  }

  resolvedPlacement.value = placement
  coordinates.value = computeCoordinates(placement, triggerRect, bubbleRect)
}

function onTriggerMouseEnter() {
  if (props.trigger !== 'hover') return
  scheduleOpen('hover')
}

function onTriggerMouseLeave(event: MouseEvent) {
  if (props.trigger !== 'hover') return

  if (props.interactive) {
    const relatedTarget = event.relatedTarget as Node | null
    if (relatedTarget && tooltipRef.value?.contains(relatedTarget)) {
      return
    }
  }

  scheduleClose('hover')
}

function onTriggerFocusIn() {
  if (props.trigger !== 'focus' && props.trigger !== 'hover') return
  scheduleOpen('focus')
}

function onTriggerFocusOut() {
  if (props.trigger !== 'focus' && props.trigger !== 'hover') return
  scheduleClose('focus')
}

function onTriggerClick(event: MouseEvent) {
  if (props.trigger !== 'click') return
  event.stopPropagation()

  if (effectiveOpen.value) {
    scheduleClose('click')
  } else {
    scheduleOpen('click')
  }
}

function onTooltipMouseEnter() {
  if (!props.interactive) return
  pointerInsideTooltip.value = true
  clearTimers()
}

function onTooltipMouseLeave(event: MouseEvent) {
  if (!props.interactive) return

  const relatedTarget = event.relatedTarget as Node | null
  if (relatedTarget && triggerRef.value?.contains(relatedTarget)) {
    return
  }

  pointerInsideTooltip.value = false
  scheduleClose('hover')
}

function onOutsideClick(event: MouseEvent) {
  if (props.trigger !== 'click' || !effectiveOpen.value) return

  const target = event.target as Node
  if (triggerRef.value?.contains(target) || tooltipRef.value?.contains(target)) {
    return
  }

  scheduleClose('outside')
}

watch(
  () => props.modelValue,
  (next) => {
    if (!isControlled.value) return
    if (next) {
      nextTick(updatePosition)
    }
  },
)

watch(
  () => props.placement,
  () => {
    if (!effectiveOpen.value) return
    nextTick(updatePosition)
  },
)

watch(effectiveOpen, (open) => {
  if (open) {
    nextTick(updatePosition)
  }
})

onMounted(() => {
  if (typeof window === 'undefined') return

  window.addEventListener('resize', updatePosition)
  window.addEventListener('scroll', updatePosition, true)
  window.addEventListener('click', onOutsideClick)
})

onBeforeUnmount(() => {
  clearTimers()

  if (typeof window === 'undefined') return

  window.removeEventListener('resize', updatePosition)
  window.removeEventListener('scroll', updatePosition, true)
  window.removeEventListener('click', onOutsideClick)
})
</script>
