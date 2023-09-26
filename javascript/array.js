'use strict';

//Array

const arr1 = new Array();
const arr2 = [1,2];

const fruits = ['🍊', '🍌'];

for(let fruit of fruits){
    console.log(fruit);
}
fruits.forEach((fruit) => console.log(fruit));

//push: add an item to the end
fruits.push('🍓','🍑');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('🍓', '🍍');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

//splice: remove an item by index position
fruits.push('🍓','🍑','🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍎', '🍉');
console.log(fruits);

//combine two arrays
const fruits2 = ['🍏', '🥝'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//searching
console.clear();
console.log(fruits);

//indexOf
console.log(fruits.indexOf('🍊'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));

//includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

//lastIndexOf
console.clear('🍊');
fruits.push('🍊');
console.log(fruits);
console.log(fruits.indexOf('🍊'));
console.log(fruits.lastIndexOf('🍊'));