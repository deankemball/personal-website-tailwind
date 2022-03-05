module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'robo': ['roboto mono', 'regular', 'semi-bold']
    },
    extend: {
      boxShadow: {
        'md': '0 0.1rem 0.2rem rgba(0, 0, 0, 0.24), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2), 0 0.1rem 0.8rem rgba(0, 0, 0, 0.18)',
        'inner': 'inset 0.4rem 0.4rem 1rem 0 rgba(255, 0, 0, 0.25), inset -0.4rem -0.4rem 1rem 0 rgba(255, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}


// // .box-shadow: {
//   0px 1px 2px rgba(0, 0, 0, 0.16), 
//   0px 2px 4px rgba(0, 0, 0, 0.12), 
//   0px 1px 8px rgba(0, 0, 0, 0.1)
// }