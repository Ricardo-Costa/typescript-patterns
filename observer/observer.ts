import { ObserverInterface } from "./interfaces/observer.interface";

export class Observer implements ObserverInterface {
  constructor(private readonly id: number) {}

  public getId(): number {
    return this.id
  }

  update(): void {
    console.log(`Observer ${this.id} updated...`)
  }
}