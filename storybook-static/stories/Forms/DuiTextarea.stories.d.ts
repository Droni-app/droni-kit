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
        readonly: {
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
        readonly: {
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
        name: string;
        size: "sm" | "md" | "lg";
        disabled: boolean;
        block: boolean;
        rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
        label: string;
        modelValue: string;
        placeholder: string;
        id: string;
        required: boolean;
        readonly: boolean;
        autoheight: boolean;
        resize: "none" | "both" | "horizontal" | "vertical";
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
    tags: string[];
    argTypes: {
        block: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        size: {
            control: {
                type: "select";
            };
            options: string[];
            defaultValue: string;
        };
        disabled: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        placeholder: {
            control: {
                type: "text";
            };
            defaultValue: undefined;
        };
        name: {
            control: {
                type: "text";
            };
            defaultValue: undefined;
        };
        required: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        label: {
            control: {
                type: "text";
            };
            defaultValue: undefined;
        };
        rounded: {
            constrol: {
                type: string;
            };
            options: string[];
            defaultValue: string;
        };
        autoheight: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        resize: {
            control: {
                type: "select";
            };
            options: string[];
            defaultValue: string;
        };
        readonly: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
