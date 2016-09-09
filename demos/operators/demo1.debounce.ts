/**
 * Demo: DebounceTime
**/

import { Observable } from 'rxjs/Rx';

let observable = new Observable(observer => {
   observer.next('Red');
   setTimeout(() => { observer.next('Yellow'); }, 700);
   setTimeout(() => { observer.next('Green'); }, 1000);
   setTimeout(() => { observer.next('Blue'); }, 1600);
});

let subscription = observable
  // Due to the debounceTime, Yellow will not be emitted
  .debounceTime(500 /* ms */)
  //.debounce(() => Rx.Observable.timer(400 /* ms */))
  .subscribe(x => console.log(x));
