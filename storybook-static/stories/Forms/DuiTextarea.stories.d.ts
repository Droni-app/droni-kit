import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
        block: boolean;
        rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
        modelValue: string;
        autoheight: boolean;
        resize: "none" | "both" | "horizontal" | "vertical";
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    tags: string[];
    argTypes: {
        modelValue: {
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
        autoheight: {
            control: {
                type: "boolean";
            };
        };
        resize: {
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
export declare const Sizes: Story;
export declare const ResizeOptions: Story;
export declare const AutoHeight: Story;
export declare const WithNativeAttributes: Story;
