/**
 * Demo: Merge
**/

import { Observable }  from 'rxjs/Rx';

let observable = new Observable(observer => {
  setTimeout(() => { 
   observer.next('Message 1');
   }, 1000);
});

let anotherObservable = new Observable(observer => {
  setTimeout(() => { 
   observer.next('Message 2');
   }, 2000);
});

observable
    .merge(anotherObservable)
    .subscribe(x => console.log(x));

