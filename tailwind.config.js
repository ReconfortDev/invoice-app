/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    variants: {
      extend: {
        backgroundImage: ['dark'],
      },
    },
    colors: {
      transparent: 'transparent',
      darkPrimary: '#7C5DFA',
      primary: '#9277FF',
      secondary: '#FF8F00',
      red: '#EC5757',
      dark: '#0C0E16',
      darkBlue: '#1E2139',
      gray: '#373B53',
      lightGray: '#7E88C3',
      white: '#FFFFFF',
      light: '#F8F8FB',
    },
  },
  plugins: [],
}

