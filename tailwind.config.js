/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        editorial: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        noir: {
          950: '#030303',
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#242424',
        },
        luxe: {
          gold: '#d4af37',
          champagne: '#f7e7ce',
          ivory: '#fffff0',
          platinum: '#e5e4e2',
          bronze: '#cd7f32',
        },
        cosmic: {
          cyan: '#00f5ff',
          magenta: '#ff006e',
          violet: '#8338ec',
          amber: '#ffbe0b',
          rose: '#fb5607',
        }
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'breathe': 'breathe 6s ease-in-out infinite',
        'reveal-up': 'revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'scale-in': 'scaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.1)' },
          '50%': { boxShadow: '0 0 50px rgba(212, 175, 55, 0.5), 0 0 100px rgba(212, 175, 55, 0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(80px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      }
    }
  }
}
