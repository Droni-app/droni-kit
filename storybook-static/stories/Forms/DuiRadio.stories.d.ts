import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('./DuiRadio.vue').DuiRadioProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: string) => any;
        change: (value: string) => any;
    }, string, import('vue').PublicProps, Readonly<import('./DuiRadio.vue').DuiRadioProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
    }>, {
        name: string;
        color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        size: "sm" | "md" | "lg";
        disabled: boolean;
        block: boolean;
        modelValue: string;
        groupLabel: string;
        orientation: "vertical" | "horizontal";
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    tags: string[];
    argTypes: {
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
        orientation: {
            control: {
                type: "select";
            };
            options: string[];
            description: string;
        };
        block: {
            control: {
                type: "boolean";
            };
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
export declare const Horizontal: Story;
export declare const Colors: Story;
export declare const WithDescriptions: Story;
export declare const Disabled: Story;
