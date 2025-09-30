import type { Preview } from '@storybook/vue3'
import { droniLightTheme, droniDarkTheme } from './theme';

const preview: Preview = {
  parameters: {
    darkMode: {
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      light: droniLightTheme,
      dark: droniDarkTheme,
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
      ],
    },
  },
};

export default preview;