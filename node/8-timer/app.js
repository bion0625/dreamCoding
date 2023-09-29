let num = 1;
const inerval = setInterval(() => {
    console.log(num++);
}, 1000);

setTimeout(() => {
    console.log('timeout!');
    clearInterval(inerval);
}, 6000)