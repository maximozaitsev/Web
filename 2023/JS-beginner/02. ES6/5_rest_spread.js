// REST
function average(a, b, ...args) {
  return args.reduce((acc, i) => (acc += i), 0) / args.length;
}

// console.log(average(10, 20, 30, 40, 50));

// SPREAD
// const array = [1, 2, 3, 5, 8, 13];
// console.log(...array);
// console.log(Math.max(...array));

// const fib = [1, ...array];
// console.log(fib);

// DESTRUCTURING
const array = [1, 2, 3, 5, 8, 13];
// const [a, b, ...c] = array;
// console.log(a, b, c);

// const [a, , c] = array;
// console.log(a, c);
