// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/', // 本地测试服务器，根目录指向
    buildPath: './', // 打包发布，根目录指向
    productionSourceMap: false // 打包发布，是否包含sourcemap
  },
  dev: {
    port: 8080,
    proxyTable: {
        // 转发规则示例： '/public': 'http://121.41.18.128:8080'
    }
  }
}
