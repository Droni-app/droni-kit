import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./DuiBadge.vue').DuiBadgeProps> & Readonly<{
            onDismiss?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            dismiss: () => any;
        }, import('vue').PublicProps, {
            href: string;
            variant: "solid" | "soft" | "outline";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "xs" | "sm" | "md" | "lg";
            rounded: "full" | "md" | "none";
            label: string;
            dot: boolean;
            dismissible: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./DuiBadge.vue').DuiBadgeProps> & Readonly<{
            onDismiss?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
            href: string;
            variant: "solid" | "soft" | "outline";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "xs" | "sm" | "md" | "lg";
            rounded: "full" | "md" | "none";
            label: string;
            dot: boolean;
            dismissible: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./DuiBadge.vue').DuiBadgeProps> & Readonly<{
        onDismiss?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        dismiss: () => any;
    }, string, {
        href: string;
        variant: "solid" | "soft" | "outline";
        color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        size: "xs" | "sm" | "md" | "lg";
        rounded: "full" | "md" | "none";
        label: string;
        dot: boolean;
        dismissible: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            icon?(_: {}): any;
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        label: {
            control: {
                type: "text";
            };
            description: string;
        };
        color: {
            control: {
                type: "select";
            };
            options: string[];
            description: string;
        };
        variant: {
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
        rounded: {
            control: {
                type: "select";
            };
            options: string[];
            description: string;
        };
        dot: {
            control: {
                type: "boolean";
            };
            description: string;
        };
        dismissible: {
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
export declare const Variants: Story;
export declare const Sizes: Story;
export declare const WithDot: Story;
export declare const Dismissible: Story;
export declare const WithIcon: Story;
