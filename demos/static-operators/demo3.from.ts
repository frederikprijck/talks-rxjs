/**
 * Demo: From
**/

import * as Rx from 'rxjs';

let observable = Rx.Observable.from([1, 2, 3]);
let subscription = observable
  .subscribe(x => console.log(x));
