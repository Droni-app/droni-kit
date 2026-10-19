// =============================================================================
// DroniKit v2 — Design tokens (single source of truth)
// Todos los componentes importan desde aquí en vez de hand-rollear sus mapas.
// Los colores semánticos (primary, secondary, accent, neutral, success,
// warning, danger) se definen como variables CSS en src/style.css (@theme).
// Re-temear la librería = editar esas variables; este archivo define el "cómo".
// =============================================================================

import type { DuiRounded } from '../types'
export type DuiColor = 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
export type DuiVariant = 'solid' | 'outline' | 'soft' | 'ghost'
export type DuiSize = 'sm' | 'md' | 'lg'

export const duiColors: DuiColor[] = ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger']

// --- Radio ----------------------------------------------------------------
// Escala unificada. 'md' es el radio por defecto de la mayoría de componentes.
export const radiusClasses = {
  none: 'dk:rounded-none',
  sm: 'dk:rounded-md',
  md: 'dk:rounded-lg',
  lg: 'dk:rounded-xl',
  full: 'dk:rounded-full',
} as const

// --- Sizing por altura (alinea inputs, selects y botones) -----------------
export const controlSizeClasses = {
  sm: 'dk:h-8 dk:text-sm dk:px-3 dk:gap-1.5',
  md: 'dk:h-10 dk:text-sm dk:px-4 dk:gap-2',
  lg: 'dk:h-12 dk:text-base dk:px-5 dk:gap-2.5',
} as const

// --- Focus ring consistente en todos los elementos interactivos -----------
// Cian (accent): el toque neón que guía la navegación por teclado.
export const focusRingClasses =
  'dk:focus-visible:outline-none dk:focus-visible:ring-2 dk:focus-visible:ring-offset-2 dk:focus-visible:ring-accent-500/70 dk:focus-visible:ring-offset-white dk:dark:focus-visible:ring-accent-400/80 dk:dark:focus-visible:ring-offset-neutral-950'

// --- Superficies ------------------------------------------------------------
// Tarjetas y contenedores en el flujo de la página.
export const surfaceClasses =
  'dk:bg-white dk:border dk:border-neutral-200 dk:text-neutral-900 dk:dark:bg-neutral-900 dk:dark:border-white/10 dk:dark:text-neutral-100'
// Capas flotantes (modal, drawer, dropdown, toast): sombra profunda + halo violeta en dark.
export const elevatedSurfaceClasses =
  'dk:bg-white dk:border dk:border-neutral-200 dk:text-neutral-900 dk:shadow-elevated dk:dark:bg-neutral-900 dk:dark:border-white/10 dk:dark:text-neutral-100 dk:dark:shadow-elevated-dark'
// Fondo de overlays (modal, drawer).
export const backdropClasses = 'dk:bg-neutral-950/50 dk:backdrop-blur-sm dk:dark:bg-neutral-950/70'

