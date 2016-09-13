/**
 * Demo: FlatMap
**/

import { Observable } from 'rxjs/Rx';

let observable = new Observable<string>(observer => {
   observer.next("j");
   observer.next("jo");
   observer.next("jor");
   observer.next("jori");

   // this next call happens after the previous search call has finished
   setTimeout(() => {
    observer.next("joris");
   }, 600);
});

let subscription = observable
  .flatMap(x => { return search(x)}) // To fix the out of order issue => replace flatMap by switchMap
  .subscribe(x => console.log(x));


function search(value: string) : Observable<string>{
  return new Observable<string>(observer => {
      // emit an item after n (random) seconds (100 < n < 500)
      setTimeout(() => {
          observer.next(`Search result for: ${value}`);
          observer.complete();
      }, Math.floor((Math.random() * 500) + 100));
  });
}
