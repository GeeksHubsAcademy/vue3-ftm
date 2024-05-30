function sayHello(name) {
    console.log('Hello ' + name);
}
var _name = 'TypeScript';
sayHello(_name);
var isDone = false;
console.log(typeof isDone);
isDone = false;
isDone = true;
var falseValue = false;
var octanos = 98;
var locale = 'es';
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991n + 1n);
console.log(9007199254740991n + 2n);
console.log(9007199254740991n + 3n);
console.log(9007199254740991n + 4n);
console.log(0.1 + 0.2);
console.log(BigInt("2"));
var numberOrNull = 10;
var anyValue = 10;
var person = {
    name: "John Doe",
    age: 25,
    isMarried: false,
};
var array = [1, 2, 3];
array.push('4');
var array2 = [1, 2, 3];
var tuple = [1, '2'];
tuple = [2, '9'];
var tuple2 = [1, 2, 44];
function sum(a, b) {
    // return a + b;
    // return undefined
    // return;
}
var result = sum(1, 2);
console.log(sum(1, 2));
