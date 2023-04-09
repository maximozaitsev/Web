const cars = ["Mazda", "Opel", "BMW", "Renault"];

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
