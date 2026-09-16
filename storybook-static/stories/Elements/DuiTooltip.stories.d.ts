import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./DuiTooltip.vue').DuiTooltipProps> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onOpen?: ((source: "click" | "focus" | "hover" | "manual") => any) | undefined;
            onClose?: ((source: "click" | "focus" | "hover" | "manual" | "outside") => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "update:modelValue": (value: boolean) => any;
            open: (source: "click" | "focus" | "hover" | "manual") => any;
            close: (source: "click" | "focus" | "hover" | "manual" | "outside") => any;
        }, import('vue').PublicProps, {
            variant: import('./DuiTooltip.vue').TooltipVariant;
            color: import('./DuiTooltip.vue').TooltipColor;
            size: import('./DuiTooltip.vue').TooltipSize;
            disabled: boolean;
            rounded: import('./DuiTooltip.vue').TooltipRounded;
            text: string;
            modelValue: boolean;
            zIndex: number;
            fallbackTriggerText: string;
            trigger: import('./DuiTooltip.vue').TooltipTrigger;
            placement: import('./DuiTooltip.vue').TooltipPlacement;
            interactive: boolean;
            arrow: boolean;
            showDelay: number;
            hideDelay: number;
            offset: number;
            flip: boolean;
            viewportPadding: number;
            maxWidth: "xs" | "sm" | "md" | "lg" | "full" | number | string;
            teleportTo: string;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            triggerRef: HTMLSpanElement;
            tooltipRef: HTMLDivElement;
        }, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./DuiTooltip.vue').DuiTooltipProps> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onOpen?: ((source: "click" | "focus" | "hover" | "manual") => any) | undefined;
            onClose?: ((source: "click" | "focus" | "hover" | "manual" | "outside") => any) | undefined;
        }>, {}, {}, {}, {}, {
            variant: import('./DuiTooltip.vue').TooltipVariant;
            color: import('./DuiTooltip.vue').TooltipColor;
            size: import('./DuiTooltip.vue').TooltipSize;
            disabled: boolean;
            rounded: import('./DuiTooltip.vue').TooltipRounded;
            text: string;
            modelValue: boolean;
            zIndex: number;
            fallbackTriggerText: string;
            trigger: import('./DuiTooltip.vue').TooltipTrigger;
            placement: import('./DuiTooltip.vue').TooltipPlacement;
            interactive: boolean;
            arrow: boolean;
            showDelay: number;
            hideDelay: number;
            offset: number;
            flip: boolean;
            viewportPadding: number;
            maxWidth: "xs" | "sm" | "md" | "lg" | "full" | number | string;
            teleportTo: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./DuiTooltip.vue').DuiTooltipProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onOpen?: ((source: "click" | "focus" | "hover" | "manual") => any) | undefined;
        onClose?: ((source: "click" | "focus" | "hover" | "manual" | "outside") => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: boolean) => any;
        open: (source: "click" | "focus" | "hover" | "manual") => any;
        close: (source: "click" | "focus" | "hover" | "manual" | "outside") => any;
    }, string, {
        variant: import('./DuiTooltip.vue').TooltipVariant;
        color: import('./DuiTooltip.vue').TooltipColor;
        size: import('./DuiTooltip.vue').TooltipSize;
        disabled: boolean;
        rounded: import('./DuiTooltip.vue').TooltipRounded;
        text: string;
        modelValue: boolean;
        zIndex: number;
        fallbackTriggerText: string;
        trigger: import('./DuiTooltip.vue').TooltipTrigger;
        placement: import('./DuiTooltip.vue').TooltipPlacement;
        interactive: boolean;
        arrow: boolean;
        showDelay: number;
        hideDelay: number;
        offset: number;
        flip: boolean;
        viewportPadding: number;
        maxWidth: "xs" | "sm" | "md" | "lg" | "full" | number | string;
        teleportTo: string;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            trigger?(_: {}): any;
            default?(_: {}): any;
            content?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        text: {
            control: {
                type: "text";
            };
            defaultValue: string;
        };
        trigger: {
            control: {
                type: "select";
            };
            options: string[];
            defaultValue: string;
        };
        placement: {
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
        size: {
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
        showDelay: {
            control: {
                type: "number";
            };
            defaultValue: number;
        };
        hideDelay: {
            control: {
                type: "number";
            };
            defaultValue: number;
        };
        offset: {
            control: {
                type: "number";
            };
            defaultValue: number;
        };
        maxWidth: {
            control: {
                type: "select";
            };
            options: string[];
            defaultValue: string;
        };
        interactive: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        arrow: {
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
        flip: {
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
export declare const RichContent: Story;
export declare const Placements: Story;
export declare const ManualControl: Story;
