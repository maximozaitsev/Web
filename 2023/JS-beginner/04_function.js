// 1 Функции

// // Function Declaration - может находится в любом месте кода
// function greet(name) {
//   console.log("Привет - ", name);
// }

// // Function Expression - должна инициализироваться до значений
// const greet2 = function greet2(name) {
//   console.log("Привет 2 - ", name);
// };

// greet("Лена");
// greet2("Аня");

// 2 Анонимные функции
// let counter = 0;
// const interval = setInterval(function () {
//   if (counter === 5) {
//     clearInterval(interval);
//   } else {
//     console.log(++counter);
//   }
// }, 1000);

// 3 Стрелочные функции
// Обычная функция
function greet(name) {
  console.log("Привет - ", name);
}

// Стрелочная
const arrow = (name, age) => {
  console.log("Привет - ", name, age);
};

// Стрелочная, если 1 переменная
const arrow2 = (name) => console.log("Привет - ", name);
arrow2("Maxim");

// Стрелочная функция возведения числа во вторую степень
const pow2 = (num) => num ** 2;
console.log(pow2(7));

// Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b;
console.log(sum(41, 2)); // заданы параметры a + b
console.log(sum()); // параметры по умолчанию (a = 40, b = a * 2)

function sumAll(...all) {
  let result = 0;
  for (let num of all) {
    result += num;
  }
  return result;
}
const res = sumAll(1, 2, 3, 4, 5, 6);
console.log(res);

// Замыкания
function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}

const logWithLastName = createMember("Maxim");
console.log(logWithLastName("Zaitsev"));
console.log(logWithLastName("Medvedev"));
