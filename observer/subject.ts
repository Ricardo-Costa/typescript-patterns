import { SubjectInterface } from "./interfaces/subject.interface";
import { Observer } from "./observer";

export class Subject implements SubjectInterface {
  private observers: Array<Observer> = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }
  
  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter(obs => obs.getId() != observer.getId())
  }

  notify(observer: Observer): void {
    observer.update()
  }

  notifyAll(): void {
    this.observers.forEach(this.notify)
  }
}