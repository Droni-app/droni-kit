export interface DuiDropdownItemProps {
    label?: string;
    icon?: string;
    href?: string;
    target?: string;
    disabled?: boolean;
    danger?: boolean;
    size?: 'sm' | 'md' | 'lg';
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
        default?(_: {}): any;
        trailing?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DuiDropdownItemProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<DuiDropdownItemProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    href: string;
    danger: boolean;
    size: "sm" | "md" | "lg";
    disabled: boolean;
    label: string;
    target: string;
    icon: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
