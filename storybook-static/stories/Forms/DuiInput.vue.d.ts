declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: () => "text" | "email" | "password" | "tel" | "url" | "search" | "date" | "datetime-local" | "month" | "week" | "time";
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
    pattern: {
        type: StringConstructor;
        default: undefined;
    };
    rounded: {
        type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: () => "text" | "email" | "password" | "tel" | "url" | "search" | "date" | "datetime-local" | "month" | "week" | "time";
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
    pattern: {
        type: StringConstructor;
        default: undefined;
    };
    rounded: {
        type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    type: "time" | "text" | "email" | "password" | "tel" | "url" | "search" | "date" | "datetime-local" | "month" | "week";
    disabled: boolean;
    block: boolean;
    rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
    label: string;
    pattern: string;
    modelValue: string;
    placeholder: string;
    name: string;
    id: string;
    required: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
