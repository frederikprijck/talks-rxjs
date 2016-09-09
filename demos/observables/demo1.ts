/**
 * Demo: Observables
**/

import { Observable } from "rxjs/Rx";

let observable = new Observable(observer => {
   setTimeout(() => {
    observer.next("Observable: Hello world");
  }, 1000);
});
observable.subscribe(x => console.log(x), error => console.log(error));

let anotherObservable = new Observable(observer => {
   setTimeout(() => {
    observer.error("Observable: error");
  }, 1000);
});
anotherObservable.subscribe(x => console.log(x), error => console.log(error));
