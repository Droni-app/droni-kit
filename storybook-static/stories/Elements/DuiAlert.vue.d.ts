declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    variant: {
        type: () => "solid" | "outline" | "ghost";
        default: string;
    };
    color: {
        type: () => "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        default: string;
    };
    rounded: {
        type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    variant: {
        type: () => "solid" | "outline" | "ghost";
        default: string;
    };
    color: {
        type: () => "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        default: string;
    };
    rounded: {
        type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
        default: string;
    };
}>> & Readonly<{}>, {
    variant: "solid" | "outline" | "ghost";
    color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
    rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
