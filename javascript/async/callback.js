'use strict';

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

//synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));

//asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log(`async callback`), 2000);

//callback hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'uj' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error(`not fount`));
            }
        }, 2000)
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'uj') {
                onSuccess({ name: `uj`, role: `admin` });
            } else {
                onError(new Error(`no access`));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt(`enter your id`);
const password = prompt(`enter your password`);
userStorage.loginUser(
    id, 
    password, 
    (user) => {
        userStorage.getRoles(
            user, 
            (userWithRole) => {
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            }, 
            (error) => {
                console.log(error);
            })
    }, 
    (error) => {
        console.log(error);
    }
);