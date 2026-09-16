export interface DuiBadgeProps {
    label?: string;
    color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    variant?: 'solid' | 'soft' | 'outline';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    rounded?: 'full' | 'md' | 'none';
    dot?: boolean;
    dismissible?: boolean;
    href?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DuiBadgeProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    dismiss: () => any;
}, string, import('vue').PublicProps, Readonly<DuiBadgeProps> & Readonly<{
    onDismiss?: (() => any) | undefined;
}>, {
    href: string;
    variant: "solid" | "soft" | "outline";
    color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
    size: "xs" | "sm" | "md" | "lg";
    rounded: "full" | "md" | "none";
    label: string;
    dot: boolean;
    dismissible: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
