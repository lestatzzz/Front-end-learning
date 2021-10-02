DOM基本概念

- DOM是JS操控HTML和CSS的桥梁
  ![image-20210722161151658](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722161151658.png)
- DOM(Document Object Model, 文档对象模型)是JavaScript操作HTML文档的接口,是文档操作变得非常优雅、简便
- DOM最大的特点就是将文档表示为节点树
  ![image-20210722161617556](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722161617556.png)

- 节点访问和位置关系

  - nodeType

    - 节点的nodeType属性可以显示这个节点具体的类型
      ![image-20210722161853360](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722161853360.png)

  - 访问元素节点

    - 所谓‘访问’元素节点,就是指‘得到’、‘获取’页面上的元素节点
    - 对节点进行操作,第一步就是要得到它
    - 访问元素节点主要依靠document对象
    - 认识document对象
      - document对象是DOM中最重要的东西,==几乎所有DOM的功能都封装在了document对象中==
      - document对象也表示==整个HTML文档==,它是DOM节点树的根
      - ==nodeType属性值是9==
    - 访问元素节点的常用方法
      ![image-20210722162738822](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722162738822.png)
      - document.getElementById()功能是==通过id得到元素节点==
        ![image-20210722162938139](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722162938139.png)
        - 如果页面上==有相同id的元素,则只能得到第一个==
        - 不管元素藏的位置有多深,都能通过id把它寻找到
        - 在测试DOM代码时,==通常JS代码一定要写到HTML节点的后面==,否则JS无法找到相应HTML节点
        - 可以使用window.onload = function(){}事件,是页面加载完毕后,再执行指定的代码
      - getElementsByTagName()方法的功能是==通过标签名得到节点数组==
        ![image-20210722164440480](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722164440480.png)
        - 数组方便遍历,从而可以==批量操控元素节点==
        - 即使页面上只有一个指定标签名的节点,也将得到==长度为1的数组==
        - ==任何一个节点元素也可以调用getElementsByTagName()方法==,从而得到其内部的某标签的元素节点
      - getElementsByClassName()方法的功能==是通过类名得到节点数组==
        ![image-20210722182610726](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722182610726.png)
        - 此方法==从IE9开始兼容==
        - ==任何一个节点元素也可以调用getElementsByClassName()方法==,从而得到其内部的某类名的元素节点
      - querySelector()方法的功能是==通过选择器得到元素==
        ![image-20210722183135240](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722183135240.png)
        - querySelector()方法==只能得到页面上一个元素==,如果有多个元素符合条件,则只能得到第一个元素
        - querySelector()方法从IE8开始兼容,但从==IE9开始支持CSS3选择器==,如:nth-child()、:[scr^=‘dog’]等CSS3选择器形式都支持良好
      - querySelectorAll()方法的功能是通过选择器得到元素==数组==; 即使页面上只有一个符合选择器的节点,也将得到长度为1的数组

  - 节点的关系
    ![image-20210722184905532](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722184905532.png)

    ![image-20210722185012922](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722185012922.png)

    ![image-20210722185227893](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722185227893.png)

    - 书写常见的节点关系函数
      - 书写IE6也能兼容的‘寻找所有元素子节点’函数
      - 书写IE6也能兼容的‘寻找前一个元素兄弟节点’函数
      - 如何编写函数.获得某元素所有的兄弟节点

- 节点操作

  - 如何改变元素节点中的内容
    - innerHTML
      - 以HTML语法设置节点中的内容
    - innerText
      - 以纯文本的形式设置节点中的内容
  - 如何改变元素节点的CSS样式
    ![image-20210722194750050](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722194750050.png)
  - 如何改变元素节点的HTML属性
    - 标准W3C属性,如src、href等等,只需要直接打点进行更改即可
      ![image-20210722200054622](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722200054622.png)
    - 不符合W3C标准的属性,要使用setAttribute()和getAttribute()来设置、读取
      ![image-20210722201211413](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722201211413.png)

