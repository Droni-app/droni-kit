import type { Preview } from '@storybook/vue3'

const preview: Preview = {
  parameters: {
    darkMode: {
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light'
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;