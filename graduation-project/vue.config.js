module.exports = {
  lintOnSave: true, // 在保存代码的时候开启eslint代码检查机制
  devServer: { // 实时保存、编译的配置段
    open: true, // 自动开启浏览器
    port: 12306, // 服务运行端口
    proxy: {
      '/api': {     //这里最好有一个 /
        target: 'http://localhost:8080',
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
