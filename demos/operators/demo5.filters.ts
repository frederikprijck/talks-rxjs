/**
 * Demo: Filters
**/

import * as Rx from 'rxjs/Rx';

let observable = Rx.Observable.from([1, 2, 5, 1, 12, 4, 6]);
let subscription = observable
  .filter((x: number) => x % 2 === 0) // Limits the observable to: 2, 12, 4, 6
  .skip(1) // Limits the observable to: 12, 4, 6
  .take(2) // Limits the obervable to: 12, 4
  .last() // Limits the observable to 4
  .subscribe(x => console.log(x)); // Logs: 4.