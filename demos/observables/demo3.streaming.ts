/**
 * Demo: Streaming
**/

import { Observable } from 'rxjs/Rx';

let observable = new Observable(observer => {
   setTimeout(() => {
    observer.next("Message 2");
    observer.next("Message 3");  
  }, 1000);

  setTimeout(() => {
    observer.next("Message 1");
  }, 400);
});

observable.subscribe(x => console.log(x));
