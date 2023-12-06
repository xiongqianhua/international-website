# 项目背景
给公司写一个响应式官网页面，公司追求国际化，要求支持中英法三国语言，主题背景可以切换，所以随手快速搭了一个框架，可以直接跑起来先
需要的可以直接拿来用
# 框架介绍
vue3+webpack5框架
vue-i18n国际化语言
vue-router4路由
element组件库
支持主题切换，暗黑模式
# 环境
node版本14 
 
# 分为多页面应用和单页面应用
## 单页面应用
   切换到 main分支
## 多页面应用
   切换到 multiple-pages分支
   src/index.html是入口的html文件，src/pages/下面的都会共用
   src/pages/main/index.js 是启动的入口文件，编译会生成index.html首先加载
   src/pages/[name]/index.js 会被编译为[name].html，后面根据不同可以跳转到不同的html文件
   src/router 是配置的路由
   src/view下面是路由的vue文件
   src/i18n是国际语言配置
   src/component是公共组件
# 本地启动
npm install
npm run dev
# 部署
npm run build


