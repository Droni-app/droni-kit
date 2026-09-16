import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('./DuiToast.vue').DuiToastProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('./DuiToast.vue').DuiToastProps> & Readonly<{}>, {
        zIndex: number;
        position: import('./useToast').ToastPosition;
        maxToasts: number;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    tags: string[];
    argTypes: {
        position: {
            control: {
                type: "select";
            };
            options: string[];
            description: string;
        };
        maxToasts: {
            control: {
                type: "number";
            };
            description: string;
        };
        zIndex: {
            control: {
                type: "number";
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
export declare const WithTitles: Story;
export declare const Persistent: Story;
export declare const AllColors: Story;
