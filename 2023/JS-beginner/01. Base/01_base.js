// 1 Переменные
// variable
// const firstName = "Maxim";
// const lastName = "Zaitsev";
// const age = 22;

// 2 Мутирование
// console.log("имя человека: " + firstName + ", а возраст: " + age);
// alert("имя человека: " + firstName + ", а возраст: " + age);

// const lastName = prompt("Введите фамилию");
// alert(firstName + " " + lastName);

// 3 Операторы
// const a = 10;
// const b = 5;

// let c = 32;
// c = c + a
// c += a;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(c);

// 4 Типы данных
// const isProgrammer = true;
// const firstName = "Max";
// const age = 22;
// console.log(typeof isProgrammer);
// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof x);
// console.log(null);

// 5 Приоритет операторов
// const fullAge = 22;
// const birthYear = 2000;
// const currentYear = 2023;

// const isFullAge = currentYear - birthYear >= fullAge;
// console.log(isFullAge);

// 6 Условные операторы
// const courseStatus = "fail"; // ready, fail, pending
// if (courseStatus === "ready") {
//   console.log("курс готов, можно проходить");
// } else if (courseStatus === "pending") {
//   console.log("курс в процессе разработки");
// } else console.log("Курс не получился");

// const isReady = true;
// if (isReady) {
//   console.log("Всё готово");
// } else {
//   console.log("Всё не готово");
// }
// =
// Тернартое выражение
// isReady ? console.log("Всё готово") : console.log("Всё не готово");

// 7 Булевая логика

// 8 Функции
// function calculateAge(year) {
//   return 2023 - year;
// }
// // console.log(calculateAge(2000));
// function logInfoAbout(name, year) {
//   const age = calculateAge(year);

//   if (age > 0) {
//     console.log("Человек по имени " + name + " сейчас имеет возраст " + age);
//   } else {
//     console.log("Вообще-то это уже будущее");
//   }
// }
// logInfoAbout("Максим", 2000);
// logInfoAbout("Антон", 2024);

// 9 Массивы
// const cars = ["Honda", "BMW", "Ford"];
// console.log(cars);
// console.log(cars[1]);
// console.log(cars.length);

// cars[0] = "Porsche";
// cars[3] = "Mazda";
// cars[cars.length] = "MAZ";
// console.log(cars);

// 10 Циклы
// const cars = ["Honda", "BMW", "Ford", "Porsche"];

// // for (let i = 0; i < cars.length; i++) {
// //   const car = cars[i];
// //   console.log(car);
// // }

// for (let car of cars) {
//   console.log(car);
// }

// 11 Объекты
const person = {
  firstName: "Maxim",
  lastName: "Zaitsev",
  year: 2000,
  languages: ["Ru", "En", "Blr"],
  hasWife: false,
  greet: function () {
    console.log("greed from person");
  },
};

console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);
const key = "year";
console.log(person[key]);
person.hasWife = true;
person.isProgrammer = true;
console.log(person);

person(greet);
