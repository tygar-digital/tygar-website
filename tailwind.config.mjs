/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:        '#FDFAF6',
          surface:   '#F2EDE6',
          glass:     '#FFFFFF',
          border:    '#E8E2DA',
          heading:   '#1A1A2E',
          text:      '#4A4A6A',
          muted:     '#8A8AAA',
          secondary: '#4A4A6A',
          emerald:   '#2D6A4F',
          cyan:      '#2D6A4F',
          violet:    '#2D6A4F',
          warm:      '#E76F51',
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
        'glow-emerald': '0 4px 20px rgba(45,106,79,0.15)',
        'glow-cyan':    '0 4px 20px rgba(45,106,79,0.15)',
        'glow-violet':  '0 4px 20px rgba(45,106,79,0.15)',
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
