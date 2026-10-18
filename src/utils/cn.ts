export type ClassValue = string | number | false | null | undefined

/**
 * Combina condicionalmente clases CSS, ignorando valores falsy.
 * Reemplaza la concatenación manual de strings en todos los componentes.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ')
}

