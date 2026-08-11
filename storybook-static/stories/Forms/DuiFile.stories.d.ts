import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        modelValue: {
            type: StringConstructor;
            default: string;
        };
        explorerUrl: {
            type: StringConstructor;
            default: string;
        };
        uploadUrl: {
            type: StringConstructor;
            default: string;
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
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        select: (file: File) => any;
        "update:modelValue": (value: string) => any;
        "upload-start": (file: File) => any;
        "upload-success": (payload: {
            file: File;
            response: unknown;
            url: string;
        }) => any;
        "upload-error": (error: Error) => any;
        browse: () => any;
    }, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            type: StringConstructor;
            default: string;
        };
        explorerUrl: {
            type: StringConstructor;
            default: string;
        };
        uploadUrl: {
            type: StringConstructor;
            default: string;
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
    }>> & Readonly<{
        onSelect?: ((file: File) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        "onUpload-start"?: ((file: File) => any) | undefined;
        "onUpload-success"?: ((payload: {
            file: File;
            response: unknown;
            url: string;
        }) => any) | undefined;
        "onUpload-error"?: ((error: Error) => any) | undefined;
        onBrowse?: (() => any) | undefined;
    }>, {
        size: "sm" | "md" | "lg";
        block: boolean;
        rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
        modelValue: string;
        explorerUrl: string;
        uploadUrl: string;
        accept: string;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
        fileInputRef: HTMLInputElement;
    }, any>;
    tags: string[];
    argTypes: {
        modelValue: {
            control: {
                type: "text";
            };
        };
        explorerUrl: {
            control: {
                type: "text";
            };
        };
        uploadUrl: {
            control: {
                type: "text";
            };
        };
        accept: {
            control: {
                type: "text";
            };
        };
        size: {
            control: {
                type: "select";
            };
            options: string[];
        };
        block: {
            control: {
                type: "boolean";
            };
        };
        rounded: {
            control: {
                type: "select";
            };
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Compact: Story;
