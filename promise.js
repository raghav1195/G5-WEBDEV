const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Raghav");
  }, 3000); 
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Baluni");
  }, 2000); 
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Chitkara");
  }, 1000); 
});

promise1.then(res => console.log("Promise 1:", res));
promise2.then(res => console.log("Promise 2:", res));
promise3.then(res => console.log("Promise 3:", res));

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log("All results:", results);
  })
  .catch(err => {
    console.log("Error in one of the promises:", err);
  });