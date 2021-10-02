- 初识promise

  - promise是什么

    ```js
    // 1. 认识Promise
    // Promise是异步操作的一种解决方案
    // 回调函数
    document.addEventListener(
      'click',
      () => {
        console.log('这里是异步的');
      },
      false
    );
    
    console.log('这里是同步的');
    
    // 2. 什么时候使用Promise
    // Promise一般用来解决层层嵌套的回调函数问题(回调地狱)
    ```

    

  - ==promise的基本用法==

    ```js
    // 1. 实例化构造函数生成实例对象
    // Promise解决的不是回调函数,而是回调地狱
    const p = new Promise(() => {});
    
    // 2. Promise的状态
    const p = new Promise((resolve, reject)=>{
      // Promise有3种状态,一开始是pending(未完成), 执行resolve, 变成fufilled(resolved), 已成功
      //执行reject(),变成rejected,已失败
      // pending -> fufilled
      
      // pending -> rejected
      
      // Promise的状态一旦变化,就不会再改变了
      resolve();  // fufilled
      reject(); // fufilled
    });
    
    // 3. then方法
    
    resolve({username:'Alex'});
    reject(new Error('reason'));
    p.then(
      data =>{
      console.log('success', data);
    }, 
      err =>{
        console.log('error', err);
      });
    ```

    

- promise的实例方法

  - ==then()==

    ```js
    // 1. 什么时候执行
    // pending -> fufilled时, 执行then的第一个回调函数
    // pending -> rejected时,执行then的第二个回调函数
    
    // 2. 执行后的返回值
    // then方法执行后返回一个新的Promise对象
    const p = new Promise((resolve, reject) => {
      resolve();
      //reject();
    });
    const p2 = p.thne(
      () => {},
      () => {}  
    ).then();
    //console.log(p === p2);  // false
    
    // 3. then方法返回的Promise对象的状态改变
    p.then(
      () => {
        console.log('success');
      },
      () => {
        console.log('err');
        // 在then的回调函数中,return后面的东西,会用Promise包装
        // return undefined;
        // 等价于
        return new Promise((resolve, reject) => {
          resolve(undefined);
        })
        // 默认返回的永远都是成功状态的Promise对象
        
        // 如果要返回失败状态
        return new Promise((resolve, reject) => {
          reject('reason');
        })
      }  
    ).then(
    	data => {
        console.log('success2', data);
      },
      err => {
        console.log('err2', err);
      }
    );
    
    // 4. 使用Promise解决回调地狱
    const movePromise = (el, point) => {
      return new Promise((resolve) => {
        move(el, point, () => {
          resolve();
        })
      })
    }
    
    document.addEventListener(
    	'click',
      () => {
        movePromise(boxEl, {x: 150}).then(()=>{
          return movePromise(boxEl, {x: 150, y:150});
        })
        .then(() => {
          return movePromise(boxEl, {y:150});
        })
        .then(() => {
          return movePromise(boxEl, {x: 0, y: 0})
        });
      },
      false
    )
    ```

    

  - ==catch()==

    ```js
    // catch 专门用来处理rejected状态
    // catch本质上是then的特例
    // 2. 基本用法
    new Promise((resolve, reject) => {
      //resolve(123);
      reject('reason')
    }).then(data => {
      console.log(data);
    })
    // 等价于使用then
    .then (null, err => {
      console.log(err);
    })
    .catch(err => {
      console.log(err);       // reason
    });
    
    // catch可以捕获它前面的错误
    // 一般总是建议, Promise对象后面要跟catch方法, 这样可以处理Promise内部发生的错误
    ```

    

  - finally

    ```js
    // 什么时候执行
    // 当Promise状态发生变化时,不论如何变化都会执行,不变化不执行
    // 本质
    // finally()本质上是then()的特例
    
    new Promise((resolve, reject) => {
      reject('reason');
    })
    .finally (data => {
      console.log(data);
    })
    .catch(err => {});
    //等同于
    new Promise((resolve, reject) => {
      reject('reason');
    })
    .then(
    	result => {
        return result;
      },
      err => {
        return new Promise((resolve, reject) => {
          reject(err);
        });
      }
    )
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
    ```

    

