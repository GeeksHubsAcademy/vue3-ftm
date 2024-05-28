

const [a, , b] = [1, 2, 3];

console.log(a, b);


const { x } = { x: 1, y: 2 };
console.log(x);

const { x: x1, y: y1 } = { x: 1, y: 2 };

console.log(x1, y1);


console.log({ a, b }, { a: a, b: b });


const obj = [{ a: 1, b: 2 }, { c: 3, d: [4, 5] }];

const [ ,{  d: [, d2] }] = obj;

console.log(d2);


const obj2 = { a: 1, b: 2, c: 3 };
const arr = [4, 5, 6];

console.log(...arr);  // console.log(4, 5, 6);

const [a1, ...rest] = arr;

console.log(a1, rest); // console.log(4, [5, 6]);


const { a: a2, ...rest2 } = obj2;

console.log(a2, rest2); // console.log(1, { b: 2, c: 3 });


console.log({ ...obj2, ...arr });