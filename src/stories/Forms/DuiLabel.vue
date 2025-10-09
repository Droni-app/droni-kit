<template>
  <label :class="computedWrapperClasses">
    <!-- Título con tooltip de ayuda -->
    <div 
      v-if="title" 
      class="dk:relative"
      @mouseenter="showTooltip = helpText ? true : false"
      @mouseleave="showTooltip = false"
    >
      <div :class="computedLabelClasses">
        <i v-if="icon" :class="icon" class="dk:mr-2"></i>
        {{ title }}
        <span v-if="required" class="dk:text-rose-500 dk:ml-1">*</span>
      </div>

      <!-- Tooltip personalizado -->
      <div 
        v-show="showTooltip && helpText"
        class="tooltip-container tooltip-above dk:z-50 dk:text-xs dk:rounded dk:py-2 dk:px-3 dk:transition-all dk:duration-200 dk:min-w-[250px] dk:max-w-xs dk:shadow-lg dk:pointer-events-none"
      >
        {{ helpText }}
        <!-- Flecha del tooltip -->
        <div class="tooltip-arrow tooltip-arrow-down"></div>
      </div>
    </div>

    <!-- Slot para el componente de formulario -->
    <div :class="computedFieldWrapperClasses">
      <slot></slot>
    </div>

    <!-- Mensaje de error -->
    <div v-if="error" :class="computedErrorClasses">
      <span class="dk:inline-flex dk:items-center dk:justify-center dk:w-4 dk:h-4 dk:text-xs dk:bg-rose-500 dk:text-white dk:rounded-full dk:mr-2 dk:flex-shrink-0">
        !
      </span>
      {{ error }}
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

// Estado reactivo para el tooltip
const showTooltip = ref(false)

const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  helpText: {
    type: String,
    default: undefined,
  },
  error: {
    type: String,
    default: undefined,
  },
  size: {
    type: String as () => 's' | 'm' | 'l',
    default: 'm',
  },
  required: {
    type: Boolean,
    default: false,
  },
})

// Clases base del wrapper
const baseWrapperClasses = 'dk:space-y-1'

// Clases de tamaño para el label
const labelSizeClasses = {
  s: 'dk:text-sm',
  m: 'dk:text-base',
  l: 'dk:text-lg',
}

// Clases de espaciado para el wrapper del campo
const fieldWrapperSizeClasses = {
  s: 'dk:mt-1',
  m: 'dk:mt-1.5',
  l: 'dk:mt-2',
}

// Clases de tamaño para el error
const errorSizeClasses = {
  s: 'dk:text-xs',
  m: 'dk:text-sm',
  l: 'dk:text-base',
}

// Clases computadas del wrapper principal
const computedWrapperClasses = computed(() => {
  return [baseWrapperClasses].join(' ')
})

// Clases computadas del label
const computedLabelClasses = computed(() => {
  const sizeClass = labelSizeClasses[props.size] || labelSizeClasses.m
  const baseClass = 'dk:block dk:font-medium dk:text-zinc-700 dk:dark:text-zinc-200 dk:flex dk:items-center'
  const cursorClass = props.helpText ? 'dk:cursor-help' : ''
  
  return [baseClass, sizeClass, cursorClass].join(' ')
})

// Clases computadas del wrapper del campo
const computedFieldWrapperClasses = computed(() => {
  const spacingClass = fieldWrapperSizeClasses[props.size] || fieldWrapperSizeClasses.m
  
  return [spacingClass].join(' ')
})

// Clases computadas del error
const computedErrorClasses = computed(() => {
  const sizeClass = errorSizeClasses[props.size] || errorSizeClasses.m
  const baseClass = 'dk:text-rose-600 dk:dark:text-rose-400 dk:flex dk:items-center dk:mt-1'
  
  return [baseClass, sizeClass].join(' ')
})
</script>

<style scoped>
/* Tooltip styles */
.tooltip-container {
  background-color: rgb(24, 24, 27) !important; /* zinc-900 */
  color: white !important;
}

.dark .tooltip-container {
  background-color: rgb(63, 63, 70) !important; /* zinc-700 */
  color: rgb(244, 244, 245) !important; /* zinc-100 */
}

/* Tooltip positioned above */
.tooltip-above {
  position: absolute !important;
  bottom: 100% !important;
  left: 0 !important;
  margin-bottom: 8px !important;
}

/* Arrow pointing down */
.tooltip-arrow {
  position: absolute !important;
  left: 16px !important;
}

.tooltip-arrow-down {
  top: 100% !important;
  border-left: 4px solid transparent !important;
  border-right: 4px solid transparent !important;
  border-top: 4px solid rgb(24, 24, 27) !important; /* zinc-900 */
}

.dark .tooltip-arrow-down {
  border-top-color: rgb(63, 63, 70) !important; /* zinc-700 */
}
</style>