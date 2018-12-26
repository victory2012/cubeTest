const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: ['./src/theme']
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before (app) {
      // 模拟数据接口，以及返回模拟数据
      app.get('/api/seller', function (req, res) {
        res.json({
          error: 0,
          data: [{ id: '11225daas', info: 'asdjajsdkjakls' }]
        })
      })
    }
  },
  chainWebpack (config) {
    config.resolve.alias.set('@', resolve('src')) // 配置路径
  }
}
