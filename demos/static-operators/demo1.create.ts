/**
 * Demo: Create
**/

import * as Rx from 'rxjs';

let observable = Rx.Observable.create(observer => {
   observer.next('Hello world.');
});

let subscription = observable
  .subscribe(x => console.log(x));
