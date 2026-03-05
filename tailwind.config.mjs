/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:        '#FAF6EF',
          surface:   '#F0EAE0',
          glass:     '#FFFFFF',
          border:    '#DDD5C8',
          heading:   '#102C26',
          text:      '#2A4A3E',
          muted:     '#6B8C7E',
          secondary: '#2A4A3E',
          emerald:   '#102C26',
          cyan:      '#102C26',
          violet:    '#102C26',
        },
      },
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body:    ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 7vw, 6rem)',    { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2':      ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        'card': '16px',
      },
      boxShadow: {
        'card':         '0 2px 12px rgba(0,0,0,0.06)',
        'card-hover':   '0 8px 30px rgba(0,0,0,0.10)',
        'glow-emerald': '0 4px 20px rgba(16,44,38,0.12)',
        'glow-cyan':    '0 4px 20px rgba(16,44,38,0.12)',
        'glow-violet':  '0 4px 20px rgba(16,44,38,0.12)',
      },
      animation: {
        'marquee':  'marqueeScroll 32s linear infinite',
        'pulse-dot':'pulseDot 2s ease infinite',
        'badge-in': 'badgeIn 0.7s ease both',
      },
      keyframes: {
        marqueeScroll: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.5', transform: 'scale(0.7)' },
        },
        badgeIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
