const myPromise = new Promise((resolve, reject) => {
  let number = 10;

  if (number > 5) {
    resolve("Number is greater than 5");
  } else {
    reject("Number is 5 or less");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));