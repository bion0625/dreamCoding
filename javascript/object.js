'use strict';


const obj1 = {};
const obj2 = new Object();//by class

const name = 'uj';
const age = 34;

const uj = {name: 'uj', age: 34};
console.log(uj);

uj.hasJob = true;
console.log(uj);

delete uj.hasJob;
console.log(uj);

console.log(uj.name);
console.log(uj['name']);

console.log(uj.hasJob);
uj['hasJob'] = true;
console.log(uj.hasJob);

// [] use case
const printValue = (obj, key) => {
    console.log(obj[key]);
}

printValue(uj, 'name');

const person1 = {name: 'bob', age: 2}
const person2 = {name: 'steve', age: 3}
const person3 = {name: 'dave', age: 4}
const person4 = new Person('uj', 5);
console.log(person4);

//constructor function
function Person (name, age) {
    //this = {}
    this.name = name; 
    this.age = age;
    //return this;
}


console.log('name' in uj);
console.log('age' in uj);
console.log('random' in uj);
console.log(uj.random);

console.clear();

//for in
console.log(uj);
for (const key in uj){
    console.log(key);
}

//for of
const array = [1,2,3,4,5];
for (const item of array){
    console.log(item);
}


//address clone

const user = {name: 'uj', age: 34};
const user2 = user;
user2.name = 'uj2';
console.log(user);

//old way clone
const user3 = {};
for(const key in user){
    user3[key] = user[key]
}
user3.name = 'uj3';
console.log(user);
console.log(user3);

//new way clone
//1
const user4 ={};
Object.assign(user4, user);
console.log(user4);
//2
const user5 = Object.assign({}, user);
console.log(user5);


//assign
const fruit1 = {color: "red"};
const fruit2 = {color: "blue", size: "big"};
const mixed = Object.assign(fruit1, fruit2);
console.log(mixed);

const fruit3 = {color: "black", size: "big"};
const mixed2 = Object.assign(fruit1, fruit2, fruit3);
console.log(mixed2);