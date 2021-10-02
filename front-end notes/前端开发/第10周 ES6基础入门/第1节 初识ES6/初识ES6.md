- ES6简介
  - ES6是什么
    - ECMAScript这门语言的第6代标准
  - ECMAScript是什么
    - 由ECMA(欧洲计算机制造商协会)这个标准化组织制定的一个语言标准
  - ES与JS之间的关系
    - ==JavaScript(浏览器端) = ECMAScript(语法 + API) + DOM + BOM==
  - ES6的兼容性
    - 主流浏览器的最新版本几乎全部支持ES6
    - IE老版本等不支持的浏览器, 可以用==Babel==转码
- let和const
  - let和const是什么
    - let代替var声明变量 const声明常量
    - ==变量一旦初始化之后可以重新赋值; 常量一旦初始化,就不可以重新赋值,否则就会报错==
  - const
    - ==为一旦初始化就不希望重新赋值的情况而设计出的==
    - 使用const声明常量, 一旦声明, 就必须立即初始化, 不能留到以后赋值
    - const声明的常量, ==允许在不重新赋值的情况下修改它的值== 
      - ==基本数据类型不可以修改==
      - 引用数据类型
        ![image-20210829204324567](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第10周 ES6基础入门/第1节 初识ES6/image-20210829204324567.png)
    - 如果没有确定是变量还是常量, 就先使用const来声明
  - let、const和var的区别
    - 重复声明
      - 已经存在的变量或常量,又声明了一遍
      - var允许重复声明, let和const不允许(==会报错==)
        ![image-20210829205228492](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第10周 ES6基础入门/第1节 初识ES6/image-20210829205228492.png)
        这种情况也会报错
    - 变量提升
      - var会提升变量的声明到当前作用域的顶部
        ![image-20210829205556661](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第10周 ES6基础入门/第1节 初识ES6/image-20210829205556661.png)
      - let、const不存在变量提升(==会报错==)
      - 养成良好的编程习惯,对于所有的变量或常量,做到先声明,后使用
    - 暂时性死区
      - 只要作用域内存在let、const, 它们所声明的变量或常量就自动“绑定”这个区域, 不再受到外部作用域的影响
    - window对象的属性和方法(全局作用域中)
      - 全局作用域中, var声明的变量, 通过function声明的函数, 会自动变成window对象的属性或方法
      - let/const不会
    - 块级作用域
      - var没有块级作用域
      - let/const有块级作用域
      - 作用域链: 内层作用域—>外层作用域—>…—>全局作用域
      - 块级作用域: {}, for, while, do while, if, switch
  - let和const的应用
    - 使用var
      ![2.let 和 const 的应用-var](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第10周 ES6基础入门/第1节 初识ES6/源码/图/2.let 和 const 的应用-var.png)
    - 使用闭包
      ![3.let 和 const 的应用-闭包](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第10周 ES6基础入门/第1节 初识ES6/源码/图/3.let 和 const 的应用-闭包.png)
    - 使用let/const
      ![4.let 和 const 的应用-let](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第10周 ES6基础入门/第1节 初识ES6/源码/图/4.let 和 const 的应用-let.png)

