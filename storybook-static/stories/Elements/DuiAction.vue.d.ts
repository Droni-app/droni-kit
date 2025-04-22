declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLAnchorElement;
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
    size: {
        type: () => "sm" | "md" | "lg";
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: undefined;
    };
    href: {
        type: StringConstructor;
        default: undefined;
    };
    target: {
        type: StringConstructor;
        default: undefined;
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
    size: {
        type: () => "sm" | "md" | "lg";
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: undefined;
    };
    href: {
        type: StringConstructor;
        default: undefined;
    };
    target: {
        type: StringConstructor;
        default: undefined;
    };
}>> & Readonly<{}>, {
    variant: "solid" | "outline" | "ghost";
    color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
    size: "sm" | "md" | "lg";
    loading: boolean;
    block: boolean;
    title: string;
    href: string;
    target: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLAnchorElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
