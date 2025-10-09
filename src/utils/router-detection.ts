/**
 * Utility for detecting router environment in a SSR-safe way
 * This helps prevent hydration mismatches in Nuxt applications
 */

import { getCurrentInstance } from 'vue'

interface RouterDetection {
  hasNuxtRouter: boolean
  hasVueRouter: boolean
}

/**
 * Detects if we're in a Nuxt environment using SSR-safe methods
 * This function ensures consistent behavior between server and client
 */
export function detectRouterEnvironment(): RouterDetection {
  const instance = getCurrentInstance()
  const app = instance?.appContext.app

  // Primary detection: Check for Nuxt using import.meta
  // This is the most reliable way to detect Nuxt in both SSR and client
  const isNuxtEnvironment = (() => {
    try {
      // Check if we're in a Nuxt environment via import.meta
      if (typeof import.meta !== 'undefined' && import.meta.env) {
        // Nuxt sets specific environment variables
        if (import.meta.env.NUXT_ENV_CURRENT_ENV || 
            (import.meta as any).client !== undefined || 
            (import.meta as any).server !== undefined) {
          return true
        }
      }

      // Check for Nuxt app context (works in both SSR and client)
      if (app) {
        // Check if NuxtLink is globally registered (most reliable)
        const nuxtLinkComponent = app.component('NuxtLink')
        if (nuxtLinkComponent) {
          return true
        }

        // Check for Nuxt-specific global properties
        if (app.config.globalProperties.$nuxt ||
            app.config.globalProperties.nuxtApp ||
            app.config.globalProperties.$router?.app?.nuxt) {
          return true
        }
      }

      // Fallback: Check process.env only if available (Node.js environment)
      if (typeof process !== 'undefined' && process.env) {
        if (process.env.NUXT_ENV_CURRENT_ENV || 
            process.env.NUXT_PUBLIC_API_BASE ||
            process.env.__NUXT__) {
          return true
        }
      }

      // Last resort: Check global variables (but be careful with SSR)
      if (typeof window !== 'undefined') {
        // Only check window if we're definitely on the client
        return !!(
          (window as any).__NUXT__ ||
          (window as any).$nuxt ||
          (window as any).useNuxtApp
        )
      }

      return false
    } catch {
      return false
    }
  })()

  // Vue Router detection (simpler, usually works consistently)
  const isVueRouterEnvironment = (() => {
    try {
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
  })()

  return {
    hasNuxtRouter: isNuxtEnvironment,
    hasVueRouter: !isNuxtEnvironment && isVueRouterEnvironment
  }
}

/**
 * Gets the appropriate component type for routing
 * Returns the component name as string for dynamic component usage
 */
export function getRouterComponentType(to?: string | object): string {
  if (!to) return 'button'
  
  const { hasNuxtRouter, hasVueRouter } = detectRouterEnvironment()
  
  if (hasNuxtRouter) return 'NuxtLink'
  if (hasVueRouter) return 'RouterLink'
  
  return 'a'
}

/**
 * Gets the appropriate props for the router component
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