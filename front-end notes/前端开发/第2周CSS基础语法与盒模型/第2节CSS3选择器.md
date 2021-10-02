# 第2节CSS3选择器

- 传统CSS2.1选择器
    - 标签选择器和id选择器
        - 标签选择器也成元素选择器、类型选择器，它直接使用元素的标签名当作选择器，将选择页面上所有该种标签

            ![Untitled](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled.png)

        - 标签选择器将选择页面上所有该种标签，无论这个标签所处位置的深浅

            ```html
            <p>我们一定<span>不负韶华，只争朝夕</span></p>
            <ul>
            	<li>小明</li>
            	<li>小红</li>
            	<li><span>小强</span></li>
            </ul>
            ```

        - 标签选择器“覆盖面”非常大，所以**通常用于标签的初始化**

            ```css
            ul {
            	/* 去掉无序列表的小圆点 */
            	list-style: none;
            }

            a {
            	/* 去掉超级链接的下划线 */
            	text-decoration: none;
            }
            ```

        - 标签可以有id属性，是这个标签的**唯一**标识
        `<p id="para1">我是一个段落</p>`
        - id的名称只能**由字母、数字、下划线、短横构成**，且**不能以数字开头**，字母区分大小写，但习惯上一般为小写字母
        - **同一个页面上不能有相同id的标签**
        - CSS选择器可以使用井号#前缀，选择指定id的标签

            ```css
            <p id="para1">我是一个段落<p>

            #para1 {
            	color: red;
            }
            ```

    - class选择器
        - class属性表示“类名”
        `<p class"warning">我是段落</p>`
        - 类名的命名规范和id的命名规范相同。只能**由字母、数字、下划线、短横构成**，且**不能以数字开头**，字母区分大小写，但习惯上一般为小写字母
        - 使用点.前缀选择指定class标签

            ```css
            .warning {
            	color: red;
            }
            ```

        - **多个标签可以为相同类名**

            ```css
            <p class="warning">我是段落</p>
            <p class="warning">我是段落</p>

            <ul>
            	<li>我是列表项</li>
            	<li class="warning">我是列表项</li>
            	<li>我是列表项</li>
            	<li class="warning">我是列表项</li>
            </ul>
            ```

        - **同一个标签可以同时属于多个类，类名用空格隔开**

            ```css
            <p class="warning spec">我是段落</p>

            .warning {
            	color: red;
            }
            .spec {
            	/* 文字倾斜 */
            	font-style: italic;
            }
            ```

            携带类名的标签的样式和标签内类名的顺序无关，在css清单中类选择器的顺序决定了标签的样式

            比如.warning中color为red，.spec中color为blue，那么谁放在后面，标签的颜色就跟谁

            ```css
            .warning {
            	color: red;
            }
            .spec {
            	color: blue
            }
            <p class="warning spec">我是段落</p>
            显示为蓝色
            ```

        - **原子类**：在做网页项目前，可以**将所有的常用字号、文字颜色、行高、外边距、内边距等都设置为单独的类**

            ![Untitled 1](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 1.png)

            - HTML标签可以按需选择它的类名，这样可以快速的添加一些常用样式
    - 复合选择器

        ![Untitled 2](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 2.png)

        [复合选择器.html](%E7%AC%AC2%E8%8A%82CSS3%E9%80%89%E6%8B%A9%E5%99%A8%201563b3f3a2824b3c9e772b3208974b27.html)

        - CSS选择器中，使用空格表示“后代”

            ![Untitled 3](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 3.png)

        - “后代”并不一定是“儿子”

            ![Untitled 4](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 4.png)

        - 后代选择器可以有很多空格，隔开好几代

        ```html
        .box ul li .spec em {
        	color: red;
        }

        <div class="box">
        	<ul>
        		<li>
        			<p class="spec">我是段落<em>强调文字</em></p>
        		</li>
        	</ul>
        </div>
        ```

    - **伪类**
        - 伪类是添加到选择器的描述性词语，指定要选择的元素的**特殊状态**，超级链接拥有4个特殊状态

            ![Untitled 5](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 5.png)

        - a标签的伪类书写，要按照“爱恨准则”的顺序，否则会有伪类不生效

            ![Untitled 6](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 6.png)

