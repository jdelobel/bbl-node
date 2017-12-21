'use strict';

setTimeout(() => {
  console.log('SETTIMEOUT');
}, 0);
setImmediate(() => {
  console.log('SETIMMEDIATE');
});
setTimeout(() => {
  console.log('SETTIMEOUT 2');
}, 0);
process.nextTick(function () {
  console.log('NEXTTICK');
});
