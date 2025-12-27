/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'stone': '#C4A78E',
        'vineyard-green': '#5A604E',
        'clay': '#B8573E',
        'crema': '#F6F3EB',
        'charcoal': '#2C2C2C',
        'muted-gold': '#D4A574',
        'warm-sand': '#E8DCC0',
        'sage': '#8A9471'
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Crimson Text', 'serif']
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
        '128': '128px'
      },
      animation: {
        'aurora': 'aurora 8s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'slideUp': 'slideUp 0.5s ease-out forwards',
        'typewriter': 'typewriter 2s steps(40) 1s forwards'
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        }
      }
    },
  },
  plugins: [],
}