// FUNCTION
// function sum(a, b) {
//     return a + b
// }

// function cube(a) {
//     return a ** 3
// }

// ARROW FUNCTION
const sum = (a, b) => {
  return a + b;
};
// =
const cube = (a) => a ** 3;

console.log(sum(33, 11));
console.log(cube(4));

setTimeout(() => console.log("After 1 sec"), 1000);
