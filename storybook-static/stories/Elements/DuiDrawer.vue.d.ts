export interface DuiDrawerProps {
    modelValue?: boolean;
    name?: string;
    position?: 'left' | 'right' | 'top' | 'bottom';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'solid' | 'outline' | 'ghost';
    color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    showClose?: boolean;
    closeOnBackdrop?: boolean;
    closeOnEsc?: boolean;
    persistent?: boolean;
    blurBackdrop?: boolean;
    zIndex?: number;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DuiDrawerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
    open: () => any;
    close: (source: "button" | "backdrop" | "escape") => any;
    backdrop: () => any;
    escape: () => any;
}, string, import('vue').PublicProps, Readonly<DuiDrawerProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onOpen?: (() => any) | undefined;
    onClose?: ((source: "button" | "backdrop" | "escape") => any) | undefined;
    onBackdrop?: (() => any) | undefined;
    onEscape?: (() => any) | undefined;
}>, {
    name: string;
    variant: "solid" | "outline" | "ghost";
    color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
    size: "sm" | "md" | "lg" | "xl";
    modelValue: boolean;
    showClose: boolean;
    closeOnBackdrop: boolean;
    closeOnEsc: boolean;
    persistent: boolean;
    blurBackdrop: boolean;
    zIndex: number;
    position: "left" | "right" | "top" | "bottom";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
