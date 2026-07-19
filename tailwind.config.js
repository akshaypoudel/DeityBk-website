/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // ── 4 core tokens (channel format → full alpha support) ──
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          soft: 'var(--accent-soft)',
          2: 'var(--accent-2)',
        },
        text: 'rgb(var(--text) / <alpha-value>)',
        danger: 'rgb(var(--danger) / <alpha-value>)',

        // ── derived (full colours) ──
        muted: 'var(--muted)',
        border: 'var(--border)',
        glass: 'var(--glass)',
        'on-accent': 'var(--on-accent)',
        overlay: 'var(--overlay)',

        // ── back-compat aliases (all resolve to the 4 core tokens) ──
        bg: 'rgb(var(--primary) / <alpha-value>)',
        surface: 'rgb(var(--secondary) / <alpha-value>)',
        card: 'rgb(var(--secondary) / <alpha-value>)',
        fg: 'rgb(var(--text) / <alpha-value>)',
        brand: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          soft: 'var(--accent-soft)',
        },
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
        'glow-strong': 'var(--shadow-glow-strong)',
        card: 'var(--shadow-card)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'drawer-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
        'fade-in': 'fade-in 0.2s ease-out both',
        'drawer-in': 'drawer-in 0.3s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
}
