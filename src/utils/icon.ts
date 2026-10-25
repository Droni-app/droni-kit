/**
 * Determina si el valor de una prop `icon` es un listado de clases CSS
 * (p. ej. `'mdi mdi-view-dashboard-outline'`) en lugar de texto/emoji (`'📊'`).
 * Las clases se renderizan como `<i :class="icon">`; el resto como texto.
 */
export function isIconClass(icon: string | undefined | null): icon is string {
  return !!icon && /^\s*-?[A-Za-z_][\w:-]*(\s+-?[A-Za-z_][\w:-]*)*\s*$/.test(icon)
}
