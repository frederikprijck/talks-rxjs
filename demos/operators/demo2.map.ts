/**
 * Demo: Map
**/

import { Observable } from 'rxjs/Rx';

let observable = new Observable(observer => {
   observer.next('Message 1');
});

let subscription = observable
  .map(x => { return { message: x }; })
  .subscribe(x => console.log(x.message));
