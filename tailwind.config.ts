import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        surface: '#12131C',
        primary: '#00D5FF',
        accent: '#FF5C38',
        secondary: '#B47FFF',
        highlight: '#FFCC33',
        soft: '#D3D9E2',
        dull: '#2B2F3A',
        mint: '#00E5B9'
      },
      fontFamily: {
        primary: ['Unbounded', 'sans-serif'],
        secondary: ['Public Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
