/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', '"Manrope"', 'system-ui', 'sans-serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif']
      },
      colors: {
        base: '#ffffff',
        text: '#0b0f1a',
        muted: '#4b5568',
        accent: '#ffb454',
        accent2: '#0ea5e9',
        card: 'rgba(0,0,0,0.02)',
        border: 'rgba(0,0,0,0.08)'
      },
      boxShadow: {
        card: '0 12px 36px rgba(0,0,0,0.35)',
        glow: '0 20px 60px rgba(0,0,0,0.3)'
      },
      borderRadius: {
        xl2: '18px'
      }
    }
  },
  plugins: []
};
