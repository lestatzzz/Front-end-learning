- 初识class

  - ==class是什么==

    ```js
    // 1. 认识Class
    // 类可以看作是对象的模板,用一个类可以创建出许多不同的对象
    
    // 2. Class的基本用法
    // 类名一般首字母大写
    class Person {
      // 实例化时执行构造方法,所以必须有构造方法,但可以不写出来
      constructor(name, age){
        this.name = name;
        this.age = age;
      }
      // 各实例对象共享的方法
      speak(){
        console.log('speak')
      }
    }
    const zs = new Person("zs", 18);
    ```

    

  - class的两种定义形式

    ```js
    // 1. 声明形式
    class Person {
      constructor() {}
    }
    // 2. 表达式形式
    const Person = class{
      constructor(){}
    };
    ```

    

- class的属性和方法

  - 实例属性、静态方法和静态属性

    ```js
    // 1. 实例属性
    class Person {
      // 默认值
      age = 18;
    	sex = 'male';
    	// 方法就是值为函数的特殊属性
    	getSex = function () {
        return this.sex;
      };
    	
      constructor(name) {
        this.name = name;
      }
    }
    const p = new Person('alex');
    console.log(p.age);     // 18
    
    // 2. 静态方法
    
    class Person {
      // 实例对象的方法
      speak () {
        console.log('speak');
        // this指向实例对象
        console.log(this);
      }
      
      // 类的方法
      static speak () {
        console.log('人类可以说话');
        
        // this指向类本身
        console.log(this);
      }
    }
    
    // 3. 静态属性
    class Person {
      constructor(name){
        this.name = name;
      }
      // 类的属性
      static getVersion() {
        return '1.0'
      }
    }
    ```

    

  - 私有属性和方法

    ```js
    // 1. 为什么需要私有属性和方法
    // 公有的属性和方法可以被外界修改,造成意想不到的错误
    class Person {
      constructor(name) {
        this.name = name;
      }
      
      speak() {
        console.log('speak')
      }
    }
    // 2. 模拟私有属性和方法
    // 2.1 下划线开头表示私有
    class Person {
      constructor(name) {
        this._name = name;
      }
      getName() {
        return this._name;
      }
      speak() {
        console.log('speak')
      }
    }
    // 2.2 将私有属性和方法移出类
    (function () {
      let name = '';
      
      class Person{
        constructor(username) {
          name = username;
        }
        
        speak() {
          console.log('speak');
        }
        
        getName() {
          return name;
        }
      }
      
      window.Person = Person;
    })()
    (function () {
      const p = new Person('Alex');
      console.log(p.name);   // undefined
      console.log(p.getName()) // Alex
    })()
    ```
    
    

- 继承

  - ==extends==

    ```js
    // 1. 子类继承父类
            class Person{
                constructor(name,sex){
                    this.name = name;
                    this.sex = sex;
    
                    this.say = function(){
                        console.log('say something')
                    };
                }
    
                speak(){
                    console.log('speak something');
                }
    
                static speak(){
                    console.log('static speak something');
                }
            }
            Person.version = '1.0';
    
            class Programmer extends Person{
                constructor(name,sex){
                    super(name,sex);
                }
            }
            // 改写继承的属性或方法
            class Programmer extends Person{
                constructor(name,sex,features){
                    super(name,sex);
                    this.features = features;
                }
                // 同名覆盖
                speak(){
                    console.log('Programmer speak');
                }
    
                static speak(){
                    console.log('Programmer static speak');
                }
              
              	hi () {
                  console.log('hi');
                }
            }
    
            const zs = new Programmer('zs', 'male', '秃头');
            console.log(zs.name);
            console.log(zs.sex);
    				console.log(zs.features);
            zs.say();
            zs.speak();
    				zs.hi();
            Programmer.speak();
            console.log(Programmer.version);
    ```

    

  - super

    ```js
            // 1. 作为函数调用
            // 代表父类的构造方法,只能用在子类的构造方法中,用在其他地方就会报错
            // super虽然代表了父类的构造方法,但是内部的this指向子类的实例
            // class Person{
            //     constructor(name){
            //         this.name = name;
    
            //         console.log(this);
            //     }
    
            // }
    
            // class Programmer extends Person {
            //     constructor(name, sex){
            //         super(name,sex);
    
            //     }
            // }
    
            // new Programmer()
    
            // 2. 作为对象使用
            // 2.1 在构造方法或一般方法中使用
            // super代表父类的原型对象 Person.prototype
    
            // 定义在父类实例上的方法或者属性,是无法通过super调用的
    
            // 通过super调用父类的方法时,方法内部的this指向当前的子类实例
            class Person {
                constructor(name) {
                    this.name = name;
    
                    console.log(this);
                }
    
                speak(){
                    console.log('speak');
                    // console.log(this);
                }
    
                static speak(){
                    console.log('Person speak');
                    console.log(this);
                }
            }
    
            class Programmer extends Person{
                constructor(name, sex){
                    super(name, sex);
    
                    // super.speak();
    
                    // console.log(super.name);
                }
    
                speak(){
                    super.speak();
                    console.log('Programmer speak');
                }
    
                // 2.2 当super用在静态方法中
                // 指向父类,而不是父类的对象
                // 通过super调用父类的方法时,方法内的this指向当前的子类,而不是子类的实例
                static speak() {
                    super.speak();
                    console.log('Programmer speak');
                }
            }
    
            // new Programmer();
            Programmer.speak();
    
    
    				// 3. 注意事项
    				// 使用super的时候,必须显式指定是作为函数还是作为对象使用,否则会报错
    				class Person {
                constructor(name) {
                    this.name = name;
                }
    
                speak(){
                    console.log('speak');
                }
    
            }
    
            class Programmer extends Person{
                constructor(name, sex){
                    super(name, sex);
    								console.log(super());
                  	console.log(super.speak);
                }
            }
    ```

    

- 应用

  - #### ==幻灯片==

