/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "notoSans": ["Noto Sans", 'sans-serif']
      },
      backgroundImage: {
        "waves" : "url('/waves-haikei.svg')",
        "line-background" : "url('/line-background.svg')",
        "home": "url('/pexels-fauxels-3183197.jpg')"
      },
      aspectRatio: {
        "960/540": "960/540",
        "900/600": "900/600",
      }, 
      colors: {
        "Mviolet" : "rgb(158 0 241)",
        "Mbege" : "#e98050ff",
        "Mpink": "#e2b4c2f3"
      }
    },
  },
  plugins: [],
}