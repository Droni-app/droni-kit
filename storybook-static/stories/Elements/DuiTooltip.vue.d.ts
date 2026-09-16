export type TooltipVariant = 'solid' | 'outline';
export type TooltipColor = 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type TooltipSize = 'sm' | 'md' | 'lg';
export type TooltipRounded = 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none';
export type TooltipTrigger = 'hover' | 'click' | 'focus' | 'manual';
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
export interface DuiTooltipProps {
    modelValue?: boolean;
    text?: string;
    fallbackTriggerText?: string;
    trigger?: TooltipTrigger;
    placement?: TooltipPlacement;
    variant?: TooltipVariant;
    color?: TooltipColor;
    size?: TooltipSize;
    rounded?: TooltipRounded;
    disabled?: boolean;
    interactive?: boolean;
    arrow?: boolean;
    showDelay?: number;
    hideDelay?: number;
    offset?: number;
    zIndex?: number;
    flip?: boolean;
    viewportPadding?: number;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'full' | number | string;
    teleportTo?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
        default?(_: {}): any;
        content?(_: {}): any;
    };
    refs: {
        triggerRef: HTMLSpanElement;
        tooltipRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DuiTooltipProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
    open: (source: "click" | "focus" | "hover" | "manual") => any;
    close: (source: "click" | "focus" | "hover" | "manual" | "outside") => any;
}, string, import('vue').PublicProps, Readonly<DuiTooltipProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onOpen?: ((source: "click" | "focus" | "hover" | "manual") => any) | undefined;
    onClose?: ((source: "click" | "focus" | "hover" | "manual" | "outside") => any) | undefined;
}>, {
    variant: TooltipVariant;
    color: TooltipColor;
    size: TooltipSize;
    disabled: boolean;
    rounded: TooltipRounded;
    text: string;
    modelValue: boolean;
    zIndex: number;
    fallbackTriggerText: string;
    trigger: TooltipTrigger;
    placement: TooltipPlacement;
    interactive: boolean;
    arrow: boolean;
    showDelay: number;
    hideDelay: number;
    offset: number;
    flip: boolean;
    viewportPadding: number;
    maxWidth: "xs" | "sm" | "md" | "lg" | "full" | number | string;
    teleportTo: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    triggerRef: HTMLSpanElement;
    tooltipRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