- 节点的创建、移除和克隆

  - 节点的创建

    - document.createElement()方法用于创建一个指定tag name的HTML元素

      ```js
      var oDiv = document.createElement('div');
      ```

    - 新创建出的节点是‘孤儿节点’,这意味着它==并没有被挂载到DOM树上==,我们无法看见它

    - 必须继续使用appendChild()或insertBefore()方法将孤儿节点插入到DOM树上

    - appendChild()

      - 任何已经在DOM树上的节点,都可以调用appendChild()方法,它可以将孤儿节点挂载到它的内部,==成为它最后一个子节点==
        ![image-20210722204055788](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722204055788.png)

    - insertBefore()

      - 任何已经在DOM树上的节点,都可以调用insertBefore()方法,它可以将孤儿节点挂载到它的内部,==成为它的‘标杆子节点’之前的节点==
        ![image-20210722204241642](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210722204241642.png)

    - 小练习:动态创建一个20行12列的表格

    - 小练习:请制作九九乘法表
    
  - 移动节点

    - 如果将已经挂载到DOM树上的节点成为appendChild()或者insertBefore()的参数,这个==节点将会被移动==
      ![image-20210723203954491](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210723203954491.png)
    - ==一个节点不能同时位于DOM数的两个位置==

  - 删除节点

    - removeChild()方法从DOM中删除一个子节点
      ![image-20210723205401852](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210723205401852.png)
    - ==节点不能主动删除自己,必须由父节点删除它==

  - 克隆节点

    - cloneNode()方法可以克隆节点,==克隆出的节点是‘孤儿节点’==
      ![image-20210723210252018](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210723210252018.png)
    - 参数是一个布尔值,表示==是否采用深度克隆==:如果为true,则该节点的所有后代节点也都会被克隆,如果为false,则只克隆该节点本身

- DOM事件

  - 事件监听

    - 事件: 用户与网页的交互动作
      ![image-20210723212304742](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210723212304742.png)
    - DOM允许我们书写JavaScript代码以==让HTML元素对事件作出反应==
    - ‘监听’就是让计算机==随时能够发现这个事件发生了==,从而执行程序员预先编写的一些程序
    - 设置事件监听的方法主要有==onxxx和addEventListener()==两种
    - ==最简单的设置事件监听的方法==
      - 设置他们的onxxx属性:
        ![image-20210723213642182](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210723213642182.png)
    - ==常见的鼠标事件监听==
      ![image-20210723214559585](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210723214559585.png)
    - ==常见键盘时间监听==
      ![image-20210723220503458](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210723220503458.png)
    - ==常见表单事件监听==
      ![image-20210724094428572](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210724094428572.png)
    - ==常见的页面事件监听==
      ![image-20210724101955310](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210724101955310.png)

  - 事件传播

    - 事件的传播是: 先从外到内,然后再从内到外
      ![image-20210724144336113](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210724144336113.png)
    - ==onxxx这样的写法只能监听冒泡阶段==
      ![image-20210724144451030](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210724144451030.png)
    - addEventListener()方法
      - DOM0级事件监听: 只能监听冒泡阶段
        ![image-20210724144634834](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210724144634834.png)
      - DOM2级事件监听
        ![image-20210724144820759](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210724144820759.png)
      - 写在最内层元素的监听代码按照书写顺序执行(例如: 冒泡代码写在捕获代码之前,则先执行冒泡代码)
      - 如果给元素设置相同的两个或多个同名事件,则==DOM0级写法后面写的会覆盖先写的;而DOM2级会按顺序执行==

  - 事件对象

    - 事件处理函数提供一个形式参数,它是一个对象,==封装了本次事件的细节==

    - 这个参数通常用==单词event或字母e==来表示
      ![image-20210724164226646](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210724164226646.png)

    - ==鼠标位置==
      ![image-20210724164405229](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210724164405229.png)

      ![image-20210724172643096](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210724172643096.png)

      ![image-20210724172700385](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210724172700385.png)

      ![image-20210724172718868](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210724172718868.png)
      offsetX/Y计算的是==鼠标与最内层元素之间的距离==
      
    - e.charCode属性通常用于onkeypress事件中,表示拥护输入的字符的‘字符码’
      ![Screen Shot 2021-07-27 at 14.39.04](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/Screen Shot 2021-07-27 at 14.39.04.png)

    - e.keyCode属性通常用于onkeydown事件和onkeyup中,表示用户按下的按键的‘键码’
       ![Screen Shot 2021-07-27 at 14.40.28](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/Screen Shot 2021-07-27 at 14.40.28.png)

    - 小案例: 制作一个特效,按方向键可以控制页面上的盒子移动

    - e.preventDefault()方法

      - e.preventDefault()方法用来阻止事件产生的‘默认动作’
      - 一些特殊的业务需求,需要阻止事件的‘默认动作’
      - 小案例1 : 制作一个文本框,只能让用户在其中输入小写字母和数字,其他字符输入没有效果
      - 小案例2 : 制作鼠标滚轮事件, 当鼠标在盒子中向下滚动时, 数字加1; 反之, 数字减1
        鼠标滚轮事件———— ==onmousewheel==,它的事件对象e提供deltaY属性表示鼠标滚动方向,向下滚动时返回正值,向上滚动时返回负值

    - e.stopPropagation()方法

      - e.stopPropagation()方法用来==阻止事件继续传播==
      - ==在一些场合,非常有必要切断事件继续传播==,否则会造成页面特效显示出bug
      - 小案例 : 制作一个弹出层, 点击按钮显示弹出层, 点击网页任意地方, 弹出层关闭

  - 事件委托

    - 批量添加事件监听
      - 页面上有一个无序列表<ul>,它内部共有20个<li>元素,请==批量==给它们添加点击事件监听, 实现效果:==点击哪个<li>元素,哪个<li>元素就变红==
    - 批量添加事件监听的性能问题
      - 每一个事件监听注册都会消耗一定的系统内存, 而批量添加事件会导致监听数量太多, ==内存消耗会非常大==
      - 实际上,==每个<li>的事件处理函数都是不同的函数==, 这些函数本身也会占用内存
    - 新增元素动态绑定事件
      - 页面上有一个无序列表<ul>,它内部==没有<li>元素==,请制作一个按钮,点击这个按钮就能增加一个<li>元素. 并且要求==每个增加的<li>元素也要有点击事件监听==,实现效果点击哪个<li>元素,哪个<li>元素就变红
      - 动态绑定事件的问题
        - 新增元素必须分别添加事件监听, ==不能自动获得事件监听==
        - 大量事件监听、大量事件处理函数都会==引发大量内存消耗==
    - 事件委托: 利用事件冒泡机制, 将后代元素事件委托给祖先元素
      ![image-20210808153929736](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210808153929736.png)
      - e.target 和 e.currentTarget属性
        ![image-20210808154016689](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210808154016689.png)
      - ==当有大量类似元素需要批量添加事件监听时==, 使用事件委托可以减少内存开销
      - ==当有动态元素节点上树时==, 使用事件委托可以让新上树的元素具有事件监听
      - 注意事项
        - Onmouseenter 和 onmouseover都表示‘鼠标进入’, 它们的区别在于: ==onmouseenter不冒泡, onmouseover冒泡==
        - ==不能委托不冒泡的事件给祖先元素==
        - 最内层元素==不能再有额外的内层元素了==, 比如: 这种情况下,==鼠标在‘我是span’处按下, 只有‘我是span’会变成红色==; ==在‘列表项’处按下, 整个都会变成红色==
          ![image-20210808155859715](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210808155859715.png)

