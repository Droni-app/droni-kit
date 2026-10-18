// =============================================================================
// DroniKit v2 — Design tokens (single source of truth)
// Todos los componentes importan desde aquí en vez de hand-rollear sus mapas.
// Re-temear la librería = editar este archivo.
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
export const focusRingClasses =
  'dk:focus-visible:outline-none dk:focus-visible:ring-2 dk:focus-visible:ring-offset-2 dk:focus-visible:ring-indigo-500/50 dk:dark:focus-visible:ring-indigo-400/50 dk:dark:focus-visible:ring-offset-zinc-900'

// --- Variantes x colores ---------------------------------------------------
// Cada entrada es un string de clases completo (bg + text + border + hover + dark).
export const variantColorClasses: Record<DuiVariant, Record<DuiColor, string>> = {
  solid: {
    neutral: 'dk:bg-zinc-700 dk:text-white dk:hover:bg-zinc-600 dk:active:bg-zinc-800 dk:dark:bg-zinc-600 dk:dark:hover:bg-zinc-500 dk:dark:active:bg-zinc-700',
    primary: 'dk:bg-indigo-600 dk:text-white dk:hover:bg-indigo-500 dk:active:bg-indigo-700 dk:dark:bg-indigo-500 dk:dark:hover:bg-indigo-400 dk:dark:active:bg-indigo-600',
    secondary: 'dk:bg-pink-600 dk:text-white dk:hover:bg-pink-500 dk:active:bg-pink-700 dk:dark:bg-pink-500 dk:dark:hover:bg-pink-400 dk:dark:active:bg-pink-600',
    success: 'dk:bg-emerald-600 dk:text-white dk:hover:bg-emerald-500 dk:active:bg-emerald-700 dk:dark:bg-emerald-500 dk:dark:hover:bg-emerald-400 dk:dark:active:bg-emerald-600',
    warning: 'dk:bg-amber-500 dk:text-zinc-900 dk:hover:bg-amber-400 dk:active:bg-amber-600 dk:dark:bg-amber-400 dk:dark:hover:bg-amber-300 dk:dark:active:bg-amber-500',
    danger: 'dk:bg-rose-600 dk:text-white dk:hover:bg-rose-500 dk:active:bg-rose-700 dk:dark:bg-rose-500 dk:dark:hover:bg-rose-400 dk:dark:active:bg-rose-600',
  },
  soft: {
    neutral: 'dk:bg-zinc-100 dk:text-zinc-800 dk:hover:bg-zinc-200 dk:dark:bg-zinc-800 dk:dark:text-zinc-200 dk:dark:hover:bg-zinc-700',
    primary: 'dk:bg-indigo-50 dk:text-indigo-700 dk:hover:bg-indigo-100 dk:dark:bg-indigo-500/15 dk:dark:text-indigo-300 dk:dark:hover:bg-indigo-500/25',
    secondary: 'dk:bg-pink-50 dk:text-pink-700 dk:hover:bg-pink-100 dk:dark:bg-pink-500/15 dk:dark:text-pink-300 dk:dark:hover:bg-pink-500/25',
    success: 'dk:bg-emerald-50 dk:text-emerald-700 dk:hover:bg-emerald-100 dk:dark:bg-emerald-500/15 dk:dark:text-emerald-300 dk:dark:hover:bg-emerald-500/25',
    warning: 'dk:bg-amber-50 dk:text-amber-700 dk:hover:bg-amber-100 dk:dark:bg-amber-500/15 dk:dark:text-amber-300 dk:dark:hover:bg-amber-500/25',
    danger: 'dk:bg-rose-50 dk:text-rose-700 dk:hover:bg-rose-100 dk:dark:bg-rose-500/15 dk:dark:text-rose-300 dk:dark:hover:bg-rose-500/25',
  },
  outline: {
    neutral: 'dk:border dk:border-zinc-300 dk:text-zinc-800 dk:hover:bg-zinc-100 dk:dark:border-zinc-600 dk:dark:text-zinc-200 dk:dark:hover:bg-zinc-800',
    primary: 'dk:border dk:border-indigo-500 dk:text-indigo-600 dk:hover:bg-indigo-50 dk:dark:border-indigo-400 dk:dark:text-indigo-300 dk:dark:hover:bg-indigo-500/10',
    secondary: 'dk:border dk:border-pink-500 dk:text-pink-600 dk:hover:bg-pink-50 dk:dark:border-pink-400 dk:dark:text-pink-300 dk:dark:hover:bg-pink-500/10',
    success: 'dk:border dk:border-emerald-500 dk:text-emerald-600 dk:hover:bg-emerald-50 dk:dark:border-emerald-400 dk:dark:text-emerald-300 dk:dark:hover:bg-emerald-500/10',
    warning: 'dk:border dk:border-amber-500 dk:text-amber-600 dk:hover:bg-amber-50 dk:dark:border-amber-400 dk:dark:text-amber-300 dk:dark:hover:bg-amber-500/10',
    danger: 'dk:border dk:border-rose-500 dk:text-rose-600 dk:hover:bg-rose-50 dk:dark:border-rose-400 dk:dark:text-rose-300 dk:dark:hover:bg-rose-500/10',
  },
  ghost: {
    neutral: 'dk:text-zinc-700 dk:hover:bg-zinc-100 dk:dark:text-zinc-200 dk:dark:hover:bg-zinc-800',
    primary: 'dk:text-indigo-600 dk:hover:bg-indigo-50 dk:dark:text-indigo-300 dk:dark:hover:bg-indigo-500/10',
    secondary: 'dk:text-pink-600 dk:hover:bg-pink-50 dk:dark:text-pink-300 dk:dark:hover:bg-pink-500/10',
    success: 'dk:text-emerald-600 dk:hover:bg-emerald-50 dk:dark:text-emerald-300 dk:dark:hover:bg-emerald-500/10',
    warning: 'dk:text-amber-600 dk:hover:bg-amber-50 dk:dark:text-amber-300 dk:dark:hover:bg-amber-500/10',
    danger: 'dk:text-rose-600 dk:hover:bg-rose-50 dk:dark:text-rose-300 dk:dark:hover:bg-rose-500/10',
  },
}

