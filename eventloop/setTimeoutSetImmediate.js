'use strict';

const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});


setTimeout(() => {
  console.log('timeout1');
}, 0);
setImmediate(() => {
  console.log('immediate2');
});
