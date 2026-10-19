// =============================================================================
// DroniKit v2 — Tipos compartidos
// =============================================================================

export interface RouteLocationRaw {
  name?: string
  path?: string
  params?: Record<string, any>
  query?: Record<string, any>
  hash?: string
  [key: string]: any
}

export type RouteTo = string | RouteLocationRaw

/** Selección de esquinas para la prop `rounded` (retrocompatible) */
export type DuiRounded = 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'

