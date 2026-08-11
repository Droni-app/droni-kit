import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            title: {
                type: StringConstructor;
                default: undefined;
            };
            icon: {
                type: StringConstructor;
                default: undefined;
            };
            helpText: {
                type: StringConstructor;
                default: undefined;
            };
            error: {
                type: StringConstructor;
                default: undefined;
            };
            size: {
                type: () => "s" | "m" | "l";
                default: string;
            };
            required: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            size: "s" | "m" | "l";
            title: string;
            error: string;
            icon: string;
            helpText: string;
            required: boolean;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLLabelElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            title: {
                type: StringConstructor;
                default: undefined;
            };
            icon: {
                type: StringConstructor;
                default: undefined;
            };
            helpText: {
                type: StringConstructor;
                default: undefined;
            };
            error: {
                type: StringConstructor;
                default: undefined;
            };
            size: {
                type: () => "s" | "m" | "l";
                default: string;
            };
            required: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, {
            size: "s" | "m" | "l";
            title: string;
            error: string;
            icon: string;
            helpText: string;
            required: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        title: {
            type: StringConstructor;
            default: undefined;
        };
        icon: {
            type: StringConstructor;
            default: undefined;
        };
        helpText: {
            type: StringConstructor;
            default: undefined;
        };
        error: {
            type: StringConstructor;
            default: undefined;
        };
        size: {
            type: () => "s" | "m" | "l";
            default: string;
        };
        required: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        size: "s" | "m" | "l";
        title: string;
        error: string;
        icon: string;
        helpText: string;
        required: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        title: {
            control: {
                type: "text";
            };
        };
        icon: {
            control: {
                type: "text";
            };
        };
        helpText: {
            control: {
                type: "text";
            };
        };
        error: {
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
        required: {
            control: {
                type: "boolean";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithError: Story;
export declare const Sizes: Story;
export declare const WithSelect: Story;
export declare const WithTextarea: Story;
export declare const WithoutIcon: Story;
export declare const MinimalLabel: Story;
export declare const DarkMode: Story;
