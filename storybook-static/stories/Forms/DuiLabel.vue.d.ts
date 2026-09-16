declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLabelElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: undefined;
    };
    icon: {
        type: StringConstructor;
        default: undefined;
    };
    helpText: {
        type: StringConstructor;
        default: undefined;
    };
    error: {
        type: StringConstructor;
        default: undefined;
    };
    size: {
        type: () => "s" | "m" | "l";
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: undefined;
    };
    icon: {
        type: StringConstructor;
        default: undefined;
    };
    helpText: {
        type: StringConstructor;
        default: undefined;
    };
    error: {
        type: StringConstructor;
        default: undefined;
    };
    size: {
        type: () => "s" | "m" | "l";
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    size: "s" | "m" | "l";
    title: string;
    icon: string;
    helpText: string;
    error: string;
    required: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLLabelElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
