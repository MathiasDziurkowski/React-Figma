/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    fontFamily:{
      'montserrat': ['montserrat', 'sans-serif'],
      'poppins': ['poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'banner': "url('./public/images/banner.png')"
      } 
    },
    height: {
      '720' : '720px',
    },
    backgroundColor: {
      'marrom': 
    }
  },
  plugins: [],
}

