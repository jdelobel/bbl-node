'use strict';
// Tips: debug  node trace with --trace-warnings
const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
  async execute(asyncFunc, ...args) {
    this.emit('begin');
    try {
      console.time('execute');
      const data = await asyncFunc(...args);
      this.emit('data', data);
      console.timeEnd('execute');
      this.emit('end');
    } catch(err) {
      this.emit('error', err);
    }
  }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));
withTime.on('error', (err) => console.log(err));
withTime.on('data', (data) => console.log(data));

withTime.execute(fs.readFile, __filename);
