# 第1节CSS3基础入门

- CSS3简介
    - CSS（cascading style sheet，层叠式样式表）是用来给HTML标签添加样式的语言
    - CSS3是CSS的最新版本，增加了大量的样式、动画、3D特效和移动端特性

    ![Screen_Shot_2021-04-03_at_15.10.18](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第1节CSS3基础入门/Screen_Shot_2021-04-03_at_15.10.18.png)

    - CSS使样式和结构分离，样式和结构不用“杂糅着写”，而是彼此分开，HTML就负责结构，CSS负责样式
    - HTML和CSS通过“选择器”结合

        ![Untitled](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第1节CSS3基础入门/Untitled.png)

    - 给特定的一些标签添加样式：
    选择器代表的是“同一类(class)” 标签

      ![Untitled 1](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第1节CSS3基础入门/Untitled 1.png)  

    - CSS就是样式的“清单”，要书写合适的选择器，然后把指定元素的样式“一条一条罗列”出来
    - CSS没有加减乘除、与或非、循环、选择、判断，CSS不是“编程”，就是简单直接的罗列样式
    - **背诵CSS属性是非常重要的**，属性背诵熟练程度决定了做网页的速度
- CSS3基本使用
    - CSS3的书写位置
        - 内嵌式
            - 在学习CSS时，最常使用内嵌式，将其内嵌在.html文件中
            - 在<head></head>标签对中，书写<style></style>标签对，里面书写CSS语句
        - 外链式
            - 可以将CSS单独存为.css文件，然后使用<link>标签引入它

                ![Untitled 2](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第1节CSS3基础入门/Untitled 2.png)

            - 外链式的优点：多个html网页，可以共用一个css样式表文件
        - 导入式

            导入式是最不常见的样式表导入方法

            ```html
            <style>
            	@import url(css/css.css)
            </style>
            ```

            使用导入式引入的样式表，不会等待css文件加载完毕，而是会立即渲染HTML结构，所以页面会有几秒钟的“素面朝天”的时间

        - 行内式
            - 样式可以直接通过style属性写在标签身上
            `<h2 style="color: red;">我是一个二级标题</h2>`
            - 行内式**牺牲了样式表的批量设置样式的能力**，只能给一个标签设置样式，所以不常用
            - 后台工程师经常使用行内式（给某些数据标记）
    - CSS3的基本语法

        ![Untitled 3](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第1节CSS3基础入门/Untitled 3.png)

        - 最后一条样式可以不书写分号

            ![Untitled 4](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第1节CSS3基础入门/Untitled 4.png)

        - 可以不换行

            ![Untitled 5](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第1节CSS3基础入门/Untitled 5.png)

        - CSS3的注释是 /* */ （cmd + / 可以快速输入）

        ```html
        p {
        	/* 设置文字字号 */
        	font-size: 40px;
        }
        ```

