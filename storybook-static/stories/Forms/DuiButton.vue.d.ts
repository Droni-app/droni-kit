export interface RouteLocationRaw {
    name?: string;
    path?: string;
    params?: Record<string, any>;
    query?: Record<string, any>;
    hash?: string;
    [key: string]: any;
}
export type RouteTo = string | RouteLocationRaw;
export interface DuiButtonProps {
    variant?: 'solid' | 'outline' | 'ghost';
    color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;
    title?: string;
    rounded?: 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none';
    to?: RouteTo;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DuiButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DuiButtonProps> & Readonly<{}>, {
    variant: "solid" | "outline" | "ghost";
    color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
    size: "sm" | "md" | "lg";
    type: "button" | "submit" | "reset";
    disabled: boolean;
    loading: boolean;
    block: boolean;
    title: string;
    rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
    to: RouteTo;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
