/**
 * Demo: hare
**/

import { Observable }  from 'rxjs/Rx';

let observable = new Observable(observer => {
  setTimeout(() => { 
   console.log("executed"); // Logged once.
   observer.next('Message 1');
   }, 1000);
});

let shared = observable.share();

let subscription = shared
  .subscribe(x => console.log(`1st: ${x}`));

let sharedSubscription = shared
  .subscribe(x => console.log(`2nd: ${x}`));

