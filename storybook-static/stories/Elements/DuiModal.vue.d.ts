export interface DuiModalProps {
    modelValue?: boolean;
    title?: string;
    description?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    variant?: 'solid' | 'outline' | 'ghost';
    color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    rounded?: 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none';
    showClose?: boolean;
    closeOnBackdrop?: boolean;
    closeOnEsc?: boolean;
    persistent?: boolean;
    centered?: boolean;
    scrollable?: boolean;
    blurBackdrop?: boolean;
    zIndex?: number;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DuiModalProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
    open: () => any;
    close: (source: "button" | "backdrop" | "escape") => any;
    backdrop: () => any;
    escape: () => any;
}, string, import('vue').PublicProps, Readonly<DuiModalProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onOpen?: (() => any) | undefined;
    onClose?: ((source: "button" | "backdrop" | "escape") => any) | undefined;
    onBackdrop?: (() => any) | undefined;
    onEscape?: (() => any) | undefined;
}>, {
    variant: "solid" | "outline" | "ghost";
    color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
    size: "xs" | "sm" | "md" | "lg" | "xl" | "full";
    title: string;
    rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
    modelValue: boolean;
    description: string;
    showClose: boolean;
    closeOnBackdrop: boolean;
    closeOnEsc: boolean;
    persistent: boolean;
    centered: boolean;
    scrollable: boolean;
    blurBackdrop: boolean;
    zIndex: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
