const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
    console.log('first callback - }`', args);
};
emitter.on('uj', callback1);

emitter.on('uj', (args) => {
    console.log('second callback - ', args);
});

emitter.emit('uj', { message: 1 });
emitter.emit('uj', { message: 2 });
emitter.removeAllListeners('uj', callback1);
emitter.emit('uj', { message: 3 });