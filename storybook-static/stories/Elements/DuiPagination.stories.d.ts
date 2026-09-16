import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('./DuiPagination.vue').DuiPaginationProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (page: number) => any;
        change: (page: number) => any;
    }, string, import('vue').PublicProps, Readonly<import('./DuiPagination.vue').DuiPaginationProps> & Readonly<{
        "onUpdate:modelValue"?: ((page: number) => any) | undefined;
        onChange?: ((page: number) => any) | undefined;
    }>, {
        variant: "solid" | "outline" | "ghost";
        color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
        size: "sm" | "md" | "lg";
        rounded: "full" | "md" | "none";
        ariaLabel: string;
        perPage: number;
        siblingCount: number;
        showBoundary: boolean;
        showLabels: boolean;
        prevLabel: string;
        nextLabel: string;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
    tags: string[];
    argTypes: {
        modelValue: {
            control: {
                type: "number";
            };
            description: string;
        };
        total: {
            control: {
                type: "number";
            };
            description: string;
        };
        perPage: {
            control: {
                type: "number";
            };
            description: string;
        };
        siblingCount: {
            control: {
                type: "number";
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
        showLabels: {
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
export declare const Variants: Story;
export declare const Colors: Story;
export declare const LargePagination: Story;
export declare const Sizes: Story;
