// const age = 18;
// console.log(age);

// export default age;
// export default 20;
// export default {};

// const fn = () => {};
// export default fn;
// export default function () {};

// export default class{};

// export 声明或语句
// export const age = 18;
// const age = 18;
// export {age};

// function fn () {}
// export function fn(){}

// class ClassName{}
// export class ClassName{}


// const age = 18;

// export {fn as func, ClassName, age};

// export default 18;

console.log(this);

if (typeof this !== 'undefined') {
    throw new Error('请使用模块的方式加载');
}