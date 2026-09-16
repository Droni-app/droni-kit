import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./DuiDropdown.vue').DuiDropdownProps> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onOpen?: (() => any) | undefined;
            onClose?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "update:modelValue": (value: boolean) => any;
            open: () => any;
            close: () => any;
        }, import('vue').PublicProps, {
            variant: "solid" | "outline" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            disabled: boolean;
            rounded: "all" | "none" | "sm";
            modelValue: boolean;
            placement: "bottom-start" | "bottom-end" | "top-start" | "top-end" | "bottom" | "top";
            minWidth: string;
            ariaLabel: string;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            wrapperRef: HTMLDivElement;
        }, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./DuiDropdown.vue').DuiDropdownProps> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onOpen?: (() => any) | undefined;
            onClose?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
            variant: "solid" | "outline" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg";
            disabled: boolean;
            rounded: "all" | "none" | "sm";
            modelValue: boolean;
            placement: "bottom-start" | "bottom-end" | "top-start" | "top-end" | "bottom" | "top";
            minWidth: string;
            ariaLabel: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./DuiDropdown.vue').DuiDropdownProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onOpen?: (() => any) | undefined;
        onClose?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: boolean) => any;
        open: () => any;
        close: () => any;
    }, string, {
        variant: "solid" | "outline" | "ghost";
        color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        size: "sm" | "md" | "lg";
        disabled: boolean;
        rounded: "all" | "none" | "sm";
        modelValue: boolean;
        placement: "bottom-start" | "bottom-end" | "top-start" | "top-end" | "bottom" | "top";
        minWidth: string;
        ariaLabel: string;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            trigger?(_: {}): any;
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        placement: {
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
        rounded: {
            control: {
                type: "select";
            };
            options: string[];
            description: string;
        };
        disabled: {
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
export declare const Placements: Story;
export declare const Variants: Story;
export declare const WithIcons: Story;
