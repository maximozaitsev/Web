const person = {
  age: 26,
  name: "Anton",
  "country-live": "Russia",
  toString() {
    return Object.keys(this)
      .filter((key) => key !== "toString")
      .map((key) => this[key])
      .join(" ");
  },
};

console.log(person.toString());

// METHODS
const first = { a: 1 };
const second = { b: 2 };

// console.log(Object.is(20, 10)); // Проверка на эквивалентность
console.log(Object.assign({}, first, second));
console.log(first);
