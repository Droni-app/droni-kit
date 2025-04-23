import { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: string) => any;
    }, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
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
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
        monacoEl: HTMLDivElement;
    }, HTMLDivElement>;
    tags: string[];
    argTypes: {
        language: {
            constrol: {
                type: string;
            };
            defaultValue: string;
        };
        minimap: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        theme: {
            control: {
                type: "select";
            };
            defaultValue: string;
            options: string[];
        };
        wordWrap: {
            control: {
                type: "select";
            };
            defaultValue: string;
            options: string[];
        };
        tabSize: {
            control: {
                type: "number";
            };
            defaultValue: number;
        };
        autoIndent: {
            control: {
                type: "select";
            };
            defaultValue: string;
            options: string[];
        };
        renderValidationDecorations: {
            control: {
                type: "select";
            };
            defaultValue: string;
            options: string[];
        };
        formatOnPaste: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        formatOnType: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        autoClosingBrackets: {
            control: {
                type: "select";
            };
            defaultValue: string;
            options: string[];
        };
        scrollBeyondLastLine: {
            control: {
                type: "boolean";
            };
            defaultValue: boolean;
        };
        lineNumbers: {
            control: {
                type: "select";
            };
            defaultValue: string;
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
