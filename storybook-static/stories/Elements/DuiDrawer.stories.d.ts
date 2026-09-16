import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./DuiDrawer.vue').DuiDrawerProps> & Readonly<{
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
            name: string;
            variant: "solid" | "outline" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg" | "xl";
            modelValue: boolean;
            showClose: boolean;
            closeOnBackdrop: boolean;
            closeOnEsc: boolean;
            persistent: boolean;
            blurBackdrop: boolean;
            zIndex: number;
            position: "left" | "right" | "top" | "bottom";
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./DuiDrawer.vue').DuiDrawerProps> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onOpen?: (() => any) | undefined;
            onClose?: ((source: "button" | "backdrop" | "escape") => any) | undefined;
            onBackdrop?: (() => any) | undefined;
            onEscape?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
            name: string;
            variant: "solid" | "outline" | "ghost";
            color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
            size: "sm" | "md" | "lg" | "xl";
            modelValue: boolean;
            showClose: boolean;
            closeOnBackdrop: boolean;
            closeOnEsc: boolean;
            persistent: boolean;
            blurBackdrop: boolean;
            zIndex: number;
            position: "left" | "right" | "top" | "bottom";
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./DuiDrawer.vue').DuiDrawerProps> & Readonly<{
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
        name: string;
        variant: "solid" | "outline" | "ghost";
        color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        size: "sm" | "md" | "lg" | "xl";
        modelValue: boolean;
        showClose: boolean;
        closeOnBackdrop: boolean;
        closeOnEsc: boolean;
        persistent: boolean;
        blurBackdrop: boolean;
        zIndex: number;
        position: "left" | "right" | "top" | "bottom";
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            header?(_: {}): any;
            default?(_: {}): any;
            actions?(_: {}): any;
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
        name: {
            control: {
                type: "text";
            };
            defaultValue: string;
        };
        position: {
            control: {
                type: "select";
            };
            options: string[];
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
export declare const Positions: Story;
export declare const Sizes: Story;
export declare const Persistent: Story;
export declare const EscapeClose: Story;
