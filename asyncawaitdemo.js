//promises demo
const movieRes = () => {
  return new Promise((resolve, reject) => {
    let rating = 3;
    if (rating > 4) {
      resolve("good movie");
    } else {
      reject("waste of our time");
    }
  });
  //to call promise(execute)
  movieRating
    .then((result) => {
      console.log(result);
    })
    .catch((res) => {
      console.log(res);
    });
};
//to call promise with async await
const result = async () => {
  try {
    const result1 = await movieRes();
    console.log(result1);
  } catch (error) {
    console.log(error);
  }
};
result();
