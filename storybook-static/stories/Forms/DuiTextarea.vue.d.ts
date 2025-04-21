declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
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
    placeholder: {
        type: StringConstructor;
        default: undefined;
    };
    name: {
        type: StringConstructor;
        default: undefined;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    rounded: {
        type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
        default: string;
    };
    autoheight: {
        type: BooleanConstructor;
        default: boolean;
    };
    resize: {
        type: () => "none" | "both" | "horizontal" | "vertical";
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
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
    placeholder: {
        type: StringConstructor;
        default: undefined;
    };
    name: {
        type: StringConstructor;
        default: undefined;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    rounded: {
        type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
        default: string;
    };
    autoheight: {
        type: BooleanConstructor;
        default: boolean;
    };
    resize: {
        type: () => "none" | "both" | "horizontal" | "vertical";
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    disabled: boolean;
    block: boolean;
    label: string;
    modelValue: string;
    placeholder: string;
    name: string;
    id: string;
    required: boolean;
    rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
    autoheight: boolean;
    resize: "none" | "both" | "horizontal" | "vertical";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
