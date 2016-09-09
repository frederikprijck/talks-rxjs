/**
 * Demo: Interval
**/

import * as Rx from 'rxjs';

let observable = Rx.Observable.interval(1000);
let subscription = observable
  .subscribe(x => console.log(x));