// --- Colores de texto puro (íconos, enlaces, estados activos) -------------
export const textColorClasses: Record<DuiColor, string> = {
  neutral: 'dk:text-zinc-600 dk:dark:text-zinc-400',
  primary: 'dk:text-indigo-600 dk:dark:text-indigo-400',
  secondary: 'dk:text-pink-600 dk:dark:text-pink-400',
  success: 'dk:text-emerald-600 dk:dark:text-emerald-400',
  warning: 'dk:text-amber-600 dk:dark:text-amber-400',
  danger: 'dk:text-rose-600 dk:dark:text-rose-400',
}

// --- Color de "dot" para badges/status ------------------------------------
export const dotColorClasses: Record<DuiColor, string> = {
  neutral: 'dk:bg-zinc-500 dk:dark:bg-zinc-400',
  primary: 'dk:bg-indigo-500 dk:dark:bg-indigo-400',
  secondary: 'dk:bg-pink-500 dk:dark:bg-pink-400',
  success: 'dk:bg-emerald-500 dk:dark:bg-emerald-400',
  warning: 'dk:bg-amber-500 dk:dark:bg-amber-400',
  danger: 'dk:bg-rose-500 dk:dark:bg-rose-400',
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
  'dk:block dk:border dk:border-zinc-300 dk:bg-white dk:text-zinc-900',
  'dk:placeholder:text-zinc-400',
  'dk:transition-colors dk:duration-150',
  'dk:focus:border-indigo-500 dk:focus:outline-none dk:focus:ring-2 dk:focus:ring-indigo-500/20',
  'dk:disabled:opacity-60 dk:disabled:cursor-not-allowed',
  'dk:dark:border-zinc-600 dk:dark:bg-zinc-900 dk:dark:text-zinc-100 dk:dark:placeholder:text-zinc-500',
  'dk:dark:focus:border-indigo-400 dk:dark:focus:ring-indigo-400/20',
  'dk:dark:[color-scheme:dark]',
].join(' ')

// --- Normaliza tamaños legacy (s/m/l) a la escala unificada (sm/md/lg) -----
export function normalizeSize(size: string): DuiSize {
  const map: Record<string, DuiSize> = { s: 'sm', m: 'md', l: 'lg' }
  return map[size] ?? (size as DuiSize)
}


// --- Acento "checked" para elementos peer (checkbox, radio, switch) --------
export const peerCheckedAccent: Record<DuiColor, string> = {
  neutral: 'dk:peer-checked:bg-zinc-600 dk:peer-checked:border-zinc-600 dk:dark:peer-checked:bg-zinc-500 dk:dark:peer-checked:border-zinc-500',
  primary: 'dk:peer-checked:bg-indigo-600 dk:peer-checked:border-indigo-600 dk:dark:peer-checked:bg-indigo-500 dk:dark:peer-checked:border-indigo-500',
  secondary: 'dk:peer-checked:bg-pink-600 dk:peer-checked:border-pink-600 dk:dark:peer-checked:bg-pink-500 dk:dark:peer-checked:border-pink-500',
  success: 'dk:peer-checked:bg-emerald-600 dk:peer-checked:border-emerald-600 dk:dark:peer-checked:bg-emerald-500 dk:dark:peer-checked:border-emerald-500',
  warning: 'dk:peer-checked:bg-amber-500 dk:peer-checked:border-amber-500 dk:dark:peer-checked:bg-amber-400 dk:dark:peer-checked:border-amber-400',
  danger: 'dk:peer-checked:bg-rose-600 dk:peer-checked:border-rose-600 dk:dark:peer-checked:bg-rose-500 dk:dark:peer-checked:border-rose-500',
}

