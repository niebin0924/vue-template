var resolve = require('path').resolve

let host = process.env.VUE_APP_BASE_API_URL

module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: host,
    host: '0.0.0.0',
    port: 80,
    disableHostCheck: true
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('COMP', resolve(__dirname, './src/components'))
      .set('SERVICE', resolve(__dirname, './src/services'))
      .set('ASSETS', resolve(__dirname, './src/assets'))
      .set('IMG', resolve(__dirname, './src/assets/img'))
  }
}
