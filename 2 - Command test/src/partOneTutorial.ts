// ###### part 2
// complie it to java script

/*const character = 'luigi';

console.log(character)
const inputs = document.querySelectorAll('input');
console.log(inputs);

/// novo terminal -> tsc sandbox.ts 

inputs.forEach(input =>{
    console.log(input)
});
*/

// tsc sandbox.ts -w ( vai smp converter)

// ###### part 3

/*
let character = 'mario';
let age = 30;
let isBlackBelt = false;
character = 'luigi';
age = 40;
isBlackBelt = true;
const circ = (diameter: number) => {
    return diameter *Math.PI;
}
console.log(circ(7.5));
*/

// ######## part 4: object and arrays
/*
//array
let names = ['luigi','mario', 'yoshi'];
names.push('toad');
let numbers = [10,20,30,40];
numbers.push(10);
let mixed = ['a',1,'b',2];

mixed.push('ryu');
mixed.push(10);

// object

let ninja ={
    name: 'mario',
    belt: 'black',
    age: 30
}
ninja.age = 40;
ninja.name = 'ryu';

*/


// ######## part 5 Explocit types
/*
/explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;

let ninjas : string[] =[];
ninjas.push('shaun');


let mixed: (string|number|boolean)[] = [];

let uid: string|number;

//object

let ninjaOne: object;
ninaOne = {name: 'yoshi', age:30};


*/


// ######## part 6 Dynamic Types
/*
let age: any = 25;
age = true;
age = 'hello';
age = {name: 'luigui'}

let mixed: any[] = [];
*/



// ######## part 7 better workflow tsconfig
/*
public folder vai todo que aparece
source vai o ts file

tsc src/sandbox.ts
tsc -- init
tsc -w
*/


// ######## part 8 function basics
/*
let greet = () =>{
    console.log('HELLO')
}

let greets: Function;

greet = () =>{
    console.log('Hello');
}

const add = (a: number, b: number, c: number|string = 10)=>{
    console.log(a+b);
    console.log(c)
} 
add(5,10,'20');

const minus = (a:number, b:number) =>{
    return a+b;
}
let result = minus (10,7);
*/


// ######## part 10
/*
type Var = number|string


*/

// ######## part 11
/*

*/