// --- Variantes x colores ---------------------------------------------------
// Cada entrada es un string de clases completo (bg + text + border + hover + dark).
// Neón sutil: en dark los solid emiten glow y los outline/soft un borde luminoso.
export const variantColorClasses: Record<DuiVariant, Record<DuiColor, string>> = {
  solid: {
    neutral: 'dk:bg-neutral-900 dk:text-white dk:shadow-sm dk:hover:bg-neutral-700 dk:active:bg-neutral-950 dk:dark:bg-neutral-100 dk:dark:text-neutral-950 dk:dark:hover:bg-white dk:dark:active:bg-neutral-200 dk:dark:hover:shadow-glow-neutral',
    primary: 'dk:bg-primary-600 dk:text-white dk:shadow-sm dk:inset-shadow-[0_1px_0_rgb(255_255_255/0.18)] dk:hover:bg-primary-500 dk:active:bg-primary-700 dk:dark:bg-primary-500 dk:dark:hover:bg-primary-400 dk:dark:active:bg-primary-600 dk:dark:shadow-glow-primary',
    secondary: 'dk:bg-secondary-600 dk:text-white dk:shadow-sm dk:inset-shadow-[0_1px_0_rgb(255_255_255/0.18)] dk:hover:bg-secondary-500 dk:active:bg-secondary-700 dk:dark:bg-secondary-500 dk:dark:hover:bg-secondary-400 dk:dark:active:bg-secondary-600 dk:dark:shadow-glow-secondary',
    success: 'dk:bg-success-600 dk:text-white dk:shadow-sm dk:inset-shadow-[0_1px_0_rgb(255_255_255/0.18)] dk:hover:bg-success-500 dk:active:bg-success-700 dk:dark:bg-success-500 dk:dark:text-neutral-950 dk:dark:hover:bg-success-400 dk:dark:active:bg-success-600 dk:dark:shadow-glow-success',
    warning: 'dk:bg-warning-400 dk:text-neutral-950 dk:shadow-sm dk:inset-shadow-[0_1px_0_rgb(255_255_255/0.3)] dk:hover:bg-warning-300 dk:active:bg-warning-500 dk:dark:bg-warning-400 dk:dark:hover:bg-warning-300 dk:dark:active:bg-warning-500 dk:dark:shadow-glow-warning',
    danger: 'dk:bg-danger-600 dk:text-white dk:shadow-sm dk:inset-shadow-[0_1px_0_rgb(255_255_255/0.18)] dk:hover:bg-danger-500 dk:active:bg-danger-700 dk:dark:bg-danger-500 dk:dark:hover:bg-danger-400 dk:dark:active:bg-danger-600 dk:dark:shadow-glow-danger',
  },
  soft: {
    neutral: 'dk:bg-neutral-100 dk:text-neutral-800 dk:hover:bg-neutral-200 dk:dark:bg-white/5 dk:dark:text-neutral-200 dk:dark:ring-1 dk:dark:ring-inset dk:dark:ring-white/10 dk:dark:hover:bg-white/10',
    primary: 'dk:bg-primary-50 dk:text-primary-700 dk:hover:bg-primary-100 dk:dark:bg-primary-500/15 dk:dark:text-primary-300 dk:dark:ring-1 dk:dark:ring-inset dk:dark:ring-primary-400/25 dk:dark:hover:bg-primary-500/25',
    secondary: 'dk:bg-secondary-50 dk:text-secondary-700 dk:hover:bg-secondary-100 dk:dark:bg-secondary-500/15 dk:dark:text-secondary-300 dk:dark:ring-1 dk:dark:ring-inset dk:dark:ring-secondary-400/25 dk:dark:hover:bg-secondary-500/25',
    success: 'dk:bg-success-50 dk:text-success-700 dk:hover:bg-success-100 dk:dark:bg-success-500/15 dk:dark:text-success-300 dk:dark:ring-1 dk:dark:ring-inset dk:dark:ring-success-400/25 dk:dark:hover:bg-success-500/25',
    warning: 'dk:bg-warning-50 dk:text-warning-800 dk:hover:bg-warning-100 dk:dark:bg-warning-500/15 dk:dark:text-warning-300 dk:dark:ring-1 dk:dark:ring-inset dk:dark:ring-warning-400/25 dk:dark:hover:bg-warning-500/25',
    danger: 'dk:bg-danger-50 dk:text-danger-700 dk:hover:bg-danger-100 dk:dark:bg-danger-500/15 dk:dark:text-danger-300 dk:dark:ring-1 dk:dark:ring-inset dk:dark:ring-danger-400/25 dk:dark:hover:bg-danger-500/25',
  },
  outline: {
    neutral: 'dk:border dk:border-neutral-300 dk:text-neutral-800 dk:hover:bg-neutral-50 dk:hover:border-neutral-400 dk:dark:border-white/15 dk:dark:text-neutral-200 dk:dark:hover:bg-white/5 dk:dark:hover:border-white/25',
    primary: 'dk:border dk:border-primary-500 dk:text-primary-700 dk:hover:bg-primary-50 dk:dark:border-primary-400/70 dk:dark:text-primary-300 dk:dark:hover:bg-primary-500/10 dk:dark:hover:border-primary-400 dk:dark:hover:shadow-glow-primary',
    secondary: 'dk:border dk:border-secondary-500 dk:text-secondary-700 dk:hover:bg-secondary-50 dk:dark:border-secondary-400/70 dk:dark:text-secondary-300 dk:dark:hover:bg-secondary-500/10 dk:dark:hover:border-secondary-400 dk:dark:hover:shadow-glow-secondary',
    success: 'dk:border dk:border-success-500 dk:text-success-700 dk:hover:bg-success-50 dk:dark:border-success-400/70 dk:dark:text-success-300 dk:dark:hover:bg-success-500/10 dk:dark:hover:border-success-400 dk:dark:hover:shadow-glow-success',
    warning: 'dk:border dk:border-warning-500 dk:text-warning-700 dk:hover:bg-warning-50 dk:dark:border-warning-400/70 dk:dark:text-warning-300 dk:dark:hover:bg-warning-500/10 dk:dark:hover:border-warning-400 dk:dark:hover:shadow-glow-warning',
    danger: 'dk:border dk:border-danger-500 dk:text-danger-700 dk:hover:bg-danger-50 dk:dark:border-danger-400/70 dk:dark:text-danger-300 dk:dark:hover:bg-danger-500/10 dk:dark:hover:border-danger-400 dk:dark:hover:shadow-glow-danger',
  },
  ghost: {
    neutral: 'dk:text-neutral-700 dk:hover:bg-neutral-100 dk:dark:text-neutral-200 dk:dark:hover:bg-white/5',
    primary: 'dk:text-primary-700 dk:hover:bg-primary-50 dk:dark:text-primary-300 dk:dark:hover:bg-primary-500/10',
    secondary: 'dk:text-secondary-700 dk:hover:bg-secondary-50 dk:dark:text-secondary-300 dk:dark:hover:bg-secondary-500/10',
    success: 'dk:text-success-700 dk:hover:bg-success-50 dk:dark:text-success-300 dk:dark:hover:bg-success-500/10',
    warning: 'dk:text-warning-700 dk:hover:bg-warning-50 dk:dark:text-warning-300 dk:dark:hover:bg-warning-500/10',
    danger: 'dk:text-danger-700 dk:hover:bg-danger-50 dk:dark:text-danger-300 dk:dark:hover:bg-danger-500/10',
  },
}

