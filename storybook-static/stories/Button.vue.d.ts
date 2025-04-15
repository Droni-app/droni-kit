type __VLS_Props = {
    /**
     * The label of the button
     */
    label: string;
    /**
     * primary or secondary button
     */
    primary?: boolean;
    /**
     * size of the button
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * background color of the button
     */
    backgroundColor?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (id: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((id: number) => any) | undefined;
}>, {
    primary: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
export default _default;
