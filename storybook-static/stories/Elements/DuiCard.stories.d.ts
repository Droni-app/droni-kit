import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./DuiCard.vue').DuiCardProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            to: string | object;
            size: "s" | "m" | "l";
            title: string;
            image: string;
            subtitle: string;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./DuiCard.vue').DuiCardProps> & Readonly<{}>, {}, {}, {}, {}, {
            to: string | object;
            size: "s" | "m" | "l";
            title: string;
            image: string;
            subtitle: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./DuiCard.vue').DuiCardProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        to: string | object;
        size: "s" | "m" | "l";
        title: string;
        image: string;
        subtitle: string;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
            footer?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        size: {
            control: {
                type: "select";
            };
            options: string[];
            description: string;
        };
        image: {
            control: {
                type: "text";
            };
            description: string;
        };
        title: {
            control: {
                type: "text";
            };
            description: string;
        };
        subtitle: {
            control: {
                type: "text";
            };
            description: string;
        };
        to: {
            control: {
                type: "text";
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
export declare const SmallSize: Story;
export declare const LargeSize: Story;
export declare const WithoutImage: Story;
export declare const MinimalCard: Story;
export declare const TitleOnly: Story;
export declare const DarkMode: Story;
export declare const CardGrid: Story;
export declare const ClickableCards: Story;