// --- Colores de texto puro (íconos, enlaces, estados activos) -------------
export const textColorClasses: Record<DuiColor, string> = {
  neutral: 'dk:text-neutral-600 dk:dark:text-neutral-400',
  primary: 'dk:text-primary-600 dk:dark:text-primary-400',
  secondary: 'dk:text-secondary-600 dk:dark:text-secondary-400',
  success: 'dk:text-success-600 dk:dark:text-success-400',
  warning: 'dk:text-warning-600 dk:dark:text-warning-400',
  danger: 'dk:text-danger-600 dk:dark:text-danger-400',
}

// --- Color de "dot" para badges/status ------------------------------------
// En dark el punto brilla (glow) como un LED.
export const dotColorClasses: Record<DuiColor, string> = {
  neutral: 'dk:bg-neutral-500 dk:dark:bg-neutral-400',
  primary: 'dk:bg-primary-500 dk:dark:bg-primary-400 dk:dark:shadow-[0_0_8px_var(--dk-color-primary-400)]',
  secondary: 'dk:bg-secondary-500 dk:dark:bg-secondary-400 dk:dark:shadow-[0_0_8px_var(--dk-color-secondary-400)]',
  success: 'dk:bg-success-500 dk:dark:bg-success-400 dk:dark:shadow-[0_0_8px_var(--dk-color-success-400)]',
  warning: 'dk:bg-warning-500 dk:dark:bg-warning-400 dk:dark:shadow-[0_0_8px_var(--dk-color-warning-400)]',
  danger: 'dk:bg-danger-500 dk:dark:bg-danger-400 dk:dark:shadow-[0_0_8px_var(--dk-color-danger-400)]',
}


// --- Selección de esquinas (prop `rounded` retrocompatible) ---------------
// 'all'|'top'|'bottom'|'left'|'right'|'none' controlan QUÉ esquinas se redondean.
export const roundedCornerClasses: Record<DuiRounded, string> = {
  all: 'dk:rounded-lg',
  top: 'dk:rounded-t-lg',
  bottom: 'dk:rounded-b-lg',
  left: 'dk:rounded-l-lg',
  right: 'dk:rounded-r-lg',
  none: 'dk:rounded-none',
}


