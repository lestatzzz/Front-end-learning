- BOM常用对象
  - BOM(Browser Object Model, ==浏览器对象模型==)是==JS与浏览器窗口交互的接口==

  - 一些与浏览器改变尺寸、滚动条滚动相关的特效,都要借助BOM技术

  - Window对象
    - window对象是==当前JS脚本运行所处的窗口==,而这个窗口中包含DOM结构,==window.document属性就是document对==象

    - 在有标签页功能的浏览器中,每个标签都拥有自己的window对象;也就是说,同一个窗口的标签页之间不会共享一个window对象

    - ==全局变量会成为window对象的属性==

    - 内置函数普遍是window的方法

      - 如setInterval()、alert()等内置函数
        ![image-20210819160923796](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第3节BOM/image-20210819160923796.png)

    - 窗口尺寸相关属性
      ![image-20210819161335682](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第3节BOM/image-20210819161335682.png)

      ![image-20210819162209037](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第3节BOM/image-20210819162209037.png)
      

      - 获得不包含滚动条的窗口宽度,要用
        document.documentElement.clientWidth
      - 在窗口大小改变之后,就会出发resize事件,可以使用window.onresize或者window.addEventListener(‘resize’)来绑定事件处理函数
      - window.scrollY属性表示在垂直方向已滚动的像素值
        ![image-20210819162756949](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第3节BOM/image-20210819162756949.png)
      - document.documentElement.scrollTop属性也表示窗口卷动高度
        ![image-20210819162932628](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第3节BOM/image-20210819162932628.png)
      - document.documentElement.scrollTop不是只读的,==而window.scrollY是只读的==
      - 在窗口被卷动之后,就会出发scroll事件,可以使用window.onscroll或者window.addEventListener(‘scroll)来绑定事件处理函数

  - Navigator对象

    - window.navigator属性可以检索navigator对象,它内部含有用户此次活动的==浏览器的相关属性和标识==
      ![image-20210819164551910](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第3节BOM/image-20210819164551910.png)

  - History对象

    - window.history对象提供了==操作浏览器会话历史==的接口
    - 常用操作就是模拟浏览器回退按钮
      ![image-20210819165148378](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第3节BOM/image-20210819165148378.png)

  - Location对象

    - window.location标识当前所在网址,可以==通过给这个属性赋值命令浏览器进行页面跳转==
      ![image-20210819233941611](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第3节BOM/image-20210819233941611.png)
    - 可以调用location的reload方法以==重新加载当前页面==,参数true标识强制从服务器强制加载
      ![image-20210819234256576](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第3节BOM/image-20210819234256576.png)
    - Window.location.search属性即为当前浏览器的GET请求查询参数

- BOM特效开发

  - 返回顶部按钮
    - 返回顶部的原理: 改变document.documentElement.scrollTop属性,通过定时器逐步改变此值,则将用动画形式返回顶部
    - 楼层导航小效果
      - DOM元素都有==offsetTop属性==, 表示==此元素到定位祖先元素的垂直距离==(position: relative)
      - 定位祖先元素: 在祖先中, 离自己最近的且拥有定位属性的元素

