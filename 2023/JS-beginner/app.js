const person = {
  name: "Max",
  age: 22,
  isProgrammer: true,
  languages: ["ru", "en", "by"],
  "complex key": "complex value",
  ["key_" + (1 + 3)]: "computed key", // key_4
  greet() {
    console.log("greet from person");
  }, // function
  info() {
    // console.log("this:", this);
    console.info("Информация про человека по имени:", this.name);
  },
};

// console.log(person.name);
// const ageKey = "age";
// console.log(person[ageKey]);
// console.log(person["complex key"]);
// person.greet();

// person.age++;
// person.languages.push("fr");
// console.log(person.age);
// delete person["key_4"];

// console.log(person);

// const name = person.name;
// const age = person.age;
// const languages = person.languages;
// const { name, age: personAge, languages } = person;

// console.log(name, personAge, languages);

// Итерация по объекту
// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log("key: ", key);
//     console.log("value: ", person[key]);
//   }
// }

// Современный способ итерации по объекту
// const keys = Object.keys(person); // converting to array
// keys.forEach((key) => {
//   console.log("key: ", key);
//   console.log("value: ", person[key]);
// });

// Context
const logger = {
  keys() {
    console.log("Object Keys:", Object.keys(this));
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log(`"${key}": ${this[key]}`);
    });
  },
};
logger.keys(person);

// const bound = logger.keys.bind(person);
// bound();
logger.keys.call(person);

logger.keysAndValues.call(person);
