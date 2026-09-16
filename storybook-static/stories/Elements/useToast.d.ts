export type ToastColor = 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ToastPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
export interface ToastItem {
    id: string;
    title?: string;
    message: string;
    color: ToastColor;
    duration: number;
    closable: boolean;
    icon?: string;
}
export interface ToastOptions {
    title?: string;
    message: string;
    color?: ToastColor;
    duration?: number;
    closable?: boolean;
    icon?: string;
}
declare function add(options: ToastOptions): string;
declare function remove(id: string): void;
declare function clear(): void;
export declare function useToast(): {
    toasts: readonly {
        readonly id: string;
        readonly title?: string | undefined;
        readonly message: string;
        readonly color: ToastColor;
        readonly duration: number;
        readonly closable: boolean;
        readonly icon?: string | undefined;
    }[];
    add: typeof add;
    remove: typeof remove;
    clear: typeof clear;
    success: (message: string, options?: Omit<ToastOptions, "message" | "color">) => string;
    error: (message: string, options?: Omit<ToastOptions, "message" | "color">) => string;
    warning: (message: string, options?: Omit<ToastOptions, "message" | "color">) => string;
    info: (message: string, options?: Omit<ToastOptions, "message" | "color">) => string;
};
export {};
