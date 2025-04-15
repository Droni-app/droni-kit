type __VLS_Props = {
    user: {
        name: string;
    } | null;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    createAccount: () => any;
    login: () => any;
    logout: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCreateAccount?: (() => any) | undefined;
    onLogin?: (() => any) | undefined;
    onLogout?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
