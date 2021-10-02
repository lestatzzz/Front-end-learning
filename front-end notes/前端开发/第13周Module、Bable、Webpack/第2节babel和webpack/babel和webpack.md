- babel

  - 是什么

    ```js
    // 认识babel
    // 官网: babeljs.io
    // 在线编译 babeljs.io/repl
    // Babel是JavaScript编译器,用来将ES6的代码,转换成ES6之前的代码
    // 使用babel
    // Babel本身可以编译ES6的大部分语法,比如let、const、箭头函数、类
    // 但是对于ES6新增的API,比如Set、Map、Promise等全局对象,以及一些定义在全局对象上的方法(比如Object.assign/ Array.from)都不能直接编译,需要借助其他的模块
    
    //babel一般需要配合webpack来编译模块语法
    ```

    

  - ==使用方式==

    ```js
    // Babel有哪些使用方式
    // 在命令行工具中使用Babel
    ```

    

  - ==准备工作==

    ```js
    // 1. 什么是Node.js和npm
    // Node.js是个平台或者工具,对应浏览器
    // npm: node包管理工具
    
    // 2. 安装Node.js
    // npm install --save-dev @babel/core @babel/cli  安装最新版本
    
    // npm install --save-dev @babel/core@7.11.0 @babel/cli@7.10.5
    //  安装自己想要的版本
    
    // 3. 初始化项目
    // npm init -> package.json
    ```

    

  - ==编译ES6代码==

    ```js
    // 编译的命令
    // 在package.json文件中添加执行babel的命令
    // babel src -d lib
    
    // Babel的配置文件
    // .babelrc
     "devDependencies": {
        "@babel/cli": "^7.15.7",           // 命令行工具包
        "@babel/core": "^7.15.5",          // 核心包
        "@babel/preset-env": "^7.15.6"     // 配置文件
    // npm install @babel/preset-env --save-env
    // 创建配置文件.babelrc, 并配置
       {
         "presets": ["@babel/preset-env"]
       }
       
    // npm run build
    ```

    

- webpack入门

  - 是什么

    ```js
    // 认识webpack
    // webpack是静态模块打包器, 当webpack处理应用程序时,会将所有这些模块打包成一个或多个文件
    
    // 理解webpack
    // 模块
    // webpack可以处理js/css/图片、图标字体等
    
    // 静态
    // 开发过程中存在与本地的js/css/图片/图标/字体等文件,就是静态的
    // 动态的内容,webpack无法处理,只能处理静态的 
    ```

    

  - ==初体验==

    ```js
    // 初始化项目
    // 安装webpack需要的包
    // 配置webpack
    // 打包并测试
    ```

    

- webpack的核心概念

  - ==entry和output==

    ```js
    // entry
    // output
    ```

    

  - ==loader==

    ```
    // 1. 什么是loader
    // loader让webpack能够去处理那些非js文件的模块
    
    // 2. babel-loader
    // npm install --save-dev babel-loader
    
    // 3. 安装babel
    // npm install --save-dev @babel/core @babel/preset-env
    
    // 4. 配置babel-loader
    // https://www.webpackjs.com/loaders/
    
    // 5. 引入core-js
    // 编译新增API
    // npm install --save-dev core-js
    // 在原js文件中引入core-js
    // import "core-js/stable"
    
    // 6. 打包并测试
    // npm run webpack
    ```

    

  - ==plugins==

    ```
    // 1. 什么是plugins
    // 插件可以用于执行范围更广的任务
    // 2. html-webpack-plugin
    // npm install --save-dev html-webpack-plugin
    // 3. 配置html-webpack-plugin插件
    // const HtmlWebpackPlugin = require('html-webpack-plugin');
    ```

    

- webpack的应用

  - 处理CSS文件
  - 处理图片

