/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          bg:        '#FFFFFF',
          surface:   '#F9FAFB',
          glass:     '#FFFFFF',
          border:    '#E5E7EB',
          heading:   '#111827',
          text:      '#374151',
          muted:     '#6B7280',
          secondary: '#374151',
          primary:   '#059669',
          'primary-light': '#ECFDF5',
          dark:      '#111827',
          navy:      '#0F172A',
          'navy-light': '#1E293B',
          emerald:   '#059669',
          'emerald-light': '#34D399',
        },
        border:      "hsl(var(--border))",
        input:       "hsl(var(--input))",
        ring:        "hsl(var(--ring))",
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        heading: ['Cormorant', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 7vw, 6rem)',    { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2':      ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        'card': '12px',
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'card':         '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
        'card-hover':   '0 10px 25px rgba(0,0,0,0.08)',
        'glow-emerald': '0 4px 20px rgba(5,150,105,0.15)',
        'glow-cyan':    '0 4px 20px rgba(5,150,105,0.15)',
        'glow-violet':  '0 4px 20px rgba(5,150,105,0.15)',
        'glow-green':   '0 4px 20px rgba(5,150,105,0.15)',
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
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        drawLine: {
          from: { 'stroke-dashoffset': '100%' },
          to:   { 'stroke-dashoffset': '0' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
