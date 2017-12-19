# mint-ui

> Vue.js workflow with jade/sass/stylus, without unit tests.<br>
> Debug with eslint.<br>
> 使用vue-workflow构建mint-ui

## Demo

[Online 在线演示](http://rubygba.github.io/test/mint-ui/)

## Build Setup

``` bash
# 初始化
# install dependencies
npm install

# 本地服务器调试
# serve with hot reload at localhost:8080
npm run dev

# 打包发布
# build for production with minification
npm run build
```

`config.js` 配置监听端口、远程服务器api转发规则

### Bug

Windows下64位node安装 `node-sass` 无法生成正确的二进制文件， `npm install` 后需要 `npm rebuild node-sass`
