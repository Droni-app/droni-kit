import { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<{
        label: string;
        primary?: boolean;
        size?: "small" | "medium" | "large";
        backgroundColor?: string;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        click: (id: number) => any;
    }, string, import('vue').PublicProps, Readonly<{
        label: string;
        primary?: boolean;
        size?: "small" | "medium" | "large";
        backgroundColor?: string;
    }> & Readonly<{
        onClick?: ((id: number) => any) | undefined;
    }>, {
        primary: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
    tags: string[];
    argTypes: {
        size: {
            control: "select";
            options: string[];
        };
        backgroundColor: {
            control: "color";
        };
    };
    args: {
        primary: false;
        onClick: import('@vitest/spy').Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
export declare const Small: Story;
export declare const Select: Story;
