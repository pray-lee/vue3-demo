const path = require('path')

const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? '/vue3-demo/' : '/'
module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false,
  devServer: {
    // 在 config/index里面设置了baseurl之后，这里就不用设置了，相当于不走这个proxy代理，直接走本地。如果这个写了代理的话，config/index里的开发环境就不用写了。
    // proxy: 'http://localhost:3000'
  }
}
