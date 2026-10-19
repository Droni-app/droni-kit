import type { Preview } from '@storybook/vue3'
import { withThemeByClassName } from '@storybook/addon-themes'
import { droniTheme } from './theme'
import './preview.css'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Start', 'Migración v2', 'Tokens', 'Icons', 'Forms', 'Elements', 'Widgets', '*'],
      },
    },
    // El fondo lo controla el decorador de tema (light/dark) vía la clase .dark
    backgrounds: { disable: true },
    layout: 'padded',
    controls: { expanded: true, matchers: { color: /(background|color)$/i } },
    docs: { theme: droniTheme },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
}

export default preview
