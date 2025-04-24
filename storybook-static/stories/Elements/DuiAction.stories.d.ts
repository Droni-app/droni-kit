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
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            block: {
                type: BooleanConstructor;
                default: boolean;
            };
            title: {
                type: StringConstructor;
                default: undefined;
            };
            rounded: {
                type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
                default: string;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            variant: "solid" | "outline" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            loading: boolean;
            block: boolean;
            title: string;
            rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLSpanElement, import('vue').ComponentProvideOptions, {
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
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            block: {
                type: BooleanConstructor;
                default: boolean;
            };
            title: {
                type: StringConstructor;
                default: undefined;
            };
            rounded: {
                type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
                default: string;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, {
            variant: "solid" | "outline" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            loading: boolean;
            block: boolean;
            title: string;
            rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
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
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
        title: {
            type: StringConstructor;
            default: undefined;
        };
        rounded: {
            type: () => "all" | "top" | "bottom" | "left" | "right" | "none";
            default: string;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        variant: "solid" | "outline" | "ghost";
        color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        size: "sm" | "md" | "lg";
        loading: boolean;
        block: boolean;
        title: string;
        rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
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
        block: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        title: {
            control: {
                type: "text";
            };
            defaultValue: undefined;
        };
        rounded: {
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
