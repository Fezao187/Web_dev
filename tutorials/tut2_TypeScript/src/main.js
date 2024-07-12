// // Variables
// const hello = 'wolrd';
// let strHello = 'world';
// //Specify type
// let intNumber: number = 3;
// // Functions
// const getFullName = (name: string, surname: string): string => {
//     return name + ' ' + surname;
// }
// getFullName("Katlego", "Maredi");
// // Objects
// const userObj: { name: string, age: number } = {
//     name: "Moster",
//     age: 30
// }
// const userObj2: { name: string, age: number } = {
//     name: "Moster",
//     age: 30
// }
// // Interfaces
// interface User {
//     name: string
//     age?: number
//     //Use '?' to indicate that it is not required
//     getMessage(): string
// }
// const userObj3: User = {
//     name: "Fez",
//     age: 23,
//     getMessage() {
//         return "Hello " + name
//     },
// }
// console.log(userObj3.age, userObj3.name,userObj3.getMessage());
// // Union operator
// interface UserInterace {
//     name: string
//     surname: string
//     age: number
// }
// let username: string = 'fez';
// let pageName: string | number = '1';
// let errMsg: string | null = null;
// let user: UserInterace | null = null;
// // Type alises
// type ID = string;
// type PopularTag = string;
// type MaybePopularTag = PopularTag | null;
// let id: ID = 'Fax';
// const popularTag: PopularTag[] = ["Dragon", "Coffe"];
// const dragonsTag: MaybePopularTag = null;
// Types 
// Void
// const doSomething = (): void => {
//     console.log("Do something")
// }
// //Any
// let anyVar: any = undefined;
// // Never
// const doSomething2 = (): never => {
//     throw 'never';
// }
// // Unknown
// // Works like any but we cannot assign it to another type, unless we assert
// let varUnknown: unknown = 10;
// let strT: string = varUnknown as string;
var someElement = document.querySelector('.foo');
console.log("someElement", someElement.value);
var someElement2 = document.querySelector('.foo');
someElement2.addEventListener('click', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
