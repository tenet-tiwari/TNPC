// /** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Hero/logo1.jpg')",
        'not-authorized':"url('/src/assets/Extra/logo1.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      animation: {
       'bounce-slow': 'bounce-slow 3s infinite',
        'fadeIn': 'fadeIn 2s ease-in-out',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}



// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         scroll: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-50%)' },
//         },
//       },
//       animation: {
//         scroll: 'scroll 20s linear infinite',
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// };
