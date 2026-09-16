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
        @click="onBackdropClick" />
    </transition>

    <transition
      :enter-active-class="transitionClasses.enterActive"
      :leave-active-class="transitionClasses.leaveActive"
      :enter-from-class="transitionClasses.hidden"
      :leave-to-class="transitionClasses.hidden">
      <div
        v-if="props.modelValue"
        :style="{ zIndex: String(props.zIndex + 1) }"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="props.name ? titleId : undefined"
        :class="panelClasses"
        @click.stop>
        <header v-if="$slots.header || props.name || props.showClose" :class="headerClasses">
          <slot name="header">
            <h2 v-if="props.name" :id="titleId" class="dk:text-lg dk:font-semibold dk:truncate">
              {{ props.name }}
            </h2>
          </slot>

          <button
            v-if="props.showClose"
            type="button"
            class="dk:ml-auto dk:inline-flex dk:h-8 dk:w-8 dk:shrink-0 dk:items-center dk:justify-center dk:rounded dk:text-current dk:opacity-70 dk:transition-opacity dk:hover:opacity-100 dk:focus-visible:opacity-100 dk:outline-none dk:ring-2 dk:ring-current/30"
            aria-label="Cerrar panel"
            @click="closeDrawer('button')">
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <section :class="contentClasses">
          <slot />
        </section>

        <footer v-if="$slots.actions" :class="actionsClasses">
          <slot name="actions" />
        </footer>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'

export interface DuiDrawerProps {
  modelValue?: boolean
  name?: string
  position?: 'left' | 'right' | 'top' | 'bottom'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'solid' | 'outline' | 'ghost'
  color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  showClose?: boolean
  closeOnBackdrop?: boolean
  closeOnEsc?: boolean
  persistent?: boolean
  blurBackdrop?: boolean
  zIndex?: number
}

const props = withDefaults(defineProps<DuiDrawerProps>(), {
  modelValue: false,
  name: undefined,
  position: 'right',
  size: 'md',
  variant: 'solid',
  color: 'neutral',
  showClose: true,
  closeOnBackdrop: true,
  closeOnEsc: true,
  persistent: false,
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
const titleId = `dui-drawer-title-${idSuffix}`

// Every size covers 95% of the screen on small viewports; from `md:` up it
// resolves to the intended proportion of the viewport for that position.
const sizeClasses = {
  left: {
    sm: 'dk:w-[95%] dk:md:w-16',
    md: 'dk:w-[95%] dk:md:w-1/3',
    lg: 'dk:w-[95%] dk:md:w-1/2',
    xl: 'dk:w-[95%] dk:md:w-[90%]',
  },
  right: {
    sm: 'dk:w-[95%] dk:md:w-16',
    md: 'dk:w-[95%] dk:md:w-1/3',
    lg: 'dk:w-[95%] dk:md:w-1/2',
    xl: 'dk:w-[95%] dk:md:w-[90%]',
  },
  top: {
    sm: 'dk:h-[95%] dk:md:h-16',
    md: 'dk:h-[95%] dk:md:h-1/3',
    lg: 'dk:h-[95%] dk:md:h-1/2',
    xl: 'dk:h-[95%] dk:md:h-[90%]',
  },
  bottom: {
    sm: 'dk:h-[95%] dk:md:h-16',
    md: 'dk:h-[95%] dk:md:h-1/3',
    lg: 'dk:h-[95%] dk:md:h-1/2',
    xl: 'dk:h-[95%] dk:md:h-[90%]',
  },
}

const positionClasses = {
  left: 'dk:inset-y-0 dk:left-0 dk:h-full dk:rounded-r-xl',
  right: 'dk:inset-y-0 dk:right-0 dk:h-full dk:rounded-l-xl',
  top: 'dk:inset-x-0 dk:top-0 dk:w-full dk:rounded-b-xl',
  bottom: 'dk:inset-x-0 dk:bottom-0 dk:w-full dk:rounded-t-xl',
}

const transitionClasses = computed(() => {
  const offscreen = {
    left: 'dk:-translate-x-full',
    right: 'dk:translate-x-full',
    top: 'dk:-translate-y-full',
    bottom: 'dk:translate-y-full',
  }[props.position]

  return {
    enterActive: 'dk:transition-transform dk:duration-300',
    leaveActive: 'dk:transition-transform dk:duration-300',
    hidden: offscreen,
  }
})

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

const panelClasses = computed(() => {
  const variantBase = variantClasses[props.variant].base
  const colorClass = variantClasses[props.variant][props.color]
  const sizeClass = sizeClasses[props.position][props.size]
  const positionClass = positionClasses[props.position]

  return [
    'dk:fixed dk:flex dk:flex-col dk:overflow-hidden',
    positionClass,
    variantBase,
    colorClass,
    sizeClass,
  ].join(' ')
})

const headerClasses = computed(() => {
  return [
    'dk:flex dk:items-center dk:justify-between dk:gap-3 dk:px-5 dk:py-4 dk:shrink-0',
    'dk:border-b dk:border-current/10',
  ].join(' ')
})

const contentClasses = 'dk:flex-1 dk:overflow-y-auto dk:px-5 dk:py-4'

const actionsClasses = [
  'dk:px-5 dk:py-4 dk:border-t dk:border-current/10 dk:shrink-0',
  'dk:flex dk:items-center dk:justify-end dk:gap-2',
].join(' ')

function lockBodyScroll() {
  if (typeof document === 'undefined') return

  const body = document.body
  const currentCount = Number(body.dataset.duiDrawerCount || '0')
  const nextCount = currentCount + 1
  body.dataset.duiDrawerCount = String(nextCount)

  if (nextCount === 1) {
    body.style.overflow = 'hidden'
  }
}

function unlockBodyScroll() {
  if (typeof document === 'undefined') return

  const body = document.body
  const currentCount = Number(body.dataset.duiDrawerCount || '0')
  const nextCount = Math.max(0, currentCount - 1)
  body.dataset.duiDrawerCount = String(nextCount)

  if (nextCount === 0) {
    body.style.overflow = ''
  }
}

function closeDrawer(source: 'button' | 'backdrop' | 'escape') {
  emit('update:modelValue', false)
  emit('close', source)
}

function onBackdropClick() {
  emit('backdrop')
  if (props.persistent || !props.closeOnBackdrop) return
  closeDrawer('backdrop')
}

function onEscapeKey(event: KeyboardEvent) {
  if (event.key !== 'Escape' || !props.modelValue) return
  emit('escape')
  if (props.persistent || !props.closeOnEsc) return
  closeDrawer('escape')
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
