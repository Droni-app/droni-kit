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
                  <h2 v-if="props.title" :id="titleId" class="dk:text-lg dk:font-semibold dk:tracking-tight">
                    {{ props.title }}
                  </h2>
                  <p v-if="props.description" :id="descriptionId" class="dk:mt-1 dk:text-sm dk:opacity-70">
                    {{ props.description }}
                  </p>
                </slot>
              </div>

              <button
                v-if="props.showClose"
                type="button"
                :class="closeButtonClasses"
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
import { cn } from '../../utils/cn'
import { panelVariantClasses, closeButtonClasses } from '../../theme/tokens'

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
  // Keep modal above Drawer defaults (Drawer panel uses zIndex + 1).
  zIndex: 60,
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


const overlayClasses = computed(() => {
  return cn(
    'dk:fixed dk:inset-0 dk:bg-neutral-950/50 dk:dark:bg-neutral-950/75',
    props.blurBackdrop ? 'dk:backdrop-blur-sm' : '',
  )
})

const containerClasses = computed(() => {
  return [
    'dk:flex dk:min-h-full dk:w-full dk:p-4',
    props.centered ? 'dk:items-center' : 'dk:items-start dk:pt-8',
    'dk:justify-center',
  ].join(' ')
})

const panelClasses = computed(() => {
  const variantBase = panelVariantClasses[props.variant].base
  const colorClass = panelVariantClasses[props.variant][props.color]
  const roundedClass = roundedClasses[props.rounded]
  const sizeClass = sizeClasses[props.size]

  return [
    'dk:relative dk:flex dk:flex-col dk:overflow-hidden dk:max-h-full',
    variantBase,
    colorClass,
    roundedClass,
    sizeClass,
  ].join(' ')
})

const headerClasses = computed(() => {
  return [
    'dk:flex dk:items-start dk:justify-between dk:gap-3 dk:px-5 dk:pt-5 dk:pb-3',
    'dk:border-b dk:border-black/5 dk:dark:border-white/10',
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
    'dk:px-5 dk:py-4 dk:border-t dk:border-black/5 dk:dark:border-white/10',
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
