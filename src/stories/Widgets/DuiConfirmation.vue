<template>
  <DuiButton
    v-if="!showConfirm" @click="windowConfirm"
    :variant="props.variant"
    :color="props.color"
    :size="props.size"
  >
    {{ props.label }}
  </DuiButton>
  <div v-else>
    <DuiSwitch
      v-model="checkConfirm"
      :label="props.checkLabel"
      :size="props.size"
      :variant="props.variant"
      :color="props.color"
      :checked="checkConfirm"
    /><br>
    <DuiButton
      v-if="checkConfirm"
      @click="confirmed()"
      :variant="props.variant"
      :color="props.color"
      :size="props.size"
    >
      {{ props.confirmLabel }}
    </DuiButton>
  </div>
  
</template>
<script setup lang="ts">
import { ref } from 'vue';
import DuiButton from '../Forms/DuiButton.vue';
import DuiSwitch from '../Forms/DuiSwitch.vue';

export interface DuiButtonProps {
  label: string
  checkLabel: string
  confirmLabel: string
  variant?: 'solid' | 'outline' | 'ghost'
  color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const showConfirm = ref(false);
const checkConfirm = ref(false);
const emit = defineEmits(['confirmed']);

const props = withDefaults(defineProps<DuiButtonProps>(), {
  variant: 'outline',
  color: 'danger',
  size: 'md'
})

function windowConfirm() {
  showConfirm.value = true;
  setTimeout(() => {
    showConfirm.value = false;
    checkConfirm.value = false;
  }, 10000);
}
function confirmed() {
  emit('confirmed');
  showConfirm.value = false;
  checkConfirm.value = false;
}
</script>