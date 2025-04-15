import { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<{
        user: {
            name: string;
        } | null;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        createAccount: () => any;
        login: () => any;
        logout: () => any;
    }, string, import('vue').PublicProps, Readonly<{
        user: {
            name: string;
        } | null;
    }> & Readonly<{
        onCreateAccount?: (() => any) | undefined;
        onLogin?: (() => any) | undefined;
        onLogout?: (() => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
    render: (args: any) => {
        components: {
            MyHeader: import('vue').DefineComponent<{
                user: {
                    name: string;
                } | null;
            }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                createAccount: () => any;
                login: () => any;
                logout: () => any;
            }, string, import('vue').PublicProps, Readonly<{
                user: {
                    name: string;
                } | null;
            }> & Readonly<{
                onCreateAccount?: (() => any) | undefined;
                onLogin?: (() => any) | undefined;
                onLogout?: (() => any) | undefined;
            }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
        };
        setup(this: void): {
            args: any;
        };
        template: string;
    };
    parameters: {
        layout: string;
    };
    args: {
        onLogin: import('@vitest/spy').Mock<(...args: any[]) => any>;
        onLogout: import('@vitest/spy').Mock<(...args: any[]) => any>;
        onCreateAccount: import('@vitest/spy').Mock<(...args: any[]) => any>;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;
