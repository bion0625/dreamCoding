'use strict';

//block scope
{
    let name = 'uj';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);

//var hoisting
age = 4;
var age;

//var non block scope
console.log(num);
{
    num = 5;
    var num;
}
console.log(num);

//number infinity
const a = 1/0;
console.log(a)

//number -infinity
const b = -1/0;
console.log(b);

//not number
const c = 'not a number' / 2;
console.log(c);

//number: over (-2**53 ~ 2**53)

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value

//symbol not equal : false
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

//symbol equal : true
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3 === symbol4);

//symbol description
console.log(symbol1);//not string
console.log(symbol1.description);//string

//dynamic type error
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' / '8';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));