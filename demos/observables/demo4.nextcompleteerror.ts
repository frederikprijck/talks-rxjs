/**
 * Demo: Next, Complete and Error
**/

import { Observable } from 'rxjs/Rx';

let observable = new Observable(observer => {
  setTimeout(() => {
    observer.next("Observable: Message 1");
    observer.next("Observable: Message 2");
    observer.complete();
  }, 500);
});

let observer = {
  next: x => console.log(x),
  error: error => console.log(`Observable: Error: ${error}`),
  complete: () => console.log("Observable: Completed")
};

observable.subscribe(observer);


let anotherObservable = new Observable(observer => {
  setTimeout(() => {
    observer.next("Another Observable: Message 1");
    observer.next("Another Observable: Message 2");
    observer.error("An error occured");
  }, 1500);
});

anotherObservable.subscribe(x => console.log(x), error => console.log(`Another Observable: Error: ${error}`), () => console.log("Another Observable: Completed"));