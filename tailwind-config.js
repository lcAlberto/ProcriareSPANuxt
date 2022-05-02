module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      grayDark: '#273444',
      gray: '#8492a6',
      grayLight: '#d3dce6',

      primary: '#6907F2',
      secondary: '#9904D9',
      neuter: '#DCE6F2',
      success: '#82e242',
      warning: '#F27405',
      danger: '#F20505'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
  ]
  // content: [
  //   './node_modules/flowbite/**/*.js'
  // ]
}
