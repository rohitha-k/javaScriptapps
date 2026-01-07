// //arrays in js
// const demoArray = [10, 20, "rani", "nagi"];
// console.log(demoArray);
const pnames = ["realme", "LG", "Samsung", "vivo"]; //literal syntax
// console.log(pnames);
let prices = new Array(20000, 40000, 30000, 25000); //object syntax
// //to get values
// console.log(pnames[2]);
// for (let names of pnames) {
//   console.log(names);
// }
//for-each
// let pnames1 = pnames.forEach((val) => {
//   console.log(val);
// });
// //to add- push,unshift,splice
pnames.push("one-plus");
// console.log(pnames);
pnames.unshift("poco");
// console.log(pnames);
pnames.splice(2, 0, "infinix", "Oppo");
// console.log(pnames);
//to remove-pop,shift,splice
//pop
// pnames.pop();
// console.log(pnames);
// pnames.shift();
// console.log(pnames);
// pnames.splice(4, 1);
// console.log(pnames);
// delete pnames[1];
// console.log(pnames);
//sort-ascending order
// console.log(prices.sort());
// //descending
// console.log(prices.reverse());
//to update
//pnames[2] = "motto pro";
// console.log(pnames);
let pnames2 = ["nokia", "redmi"];
// console.log(pnames.concat(pnames2));

//spread operator
// let productNames = [...pnames, ...pnames2];
// console.log(productNames);
//array advanced methods
//reduce
let sum = prices.reduce((tot, val) => {
  return tot + val;
});
console.log(sum);
//map
let offerPrice = prices.map((val) => {
  return val - 2000;
});
console.log(offerPrice);
