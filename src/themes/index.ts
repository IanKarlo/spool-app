import type { DefaultTheme } from 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      purple: string
      darkPurple: string
      pink: string
      darkPink: string
      orange: string
      darkOrange: string
      green: string
      darkGreen: string,
      lightBlue: string
      blue: string
      darkBlue: string
      black: string
      gray: string
      darkGray: string
      white: string
      background: string
      tabBarBackground: string
      text1: string
      text2: string
    }
    radius: {
      default: number
    }
    spacing: {
      4: 4
      8: 8
      12: 12
      16: 16
      20: 20
      24: 24
      32: 32
    }
  }
}



export type Colors = keyof DefaultTheme['colors']
export type Spacing = keyof DefaultTheme['spacing']

export const theme: DefaultTheme = {
  colors: {
    lightBlue: '#2790B00D', // essa cor tinha nos protótipo, mas ainda não estava mapeada para cá
    blue: '#2790B0',
    darkBlue: '#2B4E72',
    text1: '#353432',
    text2: '#4E4D4A',

    purple: '#84329B',
    darkPurple: '#301E4D', // essa cor não tinha nos protótipo, botei qualquer coisa
    pink: '#CE0F69',
    darkPink: '#A50C54',
    orange: '#FF9E1B',
    darkOrange: '#cc7e16',
    green: '#00C389',
    darkGreen: '#00A06B', // essa cor não tinha nos protótipo, botei qualquer coisa
    black: '#000000',
    gray: '#BBBBBB',
    darkGray: '#8F8F8F',
    white: '#FFFFFF',
    background: '#FFFFFF',
    tabBarBackground: '#FAFAFA',
  },
  radius: {
    default: 12
  },
  spacing: {
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    20: 20,
    24: 24,
    32: 32
  }
}


