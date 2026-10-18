<template>
  <div class="dk:inline-flex dk:flex-col dk:gap-3">
    <DuiButton
      v-if="!showConfirm"
      @click="windowConfirm"
      :variant="props.variant"
      :color="props.color"
      :size="props.size">
      {{ props.label }}
    </DuiButton>

    <div v-else class="dk:flex dk:flex-col dk:gap-3 dk:p-3 dk:rounded-lg dk:border dk:border-zinc-200 dk:dark:border-zinc-700">
      <DuiSwitch
        v-model="checkConfirm"
        :label="props.checkLabel"
        :size="props.size"
        :color="props.color" />
      <DuiButton
        v-if="checkConfirm"
        @click="confirmed"
        :variant="props.variant"
        :color="props.color"
        :size="props.size">
        {{ props.confirmLabel }}
      </DuiButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import DuiButton from '../Forms/DuiButton.vue'
import DuiSwitch from '../Forms/DuiSwitch.vue'
import type { DuiColor, DuiSize } from '../../theme/tokens'

export interface DuiConfirmationProps {
  label: string
  checkLabel: string
  confirmLabel: string
  variant?: 'solid' | 'outline' | 'ghost' | 'soft'
  color?: DuiColor
  size?: DuiSize
}

const showConfirm = ref(false)
const checkConfirm = ref(false)
const emit = defineEmits<{ (e: 'confirmed'): void }>()

const props = withDefaults(defineProps<DuiConfirmationProps>(), {
  variant: 'outline',
  color: 'danger',
  size: 'md',
})

function windowConfirm() {
  showConfirm.value = true
  setTimeout(() => {
    showConfirm.value = false
    checkConfirm.value = false
  }, 10000)
}
function confirmed() {
  emit('confirmed')
  showConfirm.value = false
  checkConfirm.value = false
}
</script>

