# 第2节HTML5基础语法与标签

- HTML5语法与基础标签
    - 互联网基本原理

        在本地开发，在服务器共享：本地编写好.html/.css/.js上传到服务器

        HTTP协议：输入网址→HTTP请求，服务器会正确识别发来的HTTP请求，分析出用户想看的是哪个文件夹中的哪个文件→HTTP响应

        Hypertext Transfer Protocol 超文本传输协议，互联网数据传输的常见协议

        一次HTTP事务由“HTTP请求”和“HTTP响应“完成

    HTML5基础入门 （Hyper Text Markup Language）

    - 创建第一个网页
        1. 创建.html文件
        2. HTML骨架的生成
        输入!（英文模式下输入的感叹号），按tab键，即可自动生成HTML5骨架
    - 浏览网页的方法

        直接在文件夹中双击网页图标，即可查看网页
        给VSCode安装Live Server插件，可以自动刷新网页，“实时热更新”
        安装完插件后，在html文件中，按cmd+shift+p，选择“Open With Live Server”
        .html文件必须放在文件夹里，且该文件夹必须在VSCode中打开

    - 认识HTML5骨架

        ```html
        <!DOCTYPE html>  # 文档类型声明DTD
        <html lang="en"> # <html></html>标签对，由<head></head>和<body></body>组成
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            你好！今天你过得怎么样？
        </body>
        </html>
        ```

        HTML文件第一行必须是DTD(Document Type Definition，文档类型声明)

        不写DTD会引发浏览器的一些兼容问题

        - <head></head>是网页的配置
        - lang属性在<html>标签中配置
        - <body></body>书写网页的内容，包括网页的头部，主要内容、页脚等各个部分
    - 字符集

        `<meta charset="UTF-8">`  单标签

        meta元标签，表示网页的基础配置

        charset字符集（属性）

        "UTF-8"是一种字符集（值）/ 涵盖全球所有国家、民族的文字和大量图形字符 / 1个汉字占3字节数 / 制作有非汉字文字的网页

        “gb2312(gbk)”收录所有汉字字符（包括简体、繁体）和英语、少量韩文、日语和少量图形字符 / 1个汉字占2字节数 / 制作只有汉语和英语的网页，由于1个汉字占2字节，网页文件尺寸明显减少

        - 无论使用哪种字符集，一定要在VSCode中将文件也设置为相同字符集，否则会出现乱码，然后更改meta标签：
        `<meta charset="UTF-8">`
        `<meta charset="gb2312">`
        `<meta charset="gbk">`
        - Live Server 插件不支持gb2312(gbk)字符集，只支持UTF-8字符集
    - title、关键词及页面描述
    常见的SEO配置项：title和两个meta标签（Keywords，Description）
    遵守的规则：合理使用h系列标签，<h1></h1>不能使用太多次，顺序使用h系列标签；Keywords中用逗号分割关键词
        - `<title>Document</title>` ⭐️
          title标签用来设置网页的标题，文字会显示在浏览器的标签栏上
          title也是搜索引擎收录网站时显示的标题
        - 网页关键词和页面描述：
          合理设置网页网页关键词和页面描述，也是SEO的重要手段
          SEO(Search Engine Optimization，搜索引擎优化)利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名，让网站在搜索引擎的结果中占据领先地位，获得品牌收益
          ⭐️使用meta标签设置网页关键词和描述，name属性非常关键，用来设置meta的具体功能
          `<meta name="Keywords" content="慕课网，imooc，JAVA，前端，Python，大数据">`
          `<meta name="Description" content="慕课网。。。">`
    - 认识标签
        - 标签对
        `<p>不负韶华</p>`
        标签对就是超文本标记

- HTML5基本标签
    - 标题和段落标签
        - h系列标签表示“标题”语义，h是headline的意思

        ![Untitled](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第1周HTML5基础语法与标签/第2节HTML5基础语法与标签/Untitled.png)

        搜索引擎非常看重`<h1></h1>` 标签的内容，应该将重点内容放到里面，比如网页的logo
        `<h1></h1>` 标签一般只能放置一个，否则会被搜索引擎视为作弊

        - 段落标签
        <p></p>标签表示段落标签，p是英语paragraph的意思
        任何段落都要放到<p></p>标签中，因为HTML中即使代码换行了，页面显示效果也不会换行，必须写到<p></p>中
        
        <p></p>标签中不能嵌套h系列标签和其他p标签
- div标签
  
        div是英语division“分割”的缩写。<div></div>标签对用来将相关的内容组合到一起，以和其他内容分割，是文档结构更清晰。
    比如，网页的头部要放到一个<div></div>标签对中，轮播图也要放到一个<div></div>标签对中，文章内容也要放到一个<div></div>标签对中。
    
    <div></div>是最常见的HTML标签，因为它可以结合CSS使用，实现网页的布局，这种布局形式叫做“DIV+CSS”
    
    <div></div>像是一个容器，什么都可以容纳，因此工程师也习惯称呼<div></div>为“盒子”
    
    <div>标签可以添加class属性表示“类名”，类名服务于CSS
    ![Untitled 1](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第1周HTML5基础语法与标签/第2节HTML5基础语法与标签/Untitled 1.png)
    
- HTML5特性
    - 空白折叠现象
    文字和文字之间的多个空格、换行会被折叠成一个空格
    标签“内壁”和文字之间的空格会被忽略
    - 转义字符
    &lt;  → 小于号
    &gt; → 大于号
    &nbsp; → 空格（不会被折叠）
    &copy; → 版权符号ⓒ
    - HTML注释
    HTML注释语法如下，可以在VSCode编辑器中使用cmd+/键输入  <!- -  - ->

- 小慕医生项目开发
    - 项目起步

        创建文件夹结构，主要文件夹如下
        文件夹名：images → 存放图片；css → 存放样式表；js → 存放js文件
        网站首页index.html：绝大多数服务器默认的网站首页名为index.html

