import { Observer } from "./observer";
import { Subject } from "./subject";


console.log('observer: one instantiated');
const observerOne = new Observer(1);

console.log('observer: two instantiated');
const observerTwo = new Observer(2);

console.log('subject: instantiated');
const subject = new Subject();

console.log('subject: observer one was subscribed into subject');
subject.subscribe(observerOne);

console.log('subject: observer two was subscribed into subject');
subject.subscribe(observerTwo);

console.log('subject: notify all method called');
subject.notifyAll();