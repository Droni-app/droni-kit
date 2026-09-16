<template>
  <form
    :novalidate="novalidate"
    :method="method"
    :action="action"
    :class="computedFormClasses"
    :aria-busy="loading"
    @submit.prevent="onSubmit"
    @reset.prevent="onReset"
  >
    <!-- Header slot -->
    <div v-if="$slots.header" :class="headerClasses">
      <slot name="header" />
    </div>

    <!-- Main content -->
    <fieldset :disabled="loading || disabled" class="dk:border-0 dk:p-0 dk:m-0 dk:min-w-0">
      <div :class="contentClasses">
        <slot />
      </div>
    </fieldset>

    <!-- Footer / actions slot -->
    <div v-if="$slots.footer" :class="footerClasses">
      <slot name="footer" />
    </div>

    <!-- Loading overlay -->
    <div v-if="loading" :class="loadingOverlayClasses" aria-hidden="true">
      <span :class="spinnerClasses" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'

export interface DuiFormProps {
  /** Disable native browser form validation (useful for custom validation) */
  novalidate?: boolean
  /** Show loading overlay and disable all fields */
  loading?: boolean
  /** Visually disable all form fields */
  disabled?: boolean
  /** Native form method */
  method?: 'get' | 'post'
  /** Native form action URL */
  action?: string
  /** Gap between form fields */
  gap?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<DuiFormProps>(), {
  novalidate: false,
  loading: false,
  disabled: false,
  method: undefined,
  action: undefined,
  gap: 'md',
})

const emit = defineEmits<{
  (e: 'submit', payload: { formData: FormData; event: SubmitEvent }): void
  (e: 'reset', event: Event): void
}>()

const DUI_FORM_KEY = Symbol('DuiForm')

// Provide form context so child components can react to loading/disabled state
provide(DUI_FORM_KEY, {
  loading: computed(() => props.loading),
  disabled: computed(() => props.disabled),
})

function onSubmit(event: SubmitEvent) {
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  emit('submit', { formData, event })
}

function onReset(event: Event) {
  emit('reset', event)
}

const gapClasses = {
  sm: 'dk:space-y-3',
  md: 'dk:space-y-5',
  lg: 'dk:space-y-7',
}

const computedFormClasses = computed(() => {
  return [
    'dk:relative',
    props.disabled && !props.loading ? 'dk:opacity-60 dk:pointer-events-none' : '',
  ]
    .filter(Boolean)
    .join(' ')
})

const headerClasses = computed(() => {
  return [
    'dk:mb-5',
    'dk:pb-4',
    'dk:border-b dk:border-zinc-200 dk:dark:border-zinc-700',
  ].join(' ')
})

const contentClasses = computed(() => {
  return gapClasses[props.gap] || gapClasses.md
})

const footerClasses = computed(() => {
  return [
    'dk:mt-6',
    'dk:pt-4',
    'dk:border-t dk:border-zinc-200 dk:dark:border-zinc-700',
    'dk:flex dk:items-center dk:gap-3',
  ].join(' ')
})

const loadingOverlayClasses = computed(() => {
  return [
    'dk:absolute dk:inset-0',
    'dk:flex dk:items-center dk:justify-center',
    'dk:bg-white/60 dk:dark:bg-zinc-900/60',
    'dk:rounded',
    'dk:z-10',
  ].join(' ')
})

const spinnerClasses = computed(() => {
  return [
    'dk:w-6 dk:h-6',
    'dk:border-2 dk:border-zinc-300 dk:dark:border-zinc-600',
    'dk:border-t-zinc-700 dk:dark:border-t-zinc-200',
    'dk:rounded-full',
    'dk:animate-spin',
  ].join(' ')
})
</script>
