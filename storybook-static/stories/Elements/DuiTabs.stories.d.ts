import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./DuiTabs.vue').DuiTabsProps> & Readonly<{
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onChange?: ((value: string) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "update:modelValue": (value: string) => any;
            change: (value: string) => any;
        }, import('vue').PublicProps, {
            variant: "underline" | "pills" | "boxed";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            ariaLabel: string;
            fullWidth: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./DuiTabs.vue').DuiTabsProps> & Readonly<{
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onChange?: ((value: string) => any) | undefined;
        }>, {}, {}, {}, {}, {
            variant: "underline" | "pills" | "boxed";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            ariaLabel: string;
            fullWidth: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./DuiTabs.vue').DuiTabsProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: string) => any;
        change: (value: string) => any;
    }, string, {
        variant: "underline" | "pills" | "boxed";
        color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        size: "sm" | "md" | "lg";
        ariaLabel: string;
        fullWidth: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Partial<Record<string, (_: {}) => any>>;
    });
    tags: string[];
    argTypes: {
        variant: {
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
        fullWidth: {
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
export declare const Pills: Story;
export declare const Boxed: Story;
export declare const Colors: Story;