- CSS3新增选择器
    - 元素关系选择器

        ![Untitled 7](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 7.png)

        这三个选择器都是从IE7开始兼容

        - 子选择器
            - 当使用 > 符号分割两个元素时，它只会匹配那些作为第一个元素的直接后代元素，即两个标签为父子关系

                ```css
                .box>p {
                	color: red;
                }
                ```

            - 后代选择器不一定限制是子元素

                ```css
                .box p {
                	color: red;
                }
                ```

        - 相邻兄弟选择器
            - 相邻兄弟选择器（+）介于两个选择器之间，当第二个元素紧跟在第一个元素之后，并且两个元素都是属于同一个父元素的子元素，则第二个元素将被选中
            - 即“a+b”就是选择“**紧跟在a后面的一个b**”

                ![Untitled 8](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 8.png)

        - 通用兄弟选择器

            通用兄弟选择器（~），a~b选择a元素之后所有同层级b元素

            ![Untitled 9](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 9.png)

    - 序号选择器

        ![Untitled 10](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 10.png)

        ![Untitled 11](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 11.png)

        - :first-child

            :first-child表示“选择第一个子元素”，比如下面的例子就表示选择.box1盒子中的第一个p

            ```css
            .box1 p:first-child {
            	color: red;
            }

            <div class="box1">
            	<p>1</p>   -> 将被选择
            	<p>2</p>
            	<p>3</p>
            	<p>4</p>
            </div>
            ```

        - :last-child

            :last-child表示“选择最后一个子元素”，比如下面的例子就表示选择.box1盒子中的最后一个p

            ```css
            .box1 p:last-child {
            	color: red;
            }

            <div class="box1">
            	<p>1</p>   
            	<p>2</p>
            	<p>3</p>
            	<p>4</p>  -> 将被选择
            </div>
            ```

        - :nth-child()
            - :nth-child()可以选择任意序号的子元素

                ```css
                .box2 p:nth-child(3) {
                	color: green;
                }

                <div class="box2">
                	<p>1</p>
                	<p>2</p>
                	<p>3</p>  -> 将被选择
                	<p>4</p>
                </div>
                ```

            - :nth-child()可以写成**an + b**的形式，**表示从b开始每a个选一个**，注意**不能写为b + an**

                ```css
                .box2 p:nth-child(3n + 2) {
                	color: green;
                }

                <div class="box2">
                	<p>1</p>
                	<p>2</p>  -> 将被选择
                	<p>3</p>
                	<p>4</p>
                	<p>5</p>  -> 将被选择
                	<p>6</p>
                	<p>7</p>
                	<p>8</p>  -> 将被选择
                </div>
                ```

            - 2n + 1等价于odd，表示奇数

                ```css
                /* 两种写法表示的意思完全一致 */
                .box2 p:nth-child(2n + 1) {
                	color: green;
                }

                .box2 p:nth-child(odd) {
                	color: green;
                }
                ```

            - 2n等价于even，表示偶数

                ```css
                /* 两种写法表示的意思完全一致 */
                .box2 p:nth-child(2n) {
                	color: green;
                }

                .box2 p:nth-child(even) {
                	color: green;
                }
                ```

        - :nth-of-type()

            ![Untitled 12](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 12.png)

            - :nth-of-type()将选择同种标签指定序号的子元素

                ![Untitled 13](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 13.png)

        - :nth-last-child()

            :nth-last-child()将选择倒数指定序号子元素

            ```css
            .box2 p:nth-last-child(2) {
            	color: green;
            }

            <div class="box2">
            	<p>1</p>
            	<p>2</p>
            	<p>3</p>  -> 将被选择
            	<p>4</p>
            </div>
            ```

        - :nth-last-of-type()

            :nth-last-of-type()将选择同种标签倒数指定序号的子元素

            ```css
            .box2 p:nth-last-of-type(2) {
            	color: green;
            }

            <div class="box2">
            	<p>1</p>
            	<p>2</p>
            	<h3>我是1号h3</h3>
            	<h3>我是2号h3</h3>
            	<p>3</p>  -> 将被选择
            	<p>4</p>
            	<h3>我是3号h3</h3>
            	<h3>我是4号h3</h3>
            </div>
            ```

    - 属性选择器

        ![Untitled 14](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 14.png)

        从IE9开始兼容

    - CSS3新增伪类

        ![Untitled 15](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第2周CSS基础语法与盒模型/第2节CSS3选择器/Untitled 15.png)

    - **伪元素**
        
        - CSS3新增了“伪元素”特性，顾名思义，表示虚拟动态创建的元素
        - 伪元素用双冒号表示，IE8可以兼容单冒号
- **::before** 创建一个伪元素，其将成为匹配选中的**元素的第一个子元素**，必须**设置content属性**表示其中的内容
        
            ```css
            a::before {
            	content: "🌟"
            }
    ```
        
        - **::after** 创建一个伪元素，其将成为匹配选中的**元素的最后一个子元素**，必须**设置 content 属性**表示其中的内容
        - **::selection** CSS伪元素应用于**文档中被用户高亮的部分（使用鼠标圈选的部分）**
        - **::first-letter**会选中某元素中（必须是块级元素）**第一行的第一个字母**
        - **::first-line**会选中某元素中（必须是块级元素）**第一行全部文字**
- **层叠性和选择器权重计算**
    - CSS全名叫做“层叠式样式表”，层叠性是它很重要的性质
    - 层叠性：**多个选择器可以同时作用于同一个标签，效果叠加**
    - CSS的层叠性冲突处理的规则：**id权重>class权重>标签权重**

        ```css
        p {
        	color: red;
        }

        #para {
        	color: green;
        }

        .spec {
        	color: blue;
        }
        ```

    - 复杂选择器可以通过**（id的个数，class的个数，标签的个数）**的形式，计算权重
    - 如果我们需要**将某个选择器的某条属性提升权重，可以在属性后面写!important**

        很多公司不允许使用!important，因为这会带来不经意的样式冲突

        ```css
        .spec {
        		color: blue !important;
        }
        ```

 

课程重点：

1. CSS选择器有哪些？请按CSS2.1和CSS3分别回答
2. 类名的使用很灵活，它有哪些用法？
3. 什么是伪类？什么是伪元素？

课程难点：选择器权重计算

