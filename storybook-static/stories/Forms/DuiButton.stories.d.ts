import { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./DuiButton.vue').DuiButtonProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            variant: "solid" | "outline" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            type: "button" | "submit" | "reset";
            disabled: boolean;
            loading: boolean;
            block: boolean;
            title: string;
            rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
            to: import('./DuiButton.vue').RouteTo;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./DuiButton.vue').DuiButtonProps> & Readonly<{}>, {}, {}, {}, {}, {
            variant: "solid" | "outline" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            type: "button" | "submit" | "reset";
            disabled: boolean;
            loading: boolean;
            block: boolean;
            title: string;
            rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
            to: import('./DuiButton.vue').RouteTo;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./DuiButton.vue').DuiButtonProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        variant: "solid" | "outline" | "ghost";
        color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        size: "sm" | "md" | "lg";
        type: "button" | "submit" | "reset";
        disabled: boolean;
        loading: boolean;
        block: boolean;
        title: string;
        rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
        to: import('./DuiButton.vue').RouteTo;
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
        to: {
            control: {
                type: "text";
            };
            defaultValue: undefined;
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithRouting: Story;
export declare const WithComplexRoute: Story;
export declare const ExternalLink: Story;
export declare const LoadingWithRoute: Story;
export declare const DisabledWithRoute: Story;
