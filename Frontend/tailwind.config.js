/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5A5F',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#00A699',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#F5F5F5',
          foreground: '#000000',
        },
      },
    },
  },
  plugins: [],
};