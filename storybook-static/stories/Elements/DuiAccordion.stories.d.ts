import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./DuiAccordion.vue').DuiAccordionProps> & Readonly<{
            "onUpdate:modelValue"?: ((value: string | string[]) => any) | undefined;
            onChange?: ((value: string) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "update:modelValue": (value: string | string[]) => any;
            change: (value: string) => any;
        }, import('vue').PublicProps, {
            variant: "bordered" | "separated" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            modelValue: string | string[];
            multiple: boolean;
            flush: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./DuiAccordion.vue').DuiAccordionProps> & Readonly<{
            "onUpdate:modelValue"?: ((value: string | string[]) => any) | undefined;
            onChange?: ((value: string) => any) | undefined;
        }>, {}, {}, {}, {}, {
            variant: "bordered" | "separated" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            modelValue: string | string[];
            multiple: boolean;
            flush: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./DuiAccordion.vue').DuiAccordionProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | string[]) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: string | string[]) => any;
        change: (value: string) => any;
    }, string, {
        variant: "bordered" | "separated" | "ghost";
        color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        size: "sm" | "md" | "lg";
        modelValue: string | string[];
        multiple: boolean;
        flush: boolean;
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
        multiple: {
            control: {
                type: "boolean";
            };
            description: string;
        };
        flush: {
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
export declare const Multiple: Story;
export declare const Variants: Story;
export declare const WithIcons: Story;
