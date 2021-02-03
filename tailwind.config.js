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
      }
    }
  },
  variants: {},
  plugins: []
}
