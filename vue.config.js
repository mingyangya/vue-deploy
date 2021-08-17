const path = require('path')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-deploy/'
    : '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve("src/components"))

    // 去掉 preload prefetch
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/css/config.scss')
      ]
    }
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 9999,
    overlay: {
      warnings: false,
      errors: true
    },
    disableHostCheck: true
  }
}
