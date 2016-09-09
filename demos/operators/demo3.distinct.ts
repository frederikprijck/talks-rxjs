/**
 * Demo: Distinct
**/

import * as Rx from 'rxjs/Rx';

let observable = Rx.Observable.from([1, 2, 5, 1, 2, 2, 6]);
let subscription = observable
  .distinct()
  .subscribe(x => console.log(x)); // Logs: 1, 2, 5, 6
