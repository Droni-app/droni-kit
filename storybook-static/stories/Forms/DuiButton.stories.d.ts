import { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            variant: {
                type: () => "solid" | "outline" | "ghost";
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
            type: {
                type: () => "button" | "submit" | "reset";
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            block: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            variant: "solid" | "outline" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            type: "button" | "submit" | "reset";
            disabled: boolean;
            loading: boolean;
            block: boolean;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLButtonElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            variant: {
                type: () => "solid" | "outline" | "ghost";
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
            type: {
                type: () => "button" | "submit" | "reset";
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            block: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, {
            variant: "solid" | "outline" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            type: "button" | "submit" | "reset";
            disabled: boolean;
            loading: boolean;
            block: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        variant: {
            type: () => "solid" | "outline" | "ghost";
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
        type: {
            type: () => "button" | "submit" | "reset";
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        variant: "solid" | "outline" | "ghost";
        color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        size: "sm" | "md" | "lg";
        type: "button" | "submit" | "reset";
        disabled: boolean;
        loading: boolean;
        block: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        default: {
            control: {
                type: "text";
            };
            defaultValue: string;
        };
        size: {
            control: {
                type: "select";
            };
            options: string[];
            defaultValue: string;
        };
        variant: {
            control: {
                type: "select";
            };
            options: string[];
            defaultValue: string;
        };
        color: {
            control: {
                type: "select";
            };
            options: string[];
            defaultValue: string;
        };
        loading: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        disabled: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        block: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        type: {
            control: {
                type: "select";
            };
            options: string[];
            defaultValue: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
