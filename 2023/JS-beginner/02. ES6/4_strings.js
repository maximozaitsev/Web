const title = "Hello";
const isVisible = () => Math.random() > 0.5;

const template = `
${isVisible() ? `<p>Visible</p>` : ``}
<h1 id='demo' style="color: red">${title}</h1>
`;
console.log(template);

// METHODS
const str = "Hello";
console.log(str.startsWith("He"));
console.log(str.endsWith("llo"));
console.log(str.endsWith("e"));
console.log(str.includes("el"));

console.log(str.repeat(3));

console.log(str.padStart(10));
console.log(str.padEnd(10, "abc"));
