import { UserParamsType } from "./types/user-params.type";

export class User {
  private name: string
  private age: number

  constructor(userParams: UserParamsType) {
    this.name = userParams.name
    this.age = userParams.age
  }

  setName(name: string) {
    this.name = name
  }

  setAge(age: number) {
    this.age = age
  }

  toString(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}