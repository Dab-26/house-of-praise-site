/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F6',
        charcoal: '#2C2C2C',
        beige: '#DCC3A1',
        gold: '#C9A34C',
        'light-gray': '#E5E5E5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        drawWave: {
          'to': { strokeDashoffset: '0' }
        },
        waveAppear: {
          '0%': { opacity: '0', transform: 'scaleY(0)' },
          '50%': { opacity: '1', transform: 'scaleY(1.2)' },
          '100%': { opacity: '0.6', transform: 'scaleY(1)' }
        }
      },
      animation: {
        drawWave: 'drawWave 3s ease-in-out forwards',
        waveAppear: 'waveAppear 0.3s ease-out forwards',
      }
    },
  },
  plugins: [],
};
