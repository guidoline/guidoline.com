const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  components: 'src/components/**/[A-Z]*.vue',
  sections: [
    {
      name: 'Guide de style',
      components: 'src/components/Styleguide/[A-Z]*.vue'
    },
    {
      name: 'Event',
      components: 'src/components/Event/[A-Z]*.vue'
    },
    {
      name: 'Newsletter',
      components: 'src/components/Newsletter/[A-Z]*.vue'
    },
    {
      name: 'Post',
      components: 'src/components/Post/[A-Z]*.vue'
    },
    {
      name: 'Les autres',
      components: 'src/components/[A-Z]*.vue'
    }
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader'
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  },
  require: [
    './src/assets/css/styles.css'
  ]
}
