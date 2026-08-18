export interface DuiButtonProps {
    label: string;
    checkLabel: string;
    confirmLabel: string;
    variant?: 'solid' | 'outline' | 'ghost';
    color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
}
declare const _default: import('vue').DefineComponent<DuiButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    confirmed: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<DuiButtonProps> & Readonly<{
    onConfirmed?: ((...args: any[]) => any) | undefined;
}>, {
    variant: "solid" | "outline" | "ghost";
    color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
    size: "sm" | "md" | "lg";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
