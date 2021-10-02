- 初识Module

  - Module是什么

    ```js
    //1. 代码量越来越大,所以需要将代码按照功能分开,方便日后维护
    <script src="./base.js"></script>
    <script src="./slider.js"></script>
    <script src="./index.js"></script>
    // 模块: 一个一个的局部作用域的代码块
    // 模块系统解决的主要问题
    // 模块化的问题
    // 消除全局变量
    // 管理加载顺序
    ```

    

  - Module的基本用法

    ```js
    // 使用module模块化幻灯片
    export default BaseSlider
    import BasSlider from './base.js';
    
    export default Slider
    import Slider from './slider.js';
    
    // 使用script标签加载模块
    <script scr= './index.js' type = 'module'></script>
    // 一个文件就是一个模块
    // 只要用到import或export,在使用script标签加载时,就要加上type = ‘module’
    
    ```

    

- ==Module的导入和导出==

  - ==export default 和对应的import==

    ```js
            //1. 认识导出和导入
            // 导出的东西可以被导入(import),并访问到
            // 一个模块没有导出,也可以将其导入  
            // 被导入的代码都会执行一遍,但仅会执行一遍
            // import './module.js'
    
            // 2. 基本用法
            // 一个模块只能有一个export default
            import age from './module.js';
            console.log(age);
    
    ```

    

  - ==export 和对应的import==

    ```js
            // 1. 基本用法
            // export声明或语句
            // export const age = 18;
            
            //const age = 18;
            // export {age};
    
            // 不能随意命名
            // import {age} from './module.js';
            // console.log(age);
            
            // 2. 导出多个
            // import {fn} from "./module.js";
            // console.log(fn);
            // import {ClassName} from './module.js';
            // console.log(ClassName);
    
            // export {fn as func, ClassName, age};
            // import {func, ClassName as Person, age} from "./module.js";
    
            // console.log(func);
            // console.log(Person);
            // console.log(age);
    
    
            // 整体导入
            // 会导入所有输出,包括export default导出的
            // import {func, ClassName, age} from "./module.js";
            // import * as obj from "./module.js";
            // console.log(obj);
    
            // 同时导入
            // import {func, ClassName, age} from "./module.js";
            // import age2 from "./module.js";
    
            // 一定是export default的在前
            import age2, {func, ClassName, age} from "./module.js";
    ```

    

- Module的注意事项和应用

  - 注意事项
  
    ```js
            // 1. 模块顶层的this指向
            // 模块中,顶层的this指向undefined
            // import './module.js';
    
            // 2. import 和 import()
            // import命令具有提升效果, 会提升到整个模块的头部,率先执行
            // console.log('sofa');
            // console.log('water');
            // import './module.js';
            // import执行的时候,代码还没执行
            // import和export命令只能在模块顶层,不能再代码块中执行
    
            // import()可以按条件导入
            // if (PC) {
            //     import('pc.js').then().catch();
            // } else if (Mobile) {
            //     import ('mobile.js').then().catch();
            // }
    
            // 3. 导入导出的复合写法
            // 复合写法导出的,无法在当前模块中使用
            // export {age} from './module.js';
    
            // 等价于
            import {age} from './module.js';
            export{age} from './module.js';     
            
    ```
  
    
  
  - ==应用==
  
    - 将功能拆分成不同的模块
    
    

