import { UserBuilder } from "./user-builder";

console.log('user builder: instantiated');
const builder = new UserBuilder();

console.log('user builder: add user name');
builder.addName("New User")

console.log('user builder: add user age');
builder.addAge(20)

console.log('user builder: show user builded');
const buildedUser = builder.build()
console.log(JSON.stringify(buildedUser))