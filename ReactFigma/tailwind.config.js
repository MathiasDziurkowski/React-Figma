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
        'banner': "url('./public/images/banner.png')",
        'card' : "url('./images/dining.png')",
      } 
    },
    height: {
      '720' : '720px',
      'card': '443px',
    },
    width:{
      'card': '643px',
      'cardTexto': '559px',
    },
    backgroundColor: {
      'marromCard': "#FFF3E3",
      'marromTexto': "#B88E2F",
    },
    colors: {
      'marromTexto': "#B88E2F",
    },
  },
  plugins: [],
}

