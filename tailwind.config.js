/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#07111E',
        royal: '#0F2A4A',
        'surface-high': '#163564',
        electric: '#00D4FF',
        amber: '#C4976A',
        sage: '#D0DEDD',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
