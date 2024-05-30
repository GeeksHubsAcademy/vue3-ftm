function sayHello(name: string) {
    console.log('Hello ' + name);
}


const _name = 'TypeScript'
sayHello(_name);



let isDone = false;

console.log(typeof isDone);


isDone = false;
isDone = true;


const falseValue = false;



let octanos: 95 | 98 | 100 = 98;

let locale: 'es' | 'en' = 'es';


console.log(Number.MAX_SAFE_INTEGER);

console.log(9007199254740991n + 1n);
console.log(9007199254740991n + 2n);
console.log(9007199254740991n + 3n);
console.log(9007199254740991n + 4n);

console.log(0.1 + 0.2);

console.log(BigInt("2"));


let numberOrNull: number | null = 10;


let anyValue = 10;



const person = {
    name: "John Doe",
    age: 25,
    isMarried: false,
} as const;


let array: (number | string)[] = [1, 2, 3];
array.push('4');

let array2: Array<number> = [1, 2, 3];


let tuple: [number, string] = [1, '2'];

tuple = [2, '9'];


let tuple2: [1, 2, number] = [1, 2, 44];


function voided(): void {
    // return a + b;
    // return undefined
    // return;
}

voided();
console.log(voided());


function nevered(): never {
    throw new Error('Error');
}

// nevered();

// console.log(nevered());

interface Programador {
    rol: string;
    getRol(input: string): string;
}

class Persona implements Programador {
    rol: string;

    constructor(rol: string) {
        this.rol = rol;
    }

    getRol(input: string): string {
        return this.rol + input;
    }
}
type Coder = {
    rol: string;
    getRol(input: string): string;
}




let juan: Programador = {
    rol: 'backend',
    getRol(input: string): string {
        return this.rol + input;
    }
}




let juan2: Coder = juan;

let juan3: Persona = juan;




type Id = string | number;

type UserUnlogged = { id: Id, name: string, dni: string,  age?: number; };


// type UserLogged = { id: Id, name: string, dni: string, token: string };
type UserLogged = UserUnlogged & { token: string };


type User = UserUnlogged | UserLogged;


type wtf = (number | bigint) & (string | number); // number
