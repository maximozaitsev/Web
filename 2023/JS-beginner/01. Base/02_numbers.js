// 1 Number
const num = 42;
const float = 10.34;
const pow = 10e3;

console.log(Number.MAX_SAFE_INTEGER);

const stringInt = "42";
const stringFloat = "42.42";
console.log(stringInt + 2); // строка + число = строка 422
// Парсинг из строки в число
console.log(Number.parseInt(stringInt) + 2);
console.log(Number(stringInt) + 2);
console.log(+stringInt + 2);

console.log(Number.parseFloat(stringFloat) + 2);
console.log(+stringFloat + 2);

console.log(0.4 + 0.2); // 0.60000000000001
console.log((0.4 + 0.2).toFixed(1)); // 0.6 string
console.log(+(0.4 + 0.2).toFixed(1)); // 0.6 number

// 2 BigIng
console.log(900719925474099199n);
console.log(typeof 900719925474099199n);

// console.log(10n -4) error
console.log(parseInt(10n) - 4);
console.log(10n - BigInt(4));

// 3 Math
console.log(Math.E);
console.log(Math.PI);

console.log(Math.sqrt(25)); // корень
console.log(Math.pow(5, 3)); // степень
console.log(Math.abs(-42)); // модуль
console.log(Math.max(23, 235, 94, 11, 93)); // максимальное число из списка
console.log(Math.min(23, 235, 94, 11, 93));
console.log(Math.floor(4.9)); // округление в меньшую сторону
console.log(Math.ceil(4.9)); // округление в большую сторону
console.log(Math.round(4.9)); // округление
console.log(Math.trunc(4.9)); // удаление знаков после точки
console.log(Math.random());

// 4 Example
// Создать функцию которая будет возвращать случайное число в пределах двух целых чисел

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomBetween(10, 42));
