//ASYNCHRONOUS EXAMPLE
// function printString(str) {
//   setTimeout(() => {
//     console.log(str);
//   }, Math.floor(Math.random() * 100));
// }

// function printAll() {
//   console.time();
//   printString("A");
//   console.timeEnd();
//   printString("B");
//   printString("C");
// }

// const result = printAll();

//CALLBACK EXAMPLE
// function printStringWithCallbacks(str, callback) {
//   setTimeout(() => {
//     console.log(str);
//     callback();
//   }, Math.floor(Math.random() * 100));
// }

// function printAllWithCallbacks() {
//   printStringWithCallbacks("A", () => {
//     printStringWithCallbacks("B", () => {
//       printStringWithCallbacks("C", () => {
//         console.log("hello");
//       });
//     });
//   });
// }

// printAllWithCallbacks();

//PROMISES using then
// function printStringWithPromises(str) {
//   return new Promise((resolve, reject) => {
//     if (str) {
//       setTimeout(() => {
//         console.log(str);
//         resolve();
//       }, Math.floor(Math.random() * 100));
//     } else {
//       const err = new Error("String is never passed in!");
//       reject(err);
//     }
//   });
// }

// function printAllWithPromises() {
//   printStringWithPromises("A")
//     .then(() => printStringWithPromises("B"))
//     .then(() => printStringWithPromises("C"))
//     .catch((err) => console.log(`Error happened: ${err.message}`));
// }
// printAllWithPromises();

//PROMISES using async/await
// function printStringWithPromises(str) {
//   return new Promise((resolve, reject) => {
//     if (str) {
//       setTimeout(() => {
//         console.log(str);
//         resolve();
//       }, Math.floor(Math.random() * 100));
//     } else {
//       const err = new Error("String is never passed in!");
//       reject(err);
//     }
//   });
// }
// async function printAllWithAsync() {
//   try {
//     await printStringWithPromises("A");
//     await printStringWithPromises("B");
//     await printStringWithPromises();
//   } catch (err) {
//     console.log(err);
//   }
// }

// printAllWithAsync();
