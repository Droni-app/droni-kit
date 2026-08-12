import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
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
            type: (StringConstructor | NumberConstructor)[];
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
        itemLabel: {
            control: {
                type: "text";
            };
        };
        itemValue: {
            control: {
                type: "text";
            };
        };
        placeholder: {
            control: {
                type: "text";
            };
        };
        options: {
            control: {
                type: "object";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Sizes: Story;
export declare const WithNativeAttributes: Story;
