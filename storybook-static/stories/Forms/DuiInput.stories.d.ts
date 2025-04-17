import { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
        label: string;
        pattern: string;
        modelValue: string;
        placeholder: string;
        name: string;
        id: string;
        required: boolean;
        rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
    tags: string[];
    argTypes: {
        type: {
            control: {
                type: "select";
            };
            options: string[];
            defaultValue: string;
        };
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
        pattern: {
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
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
