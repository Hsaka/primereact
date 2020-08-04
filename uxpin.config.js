module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/button/Button.js',
        ]
      }
    ],
    webpackConfig: 'webpack.config.js'
  },
  name: 'PrimeReact Test'
};