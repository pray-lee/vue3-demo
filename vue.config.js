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
  // 打包不生成sourcemap
  productionSourceMap: false,
  devServer: {
    proxy: 'http://127.0.0.1:3000'
  }
}
