/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD800',
          dark: '#E5C200'
        },
        secondary: {
          DEFAULT: '#D9D9D9',
          dark: '#BFBFBF'
        },
        text: {
          DEFAULT: '#1D2433',
          secondary: '#595F47'
        },
        gray: {
          1: '#333333',
          2: '#4F4F4F',
          3: '#828282',
          4: '#BDBDBD',
          5: '#E0E0E0'
        }
      },
      fontSize: {
        'heading-1': '56px',
        'heading-2': '36px',
        'heading-3': '24px',
        'heading-4': '20px',
        'heading-5': '18px',
        'heading-6': '16px',
      }
    },
  },
  plugins: [],
};