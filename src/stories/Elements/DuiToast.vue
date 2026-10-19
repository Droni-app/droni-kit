<template>
  <Teleport to="body">
    <div :class="containerClasses" :style="containerStyles" aria-live="polite" aria-atomic="false">
      <TransitionGroup
        tag="div"
        :class="listClasses"
        enter-active-class="dk:transition-all dk:duration-300 dk:ease-out"
        leave-active-class="dk:transition-all dk:duration-200 dk:ease-in dk:absolute dk:w-full"
        enter-from-class="dk:opacity-0 dk:translate-y-2 dk:scale-95"
        leave-to-class="dk:opacity-0 dk:scale-95"
        move-class="dk:transition-all dk:duration-300">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          role="alert"
          :class="toastClasses(toast.color)">
          <span v-if="toast.icon" aria-hidden="true" class="dk:flex-shrink-0 dk:text-lg">{{ toast.icon }}</span>
          <span v-else :class="dotClasses(toast.color)" aria-hidden="true" />
          <div class="dk:flex-1 dk:min-w-0">
            <p v-if="toast.title" class="dk:text-sm dk:font-semibold dk:leading-snug">{{ toast.title }}</p>
            <p class="dk:text-sm dk:leading-snug" :class="{ 'dk:text-neutral-600 dk:dark:text-neutral-400': toast.title }">{{ toast.message }}</p>
          </div>
          <button
            v-if="toast.closable"
            type="button"
            :class="closeClasses"
            aria-label="Cerrar notificacion"
            @click="remove(toast.id)">
            <i class="mdi mdi-close" aria-hidden="true" />
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../utils/cn'
import { elevatedSurfaceClasses, dotColorClasses, focusRingClasses } from '../../theme/tokens'
import { useToast } from './useToast'
import type { ToastColor, ToastPosition } from './useToast'

export interface DuiToastProps {
  position?: ToastPosition
  maxToasts?: number
  zIndex?: number
}

const props = withDefaults(defineProps<DuiToastProps>(), {
  position: 'top-right',
  maxToasts: 5,
  zIndex: 9999,
})

const { toasts: allToasts, remove } = useToast()

const toasts = computed(() => allToasts.slice(0, props.maxToasts))

const positionClasses: Record<ToastPosition, string> = {
  'top-right': 'dk:top-4 dk:right-4 dk:items-end',
  'top-left': 'dk:top-4 dk:left-4 dk:items-start',
  'top-center': 'dk:top-4 dk:left-1/2 dk:-translate-x-1/2 dk:items-center',
  'bottom-right': 'dk:bottom-4 dk:right-4 dk:items-end',
  'bottom-left': 'dk:bottom-4 dk:left-4 dk:items-start',
  'bottom-center': 'dk:bottom-4 dk:left-1/2 dk:-translate-x-1/2 dk:items-center',
}

const containerClasses = computed(() => {
  return cn('dk:fixed dk:pointer-events-none dk:flex dk:flex-col', positionClasses[props.position])
})

const containerStyles = computed(() => {
  return {
    zIndex: String(props.zIndex),
  }
})

const listClasses = computed(() => {
  return 'dk:relative dk:flex dk:flex-col dk:gap-2 dk:w-80 dk:max-w-[calc(100vw-2rem)]'
})

// Borde izquierdo de color: identifica el tono sin saturar la superficie
const accentMap: Record<ToastColor, string> = {
  neutral: 'dk:border-l-neutral-400 dk:dark:border-l-neutral-500',
  primary: 'dk:border-l-primary-500 dk:dark:border-l-primary-400',
  secondary: 'dk:border-l-secondary-500 dk:dark:border-l-secondary-400',
  success: 'dk:border-l-success-500 dk:dark:border-l-success-400',
  warning: 'dk:border-l-warning-500 dk:dark:border-l-warning-400',
  danger: 'dk:border-l-danger-500 dk:dark:border-l-danger-400',
}

function toastClasses(color: ToastColor) {
  return cn(
    'dk:pointer-events-auto dk:flex dk:items-start dk:gap-3',
    'dk:rounded-xl dk:border-l-[3px] dk:px-4 dk:py-3 dk:backdrop-blur',
    elevatedSurfaceClasses,
    accentMap[color],
  )
}

function dotClasses(color: ToastColor) {
  return cn('dk:flex-shrink-0 dk:w-2 dk:h-2 dk:rounded-full dk:mt-1.5', dotColorClasses[color])
}

const closeClasses = cn(
  'dk:flex-shrink-0 dk:flex dk:items-center dk:justify-center dk:w-6 dk:h-6 dk:-mr-1 dk:rounded-md dk:text-base dk:leading-none',
  'dk:text-neutral-400 dk:hover:text-neutral-700 dk:hover:bg-neutral-100 dk:dark:hover:text-neutral-100 dk:dark:hover:bg-white/10 dk:transition-colors',
  focusRingClasses,
)
</script>
