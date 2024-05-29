/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'radial-at-tl': 'radial-gradient(at top left, var(--tw-gradient-stops))',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
      }),
    },
  },

  plugins: [],
}


