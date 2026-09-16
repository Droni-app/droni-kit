import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            columns: {
                type: {
                    (arrayLength: number): import('./DuiTable.vue').TableColumn[];
                    (...items: import('./DuiTable.vue').TableColumn[]): import('./DuiTable.vue').TableColumn[];
                    new (arrayLength: number): import('./DuiTable.vue').TableColumn[];
                    new (...items: import('./DuiTable.vue').TableColumn[]): import('./DuiTable.vue').TableColumn[];
                    isArray(arg: any): arg is any[];
                    readonly prototype: any[];
                    from<T>(arrayLike: ArrayLike<T>): T[];
                    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                    from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
                    from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                    of<T>(...items: T[]): T[];
                    readonly [Symbol.species]: ArrayConstructor;
                };
                required: true;
            };
            rows: {
                type: {
                    (arrayLength: number): any[];
                    (...items: any[]): any[];
                    new (arrayLength: number): any[];
                    new (...items: any[]): any[];
                    isArray(arg: any): arg is any[];
                    readonly prototype: any[];
                    from<T>(arrayLike: ArrayLike<T>): T[];
                    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                    from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
                    from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                    of<T>(...items: T[]): T[];
                    readonly [Symbol.species]: ArrayConstructor;
                };
                required: true;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            pagination: {
                type: () => import('./DuiTable.vue').PaginationData | undefined;
                default: undefined;
            };
        }>> & Readonly<{
            onPaginate?: ((page: number) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            paginate: (page: number) => any;
        }, import('vue').PublicProps, {
            loading: boolean;
            pagination: import('./DuiTable.vue').PaginationData | undefined;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            columns: {
                type: {
                    (arrayLength: number): import('./DuiTable.vue').TableColumn[];
                    (...items: import('./DuiTable.vue').TableColumn[]): import('./DuiTable.vue').TableColumn[];
                    new (arrayLength: number): import('./DuiTable.vue').TableColumn[];
                    new (...items: import('./DuiTable.vue').TableColumn[]): import('./DuiTable.vue').TableColumn[];
                    isArray(arg: any): arg is any[];
                    readonly prototype: any[];
                    from<T>(arrayLike: ArrayLike<T>): T[];
                    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                    from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
                    from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                    of<T>(...items: T[]): T[];
                    readonly [Symbol.species]: ArrayConstructor;
                };
                required: true;
            };
            rows: {
                type: {
                    (arrayLength: number): any[];
                    (...items: any[]): any[];
                    new (arrayLength: number): any[];
                    new (...items: any[]): any[];
                    isArray(arg: any): arg is any[];
                    readonly prototype: any[];
                    from<T>(arrayLike: ArrayLike<T>): T[];
                    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                    from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
                    from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                    of<T>(...items: T[]): T[];
                    readonly [Symbol.species]: ArrayConstructor;
                };
                required: true;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            pagination: {
                type: () => import('./DuiTable.vue').PaginationData | undefined;
                default: undefined;
            };
        }>> & Readonly<{
            onPaginate?: ((page: number) => any) | undefined;
        }>, {}, {}, {}, {}, {
            loading: boolean;
            pagination: import('./DuiTable.vue').PaginationData | undefined;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        columns: {
            type: {
                (arrayLength: number): import('./DuiTable.vue').TableColumn[];
                (...items: import('./DuiTable.vue').TableColumn[]): import('./DuiTable.vue').TableColumn[];
                new (arrayLength: number): import('./DuiTable.vue').TableColumn[];
                new (...items: import('./DuiTable.vue').TableColumn[]): import('./DuiTable.vue').TableColumn[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
                from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                of<T>(...items: T[]): T[];
                readonly [Symbol.species]: ArrayConstructor;
            };
            required: true;
        };
        rows: {
            type: {
                (arrayLength: number): any[];
                (...items: any[]): any[];
                new (arrayLength: number): any[];
                new (...items: any[]): any[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
                from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                of<T>(...items: T[]): T[];
                readonly [Symbol.species]: ArrayConstructor;
            };
            required: true;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        pagination: {
            type: () => import('./DuiTable.vue').PaginationData | undefined;
            default: undefined;
        };
    }>> & Readonly<{
        onPaginate?: ((page: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        paginate: (page: number) => any;
    }, string, {
        loading: boolean;
        pagination: import('./DuiTable.vue').PaginationData | undefined;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Partial<Record<string, (_: any) => any>>;
    });
    tags: string[];
    argTypes: {
        columns: {
            control: {
                type: "object";
            };
            description: string;
            defaultValue: {
                label: string;
                name: string;
            }[];
        };
        rows: {
            control: {
                type: "object";
            };
            description: string;
            defaultValue: {
                name: string;
                age: number;
                country: string;
            }[];
        };
        loading: {
            control: {
                type: "boolean";
            };
            description: string;
            defaultValue: boolean;
        };
        pagination: {
            control: {
                type: "object";
            };
            description: string;
            defaultValue: undefined;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Loading: Story;
export declare const WithPagination: Story;
export declare const LoadingWithPagination: Story;
