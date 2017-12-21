'use strict';

const fs = require('fs');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  execute(asyncFunc, ...args) {
    this.emit('begin');
    console.time('execute');
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit('error', err);
      }

      this.emit('data', data);
      console.timeEnd('execute');
      this.emit('end');
    });
  }
}

const myEmitter = new MyEmitter();

myEmitter.on('begin', () => console.log('About to execute'));
myEmitter.on('end', () => console.log('Done with execute'));
myEmitter.on('data', (data) => console.log(data));

myEmitter.execute(fs.readFile, __filename);
