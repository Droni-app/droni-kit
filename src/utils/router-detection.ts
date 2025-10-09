/**
 * Utility for router component handling with explicit framework selection
 */

import { getCurrentInstance } from 'vue'

/**
 * Detects if Vue Router is available (fallback detection)
 */
function hasVueRouterAvailable(): boolean {
  try {
    const instance = getCurrentInstance()
    const app = instance?.appContext.app

    if (app) {
      return !!(
        app.config.globalProperties.$router || 
        app.config.globalProperties.$route ||
        app.component('RouterLink')
      )
    }

    // Check for global Vue Router
    if (typeof window !== 'undefined') {
      return !!((window as any).VueRouter)
    }

    return false
  } catch {
    return false
  }
}

/**
 * Gets the appropriate component type for routing with explicit framework selection
 * @param to - The route destination
 * @param nuxt - Explicitly indicate if this is a Nuxt project
 * @returns The component name as string for dynamic component usage
 */
export function getRouterComponentType(to?: string | object, nuxt: boolean = false): string {
  if (!to) return 'button'
  
  if (nuxt) return 'NuxtLink'
  if (hasVueRouterAvailable()) return 'RouterLink'
  
  return 'a'
}

/**
 * Gets the appropriate props for the router component
 * @param to - The route destination
 * @param componentType - The component type returned by getRouterComponentType
 * @param additionalProps - Any additional props to merge
 */
export function getRouterComponentProps(
  to: string | object | undefined, 
  componentType: string,
  additionalProps: Record<string, any> = {}
): Record<string, any> {
  const baseProps = { ...additionalProps }
  
  if (componentType === 'a') {
    baseProps.href = typeof to === 'string' ? to : '#'
    baseProps.role = 'button'
  } else if (componentType !== 'button' && componentType !== 'span') {
    baseProps.to = to
  }
  
  return baseProps
}