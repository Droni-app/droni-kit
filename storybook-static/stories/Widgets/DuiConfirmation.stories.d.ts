import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('./DuiConfirmation.vue').DuiButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        confirmed: (...args: any[]) => void;
    }, string, import('vue').PublicProps, Readonly<import('./DuiConfirmation.vue').DuiButtonProps> & Readonly<{
        onConfirmed?: ((...args: any[]) => any) | undefined;
    }>, {
        variant: "solid" | "outline" | "ghost";
        color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        size: "sm" | "md" | "lg";
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    tags: string[];
    argTypes: {
        label: {
            control: {
                type: "text";
            };
            description: string;
        };
        checkLabel: {
            control: {
                type: "text";
            };
            description: string;
        };
        confirmLabel: {
            control: {
                type: "text";
            };
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
        onConfirmed: {
            action: string;
            description: string;
            table: {
                category: string;
            };
            control: false;
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
export declare const PrimaryAction: Story;
export declare const Compact: Story;
