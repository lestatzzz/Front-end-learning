import 'core-js/stable'

let name = 'Alex';
const age = 18;
const add = (x, y) => { return x + y; };
new Promise((resolve, reject) => {
    resolve('成功');
}).then(value => {
    console.log(value)
});

Array.from([1, 2]);
class Person {
    constructor(name, age) {
        Object.assign(this, {name,age});
    }
}

new Person('Alex', 18);
