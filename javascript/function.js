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

const calculate = (comment, a, b) => {
    let result;
    switch(comment){
        case 'add':
            result = a+b;
            break;
        case 'substract':
            result = a-b;
            break;
        case 'divide':
            result = a/b;
            break;
        case 'multiply':
            result = a*b;
            break;
        case 'remiander':
            result = a%b;
            break;
        default:
            throw Error(`unknown command`);
    }
    console.log(result);
}

calculate('add', 1, 2);
calculate('substract', 1, 2);
calculate('divide', 1, 2);
calculate('multiply', 1, 2);
calculate('remiander', 5, 5);
calculate('unknown', 5, 5);