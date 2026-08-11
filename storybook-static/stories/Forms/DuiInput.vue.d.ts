declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
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
    rounded: {
        type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
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
    rounded: {
        type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    block: boolean;
    rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
    modelValue: string | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
