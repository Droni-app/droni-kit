import { create } from '@storybook/theming/create';
import type { ThemeVars } from '@storybook/theming';

// Importar los logos con tipos específicos
import brandLogo from '../src/stories/assets/brand/brand.svg';
import brandLogoDark from '../src/stories/assets/brand/brand-w.svg';

// Interface para configuración común del tema
interface DroniThemeConfig {
  brandTitle: string;
  brandUrl: string;
  brandTarget: '_self' | '_blank';
  fontBase: string;
  fontCode: string;
  appBorderRadius: number;
  inputBorderRadius: number;
}

// Configuración común para ambos temas
const commonThemeConfig: DroniThemeConfig = {
  brandTitle: 'Droni-kit',
  brandUrl: 'https://droni.co',
  brandTarget: '_self',
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: '"JetBrains Mono", "Fira Code", Consolas, monospace',
  appBorderRadius: 8,
  inputBorderRadius: 6,
};

// Tema claro
export const droniLightTheme: ThemeVars = create({
  base: 'light',
  
  // Información de la marca
  brandTitle: commonThemeConfig.brandTitle,
  brandUrl: commonThemeConfig.brandUrl,
  brandImage: brandLogo,
  brandTarget: commonThemeConfig.brandTarget,
  
  // Colores primarios basados en tu sistema de design
  colorPrimary: '#3b82f6', // primary
  colorSecondary: '#ec4899', // secondary
  
  // UI principal
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e5e7eb', // neutral-200
  appBorderRadius: commonThemeConfig.appBorderRadius,
  
  // Barra de navegación
  barTextColor: '#374151', // neutral-700
  barSelectedColor: '#3b82f6', // primary
  barBg: '#f9fafb', // neutral-50
  
  // Tipografía
  fontBase: commonThemeConfig.fontBase,
  fontCode: commonThemeConfig.fontCode,
  
  // Texto
  textColor: '#111827', // neutral-900
  textInverseColor: '#ffffff',
  textMutedColor: '#6b7280', // neutral-500
  
  // Botones
  buttonBg: '#f3f4f6', // neutral-100
  buttonBorder: '#d1d5db', // neutral-300
  booleanBg: '#f3f4f6',
  booleanSelectedBg: '#3b82f6',
  
  // Formularios
  inputBg: '#ffffff',
  inputBorder: '#d1d5db', // neutral-300
  inputTextColor: '#111827',
  inputBorderRadius: commonThemeConfig.inputBorderRadius,
});

// Tema oscuro
export const droniDarkTheme: ThemeVars = create({
  base: 'dark',
  
  // Información de la marca
  brandTitle: commonThemeConfig.brandTitle,
  brandUrl: commonThemeConfig.brandUrl,
  brandImage: brandLogoDark,
  brandTarget: commonThemeConfig.brandTarget,
  
  // Colores primarios ajustados para modo oscuro
  colorPrimary: '#60a5fa', // primary más claro
  colorSecondary: '#f472b6', // secondary más claro
  
  // UI principal
  appBg: '#0f172a', // slate-900
  appContentBg: '#1e293b', // slate-800
  appBorderColor: '#334155', // slate-700
  appBorderRadius: commonThemeConfig.appBorderRadius,
  
  // Barra de navegación
  barTextColor: '#cbd5e1', // slate-300
  barSelectedColor: '#60a5fa', // primary claro
  barBg: '#1e293b', // slate-800
  
  // Tipografía
  fontBase: commonThemeConfig.fontBase,
  fontCode: commonThemeConfig.fontCode,
  
  // Texto
  textColor: '#f1f5f9', // slate-100
  textInverseColor: '#0f172a', // slate-900
  textMutedColor: '#94a3b8', // slate-400
  
  // Botones
  buttonBg: '#334155', // slate-700
  buttonBorder: '#475569', // slate-600
  booleanBg: '#334155',
  booleanSelectedBg: '#60a5fa',
  
  // Formularios
  inputBg: '#334155', // slate-700
  inputBorder: '#475569', // slate-600
  inputTextColor: '#f1f5f9', // slate-100
  inputBorderRadius: commonThemeConfig.inputBorderRadius,
});

// Exportar tipos para uso externo si es necesario
export type { DroniThemeConfig };