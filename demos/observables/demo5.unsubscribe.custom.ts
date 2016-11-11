/**
 * Demo: Custom unsubscribe
**/

import { Observable } from 'rxjs/Observable';

let observable = new Observable(observer => {
    let number = 0;
    var interval = setInterval(() => {
        observer.next(`value: ${number++}`);
    }, 200);

    // The returned function is executed when calling unsubscribe
    return () => clearInterval(interval);
});

let subscription = observable.subscribe(x => console.log(x));

setTimeout(()=> {
    subscription.unsubscribe();
}, 1500);