//multi line strings-backticks
// let desc = `top college in vadlamudi
//  more recruitments
//  supports many activities`;
// console.log(desc);
//string interpretation
// let firstName = "Nageswari";
// let lastName = "kondru";
// console.log(`${firstName} ${lastName}`);
//array destructing
// let pnames = ["realme", "LG", "vivo"];
// let [brand1, brand2, brand3] = pnames;
// console.log(brand1);
// console.log(brand2);
// console.log(brand3);
// //object destructing
const movieInfo = {
  movieName: "Bahubali",
  Director: "Rajamouli",
  Producer: "shobu",
};
let { movieName, Director, Producer } = movieInfo;
console.log(movieName);
console.log(Director);
console.log(Producer);
