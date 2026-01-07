//loops in js
//for loop
for (i = 1; i <= 10; i++) {
  console.log("i value is :" + i);
}
//while loop
let j = 1;
while (j <= 10) {
  console.log("j value is :" + j);
  j++;
}
//do while loop
let k = 1;
do {
  console.log("k value is :" + k);
  k++;
} while (k <= 10);
//loops in advanced js
//for in  and for of loops
//this loops are used  to get data from iterables(array,object,string)
let pnames = ["oppo", "realme", "redmi", "iphone"];
for (let names of pnames) {
  console.log(names);
}
//for in loop  is used to retrive the values from object
let empInfo = {
  eid: 1001,
  ename: "riha",
  esal: 50000,
};
for (let info in empInfo) {
  console.log(empInfo[info]);
}
//to retrive char from str
let clg = "vignan";
for (let char in clg) {
  console.log(clg[char]); //uses index
}
let clgn = "vignan";
for (let char1 of clgn) {
  console.log(char1);
}
