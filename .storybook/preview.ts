import type { Preview } from '@storybook/vue3'
import { withThemeByClassName } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Start', 'Icons', '*'],
      },
    },
  },
  decorators: [
   withThemeByClassName({
     themes: {
       light: '',
       dark: 'dark',
     },
     defaultTheme: 'light',
   }),
  ]
};

export default preview;