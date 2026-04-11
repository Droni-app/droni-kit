<template>
  <Teleport to="body">
    <transition
      enter-active-class="dk:transition-opacity dk:duration-200"
      leave-active-class="dk:transition-opacity dk:duration-200"
      enter-from-class="dk:opacity-0"
      leave-to-class="dk:opacity-0">
      <div
        v-if="props.modelValue"
        :style="{ zIndex: String(props.zIndex) }"
        :class="overlayClasses"
        @click="onBackdropClick">
        <div :class="containerClasses">
          <div
            role="dialog"
            aria-modal="true"
            :aria-labelledby="props.title ? titleId : undefined"
            :aria-describedby="props.description ? descriptionId : undefined"
            :class="panelClasses"
            @click.stop>
            <header v-if="$slots.header || props.title || props.description || props.showClose" :class="headerClasses">
              <div>
                <slot name="header">
                  <h2 v-if="props.title" :id="titleId" class="dk:text-lg dk:font-semibold">
                    {{ props.title }}
                  </h2>
                  <p v-if="props.description" :id="descriptionId" class="dk:mt-1 dk:text-sm dk:opacity-80">
                    {{ props.description }}
                  </p>
                </slot>
              </div>

              <button
                v-if="props.showClose"
                type="button"
                class="dk:inline-flex dk:h-8 dk:w-8 dk:items-center dk:justify-center dk:rounded dk:text-current dk:opacity-70 dk:transition-opacity dk:hover:opacity-100 dk:focus-visible:opacity-100 dk:outline-none dk:ring-2 dk:ring-current/30"
                aria-label="Cerrar modal"
                @click="closeModal('button')">
                <span aria-hidden="true">×</span>
              </button>
            </header>

            <section :class="contentClasses">
              <slot />
            </section>

            <footer v-if="$slots.footer" :class="footerClasses">
              <slot name="footer" />
            </footer>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'

export interface DuiModalProps {
  modelValue?: boolean
  title?: string
  description?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  variant?: 'solid' | 'outline' | 'ghost'
  color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  rounded?: 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'
  showClose?: boolean
  closeOnBackdrop?: boolean
  closeOnEsc?: boolean
  persistent?: boolean
  centered?: boolean
  scrollable?: boolean
  blurBackdrop?: boolean
  zIndex?: number
}

