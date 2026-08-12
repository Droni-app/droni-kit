import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            modelValue: {
                type: BooleanConstructor;
                default: boolean;
            };
            label: {
                type: StringConstructor;
                default: string;
            };
            description: {
                type: StringConstructor;
                default: string;
            };
            labelPosition: {
                type: () => "left" | "right";
                default: string;
            };
            color: {
                type: () => "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
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
            showIcons: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onChange?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "update:modelValue": (value: boolean) => any;
            change: (value: boolean) => any;
        }, import('vue').PublicProps, {
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            disabled: boolean;
            block: boolean;
            label: string;
            modelValue: boolean;
            labelPosition: "left" | "right";
            description: string;
            showIcons: boolean;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            modelValue: {
                type: BooleanConstructor;
                default: boolean;
            };
            label: {
                type: StringConstructor;
                default: string;
            };
            description: {
                type: StringConstructor;
                default: string;
            };
            labelPosition: {
                type: () => "left" | "right";
                default: string;
            };
            color: {
                type: () => "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
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
            showIcons: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onChange?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, {
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            disabled: boolean;
            block: boolean;
            label: string;
            modelValue: boolean;
            labelPosition: "left" | "right";
            description: string;
            showIcons: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        description: {
            type: StringConstructor;
            default: string;
        };
        labelPosition: {
            type: () => "left" | "right";
            default: string;
        };
        color: {
            type: () => "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
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
        showIcons: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onChange?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: boolean) => any;
        change: (value: boolean) => any;
    }, string, {
        color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        size: "sm" | "md" | "lg";
        disabled: boolean;
        block: boolean;
        label: string;
        modelValue: boolean;
        labelPosition: "left" | "right";
        description: string;
        showIcons: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        modelValue: {
            control: {
                type: "boolean";
            };
            description: string;
        };
        label: {
            control: {
                type: "text";
            };
            description: string;
        };
        description: {
            control: {
                type: "text";
            };
            description: string;
        };
        labelPosition: {
            control: {
                type: "select";
            };
            options: string[];
            description: string;
        };
        color: {
            control: {
                type: "select";
            };
            options: string[];
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
        disabled: {
            control: {
                type: "boolean";
            };
            description: string;
        };
        showIcons: {
            control: {
                type: "boolean";
            };
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
export declare const Colors: Story;
export declare const Sizes: Story;
export declare const WithIcons: Story;
export declare const SettingsList: Story;
