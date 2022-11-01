import { UserParamsType } from "./types/user-params.type"
import { User } from "./user"

export class UserBuilder {
  private user: User;

  constructor(userParams: UserParamsType | undefined = undefined) {
    if (userParams) {
      this.user = new User(userParams);
    } else {
      this.user = new User({
        name: "",
        age: 0
      });
    }
  }

  addName(name: string): UserBuilder {
    this.user.setName(name);
    return this
  }

  addAge(age: number): UserBuilder {
    this.user.setAge(age);
    return this
  }

  build(): User {
    return this.user
  }
}