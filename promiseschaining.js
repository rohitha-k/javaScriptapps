// promises chaining demo
const bookticket = (msg) => {
  return new Promise((resolve, reject) => {
    resolve("  ticket booked");
  });
};

const getpopcorn = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + " popcorn obtained");
  });
};

const getcoke = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + " ready with chilled coke");
  });
};
// to execute
bookticket()
  .then((result) => {
    return getpopcorn(result);
  })
  .then((result) => {
    return getcoke(result);
  })
  .then((result) => {
    console.log("wanna to go movie" + result);
  })
  .catch((err) => {
    console.log(err);
  });
