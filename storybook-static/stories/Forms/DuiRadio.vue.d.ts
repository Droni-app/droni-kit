export interface DuiRadioOption {
    label: string;
    value: string;
    description?: string;
    disabled?: boolean;
}
export interface DuiRadioProps {
    modelValue?: string;
    options: DuiRadioOption[];
    name?: string;
    groupLabel?: string;
    color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    orientation?: 'vertical' | 'horizontal';
    block?: boolean;
    disabled?: boolean;
}
declare const _default: import('vue').DefineComponent<DuiRadioProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
    change: (value: string) => any;
}, string, import('vue').PublicProps, Readonly<DuiRadioProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
}>, {
    name: string;
    color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
    size: "sm" | "md" | "lg";
    disabled: boolean;
    block: boolean;
    modelValue: string;
    groupLabel: string;
    orientation: "vertical" | "horizontal";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
