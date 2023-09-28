'use strict';
// 1. async
async function fetchUser() {
    return 'uj';
}

const user = fetchUser()
.then(console.log);
console.log(user);

// 2. await
function delay(mx) {
    return new Promise(resolve => setTimeout(resolve, mx));
}

async function getApple() {
    await delay(1000);
    // throw 'error';
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFuits() {
    try{
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple} + ${banana}`;
    } catch (error){
        return error;
    }
}

pickFuits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);