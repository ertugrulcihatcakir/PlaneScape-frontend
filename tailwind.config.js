/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'primary-color':'#4A0096',
        'home-bg':'#E8DDFF',
        'box-bg':'#F6F4F8'
      },
      screens: {
        'xs': '370px',  // Yeni bir breakpoint ekliyoruz. 
      },
    }, 
  },
  plugins: [],
}