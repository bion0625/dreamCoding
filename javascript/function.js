'use strict';

function printAll(...args) {
    for (const arg of args) {
        console.log(arg);
    }
    args.forEach(arg => console.log(arg));
}

printAll('a', 'b', 'c');


const print = function () {
    console.log('print');
}
print();
const printAgain = print;
printAgain();

//IIFF: Immediately Invoked Function Expression
(function hello(){
    console.log('hello');
})();