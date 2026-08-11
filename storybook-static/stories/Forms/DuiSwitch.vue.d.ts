declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    labelPosition: {
        type: () => "left" | "right";
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
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIcons: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
    change: (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    labelPosition: {
        type: () => "left" | "right";
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
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIcons: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onChange?: ((value: boolean) => any) | undefined;
}>, {
    color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
    size: "sm" | "md" | "lg";
    disabled: boolean;
    block: boolean;
    label: string;
    modelValue: boolean;
    description: string;
    labelPosition: "left" | "right";
    showIcons: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
