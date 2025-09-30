import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        type: {
            type: () => "text" | "email" | "password" | "tel" | "url" | "search" | "date" | "datetime-local" | "month" | "week" | "time" | "number";
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
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        rounded: {
            type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
            default: string;
        };
        min: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        max: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        step: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        autocomplete: {
            type: StringConstructor;
            default: undefined;
        };
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: string) => any;
    }, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        type: {
            type: () => "text" | "email" | "password" | "tel" | "url" | "search" | "date" | "datetime-local" | "month" | "week" | "time" | "number";
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
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        rounded: {
            type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
            default: string;
        };
        min: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        max: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        step: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        autocomplete: {
            type: StringConstructor;
            default: undefined;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        name: string;
        size: "sm" | "md" | "lg";
        type: "number" | "search" | "time" | "text" | "email" | "password" | "tel" | "url" | "date" | "datetime-local" | "month" | "week";
        disabled: boolean;
        block: boolean;
        rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
        label: string;
        pattern: string;
        modelValue: string | number;
        placeholder: string;
        id: string;
        required: boolean;
        readonly: boolean;
        min: string | number;
        max: string | number;
        step: string | number;
        autocomplete: string;
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
        readonly: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        min: {
            control: {
                type: "text";
            };
            defaultValue: undefined;
        };
        max: {
            control: {
                type: "text";
            };
            defaultValue: undefined;
        };
        step: {
            control: {
                type: "text";
            };
            defaultValue: undefined;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
