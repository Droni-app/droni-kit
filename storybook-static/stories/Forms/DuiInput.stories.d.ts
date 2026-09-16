import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
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
            type: (StringConstructor | NumberConstructor)[];
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
    tags: string[];
    argTypes: {
        modelValue: {
            control: {
                type: "text";
            };
            description: string;
        };
        size: {
            control: {
                type: "select";
            };
            options: string[];
            description: string;
        };
        block: {
            control: {
                type: "boolean";
            };
            description: string;
        };
        rounded: {
            control: {
                type: "select";
            };
            options: string[];
            description: string;
        };
    };
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Sizes: Story;
export declare const InputTypes: Story;
export declare const States: Story;
export declare const RoundedVariations: Story;
export declare const FormExample: Story;