// --- Base compartida de campos de formulario (input, textarea, select) ----
export const fieldBaseClasses = [
  'dk:block dk:border dk:border-neutral-300 dk:bg-white dk:text-neutral-900 dk:shadow-xs',
  'dk:placeholder:text-neutral-400',
  'dk:transition-[color,background-color,border-color,box-shadow] dk:duration-150',
  'dk:hover:border-neutral-400',
  'dk:focus:border-primary-500 dk:focus:outline-none dk:focus:ring-4 dk:focus:ring-primary-500/15',
  'dk:disabled:opacity-60 dk:disabled:cursor-not-allowed dk:disabled:bg-neutral-50',
  'dk:dark:border-white/10 dk:dark:bg-neutral-900/60 dk:dark:text-neutral-100 dk:dark:placeholder:text-neutral-500',
  'dk:dark:hover:border-white/20',
  'dk:dark:focus:border-primary-400 dk:dark:focus:ring-primary-400/20 dk:dark:focus:shadow-glow-primary',
  'dk:dark:disabled:bg-white/5',
  'dk:dark:[color-scheme:dark]',
].join(' ')

// --- Normaliza tamaños legacy (s/m/l) a la escala unificada (sm/md/lg) -----
export function normalizeSize(size: string): DuiSize {
  const map: Record<string, DuiSize> = { s: 'sm', m: 'md', l: 'lg' }
  return map[size] ?? (size as DuiSize)
}


// --- Acento "checked" para elementos peer (checkbox, radio, switch) --------
export const peerCheckedAccent: Record<DuiColor, string> = {
  neutral: 'dk:peer-checked:bg-neutral-900 dk:peer-checked:border-neutral-900 dk:dark:peer-checked:bg-neutral-100 dk:dark:peer-checked:border-neutral-100',
  primary: 'dk:peer-checked:bg-primary-600 dk:peer-checked:border-primary-600 dk:dark:peer-checked:bg-primary-500 dk:dark:peer-checked:border-primary-500 dk:dark:peer-checked:shadow-glow-primary',
  secondary: 'dk:peer-checked:bg-secondary-600 dk:peer-checked:border-secondary-600 dk:dark:peer-checked:bg-secondary-500 dk:dark:peer-checked:border-secondary-500 dk:dark:peer-checked:shadow-glow-secondary',
  success: 'dk:peer-checked:bg-success-600 dk:peer-checked:border-success-600 dk:dark:peer-checked:bg-success-500 dk:dark:peer-checked:border-success-500 dk:dark:peer-checked:shadow-glow-success',
  warning: 'dk:peer-checked:bg-warning-500 dk:peer-checked:border-warning-500 dk:dark:peer-checked:bg-warning-400 dk:dark:peer-checked:border-warning-400 dk:dark:peer-checked:shadow-glow-warning',
  danger: 'dk:peer-checked:bg-danger-600 dk:peer-checked:border-danger-600 dk:dark:peer-checked:bg-danger-500 dk:dark:peer-checked:border-danger-500 dk:dark:peer-checked:shadow-glow-danger',
}

