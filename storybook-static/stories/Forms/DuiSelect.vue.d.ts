declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    options: {
        type: () => Array<Record<string, any>>;
        default: () => never[];
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
    itemLabel: {
        type: StringConstructor;
        default: string;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    options: {
        type: () => Array<Record<string, any>>;
        default: () => never[];
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
    itemLabel: {
        type: StringConstructor;
        default: string;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    block: boolean;
    rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
    modelValue: string | number;
    placeholder: string;
    options: Record<string, any>[];
    itemLabel: string;
    itemValue: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
