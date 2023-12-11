
# 框架介绍
* vue3+webpack5框架
* vue-i18n国际化语言
* element组件库
* 支持主题切换，暗黑模式
   * src/index.html是入口的html文件，src/pages/下面的都会共用，
   * src/pages/main/index.js 是启动的入口文件，编译会生成index.html首先加载（本地启动可以看到：http://localhost:3001/），
   * src/pages/[name]/index.js 会被编译为[name].html，后面根据不同可以跳转到不同的html文件(比如：http://localhost:3001/home.html,
   比如：http://localhost:3001/our.html)，
   * src/pages/[name]/index.css 设置样式
   * src/router 是配置的路由（即使是多页面应用下也可以共用router，可以减少代码冗余，不需要这些配置的话可以在对应的src/pages/[name]/index.js中配置），
   ### 详细看到dist的生成文件就非常清晰了
   * src/view下面是路由的vue文件，
   * src/i18n是国际语言配置，
   * src/component是公共组件，
# 环境
node版本14
