declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: () => string | null;
        default: null;
    };
    accept: {
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
    rounded: {
        type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
        default: string;
    };
    uploadBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    browserBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
    "open-browser": () => any;
    "upload-file": (file: File) => any;
    "open-file": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: () => string | null;
        default: null;
    };
    accept: {
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
    rounded: {
        type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
        default: string;
    };
    uploadBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    browserBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    "onOpen-browser"?: (() => any) | undefined;
    "onUpload-file"?: ((file: File) => any) | undefined;
    "onOpen-file"?: ((value: string) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    block: boolean;
    rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
    modelValue: string | null;
    accept: string;
    uploadBtn: boolean;
    browserBtn: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    fileInputRef: HTMLInputElement;
}, any>;
export default _default;
