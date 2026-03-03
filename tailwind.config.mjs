/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:        '#18181B',
          surface:   '#27272A',
          glass:     'rgba(39,39,42,0.55)',
          border:    '#3F3F46',
          heading:   '#F4F4F5',
          text:      '#D4D4D8',
          muted:     '#71717A',
          secondary: '#A1A1AA',
          emerald:   '#34D399',
          cyan:      '#22D3EE',
          violet:    '#A78BFA',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.8rem, 7vw, 5.25rem)', { lineHeight: '1.04', letterSpacing: '-0.035em' }],
        'h2':      ['clamp(2rem, 4.5vw, 3.25rem)',  { lineHeight: '1.08', letterSpacing: '-0.03em'  }],
      },
      borderRadius: {
        'card': '14px',
      },
      boxShadow: {
        'card':    '0 8px 40px rgba(0,0,0,0.45)',
        'glow-emerald': '0 0 32px rgba(52,211,153,0.22)',
        'glow-cyan':    '0 0 32px rgba(34,211,238,0.22)',
        'glow-violet':  '0 0 32px rgba(167,139,250,0.22)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(90deg, #34D399, #22D3EE, #A78BFA)',
        'gradient-btn':   'linear-gradient(135deg, #0e9488 0%, #0e7490 50%, #6d28d9 100%)',
      },
      animation: {
        'orb-1':    'orbFloat1 18s ease-in-out infinite',
        'orb-2':    'orbFloat2 22s ease-in-out infinite',
        'orb-3':    'orbFloat3 26s ease-in-out infinite',
        'marquee':  'marqueeScroll 32s linear infinite',
        'pulse-dot':'pulseDot 2s ease infinite',
        'badge-in': 'badgeIn 0.7s ease both',
      },
      keyframes: {
        orbFloat1: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(60px,-40px) scale(1.08)' },
          '66%':     { transform: 'translate(-30px,50px) scale(0.94)' },
        },
        orbFloat2: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '40%':     { transform: 'translate(-70px,30px) scale(1.12)' },
          '70%':     { transform: 'translate(40px,-60px) scale(0.92)' },
        },
        orbFloat3: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '30%':     { transform: 'translate(50px,70px) scale(1.06)' },
          '60%':     { transform: 'translate(-60px,-30px) scale(0.96)' },
        },
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