const props = withDefaults(defineProps<DuiModalProps>(), {
  modelValue: false,
  title: undefined,
  description: undefined,
  size: 'md',
  variant: 'solid',
  color: 'neutral',
  rounded: 'all',
  showClose: true,
  closeOnBackdrop: true,
  closeOnEsc: true,
  persistent: false,
  centered: true,
  scrollable: true,
  blurBackdrop: true,
  zIndex: 50,
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
  (event: 'open'): void
  (event: 'close', source: 'button' | 'backdrop' | 'escape'): void
  (event: 'backdrop'): void
  (event: 'escape'): void
}>()

const idSuffix = Math.random().toString(36).slice(2, 10)
const titleId = `dui-modal-title-${idSuffix}`
const descriptionId = `dui-modal-description-${idSuffix}`

const roundedClasses = {
  all: 'dk:rounded-xl',
  top: 'dk:rounded-t-xl',
  bottom: 'dk:rounded-b-xl',
  left: 'dk:rounded-l-xl',
  right: 'dk:rounded-r-xl',
  none: 'dk:rounded-none',
}

const sizeClasses = {
  xs: 'dk:w-full dk:max-w-xs',
  sm: 'dk:w-full dk:max-w-md',
  md: 'dk:w-full dk:max-w-xl',
  lg: 'dk:w-full dk:max-w-3xl',
  xl: 'dk:w-full dk:max-w-5xl',
  full: 'dk:h-[calc(100vh-2rem)] dk:w-[calc(100vw-2rem)] dk:max-w-none',
}

const variantClasses = {
  solid: {
    base: 'dk:border dk:shadow-xl',
    neutral: 'dk:bg-white dk:text-zinc-900 dk:border-zinc-200 dk:dark:bg-zinc-900 dk:dark:text-zinc-100 dk:dark:border-zinc-700',
    primary: 'dk:bg-slate-50 dk:text-slate-900 dk:border-slate-200 dk:dark:bg-slate-900 dk:dark:text-slate-100 dk:dark:border-slate-700',
    secondary: 'dk:bg-pink-50 dk:text-pink-900 dk:border-pink-200 dk:dark:bg-pink-900 dk:dark:text-pink-100 dk:dark:border-pink-700',
    success: 'dk:bg-emerald-50 dk:text-emerald-900 dk:border-emerald-200 dk:dark:bg-emerald-900 dk:dark:text-emerald-100 dk:dark:border-emerald-700',
    warning: 'dk:bg-amber-50 dk:text-amber-900 dk:border-amber-200 dk:dark:bg-amber-900 dk:dark:text-amber-100 dk:dark:border-amber-700',
    danger: 'dk:bg-rose-50 dk:text-rose-900 dk:border-rose-200 dk:dark:bg-rose-900 dk:dark:text-rose-100 dk:dark:border-rose-700',
  },
  outline: {
    base: 'dk:border-2 dk:shadow-lg dk:bg-white/95 dk:dark:bg-zinc-900/95',
    neutral: 'dk:text-zinc-900 dk:border-zinc-300 dk:dark:text-zinc-100 dk:dark:border-zinc-600',
    primary: 'dk:text-slate-900 dk:border-slate-400 dk:dark:text-slate-100 dk:dark:border-slate-500',
    secondary: 'dk:text-pink-900 dk:border-pink-400 dk:dark:text-pink-100 dk:dark:border-pink-500',
    success: 'dk:text-emerald-900 dk:border-emerald-400 dk:dark:text-emerald-100 dk:dark:border-emerald-500',
    warning: 'dk:text-amber-900 dk:border-amber-400 dk:dark:text-amber-100 dk:dark:border-amber-500',
    danger: 'dk:text-rose-900 dk:border-rose-400 dk:dark:text-rose-100 dk:dark:border-rose-500',
  },
  ghost: {
    base: 'dk:border dk:shadow-xl dk:backdrop-blur-md',
    neutral: 'dk:bg-white/85 dk:text-zinc-900 dk:border-zinc-300/70 dk:dark:bg-zinc-900/75 dk:dark:text-zinc-100 dk:dark:border-zinc-600/60',
    primary: 'dk:bg-slate-100/85 dk:text-slate-900 dk:border-slate-300/70 dk:dark:bg-slate-900/70 dk:dark:text-slate-100 dk:dark:border-slate-600/60',
    secondary: 'dk:bg-pink-100/85 dk:text-pink-900 dk:border-pink-300/70 dk:dark:bg-pink-900/70 dk:dark:text-pink-100 dk:dark:border-pink-600/60',
    success: 'dk:bg-emerald-100/85 dk:text-emerald-900 dk:border-emerald-300/70 dk:dark:bg-emerald-900/70 dk:dark:text-emerald-100 dk:dark:border-emerald-600/60',
    warning: 'dk:bg-amber-100/85 dk:text-amber-900 dk:border-amber-300/70 dk:dark:bg-amber-900/70 dk:dark:text-amber-100 dk:dark:border-amber-600/60',
    danger: 'dk:bg-rose-100/85 dk:text-rose-900 dk:border-rose-300/70 dk:dark:bg-rose-900/70 dk:dark:text-rose-100 dk:dark:border-rose-600/60',
  },
}

const overlayClasses = computed(() => {
  return [
    'dk:fixed dk:inset-0 dk:bg-black/55',
    props.blurBackdrop ? 'dk:backdrop-blur-[2px]' : '',
  ].join(' ')
})

const containerClasses = computed(() => {
  return [
    'dk:flex dk:min-h-full dk:w-full dk:p-4',
    props.centered ? 'dk:items-center' : 'dk:items-start dk:pt-8',
    'dk:justify-center',
  ].join(' ')
})

const panelClasses = computed(() => {
  const variantBase = variantClasses[props.variant].base
  const colorClass = variantClasses[props.variant][props.color]
  const roundedClass = roundedClasses[props.rounded]
  const sizeClass = sizeClasses[props.size]

  return [
    'dk:relative dk:flex dk:flex-col dk:overflow-hidden',
    variantBase,
    colorClass,
    roundedClass,
    sizeClass,
  ].join(' ')
})

const headerClasses = computed(() => {
  return [
    'dk:flex dk:items-start dk:justify-between dk:gap-3 dk:px-5 dk:pt-5 dk:pb-3',
    'dk:border-b dk:border-current/10',
  ].join(' ')
})

const contentClasses = computed(() => {
  return [
    'dk:px-5 dk:py-4',
    props.scrollable ? 'dk:max-h-[65vh] dk:overflow-y-auto' : '',
  ].join(' ')
})

const footerClasses = computed(() => {
  return [
    'dk:px-5 dk:py-4 dk:border-t dk:border-current/10',
    'dk:flex dk:items-center dk:justify-end dk:gap-2',
  ].join(' ')
})

function lockBodyScroll() {
  if (typeof document === 'undefined') return

  const body = document.body
  const currentCount = Number(body.dataset.duiModalCount || '0')
  const nextCount = currentCount + 1
  body.dataset.duiModalCount = String(nextCount)

  if (nextCount === 1) {
    body.style.overflow = 'hidden'
  }
}

function unlockBodyScroll() {
  if (typeof document === 'undefined') return

  const body = document.body
  const currentCount = Number(body.dataset.duiModalCount || '0')
  const nextCount = Math.max(0, currentCount - 1)
  body.dataset.duiModalCount = String(nextCount)

  if (nextCount === 0) {
    body.style.overflow = ''
  }
}

function closeModal(source: 'button' | 'backdrop' | 'escape') {
  emit('update:modelValue', false)
  emit('close', source)
}

function onBackdropClick() {
  emit('backdrop')
  if (props.persistent || !props.closeOnBackdrop) return
  closeModal('backdrop')
}

function onEscapeKey(event: KeyboardEvent) {
  if (event.key !== 'Escape' || !props.modelValue) return
  emit('escape')
  if (props.persistent || !props.closeOnEsc) return
  closeModal('escape')
}

watch(
  () => props.modelValue,
  (isOpen, wasOpen) => {
    if (isOpen && !wasOpen) {
      lockBodyScroll()
      emit('open')
    }

    if (!isOpen && wasOpen) {
      unlockBodyScroll()
    }
  },
)

onMounted(() => {
  if (props.modelValue) {
    lockBodyScroll()
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', onEscapeKey)
  }
})

onBeforeUnmount(() => {
  if (props.modelValue) {
    unlockBodyScroll()
  }

  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', onEscapeKey)
  }
})
</script>
