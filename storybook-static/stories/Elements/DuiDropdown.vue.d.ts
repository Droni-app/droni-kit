export interface DuiDropdownProps {
    modelValue?: boolean;
    placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'bottom' | 'top';
    variant?: 'solid' | 'outline' | 'ghost';
    color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'all' | 'none' | 'sm';
    minWidth?: string;
    ariaLabel?: string;
    disabled?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
        wrapperRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DuiDropdownProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
    open: () => any;
    close: () => any;
}, string, import('vue').PublicProps, Readonly<DuiDropdownProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onOpen?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    variant: "solid" | "outline" | "ghost";
    color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
    size: "sm" | "md" | "lg";
    disabled: boolean;
    rounded: "all" | "none" | "sm";
    modelValue: boolean;
    placement: "bottom-start" | "bottom-end" | "top-start" | "top-end" | "bottom" | "top";
    minWidth: string;
    ariaLabel: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    wrapperRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
