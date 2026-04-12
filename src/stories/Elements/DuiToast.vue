<template>
  <Teleport to="body">
    <div :class="containerClasses" aria-live="polite" aria-atomic="false">
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
            <p class="dk:text-sm dk:leading-snug" :class="{ 'dk:opacity-80': toast.title }">{{ toast.message }}</p>
          </div>
          <button
            v-if="toast.closable"
            type="button"
            :class="closeClasses"
            aria-label="Cerrar notificacion"
            @click="remove(toast.id)">
            ×
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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
  return [
    'dk:fixed dk:pointer-events-none',
    positionClasses[props.position],
    `dk:z-[${props.zIndex}]`,
  ].join(' ')
})

const listClasses = computed(() => {
  return 'dk:relative dk:flex dk:flex-col dk:gap-2 dk:w-80 dk:max-w-[calc(100vw-2rem)]'
})

const colorMap: Record<ToastColor, string> = {
  neutral: 'dk:bg-zinc-800 dk:dark:bg-zinc-700 dk:text-white dk:border-zinc-600',
  primary: 'dk:bg-slate-700 dk:dark:bg-slate-700 dk:text-white dk:border-slate-500',
  secondary: 'dk:bg-pink-600 dk:dark:bg-pink-700 dk:text-white dk:border-pink-400',
  success: 'dk:bg-emerald-600 dk:dark:bg-emerald-700 dk:text-white dk:border-emerald-400',
  warning: 'dk:bg-amber-500 dk:dark:bg-amber-600 dk:text-white dk:border-amber-300',
  danger: 'dk:bg-rose-600 dk:dark:bg-rose-700 dk:text-white dk:border-rose-400',
}

const dotMap: Record<ToastColor, string> = {
  neutral: 'dk:bg-zinc-300',
  primary: 'dk:bg-slate-300',
  secondary: 'dk:bg-pink-200',
  success: 'dk:bg-emerald-200',
  warning: 'dk:bg-amber-200',
  danger: 'dk:bg-rose-200',
}

function toastClasses(color: ToastColor) {
  return [
    'dk:pointer-events-auto dk:flex dk:items-start dk:gap-3',
    'dk:rounded-xl dk:border dk:px-4 dk:py-3 dk:shadow-xl',
    colorMap[color],
  ].join(' ')
}

function dotClasses(color: ToastColor) {
  return ['dk:flex-shrink-0 dk:w-2 dk:h-2 dk:rounded-full dk:mt-1', dotMap[color]].join(' ')
}

const closeClasses =
  'dk:flex-shrink-0 dk:flex dk:items-center dk:justify-center dk:w-5 dk:h-5 dk:rounded dk:text-current dk:opacity-70 dk:hover:opacity-100 dk:transition-opacity dk:text-base dk:leading-none dk:outline-none dk:ring-1 dk:ring-current/30 dk:focus-visible:ring-2'
</script>
