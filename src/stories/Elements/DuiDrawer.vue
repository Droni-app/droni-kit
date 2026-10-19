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
            <h2 v-if="props.name" :id="titleId" class="dk:text-lg dk:font-semibold dk:tracking-tight dk:truncate">
              {{ props.name }}
            </h2>
          </slot>

          <button
            v-if="props.showClose"
            type="button"
            :class="cn('dk:ml-auto', closeButtonClasses)"
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
import { cn } from '../../utils/cn'
import { panelVariantClasses, closeButtonClasses } from '../../theme/tokens'

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
    enterActive: 'dk:transition-transform dk:duration-300 dk:ease-[cubic-bezier(0.32,0.72,0,1)]',
    leaveActive: 'dk:transition-transform dk:duration-200 dk:ease-in',
    hidden: offscreen,
  }
})


const overlayClasses = computed(() => {
  return cn(
    'dk:fixed dk:inset-0 dk:bg-neutral-950/50 dk:dark:bg-neutral-950/75',
    props.blurBackdrop ? 'dk:backdrop-blur-sm' : '',
  )
})

const panelClasses = computed(() => {
  const variantBase = panelVariantClasses[props.variant].base
  const colorClass = panelVariantClasses[props.variant][props.color]
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
    'dk:border-b dk:border-black/5 dk:dark:border-white/10',
  ].join(' ')
})

const contentClasses = 'dk:flex-1 dk:overflow-y-auto dk:px-5 dk:py-4'

const actionsClasses = [
  'dk:px-5 dk:py-4 dk:border-t dk:border-black/5 dk:dark:border-white/10 dk:shrink-0',
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
