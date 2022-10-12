/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl' : 32,
    },
    colors: {
      black: '#000000',
      white: '#ffffff',

      'gray-900' : '#09090A',
      'gray-800' : '#202024',
      'gray-400' : '#7C7C8A',
      'gray-200' : '#C4C4CC',
      'gray-100' : '#E1E1E6',

      'cyan-500' : '#61DAFB',
      'cyan-300' : '#90E7FF',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
