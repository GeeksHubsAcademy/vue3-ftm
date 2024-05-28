const object = {
    PI: 3.14,
    E: 2.71,
    method() { return 42; },
    method2: function () { return 43 },
    method3: fn,
    method4: () => { return 45 },

};


function fn() { return 44 }


const prop = Date.now() % 2 ? 'PI' : 'E';

console.log(object[prop]);
object[prop] = 43;


const o = {
    [prop]: 12,
};

// o[prop] = 12;
console.log(o);