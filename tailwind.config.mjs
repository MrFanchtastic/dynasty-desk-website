/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A1628',
        'navy-light': '#0F2040',
        'navy-dark': '#060E1A',
        gold: '#C9A457',
        'gold-dark': '#A07C35',
        cream: '#F5EDD6',
        gray: '#8892A4',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
