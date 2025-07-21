/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#667eea',
          600: '#764ba2',
        },
        dark: {
          900: '#0a0a0a',
          800: '#1a1a1a',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-10px)',
          },
          '60%': {
            transform: 'translateY(-5px)',
          },
        }
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
      },
      screens: {
        'xs': '475px',
      },
      backdropBlur: {
        'lg': '10px',
      },
      boxShadow: {
        'primary': '0 10px 25px rgba(102, 126, 234, 0.3)',
        'card': '0 20px 40px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

