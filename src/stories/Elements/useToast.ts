import { reactive, readonly } from 'vue'

export type ToastColor = 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
export type ToastPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'

export interface ToastItem {
  id: string
  title?: string
  message: string
  color: ToastColor
  duration: number
  closable: boolean
  icon?: string
}

export interface ToastOptions {
  title?: string
  message: string
  color?: ToastColor
  duration?: number
  closable?: boolean
  icon?: string
}

const state = reactive<{ toasts: ToastItem[] }>({ toasts: [] })

function add(options: ToastOptions): string {
  const id = Math.random().toString(36).slice(2, 10)
  const toast: ToastItem = {
    id,
    title: options.title,
    message: options.message,
    color: options.color ?? 'neutral',
    duration: options.duration ?? 4000,
    closable: options.closable ?? true,
    icon: options.icon,
  }
  state.toasts.push(toast)

  if (toast.duration > 0) {
    setTimeout(() => remove(id), toast.duration)
  }

  return id
}

function remove(id: string) {
  const idx = state.toasts.findIndex(t => t.id === id)
  if (idx !== -1) state.toasts.splice(idx, 1)
}

function clear() {
  state.toasts.splice(0)
}

export function useToast() {
  return {
    toasts: readonly(state.toasts),
    add,
    remove,
    clear,
    success: (message: string, options?: Omit<ToastOptions, 'message' | 'color'>) =>
      add({ ...options, message, color: 'success' }),
    error: (message: string, options?: Omit<ToastOptions, 'message' | 'color'>) =>
      add({ ...options, message, color: 'danger' }),
    warning: (message: string, options?: Omit<ToastOptions, 'message' | 'color'>) =>
      add({ ...options, message, color: 'warning' }),
    info: (message: string, options?: Omit<ToastOptions, 'message' | 'color'>) =>
      add({ ...options, message, color: 'primary' }),
  }
}
