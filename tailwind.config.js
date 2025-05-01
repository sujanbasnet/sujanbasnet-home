/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'card-background': 'var(--card-background)',
        text: 'var(--text)',
        'light-text': 'var(--light-text)',
        primary: 'var(--primary)',
        'border-color': 'var(--border-color)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} 