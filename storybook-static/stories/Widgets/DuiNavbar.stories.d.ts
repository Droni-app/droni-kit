import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./DuiNavbar.vue').DuiNavbarProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            size: "s" | "m" | "l";
            items: import('./DuiNavbar.vue').NavbarItem[];
            itemsAlignment: "left" | "center" | "right";
            underlineColor: "neutral" | "primary" | "secondary" | "success" | "danger" | "warning";
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./DuiNavbar.vue').DuiNavbarProps> & Readonly<{}>, {}, {}, {}, {}, {
            size: "s" | "m" | "l";
            items: import('./DuiNavbar.vue').NavbarItem[];
            itemsAlignment: "left" | "center" | "right";
            underlineColor: "neutral" | "primary" | "secondary" | "success" | "danger" | "warning";
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./DuiNavbar.vue').DuiNavbarProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        size: "s" | "m" | "l";
        items: import('./DuiNavbar.vue').NavbarItem[];
        itemsAlignment: "left" | "center" | "right";
        underlineColor: "neutral" | "primary" | "secondary" | "success" | "danger" | "warning";
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            brand?(_: {}): any;
            actions?(_: {}): any;
            actions?(_: {}): any;
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
        items: {
            control: {
                type: "object";
            };
            description: string;
        };
        itemsAlignment: {
            control: {
                type: "select";
            };
            options: string[];
            description: string;
        };
        underlineColor: {
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
export declare const SmallSize: Story;
export declare const LargeSize: Story;
export declare const SimpleNavbar: Story;
export declare const DarkMode: Story;
export declare const MobileView: Story;
export declare const WithoutIcons: Story;
export declare const MinimalNavbar: Story;
export declare const ItemsAlignedLeft: Story;
export declare const ItemsAlignedCenter: Story;
export declare const ItemsAlignedRight: Story;
export declare const UnderlineColorPrimary: Story;
export declare const UnderlineColorNeutral: Story;
export declare const UnderlineColorSuccess: Story;
export declare const UnderlineColorDanger: Story;
export declare const UnderlineColorWarning: Story;
export declare const UnderlineColorSecondary: Story;
