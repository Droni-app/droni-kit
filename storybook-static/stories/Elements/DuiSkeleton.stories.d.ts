import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('./DuiSkeleton.vue').DuiSkeletonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('./DuiSkeleton.vue').DuiSkeletonProps> & Readonly<{}>, {
        variant: "text" | "circular" | "rectangular" | "rounded";
        animation: "pulse" | "wave" | "none";
        width: string | number;
        height: string | number;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
    tags: string[];
    argTypes: {
        variant: {
            control: {
                type: "select";
            };
            options: string[];
            description: string;
        };
        width: {
            control: {
                type: "text";
            };
            description: string;
        };
        height: {
            control: {
                type: "text";
            };
            description: string;
        };
        animation: {
            control: {
                type: "select";
            };
            options: string[];
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
export declare const CardSkeleton: Story;
export declare const ListSkeleton: Story;
export declare const TableSkeleton: Story;
export declare const LoadingToggle: Story;
