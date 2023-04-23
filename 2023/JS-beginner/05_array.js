const cars = ["Mazda", "Opel", "BMW", "Renault"];
const people = [
  { name: "Anton", budget: 1000 },
  { name: "Artem", budget: 800 },
  { name: "Andrei", budget: 1500 },
];
const fib = [1, 1, 2, 3, 5, 8, 13];
// Function
function addItemToEnd() {}

// Method
// cars.push("Honda"); // Добавить элемент в конец массива
// cars.unshift("Volga"); // Добавить элемент в начало массива
// console.log(cars);
// cars.shift(); // Удаляет первый элемент массива
// console.log(cars);
// const firstCar = cars.shift(); // Вывод 1го (удаленного) элемента массива
// console.log(firstCar);
// console.log(cars); // Массив без Mazda

// const lastCar = cars.pop(); // Вывод последнего (удаленного) элемента массива
// console.log(lastCar);

// Method Reverse
console.log(cars.reverse());

// Задача 1
const text = "Привет, мы изучаем JavaScript";
const reverseText = text.split("").reverse().join("");
// split - разбивает текст на элементы массива через определенный символ, напр. "", "," " "
// reverse - переворачивает массив
// join - объединяет массив в текст через символ напр. "", "," " "
console.log(reverseText);

// Метод indexOf
const index = cars.indexOf("BMW");
console.log(cars[index]);
cars[index] = "Porsche";
console.log(cars);

// Цикл For Of
// let findedPerson;
// for (const person of people) {
//   if (person.budget === 1000) {
//     findedPerson = person;
//   }
// }

// console.log(findedPerson);

// Метод findOf
// const findindex = people.findIndex(function (person) {
//   return person.budget === 1500;
// });
// console.log(people[findindex]);

// Метод find
// const person = people.find(function (person) {
//   return person.budget === 1500;
// });
// стрелочной:
const person = people.find((person) => person.budget === 1500);
console.log(person);

// Метод includes
console.log(cars.includes("Mazda"));

// Метод map
const upperCaseCars = cars.map((car) => {
  return car.toUpperCase();
});
console.log(upperCaseCars);

const pow2 = (num) => num ** 2;
const pow2Fib = fib.map(pow2);
console.log(pow2Fib);
// Метод filter
const filteredNumbers = pow2Fib.filter((num) => num > 20);
console.log(filteredNumbers);

// Метод reduce
const allBudget = people
  .filter((person) => person.budget > 900)
  .reduce((acc, person) => {
    acc += person.budget;
    return acc;
  }, 0);
console.log(allBudget);
