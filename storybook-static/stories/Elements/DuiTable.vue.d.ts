export interface TableColumn {
    label: string;
    name: string;
    classes?: string;
}
export interface PaginationData {
    page: number;
    perPage: number;
    total: number;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<string, (_: any) => any>>;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    columns: {
        type: {
            (arrayLength: number): TableColumn[];
            (...items: TableColumn[]): TableColumn[];
            new (arrayLength: number): TableColumn[];
            new (...items: TableColumn[]): TableColumn[];
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
        type: () => PaginationData | undefined;
        default: undefined;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    paginate: (page: number) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    columns: {
        type: {
            (arrayLength: number): TableColumn[];
            (...items: TableColumn[]): TableColumn[];
            new (arrayLength: number): TableColumn[];
            new (...items: TableColumn[]): TableColumn[];
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
        type: () => PaginationData | undefined;
        default: undefined;
    };
}>> & Readonly<{
    onPaginate?: ((page: number) => any) | undefined;
}>, {
    loading: boolean;
    pagination: PaginationData | undefined;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
