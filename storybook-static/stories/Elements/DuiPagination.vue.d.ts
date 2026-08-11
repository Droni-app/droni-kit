export interface DuiPaginationProps {
    modelValue: number;
    total: number;
    perPage?: number;
    siblingCount?: number;
    showBoundary?: boolean;
    color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    variant?: 'solid' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'full' | 'md' | 'none';
    showLabels?: boolean;
    prevLabel?: string;
    nextLabel?: string;
    ariaLabel?: string;
}
declare const _default: import('vue').DefineComponent<DuiPaginationProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (page: number) => any;
    change: (page: number) => any;
}, string, import('vue').PublicProps, Readonly<DuiPaginationProps> & Readonly<{
    "onUpdate:modelValue"?: ((page: number) => any) | undefined;
    onChange?: ((page: number) => any) | undefined;
}>, {
    variant: "solid" | "outline" | "ghost";
    color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
    size: "sm" | "md" | "lg";
    rounded: "full" | "md" | "none";
    ariaLabel: string;
    perPage: number;
    siblingCount: number;
    showBoundary: boolean;
    showLabels: boolean;
    prevLabel: string;
    nextLabel: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
