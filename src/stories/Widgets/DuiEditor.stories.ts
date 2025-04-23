import type { Meta, StoryObj } from '@storybook/vue3';

import DuiEditor from './DuiEditor.vue';
import '../../style.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Widgets/Editor',
  component: DuiEditor,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    language: {
      constrol: { type: 'string' },
      defaultValue: 'javascript',
    },
    minimap: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    theme: {
      control: { type: 'select' },
      defaultValue: 'light',
      options: ['vs', 'vs-dark', 'hc-black', 'hc-light'],
    },
    wordWrap: {
      control: { type: 'select' },
      defaultValue: 'off',
      options: ['off', 'on', 'wordWrapColumn', 'bounded'],
    },
    tabSize: {
      control: { type: 'number' },
      defaultValue: 2,
    },
    autoIndent: {
      control: { type: 'select' },
      defaultValue: 'brackets',
      options: ['none', 'keep', 'brackets', 'advanced'],
    },
    renderValidationDecorations: {
      control: { type: 'select' },
      defaultValue: 'on',
      options: ['off', 'on', 'editable'],
    },
    formatOnPaste: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    formatOnType: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    autoClosingBrackets: {
      control: { type: 'select' },
      defaultValue: 'languageDefined',
      options: ['always', 'languageDefined', 'never'],
    },
    scrollBeyondLastLine: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    lineNumbers: {
      control: { type: 'select' },
      defaultValue: 'on',
      options: ['off', 'on', 'relative', 'interval'],
    },
  },
  } satisfies Meta<typeof DuiEditor>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  /*
   *👇 Render functions are a framework specific feature to allow you control on how the component renders.
   * See https://storybook.js.org/docs/api/csf
   * to learn how to use render functions.
   */
  export const Default: Story = {
    args: {
      language: 'markdown',
      minimap: true,
      theme: 'vs-dark',
      wordWrap: 'on',
      tabSize: 2,
      autoIndent: 'brackets',
      renderValidationDecorations: 'on',
      formatOnPaste: true,
      formatOnType: true,
      autoClosingBrackets: 'languageDefined',
      scrollBeyondLastLine: true,
      lineNumbers: 'on',
      modelValue: '',
    },
  };