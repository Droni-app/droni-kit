//Forms 
import DuiButton from './stories/Forms/DuiButton.vue'
import DuiFile from './stories/Forms/DuiFile.vue'
import DuiInput from './stories/Forms/DuiInput.vue'
import DuiTextarea from './stories/Forms/DuiTextarea.vue'
import DuiSelect from './stories/Forms/DuiSelect.vue'
import DuiLabel from './stories/Forms/DuiLabel.vue'
import DuiCheckbox from './stories/Forms/DuiCheckbox.vue'
import DuiRadio from './stories/Forms/DuiRadio.vue'
import DuiSwitch from './stories/Forms/DuiSwitch.vue'
import DuiForm from './stories/Forms/DuiForm.vue'
// Elements
import DuiAlert from './stories/Elements/DuiAlert.vue'
import DuiTable from './stories/Elements/DuiTable.vue'
import DuiAction from './stories/Elements/DuiAction.vue'
import DuiCard from './stories/Elements/DuiCard.vue'
import DuiModal from './stories/Elements/DuiModal.vue'
import DuiDrawer from './stories/Elements/DuiDrawer.vue'
import DuiTooltip from './stories/Elements/DuiTooltip.vue'
import DuiAccordion from './stories/Elements/DuiAccordion.vue'
import DuiBadge from './stories/Elements/DuiBadge.vue'
import DuiDropdown from './stories/Elements/DuiDropdown.vue'
import DuiDropdownItem from './stories/Elements/DuiDropdownItem.vue'
import DuiDropdownSeparator from './stories/Elements/DuiDropdownSeparator.vue'
import DuiPagination from './stories/Elements/DuiPagination.vue'
import DuiSkeleton from './stories/Elements/DuiSkeleton.vue'
import DuiTabs from './stories/Elements/DuiTabs.vue'
import DuiToast from './stories/Elements/DuiToast.vue'
// Widgets
import DuiConfirmation from './stories/Widgets/DuiConfirmation.vue'
import DuiNavbar from './stories/Widgets/DuiNavbar.vue'

// composables
import { useToast } from './stories/Elements/useToast'

import './style.css'

export {
  DuiButton,
  DuiFile,
  DuiInput,
  DuiTextarea,
  DuiAction,
  DuiCard,
  DuiSelect,
  DuiLabel,
  DuiCheckbox,
  DuiRadio,
  DuiSwitch,
  DuiForm,
  DuiAlert,
  DuiTable,
  DuiModal,
  DuiDrawer,
  DuiTooltip,
  DuiAccordion,
  DuiBadge,
  DuiDropdown,
  DuiDropdownItem,
  DuiDropdownSeparator,
  DuiPagination,
  DuiSkeleton,
  DuiTabs,
  DuiToast,
  DuiConfirmation,
  DuiNavbar,
  useToast
}
// ── Tipos compartidos (v2) ────────────────────────────────────────────────
export type {
  DuiColor,
  DuiVariant,
  DuiSize,
} from './theme/tokens'
export { normalizeSize, radiusClasses, controlSizeClasses } from './theme/tokens'
export type { DuiRounded, RouteTo, RouteLocationRaw } from './types'

// ── Tipos de props por componente (para wrappers y tipado en apps) ──────────
export type { DuiButtonProps } from './stories/Forms/DuiButton.vue'
export type { DuiFileProps } from './stories/Forms/DuiFile.vue'
export type { DuiInputProps } from './stories/Forms/DuiInput.vue'
export type { DuiTextareaProps } from './stories/Forms/DuiTextarea.vue'
export type { DuiSelectProps } from './stories/Forms/DuiSelect.vue'
export type { DuiLabelProps } from './stories/Forms/DuiLabel.vue'
export type { DuiCheckboxProps } from './stories/Forms/DuiCheckbox.vue'
export type { DuiRadioProps, DuiRadioOption } from './stories/Forms/DuiRadio.vue'
export type { DuiSwitchProps } from './stories/Forms/DuiSwitch.vue'
export type { DuiFormProps } from './stories/Forms/DuiForm.vue'
export type { DuiAlertProps } from './stories/Elements/DuiAlert.vue'
export type { DuiTableProps, TableColumn, PaginationData } from './stories/Elements/DuiTable.vue'
export type { DuiActionProps } from './stories/Elements/DuiAction.vue'
export type { DuiCardProps } from './stories/Elements/DuiCard.vue'
export type { DuiModalProps } from './stories/Elements/DuiModal.vue'
export type { DuiDrawerProps } from './stories/Elements/DuiDrawer.vue'
export type { DuiTooltipProps, TooltipPlacement, TooltipTrigger } from './stories/Elements/DuiTooltip.vue'
export type { DuiAccordionProps, DuiAccordionItem } from './stories/Elements/DuiAccordion.vue'
export type { DuiBadgeProps } from './stories/Elements/DuiBadge.vue'
export type { DuiDropdownProps } from './stories/Elements/DuiDropdown.vue'
export type { DuiDropdownItemProps } from './stories/Elements/DuiDropdownItem.vue'
export type { DuiPaginationProps } from './stories/Elements/DuiPagination.vue'
export type { DuiSkeletonProps } from './stories/Elements/DuiSkeleton.vue'
export type { DuiTabsProps, DuiTab } from './stories/Elements/DuiTabs.vue'
export type { DuiToastProps } from './stories/Elements/DuiToast.vue'
export type { ToastOptions, ToastItem, ToastColor, ToastPosition } from './stories/Elements/useToast'
export type { DuiConfirmationProps } from './stories/Widgets/DuiConfirmation.vue'
export type { DuiNavbarProps, NavbarItem } from './stories/Widgets/DuiNavbar.vue'
