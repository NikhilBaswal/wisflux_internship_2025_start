import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('turn of the motor');
  setTimeout(()=>{
    console.log("please turn of the motor");
  },3*1000);
});
console.log("this is the reminder")
myEmitter.emit('waterfull');
console.log("this is the warning")