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
            href: {
                type: StringConstructor;
                default: undefined;
            };
            target: {
                type: StringConstructor;
                default: undefined;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            variant: "solid" | "outline" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            loading: boolean;
            block: boolean;
            title: string;
            href: string;
            target: string;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLAnchorElement, import('vue').ComponentProvideOptions, {
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
            href: {
                type: StringConstructor;
                default: undefined;
            };
            target: {
                type: StringConstructor;
                default: undefined;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, {
            variant: "solid" | "outline" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            loading: boolean;
            block: boolean;
            title: string;
            href: string;
            target: string;
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
        href: {
            type: StringConstructor;
            default: undefined;
        };
        target: {
            type: StringConstructor;
            default: undefined;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        variant: "solid" | "outline" | "ghost";
        color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        size: "sm" | "md" | "lg";
        loading: boolean;
        block: boolean;
        title: string;
        href: string;
        target: string;
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
        href: {
            control: {
                type: "text";
            };
            defaultValue: undefined;
        };
        target: {
            control: {
                type: "select";
            };
            options: string[];
            defaultValue: undefined;
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
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
