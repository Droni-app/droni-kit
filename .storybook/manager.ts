import { addons } from '@storybook/manager-api';
import type { ThemeVars } from '@storybook/theming';
import { droniLightTheme, droniDarkTheme } from './theme';

// Función para detectar el tema preferido del sistema
const getPreferredTheme = (): ThemeVars => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? droniDarkTheme 
    : droniLightTheme;
};

// Configuración inicial del tema
addons.setConfig({
  theme: getPreferredTheme(),
});

// Escuchar cambios en el tema del sistema
if (window.matchMedia) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleThemeChange = (e: MediaQueryListEvent): void => {
    addons.setConfig({
      theme: e.matches ? droniDarkTheme : droniLightTheme,
    });
  };

  mediaQuery.addEventListener('change', handleThemeChange);
}