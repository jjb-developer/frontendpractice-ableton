/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html}"],
  theme: {
    screens: {
  	  ss: '320px',
  	  xs: '428px',
      xm: '534px',
  	  sm: '640px',
  	  md: '768px',
      ml: '795px',
  	  lg: '1024px',
  	  xl: '1280px'
    },
    extend: {
      colors: {
        crema:'#fbffa7',
        cielo:'#b1c5ff',
        turquesa:'#b6ffc0',
        tomato:'#ff764d',
        lila:'#d5b3ff',
        azul:'#0000ff',
        gris:'#18181b'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ],
}
