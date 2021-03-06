import { getStaticColors } from '../colors'
import { createThemeFromColor } from './custom'

export const theme = createThemeFromColor(
  '#313142',
  'dark-purple',
  'Dark Purple',
  {
    override: {
      primaryBackgroundColor: getStaticColors({ isDark: true }).purple,
    },
  },
)