- promise的构造函数方法

  - promise.resolve()

    ```js
    // 是成功状态Promise的一种简写形式
    Promise.resolve('foo');
    
    // 参数
    Promise.resolve('foo').then(data => {
      console.log(data);
    });
    
    // 当Promise.resolve()接收的是Promise对象时,直接返回这个Promise对象,什么都不做
    const p1 = new Promise(resolve => {
      setTimeout(resolve, 1000, '我执行了');
    });
    // 当resolve函数接收的事Promise对象时,后面的then会根据传递的Promise对象的状态变化决定执行哪一个回调
    // 具有then方法的对象
    const thenable = {
      then() {
        console.log('then');
      }
    };
    Promise.resolve(thenable).then(
    	data => console.log(data);
      err => console.log(err);
    );
    ```

    

  - promise.reject()

    ```js
    // 失败状态Promise的一种简写形式
    Promise.reject('reason');
    // 不管什么参数,都会原封不动的向后传递,作为后续方法的参数
    const p1 = new Promise(resolve => {
      setTimeout(resolve, 1000, '我执行了');
    });
    Promise.reject(p1).catch(err => console.log(err));  // Promise{<pending>}
    
    new Promise((resolve, reject) => {
      resolve(123);
    })
    .then(data => {
      //return Promise.resolve(data);
      return Promise.reject('reason');
    })
    .then(data => {
      console.log(data)        // 123
    })
    .catch(err => console.log(err));      // reason
    ```

    

  - ==promise.all()==

    ```js
    // 1. 有什么用
    // Promise.all()关注多个Promise对象的状态变化
    // 传入多个Promise实例,包装成一个新的Promise实例返回
    
    // 2. 基本用法
    const delay = ms => {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    };
    
    const p1 = delay(1000).then(() => {
      console.log('p1 完成了');
      return 'p1';
    });
    
    const p2 = delay(2000).then(() => {
      console.log('p2 完成了');
      return 'p2';
    });
    // Promise.all()的状态变化与所有传入的Promise实例对象状态有关
    // 所有状态都变成resolved, 最终的状态才会变成resolved
    // 只要有一个变成rejected, 最终的状态就变成rejected
    const p = Promise.all([p1, p2]);
    p.then(data => {
      console.log(data);   // ["p1", "p2"]
    }, err => {
      console.log(err);
    });
    ```

    

  - Promise.race()

    ```js
    const delay = ms => {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    };
    
    const p1 = delay(1000).then(() => {
      console.log('p1 完成了');
      return 'p1';
    });
    
    const p2 = delay(2000).then(() => {
      console.log('p2 完成了');
      return 'p2';
    });
    
    // Promise.race()的状态取决于第一个完成的Promise实例对象,如果第一个完成的成功了,那最终的就成功; 如果第一个完成的失败了,那最终的就失败
    const racePromise = Promise.race([p1, p2]);
    racePromise.then(
    	data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )
    // p1 完成了
    // p1 
    // p2 完成了
    ```

    

  - promise.allSettled()

    ```js
    const delay = ms => {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    };
    
    const p1 = delay(1000).then(() => {
      console.log('p1 完成了');
      return 'p1';
    });
    
    const p2 = delay(2000).then(() => {
      console.log('p2 完成了');
      return 'p2';
    });
    // Promise.allSettled()的状态与传入的Promise状态无关
    // 永远都是成功的
    // 它只会记录下各个Promise的表现
    const allSettledPromise = Promise.allSettled([p1, p2]);
    allSettledPromise.then(
    	data => {
        console.log(data);
      }
    )
    ```

    

- promise的注意事项和应用

  - 注意事项

    ```js
    // 1. resolve或reject函数执行后的代码
    // 推荐在调用resolve或reject函数的时候加上return,不再执行它们后面的代码
    new Promise((resolve, reject) => {
      // return resolve(123)
      return reject('reason')
    })
    
    // 2. Promise.all/race/Settled的参数问题
    // 参数如果不是Promise数组,会将不是Promise的数组元素转变成Promise对象
    Promise.all([1, 2, 3]).then(datas => {
      console.log(datas);
    });
    // 等价于
    Promise.all([
      Promise.resolve(1);
      Promise.resolve(2);
      Promise.resolve(3);
    ]).then(datas => {
      console.log(datas);
    });
    
    // 不只是数组.任何可遍历的都可以作为参数
    // 数组、字符串、Set、Map、NodeList、arguments
    
    // 错误处理(可以单独处理,也可以统一处理)
    allPromise.then(datas => {
      console.log(datas);
    })
    .catch(err => console.log(err));
    ```

    

  - ==应用==

    - 异步加载图片

    

