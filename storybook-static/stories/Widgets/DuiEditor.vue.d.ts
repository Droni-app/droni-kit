declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    language: {
        type: StringConstructor;
        default: string;
    };
    minimap: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: {
        type: () => "vs" | "vs-dark" | "hc-black" | "hc-light";
        default: string;
    };
    wordWrap: {
        type: () => "on" | "off" | "wordWrapColumn" | "bounded";
        default: string;
    };
    tabSize: {
        type: NumberConstructor;
        default: number;
    };
    autoIndent: {
        type: () => "none" | "keep" | "brackets" | "advanced";
        default: string;
    };
    renderValidationDecorations: {
        type: () => "on" | "off" | "editable";
        default: string;
    };
    formatOnPaste: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatOnType: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoClosingBrackets: {
        type: () => "always" | "languageDefined" | "never";
        default: string;
    };
    scrollBeyondLastLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    lineNumbers: {
        type: () => "on" | "off" | "relative" | "interval";
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    language: {
        type: StringConstructor;
        default: string;
    };
    minimap: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: {
        type: () => "vs" | "vs-dark" | "hc-black" | "hc-light";
        default: string;
    };
    wordWrap: {
        type: () => "on" | "off" | "wordWrapColumn" | "bounded";
        default: string;
    };
    tabSize: {
        type: NumberConstructor;
        default: number;
    };
    autoIndent: {
        type: () => "none" | "keep" | "brackets" | "advanced";
        default: string;
    };
    renderValidationDecorations: {
        type: () => "on" | "off" | "editable";
        default: string;
    };
    formatOnPaste: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatOnType: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoClosingBrackets: {
        type: () => "always" | "languageDefined" | "never";
        default: string;
    };
    scrollBeyondLastLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    lineNumbers: {
        type: () => "on" | "off" | "relative" | "interval";
        default: string;
    };
}>> & Readonly<{}>, {
    modelValue: string;
    language: string;
    minimap: boolean;
    theme: "vs" | "vs-dark" | "hc-black" | "hc-light";
    wordWrap: "on" | "off" | "wordWrapColumn" | "bounded";
    tabSize: number;
    autoIndent: "none" | "keep" | "brackets" | "advanced";
    renderValidationDecorations: "on" | "off" | "editable";
    formatOnPaste: boolean;
    formatOnType: boolean;
    autoClosingBrackets: "always" | "languageDefined" | "never";
    scrollBeyondLastLine: boolean;
    lineNumbers: "on" | "off" | "relative" | "interval";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