// --- Paneles flotantes (DuiModal, DuiDrawer) -------------------------------
// solid = superficie sólida; outline = borde de color; ghost = vidrio esmerilado.
// En dark los paneles de color mantienen la superficie navy y emiten un halo.
export const panelVariantClasses: Record<'solid' | 'outline' | 'ghost', { base: string } & Record<DuiColor, string>> = {
  solid: {
    base: 'dk:border dk:shadow-elevated dk:dark:shadow-elevated-dark',
    neutral: 'dk:bg-white dk:text-neutral-900 dk:border-neutral-200 dk:dark:bg-neutral-900 dk:dark:text-neutral-100 dk:dark:border-white/10',
    primary: 'dk:bg-primary-50 dk:text-primary-950 dk:border-primary-200 dk:dark:bg-neutral-900 dk:dark:text-neutral-100 dk:dark:border-primary-400/30 dk:dark:shadow-[0_0_60px_-20px_var(--dk-color-primary-500)]',
    secondary: 'dk:bg-secondary-50 dk:text-secondary-950 dk:border-secondary-200 dk:dark:bg-neutral-900 dk:dark:text-neutral-100 dk:dark:border-secondary-400/30 dk:dark:shadow-[0_0_60px_-20px_var(--dk-color-secondary-500)]',
    success: 'dk:bg-success-50 dk:text-success-950 dk:border-success-200 dk:dark:bg-neutral-900 dk:dark:text-neutral-100 dk:dark:border-success-400/30 dk:dark:shadow-[0_0_60px_-20px_var(--dk-color-success-500)]',
    warning: 'dk:bg-warning-50 dk:text-warning-950 dk:border-warning-200 dk:dark:bg-neutral-900 dk:dark:text-neutral-100 dk:dark:border-warning-400/30 dk:dark:shadow-[0_0_60px_-20px_var(--dk-color-warning-500)]',
    danger: 'dk:bg-danger-50 dk:text-danger-950 dk:border-danger-200 dk:dark:bg-neutral-900 dk:dark:text-neutral-100 dk:dark:border-danger-400/30 dk:dark:shadow-[0_0_60px_-20px_var(--dk-color-danger-500)]',
  },
  outline: {
    base: 'dk:border-2 dk:shadow-elevated dk:bg-white dk:dark:bg-neutral-900',
    neutral: 'dk:text-neutral-900 dk:border-neutral-300 dk:dark:text-neutral-100 dk:dark:border-white/20',
    primary: 'dk:text-neutral-900 dk:border-primary-500 dk:dark:text-neutral-100 dk:dark:border-primary-400/80 dk:dark:shadow-glow-primary',
    secondary: 'dk:text-neutral-900 dk:border-secondary-500 dk:dark:text-neutral-100 dk:dark:border-secondary-400/80 dk:dark:shadow-glow-secondary',
    success: 'dk:text-neutral-900 dk:border-success-500 dk:dark:text-neutral-100 dk:dark:border-success-400/80 dk:dark:shadow-glow-success',
    warning: 'dk:text-neutral-900 dk:border-warning-500 dk:dark:text-neutral-100 dk:dark:border-warning-400/80 dk:dark:shadow-glow-warning',
    danger: 'dk:text-neutral-900 dk:border-danger-500 dk:dark:text-neutral-100 dk:dark:border-danger-400/80 dk:dark:shadow-glow-danger',
  },
  ghost: {
    base: 'dk:border dk:shadow-elevated dk:backdrop-blur-xl dk:dark:shadow-elevated-dark',
    neutral: 'dk:bg-white/80 dk:text-neutral-900 dk:border-white/60 dk:dark:bg-neutral-900/70 dk:dark:text-neutral-100 dk:dark:border-white/10',
    primary: 'dk:bg-primary-50/80 dk:text-primary-950 dk:border-primary-200/70 dk:dark:bg-primary-950/60 dk:dark:text-primary-50 dk:dark:border-primary-400/20',
    secondary: 'dk:bg-secondary-50/80 dk:text-secondary-950 dk:border-secondary-200/70 dk:dark:bg-secondary-950/60 dk:dark:text-secondary-50 dk:dark:border-secondary-400/20',
    success: 'dk:bg-success-50/80 dk:text-success-950 dk:border-success-200/70 dk:dark:bg-success-950/60 dk:dark:text-success-50 dk:dark:border-success-400/20',
    warning: 'dk:bg-warning-50/80 dk:text-warning-950 dk:border-warning-200/70 dk:dark:bg-warning-950/60 dk:dark:text-warning-50 dk:dark:border-warning-400/20',
    danger: 'dk:bg-danger-50/80 dk:text-danger-950 dk:border-danger-200/70 dk:dark:bg-danger-950/60 dk:dark:text-danger-50 dk:dark:border-danger-400/20',
  },
}

// Botón de cierre (×) de modales, drawers y toasts
export const closeButtonClasses =
  'dk:inline-flex dk:h-8 dk:w-8 dk:shrink-0 dk:items-center dk:justify-center dk:rounded-lg dk:text-xl dk:leading-none dk:opacity-60 dk:transition dk:hover:opacity-100 dk:hover:bg-black/5 dk:dark:hover:bg-white/10 dk:cursor-pointer ' + focusRingClasses
