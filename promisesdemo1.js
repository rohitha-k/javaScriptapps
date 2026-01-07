//promises demo
const bubbleGame = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 10);
  console.log(num);
  if (num >= 5) {
    resolve("high ");
  } else {
    reject("low");
  }
});
// to call promise
bubbleGame
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
