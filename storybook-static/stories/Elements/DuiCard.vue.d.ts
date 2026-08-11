export interface DuiCardProps {
    size?: 's' | 'm' | 'l';
    image?: string;
    title?: string;
    subtitle?: string;
    to?: string | object;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DuiCardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DuiCardProps> & Readonly<{}>, {
    to: string | object;
    size: "s" | "m" | "l";
    title: string;
    image: string;
    subtitle: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
