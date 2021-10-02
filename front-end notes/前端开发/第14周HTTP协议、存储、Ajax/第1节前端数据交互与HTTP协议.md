- 初识前后端通信

  - 前后端通信是什么
    - 前端和后端数据交互的过程
    - 浏览器和服务器之间数据交互的过程
  - 后端向前端发送数据
    - 访问页面
  - 前端向后端发送数据
    - 注册

- 前后端通信的过程与概念解释

  - 前后端通信的过程
    前后端的通信是在“请求-响应”中完成的

    ![image-20210927000856370](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第14周HTTP协议、存储、Ajax/image-20210927000856370.png)

  - 前端:浏览器端; 
    客户端:只要能和服务器通信的就叫客户端 例如:命令行工具 curl https://www.imooc.com; 
    后端:服务器端

- 前后端的通信方式

  - 使用浏览器访问网页
    - 在浏览器输入网址,按下回车
  - HTML标签
    - 浏览器在解析HTML标签的时候,会遇到一些特殊的标签,会再次向服务器发送请求 link//img/script
    - 还有一些标签,浏览器解析的时候,不会向服务器发送请求,但是用户可以使用它们向服务器发送请求 a/form
  - Ajax和Fetch

- 初识HTTP

  - HTTP是什么

    - HyperText Transfer Protocol
    - 超文本传输协议
    - 超文本: 原先一个个单一的文本,通过超链接将其联系起来,由原先的单一的文本变成了可无限延伸、扩展的超级文本,立体文本
    - 每一次前后端通信,前端需要主动向后端发出请求,后端接收到前端的请求后,可以给出响应

  - HTTP请求响应的过程

    - ![image-20210927160021783](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第14周HTTP协议、存储、Ajax/image-20210927160021783.png)

      

- ==HTTP报文==

  - 浏览器向服务器发送请求时,请求本身就是信息,叫请求报文

  - 服务器向浏览器发送响应时传输的信息,叫响应报文

  - HTTP报文格式
    ![image-20210927161842304](/Users/lestat/Documents/GitHub/Front-end-learning/front-end notes/前端开发/第14周HTTP协议、存储、Ajax/image-20210927161842304.png)

    - GET请求没有请求体,数据通过请求头携带

    - POST请求有请求体,数据通过请求体携带

    - 请求
      请求头: 起始行 + 首部
      请求体

    - 响应
      响应头: 起始行 + 首部

      响应体

- HTTP方法

  - 常用的HTTP方法
    浏览器发送请求时采用的方法,和响应无关;
    GET、POST、PUT、DELETE用来定义对于资源采取什么样的操作的,有各自的语义、
  - HTTP方法的语义(增删改查)
    GET:获取数据、获取资源(文件)
    POST:创建数据(注册)
    PUT:更新数据(修改个人信息、修改密码)
    DELETE:删除数据(删除一条评论)
  - RESTful接口设计: 一种接口设计风格,充分利用HTTP方法的语义,后端可以获取到前端所发送的请求的种类
    - 通过用户ID获取个人信息,使用GET方法  https://www.imooc.com/api/http/getUser?id=1
      // GET https://www.imooc.com/api/http/user?id=1
    - 注册新用户,使用POST方法。   https://www.imooc.com/api/http/addUser
      //POST https://www.imooc.com/api/http/user
    - 修改一个用户,使用POST方法。 https://www.imooc.com/api/http/modifyUser
      // PUT https://www.imooc.com/api/http/user
    - 删除一个用户,使用POST方法  https://www.imooc.com/api/http/deleteUser
      // DELETE https://www.imooc.com/api/http/user

- ==GET和POST方法的对比==

  - 语义
    // GET:获取数据
    // POST:创建数据
  - ==发送数据==
    - GET通过地址在请求头中携带数据
    - 能携带的数据量和地址的长度有关系,一般最多就几k
    - POST既可以通过地址在请求头中携带数据,也可以通过请求体携带数据
    - 能携带的数据量理论上时无限的
    - 携带少量数据,可以使用GET请求,大量的数据可以使用POST请求
  - 缓存
    - GET可以被缓存,POST不会被缓存
  - ==安全性==
    - GET和POST都不安全
    - 发送密码或其他敏感信息时不要使用GET,主要是避免直接被他人窥屏或通过历史记录找到你的密码

- HTTP状态码

  - 定义服务器对请求的处理结果,是服务器返回的

  - 100-199:代表请求已经被接受,需要继续处理

    websocket

  - 200-299:成功

  - 300-399:重定向
    301:Moved Permanently
    302: Move Temporarily
    304: Not Modified

  - 400-499: 请求错误
    400 Bad Request
    404 Not Found

  - 500-599: 服务器错误
    500 Internal Server Error