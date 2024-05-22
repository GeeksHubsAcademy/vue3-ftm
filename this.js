// function MyClass (x,y) {
//     this.x = x
//     this.y = y
//     this.add = function () {
//         return this.x + this.y
//     }
//     this.sum = () => {
//         return this.x + this.y
//     }

// }



class MyClass {
    constructor(x, y, sum) {
        this.x = x
        this.y = y
        this.sum = sum
    }


}


const sum = function () {
    return this.x + this.y;

}


const myInstance = new MyClass(10, 2, sum);

console.log(myInstance.sum());