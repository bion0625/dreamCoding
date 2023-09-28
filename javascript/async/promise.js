'use strict';

// state: pending -> fulfilled or rejected
// Producer cs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read file)
    console.log(`doing something...`);
    setTimeout(() => {
        resolve(`uj`);
        // reject(new Error(`no network`));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log(`finally`);
    });

// 3. Promise chaining
const fetchNumber = new Promise((resulve, reject) => {
    setTimeout(() => resulve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 2000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(()=> reject(new Error(`${hen} => 🥚`)), 1000)
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍛`), 1000)
    });

getHen() //
    .then(getEgg)
    .catch(error => {
        return '🥖';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);