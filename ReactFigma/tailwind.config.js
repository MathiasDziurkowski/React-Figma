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
        'banner': "url('./images/banner.png')",
        'card' : "url('./images/dining.png')",
        'carousel': "url('./images/carousel-1.png')",
      },
      backgroundColor: {
        'marromCard': "#FFF3E3",
        'marromTexto': "#B88E2F",
        'marromCarousel': "#FCF8F3",
        'marromBotao': '#B88E2F',
      },
      height: {
        '720' : '720px',
        '559': '559px',
        'card': '443px',
        'carousel': '670px',
        'Card': '145px',
        'imagemCarousel' : '582px',
        'cardCarousel': '130px',
      },
      width:{
        'card': '643px',
        'cardTexto': '559px',
        'Card': '285px',
        'imagemCarousel': '404px' ,
        'cardCarousel': ' 217px',
      },
      colors: {
        'marromTexto': "#B88E2F",
        'cinzaDesconto' : '#B0B0B0',
        'cinzaDescricao' : '#898989',
      },
    },
  },
  plugins: [],
}

