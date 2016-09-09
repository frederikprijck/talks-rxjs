/**
 * Demo: fromPromise
**/

import { Promise } from 'es6-promise';
import * as Rx from 'rxjs';

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise: Success');
  }, 1000);
});

let observable = Rx.Observable.fromPromise(promise);
let subscription = observable
  .subscribe(x => console.log(x));


  
let anotherPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise: error');
  }, 1000);
});

let anotherObservable = Rx.Observable.fromPromise(anotherPromise);
let anotherSubscription = anotherObservable
  .subscribe(undefined, error => console.log(error));
