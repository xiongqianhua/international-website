/*
 * @Author: qianhua.xiong
 */
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function setEntry() {
  const files = glob.sync('./src/pages/**/index.js')
  const entry = {}
  files.forEach(file => {
    const ret = file.match(/^\.\/src\/pages\/(\S*)\/index\.js$/)
    if (ret) {
      entry[ret[1]] = {
        import: file,
        dependOn: 'vue_vendors',
      }
    }
  })
   // 拆分vue依赖
   entry['vue_vendors'] = {
    import: ['vue'],
    filename: 'commom/[name].js'
  }
  return entry
}
function getTemplate() {
    const files = glob.sync(`./src/index.html`)
    return files[0]
}
  
function setHtmlPlugin() {
    const files = glob.sync('./src/pages/**/index.js')
    const options = []
    files.forEach(file => {
      const ret = file.match(/^\.\/src\/pages\/(\S*)\/index\.js$/)
      if (ret) {
        const name = ret[1]
        options.push(new HtmlWebpackPlugin({
          filename: name === 'main'?'index.html' :`${name}.html`,
          template: getTemplate(),
          chunks: ['vue_vendors', name,]
        }))
      }
    })
    return options
}
module.exports = {
  setEntry,
  setHtmlPlugin
}