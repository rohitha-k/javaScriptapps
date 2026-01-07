//objects in js
const movieInfo = {
  movieName: "Akhanda2",
  heroName: "balayya",
  directorName: "boyapati",
};
//how to get
// console.log(movieInfo.directorName);
// console.log(movieInfo["heroName"]);
// for (let info in movieInfo) {
//   console.log(movieInfo[info]);
// }
//ES-6+ new features
//Object.keys
// Object.keys(movieInfo).forEach((key)=>{
//     console.log(key);
// });
//to get only values
// Object.values(movieInfo).forEach((val) => {
//   console.log(val);
// });
//to get key and values
// Object.entries(movieInfo).forEach((entry) => {
//   console.log(entry[0] + " " + entry[1]);
// });
// //for-of
// for (let [info, infoVal] of Object.entries(movieInfo)) {
//   console.log(info + " " + infoVal);
// }
//Nested-Object
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
// console.log(myObj.cars[0].models);
//Cart object
const placedOrder = {
  products: [
    { pid: 1001, pname: "drone", price: 10000 },
    { pid: 1002, pname: "AC", price: 30000 },
  ],
  shippingAddress: {
    area: "vadlamudi",
    street: "vignan lara",
    pincode: 522213,
  },
  userInfo: {
    uid: 1003,
    uname: "Nageswari",
  },
};
console.log(placedOrder.userInfo.uname);
