// //functions in js
// function showMessge() {
//   console.log("welcome");
// }
// showMessge();
// //function with parameters
// function sum(a, b) {
//   //parameter
//   console.log("Sum is" + (a + b));
// }
// sum(10, 20); //arguments
// //function with return value
// function mul(c, d) {
//   return c * d;
// }
// let res = mul(10, 20);
// console.log("product is" + res);
// //new function syntax in ES6
// //arrow function without parameters
// const arrowDemo = () => {
//   console.log("Demo");
// };
// arrowDemo();
// //arrow function with parameters
// const add = (a, b) => {
//   console.log("Addition is " + (a + b));
// };
// add(10, 20);
// //in a simple way(only for single statement)
// const add1 = (a, b) => a + b;
// console.log(add1(10, 2));
// //arrowfunction with return value
// const mulnum = (a, b) => a * b;
// let res1 = mulnum(2, 3);
// console.log("product is" + res1);

//functions in js
// function showMessage() {
//   console.log("these are Js functions");
// }
// showMessage();
//function with parameters
// function sum(a, b) {              //a,b are parameters
//   console.log("sum:" + (a + b));
// }
// sum(10, 20);//10,20 are arguments
//function with return value
// function mulNum(a, b) {
//   return a * b;   // return statement is used when the value wants to be used again
// }
// res = mulNum(30, 40);
// console.log("result is:" + res);
//new function syntax in ES-6
//arrow function
// const arrowDemo = () => {
//   console.log("arrow function demo");
// };
// arrowDemo();
//arrow function with parameters
// const addnums = (a, b) => {
//   console.log("addition is:" + (a + b));
// };
// addnums(40, 30);
// const addNums = (a, b) => a + b;
// console.log(addNums(20, 30));
// const mulnums = (a, b) => a * b;
// res = mulnums(20, 30);
// console.log("multiplication:" + res);
// const print = (a, b) => {
//   console.log("a value:" + a);
//   console.log("b value:" + b);
//   console.log(c);
// };
// print(3, 5);
// //Rest parameter
// const print = (a, b, ...c) => {
//   console.log("a value:" + a);
//   console.log("b value:" + b);
//   console.log(c);
// };
// // print(3, 5, 4, 8);
// //Rest parameter
// const print = (a, b,...c) => {
//   console.log("a value:" + a);
//   console.log("b value:" + b);
//   console.log(c);
// };
// print(3, 5, 4, 8);
//Rest parameter
//default parameters
const addNums = (a = 10, b) => {
  console.log(a + b);
};
addNums(40);