- 实现动画

  - 定时器和延时器
    - 定时器
      - setInterval()函数可以==重复调用一个函数,在每次调用之间具有固定的时间间隔==
        ![image-20210808161719469](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210808161719469.png)
      - setInterval()函数可以接受第3、4….个参数, 它们将按顺序传入函数
        ![image-20210808162246053](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210808162246053.png)
      - 具名函数也可以传入setInterval
        ![image-20210808162616890](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210808162616890.png)
      - ==clearInterval()函数可以清除一个定时器==
        ![image-20210808162843634](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210808162843634.png)
    - 延时器
      - setTimeout()函数可以设置一个延时器, 当指定时间到了之后, ==会执行函数一次, 不再重复执行==
        ![image-20210809161202714](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210809161202714.png)
      - clearTimeout()函数可以清除延时器, 和clearInterval()非常类似
    - 初步认识异步语句
      - setInterval() 和 setTimeout() 就是两个异步语句
      - 异步(asynchronous ): 不会阻塞CPU继续执行其他语句, 当异步完成时, 会执行‘回调函数’(callback)
        ![image-20210809163010574](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210809163010574.png)
  - 使用定时器实现动画
    - 使用定时器可以实现动画,利用的就是‘视觉暂留’原理
    - 使用定时器实现动画较为不便:
      - 不方便根据动画总时间计算步长
      - 运动方向要设置正负
      - 多种运动进行叠加较为困难(比如一个方形一边移动变为圆形)
  - JS和CSS3结合实现动画
    - JS可以利用CSS3的transition属性实现元素动画
    - 规避了定时器制作动画的缺点
    - 函数节流
      - 一个函数执行一次后, 只有大于设定的执行周期后才允许执行第二次
      - 只需要借助延时器
        ![image-20210816163840961](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210816163840961.png)

- 动画效果开发	

  - 无缝连续滚动特效
    ![image-20210816165213142](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第7周JS函数与DOM/第2节DOM/image-20210816165213142.png)
  - 编写跑马灯轮播图特效
  - 呼吸轮播图特效(交叉淡入淡出轮播图)

