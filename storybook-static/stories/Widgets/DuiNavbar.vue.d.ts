export interface NavbarItem {
    label: string;
    to?: string | object;
    icon?: string;
    active?: boolean;
    children?: NavbarItem[];
}
export interface DuiNavbarProps {
    items?: NavbarItem[];
    size?: 's' | 'm' | 'l';
    itemsAlignment?: 'left' | 'center' | 'right';
    underlineColor?: 'neutral' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        brand?(_: {}): any;
        actions?(_: {}): any;
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DuiNavbarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DuiNavbarProps> & Readonly<{}>, {
    size: "s" | "m" | "l";
    items: NavbarItem[];
    itemsAlignment: "left" | "center" | "right";
    underlineColor: "neutral" | "primary" | "secondary" | "success" | "danger" | "warning";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
