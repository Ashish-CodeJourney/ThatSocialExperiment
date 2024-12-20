/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Calming and peaceful colors
        sage: {
          50: '#f2f5f3',
          100: '#e4eae6',
          500: '#87a987',
          600: '#6b8a6b',
        },
        ocean: {
          50: '#f0f7f9',
          100: '#e1eff3',
          500: '#5c9ead',
          600: '#4a7c8a',
        },
        lavender: {
          50: '#f5f3f9',
          100: '#ebe7f3',
          500: '#9b8bb9',
          600: '#7c6f94',
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 1s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};