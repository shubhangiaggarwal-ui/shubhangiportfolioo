/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#17263D',
          deep: '#0E1929',
          light: '#243754',
          soft: '#2D4363'
        },
        coffee: {
          DEFAULT: '#604333',
          dark: '#483226',
          light: '#7A5743'
        },
        cream: {
          DEFAULT: '#F7F1E7',
          pure: '#FDFBF7',
          card: '#FAF6EF',
          dim: '#EFE7DA'
        },
        mocha: {
          DEFAULT: '#94745C',
          light: '#AA896F',
          dark: '#7D5F49'
        },
        beige: {
          DEFAULT: '#D8C7B3',
          light: '#EAE1D5',
          dark: '#C5B19A'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
