/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05070D',
          surface: '#0B0F19',
          card: '#111827',
          border: '#1E293B',
          cyan: '#00F0FF',
          emerald: '#10B981',
          violet: '#8B5CF6',
          amber: '#F59E0B',
          rose: '#F43F5E',
          dim: '#94A3B8',
          text: '#F8FAFC'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-grid': 'radial-gradient(circle at 1px 1px, rgba(0, 240, 255, 0.08) 1px, transparent 0)',
        'scanline-pattern': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 240, 255, 0.03) 3px, transparent 4px)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px -3px rgba(0, 240, 255, 0.4)',
        'neon-emerald': '0 0 20px -3px rgba(16, 185, 129, 0.4)',
        'neon-violet': '0 0 20px -3px rgba(139, 92, 246, 0.4)',
        'cyber-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grid-scroll': 'grid-scroll 25s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(0,240,255,0.6))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(0,240,255,0.9))' },
        },
        'grid-scroll': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        }
      }
    },
  },
  plugins: [],
}
