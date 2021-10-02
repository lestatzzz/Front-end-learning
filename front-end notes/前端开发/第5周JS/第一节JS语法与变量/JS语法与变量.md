![Screen Shot 2021-06-08 at 20.45.10](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 20.45.10.png)

![Screen Shot 2021-06-08 at 20.54.58](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 20.54.58.png)

![Screen Shot 2021-06-08 at 20.56.22](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 20.56.22.png)

- JavaScript的书写位置
  - 在<body>中<scirpt>标签，在内部书写JavaScript代码
  - 将代码单独保存为.js格式文件，然后在HTML文件中使用<scirpt src=""> </script>这样的形式引入它
    ![Screen Shot 2021-06-08 at 21.02.12](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 21.02.12.png)

- 认识输出语句

  - alert()语句———弹出警告框

    - - ![Screen Shot 2021-06-08 at 21.15.16](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 21.15.16.png)

        ![Screen Shot 2021-06-08 at 21.15.39](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 21.15.39.png)

        ![Screen Shot 2021-06-08 at 21.16.09](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 21.16.09.png)

    

  - console.log()语句———控制台输出

    ![Screen Shot 2021-06-08 at 21.23.49](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 21.23.49.png)

- 学会处理报错

  ![Screen Shot 2021-06-08 at 21.42.04](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 21.42.04.png)

  ![Screen Shot 2021-06-08 at 21.43.03](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 21.43.03.png)

  ![Screen Shot 2021-06-08 at 21.44.52](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 21.44.52.png)

  - 控制台也是一个REPL环境，可以使用它临时测试表达式的值

    - 浏览器的控制台可以直接书写代码测试

    ![Screen Shot 2021-06-08 at 21.49.34](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 21.49.34.png)

- 变量

  - 变量是计算机语言中能储存计算结果或能表示值抽象概念

  - 变量不是数值本身，它们仅仅是一个用于存储数值的容器

  - 定义变量

    - 要想使用变量，第一步就是声明它，并给它赋值

      ![Screen Shot 2021-06-08 at 21.55.46](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 21.55.46.png)

  - 变量的使用

    - 当变量被赋值后，就可以使用了

      ![Screen Shot 2021-06-08 at 21.57.24](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 21.57.24.png)

    - 变量的值可以被改变，改变变量值不再需要书写var了

      ![Screen Shot 2021-06-08 at 22.01.56](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 22.01.56.png)

  - 变量的合法命名

    - 只能由字母、数字、下划线、$（美元符号）组成，但==不能以数字开头==
    - 不能是==关键字==或==保留字==
    - 变量名==大小写敏感==，a和A是两个不同的变量![Screen Shot 2021-06-08 at 22.04.42](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 22.04.42.png)

  - 优秀的变量命名法

    - ==驼峰命名法==：mathTestScore
    - ==c风格==：math_test_score
    - ==匈牙利命名法==：iMathTestScore![Screen Shot 2021-06-08 at 22.11.22](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 22.11.22.png)

  - 变量的默认值

    - 一个变量值定义，但没有赋初值，默认值是==undefined==

    - 一个变量只有被var定义，并赋初值之后，才算正式初始化完成

      ![Screen Shot 2021-06-08 at 22.13.30](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 22.13.30.png)

  - 变量的常见错误

    - 不用var定义，而直接将值赋予它，虽不引发报错，但==会产生作用域问题==

      ![Screen Shot 2021-06-08 at 22.16.34](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 22.16.34.png)

    - 尝试使用一个既没有被var定义过，也没有赋过值的字符，就会产生引用错误

      ![Screen Shot 2021-06-08 at 22.18.21](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 22.18.21.png)

  - 等号表示赋值

    ![Screen Shot 2021-06-08 at 22.19.19](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 22.19.19.png)

  - 同时声明多个变量

    - 是用逗号同时声明和初始化两个变量

      ```js
      var a = 0, b = 0;
      ```

- 变量声明提升

  - 变量声明的提升：你可以提前使用一个稍后才声明的变量，而不会引发异常

  - 在执行所有代码前，JS有预解析阶段，会预读所有变量的定义

    ![Screen Shot 2021-06-08 at 22.24.59](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第5周JS/第一节JS语法与变量/Screen Shot 2021-06-08 at 22.24.59.png)

  - 注意事项

    - 变量声明的提升是JavaScript的特性，所以经常出面试题
    - 在实际开发时，不要可以使用变量声明提升特性。一定要先定义并给变量赋初值，然后再使用变量

