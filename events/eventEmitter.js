'use strict';

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  execute(taskFunc) {
    console.log('Before executing');
    this.emit('begin');
    taskFunc();
    this.emit('end');
    console.log('After executing');
  }
}

const myEmitter = new MyEmitter();

myEmitter.on('begin', () => console.log('About to execute'));
myEmitter.on('end', () => console.log('Done with execute'));

// Without async success
myEmitter.execute(() => console.log('*** Executing task ***'));


// With async fail
//myEmitter.execute(() => {
  //setImmediate(() => {
    //console.log('*** Executing task ***')
  //});
//});
