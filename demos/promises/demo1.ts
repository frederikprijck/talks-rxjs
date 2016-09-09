/**
 * Demo: Promises 
 * Using promises you can implement async operations which resolve or gets rejected.
**/

import { Promise } from 'es6-promise';

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise: Success');
  }, 1000);
});
promise.then(x => console.log(x), (error => console.log(error)));

let anotherPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise: Error');
  }, 1000);
});
anotherPromise.then(x => console.log(x), error => console.log(error));
