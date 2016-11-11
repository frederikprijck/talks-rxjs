/**
 * Demo: Catch
**/

import { Observable } from 'rxjs/Rx';

let observable = new Observable<Number>(observer => {
   observer.error("Something wrong")
});

observable
  // using catch + throw will change the error the subscriber will see
  .catch(x => {
      throw "Ohoow"
  })
  // logs: Error: Ohoow
  .subscribe(x => console.log(x), x => console.log(`Error: ${x}`));

observable
  // using catch + throw will change the error the subscriber will see
  .catch(x => Observable.throw("Ohhoow"))
  // logs: Error: Ohoow
  .subscribe(x => console.log(x), x => console.log(`Error: ${x}`));

observable
  // using no catch will ensure the original error is visible for subscribers
  // logs: Error: Something wrong
  .subscribe(x => console.log(x), x => console.log(`Error: ${x}`));

observable
  // using catch without throw will ensure subscribers will not be notified on errors, instead we can emit an item.
  .catch(x => Observable.of("No error"))
  // logs: No error (which is emitted as an item)
  .subscribe(x => console.log(x), x => console.log(`Error: ${x}`));
