/**
 * Utility for router component handling with explicit framework selection
 */
/**
 * Gets the appropriate component type for routing
 * @param to - The route destination
 * @returns The component name as string for dynamic component usage
 */
export declare function getRouterComponentType(to?: string | object): string;
/**
 * Gets the appropriate props for the router component
 * @param to - The route destination
 * @param componentType - The component type returned by getRouterComponentType
 * @param additionalProps - Any additional props to merge
 */
export declare function getRouterComponentProps(to: string | object | undefined, componentType: string, additionalProps?: Record<string, any>): Record<string, any>;
