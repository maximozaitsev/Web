// const name = "Максим";
// const age = 22;

// // const output = "Привет, меня зовут " + name + " и мой возраст " + age + " лет.";
// const output = `Привет, меня зовут ${name} и мой возраст ${age} лет.`;
// console.log(output);

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(2));
// console.log(name.indexOf("сим"));
// console.log(name.startsWith("макс"));
// console.log(name.toLowerCase().startsWith("макс"));
// console.log(name.startsWith("Макс"));
// console.log(name.repeat(4));

function logPerson(s, name, age) {
  if (age < 0) {
    age = "Ещё не родился";
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = "Максим";
const personName2 = "Вадим";
const personAge = 26;
const personAge2 = -10;

const output = logPerson`Имя ${personName}, Возраст: ${personAge}!`;
const output2 = logPerson`Имя ${personName2}, Возраст: ${personAge2}!`;

console.log(output);
console.log(output2);
