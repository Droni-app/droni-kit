import { create } from 'storybook/theming'

// Interfaz de Storybook con la paleta DroniKit "Neon Noir"
export const droniTheme = create({
  base: 'dark',
  brandTitle: 'DroniKit',
  brandUrl: 'https://github.com/Droni-app/droni-kit',
  brandImage: '/brand/brand-w.svg',
  brandTarget: '_blank',

  colorPrimary: '#f23282',
  colorSecondary: '#8a4cf7',

  appBg: '#080a18',
  appContentBg: '#11142a',
  appPreviewBg: '#080a18',
  appBorderColor: 'rgba(255, 255, 255, 0.08)',
  appBorderRadius: 10,

  fontBase: '"Inter", ui-sans-serif, system-ui, sans-serif',
  fontCode: 'ui-monospace, "JetBrains Mono", Menlo, monospace',

  textColor: '#eef0f7',
  textInverseColor: '#080a18',
  textMutedColor: '#9298b3',

  barTextColor: '#9298b3',
  barSelectedColor: '#22cdee',
  barHoverColor: '#22cdee',
  barBg: '#11142a',

  inputBg: '#080a18',
  inputBorder: 'rgba(255, 255, 255, 0.12)',
  inputTextColor: '#eef0f7',
  inputBorderRadius: 8,
})
