/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    relative : true,
   transform: (content) => content.replace(/taos:/g, ''),
    files :  ['./*.{html,js}'],
  },
    // ["./*.html"],
  theme: {
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      backgroundImage :{
        "contact_section" : "linear-gradient(to right bottom, rgba(0, 189, 0, 0.168), rgba(1, 87, 1, 0.612)), url('../images/illustration3.jpg')",
      }
    },
  },
  plugins: [
    require('taos/plugin')
  ],
}

