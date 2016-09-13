/**
 * Demo: Subjects
**/

import { Subject } from "rxjs/Rx";

let subject = new Subject();

subject.subscribe(x => console.log(x));
subject.next('Subject: Hello world');