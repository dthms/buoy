module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
    },
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      white: '#FFFFFF',
      gray: {
        800: '#151A23',
        700: '#3C424C',
        600: '#515761',
        500: '#6C737F',
        400: '#A5ACB6',
        300: '#D3D6D9',
        200: '#F0F2F4',
        100: '#F9FAFB'
      },
      alt: {
        600: '#E4544B'
      },
      purple: {
        800: '#260C6E',
        700: '#422593',
        600: '#5A36BF',
        500: '#7454CF',
        400: '#9A7EE7',
        300: '#D2C6F6',
        200: '#EAE3FC',
        100: '#FBFAFF'
      },
      green: {
        800: '#00422C',
        700: '#025A43',
        600: '#0C6A4A',
        500: '#15845F',
        400: '#21AB7D',
        300: '#86D5BA',
        200: '#D2EFE5',
        100: '#F5FEFB'
      },
      yellow: {
        800: '#6D300E',
        700: '#8C3E0D',
        600: '#A64F07',
        500: '#B25C00',
        400: '#F59300',
        300: '#FFBE5C',
        200: '#FFE2A8',
        100: '#FFFAEB'
      },
      red: {
        800: '#750000',
        700: '#900909',
        600: '#BC1010',
        500: '#DC1818',
        400: '#F26464',
        300: '#FDA5A5',
        200: '#FFD7D7',
        100: '#FFF5F5'
      },
    },
    extend: {
      maxWidth: {
        'container': '1200px'
      },
      backgroundImage: theme => ({
        'video-bg': "url('./video-bg.png')"
      }),
      inset: {
        '-176': '-170px',
        '-240': "-360px"
      },
      lineHeight: {
        '384': '5rem'
      }
    }
  },
  variants: {},
  plugins: []
}
