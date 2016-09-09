
/**
 * Demo: Unsubscribe
**/

import { Observable } from 'rxjs/Rx';

let observable = new Observable(observer => {
    setTimeout(() => {
        observer.next("Observable: Hello world");
    }, 1000);
});

let subscription = observable.subscribe(x => console.log(x));

// By unsubscribing before the item was emitted, no output will be written to the console.
setTimeout(() => {
    subscription.unsubscribe();
}, 400);
