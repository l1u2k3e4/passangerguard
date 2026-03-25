import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F8FAFC',
          surface: '#EFF6FF',
          surfaceAlt: '#F0F9FF',
          primary: '#2563EB',
          primaryHover: '#1D4ED8',
          primaryLight: '#DBEAFE',
          secondary: '#06B6D4',
          secondaryHover: '#0891B2',
          success: '#10B981',
          heading: '#0F172A',
          body: '#475569',
          muted: '#94A3B8',
          white: '#FFFFFF',
          border: '#E2E8F0',
          borderLight: '#F1F5F9',
          light: '#F8FAFC',
          callout: '#EFF6FF',
          calloutBorder: '#BFDBFE',
          tableHeader: '#1E3A5F',
          navy: '#183153',
          navyLight: '#2D4A6F',
          navyDark: '#0F2440',
        },
      },
      fontFamily: {
        display: ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.15' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      maxWidth: {
        content: '1200px',
        narrow: '800px',
        wide: '1400px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 24px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.06)',
        glow: '0 0 20px rgba(37,99,235,0.25)',
        'glow-lg': '0 0 40px rgba(37,99,235,0.15)',
        nav: '0 1px 3px rgba(0,0,0,0.06)',
        soft: '0 2px 8px rgba(0,0,0,0.04)',
      },
      borderRadius: {
        card: '16px',
      },
      keyframes: {
        pulse_glow: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(37,99,235,0.2)' },
          '50%': { boxShadow: '0 0 28px rgba(37,99,235,0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
      },
      animation: {
        pulse_glow: 'pulse_glow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        breathe: 'breathe 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
