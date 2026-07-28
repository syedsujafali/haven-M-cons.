/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#2a4b3c',
        'forest-deep': '#14271c',
        clay: '#C8714A',
        terracotta: '#B5593A',
        linen: '#F6F4EE',
        sand: '#EDE9DF',
        olive: '#6B7056',
        sage: '#8FA882',
        'pale-sage': '#EDF2EC',
        teal: '#3D7A6F',
        background: '#F6F4EE',
        foreground: '#2a4b3c',
        card: '#EFEDE6',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter Tight', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'marquee-slow': 'marquee 38s linear infinite',
        'marquee-fast': 'marquee 16s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.9s ease-out forwards',
      },
      backgroundImage: {
        'mesh-warm': 'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(200,113,74,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 80%, rgba(143,168,130,0.15) 0%, transparent 60%)',
        'mesh-sage': 'radial-gradient(ellipse 70% 60% at 80% 20%, rgba(143,168,130,0.2) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 20% 80%, rgba(200,113,74,0.12) 0%, transparent 60%)',
        'mesh-forest': 'radial-gradient(ellipse 60% 80% at 10% 50%, rgba(200,113,74,0.3) 0%, transparent 50%), radial-gradient(ellipse 50% 60% at 90% 20%, rgba(61,122,111,0.25) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
