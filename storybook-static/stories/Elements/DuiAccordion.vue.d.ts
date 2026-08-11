export interface DuiAccordionItem {
    title: string;
    value?: string;
    content?: string;
    icon?: string;
    disabled?: boolean;
}
export interface DuiAccordionProps {
    items: DuiAccordionItem[];
    modelValue?: string | string[];
    multiple?: boolean;
    variant?: 'bordered' | 'separated' | 'ghost';
    color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    flush?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<string, (_: {}) => any>>;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DuiAccordionProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string | string[]) => any;
    change: (value: string) => any;
}, string, import('vue').PublicProps, Readonly<DuiAccordionProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | string[]) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
}>, {
    variant: "bordered" | "separated" | "ghost";
    color: "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";
    size: "sm" | "md" | "lg";
    modelValue: string | string[];
    multiple: boolean;
    flush: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
