import { Observer } from "../observer"

export interface SubjectInterface {
  subscribe(observer: Observer): void
  
  unsubscribe(observer: Observer): void

  notify(observer: Observer): void

  notifyAll(): void
}