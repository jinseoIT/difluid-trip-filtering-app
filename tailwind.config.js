/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          1: '#000',
          2: '#333',
          3: '#999',
          4: '#D9D9D9',
        },
        blue: {
          100: '#18A0FB',
        },
        green: {
          100: '#00C300',
        },
        red: {
          100: '#FF6633',
        },
      },
      margin: {
        17: '4.25rem',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        exo: ['"Exo 2"', 'sans-serif'],
        mont: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.font-title': {
          fontSize: '48px',
          fontWeight: '400',
          lineHeight: '72px',
        },
        '.font-body-h4': {
          fontSize: '24px',
          fontWeight: '700',
          lineHeight: '36px',
        },
        '.font-body-p': {
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '30px',
        },
        '.font-body-p-sm': {
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '22px',
        },
        '.font-exo-14m': {
          fontFamily: '"Exo 2"',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '100%',
        },
        '.font-exo-16m': {
          fontFamily: '"Exo 2"',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '100%',
        },
        '.font-exo-16b': {
          fontFamily: '"Exo 2"',
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '100%',
        },
        '.font-exo-18b': {
          fontFamily: '"Exo 2"',
          fontSize: '18px',
          fontWeight: '700',
          lineHeight: '30px',
        },
        '.font-mont-14m': {
          fontFamily: '"Montserrat"',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '100%',
        },
        '.font-mont-16m': {
          fontFamily: '"Montserrat"',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '100%',
        },
        '.font-mont-16b': {
          fontFamily: '"Montserrat"',
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '100%',
        },
      });
    },
  ],
};
