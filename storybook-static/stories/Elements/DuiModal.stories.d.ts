import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./DuiModal.vue').DuiModalProps> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onOpen?: (() => any) | undefined;
            onClose?: ((source: "button" | "backdrop" | "escape") => any) | undefined;
            onBackdrop?: (() => any) | undefined;
            onEscape?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "update:modelValue": (value: boolean) => any;
            open: () => any;
            close: (source: "button" | "backdrop" | "escape") => any;
            backdrop: () => any;
            escape: () => any;
        }, import('vue').PublicProps, {
            variant: "solid" | "outline" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "xs" | "sm" | "md" | "lg" | "xl" | "full";
            title: string;
            rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
            modelValue: boolean;
            description: string;
            showClose: boolean;
            closeOnBackdrop: boolean;
            closeOnEsc: boolean;
            persistent: boolean;
            centered: boolean;
            scrollable: boolean;
            blurBackdrop: boolean;
            zIndex: number;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./DuiModal.vue').DuiModalProps> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onOpen?: (() => any) | undefined;
            onClose?: ((source: "button" | "backdrop" | "escape") => any) | undefined;
            onBackdrop?: (() => any) | undefined;
            onEscape?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
            variant: "solid" | "outline" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "xs" | "sm" | "md" | "lg" | "xl" | "full";
            title: string;
            rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
            modelValue: boolean;
            description: string;
            showClose: boolean;
            closeOnBackdrop: boolean;
            closeOnEsc: boolean;
            persistent: boolean;
            centered: boolean;
            scrollable: boolean;
            blurBackdrop: boolean;
            zIndex: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./DuiModal.vue').DuiModalProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onOpen?: (() => any) | undefined;
        onClose?: ((source: "button" | "backdrop" | "escape") => any) | undefined;
        onBackdrop?: (() => any) | undefined;
        onEscape?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: boolean) => any;
        open: () => any;
        close: (source: "button" | "backdrop" | "escape") => any;
        backdrop: () => any;
        escape: () => any;
    }, string, {
        variant: "solid" | "outline" | "ghost";
        color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        size: "xs" | "sm" | "md" | "lg" | "xl" | "full";
        title: string;
        rounded: "all" | "top" | "bottom" | "left" | "right" | "none";
        modelValue: boolean;
        description: string;
        showClose: boolean;
        closeOnBackdrop: boolean;
        closeOnEsc: boolean;
        persistent: boolean;
        centered: boolean;
        scrollable: boolean;
        blurBackdrop: boolean;
        zIndex: number;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            header?(_: {}): any;
            default?(_: {}): any;
            footer?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        modelValue: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        title: {
            control: {
                type: "text";
            };
            defaultValue: string;
        };
        description: {
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
        rounded: {
            control: {
                type: "select";
            };
            options: string[];
            defaultValue: string;
        };
        showClose: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        closeOnBackdrop: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        closeOnEsc: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        persistent: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        centered: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        scrollable: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        blurBackdrop: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        zIndex: {
            control: {
                type: "number";
            };
            defaultValue: number;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Persistent: Story;
export declare const LargeScrollable: Story;
export declare const Variants: Story;
export declare const EscapeClose: Story;
