console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 
''''
1 + 2 = ${1 + 2}`);

//1.counter = counter + 1;
//2.reulst = counter;
let counter = 2;
let result = ++counter;
console.log(counter);

//1.result = counter;
//2.result = result + 1;
result = counter++;
console.log(counter);

let x = 5;
let y = 6;
x += y;//x = x + y;
console.log(x);
x -= y;
x *= y;
x /= y;


const stringFive = '5';
const numberFive = 5;
// == type 변경
console.log(stringFive == numberFive);
// === type 그대로
console.log(stringFive !== numberFive);



const uj1 = {name:"uj"};
const uj2 = {name:"uj"};
const uj3 = uj1;

console.log(uj1 != uj2);
console.log(uj1 !== uj2);
console.log(uj1 === uj3);


console.log(0 == false);
console.log(0 !== false);
console.log('' == false);
console.log('' !== false);
console.log(null == undefined);
console.log(null !== undefined);

const browser = 'd';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

do{
    console.log(`do while: ${i}`);
    i--;
}while(i > 0);

for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i - 2){
    console.log(`inlline varizble for: ${i}`);
}

for(let i = 0; i <= 10; i++){
    if(i%2 === 1)continue
    else console.log(i);
}

for(let i = 0; i <= 10; i++){
    console.log(i);
    if(i === 8)break;
}