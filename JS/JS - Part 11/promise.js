function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.random() * 10 + 1;
    if (internetSpeed > 4) {
      resolve("data was saved");
    } else {
      reject("weak connection");
    }
  });
}

savetoDb("apna college") // request = promise object
  .then((result) => {
    console.log(result);
    return savetoDb("Hello Word");
  })
  .then(() => {
    console.log("data 2 saved");
  })
  .catch((error) => {
    console.log(error);
  });
